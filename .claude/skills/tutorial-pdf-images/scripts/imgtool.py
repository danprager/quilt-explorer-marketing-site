#!/usr/bin/env python3
"""Analyse and clean tutorial images that sit on a white (or light grey) background.

Subcommands:
    analyse DIR_OR_FILES...         classify each image and report its white margins
    transparent IN OUT [--fuzz 10]  make near-white transparent, then trim
    transparent --outside IN OUT    only the white outside the artwork (keeps enclosed paper white)
    crop FILES... --out DIR         crop so the margins that exist are even
    measure FILE --color R,G,B      measure a fabric piece (bbox, ratio, widest run)
    widths MANIFEST RAW PROCESSED   CSS widths that keep the PDF's relative scale

Reads pixels with pymupdf (pip install pymupdf); writes images with ImageMagick (`magick`).
Run with `python3 -I` from a venv outside the image directory.
"""

import argparse
import math
import subprocess
import sys
from pathlib import Path

import pymupdf

INK = 235          # a channel below this counts as content on a pure-white background
ARTIFACT = 243     # border rows/cols brighter than this are scan artifacts, not margin
MIN_MARGIN = 10    # a side with less margin than this is treated as cut off (content runs to the edge)


class Image:
    def __init__(self, path):
        pix = pymupdf.Pixmap(str(path))
        if pix.alpha:
            pix = pymupdf.Pixmap(pix, 0)
        if pix.n != 3:
            pix = pymupdf.Pixmap(pymupdf.csRGB, pix)
        self.path, self.w, self.h, self.n, self.s = Path(path), pix.width, pix.height, pix.n, pix.samples

    def px(self, x, y):
        i = (y * self.w + x) * self.n
        return self.s[i:i + 3]

    def ring(self, inset=3, step=4):
        """Pixels on a rectangle `inset` px inside the border (skips 1px edge artifacts)."""
        x0, y0, x1, y1 = inset, inset, self.w - 1 - inset, self.h - 1 - inset
        pts = [(x, y) for x in range(x0, x1 + 1, step) for y in (y0, y1)]
        pts += [(x, y) for y in range(y0, y1 + 1, step) for x in (x0, x1)]
        return [self.px(x, y) for x, y in pts]

    def bbox(self, pred, step=1):
        xs, ys = [], []
        for y in range(0, self.h, step):
            for x in range(0, self.w, step):
                if pred(self.px(x, y)):
                    xs.append(x)
                    ys.append(y)
        return (min(xs), min(ys), max(xs), max(ys)) if xs else None

    def white_fraction(self, step=2):
        pts = [(x, y) for y in range(0, self.h, step) for x in range(0, self.w, step)]
        return sum(1 for p in pts if min(self.px(*p)) > 245) / len(pts)

    def kind(self):
        """'full-bleed' (no background), 'flat' (pure white art), or 'photo' (grey backdrop, e.g. a ruler)."""
        ring = self.ring()
        # Background is light and neutral; pale fabric is light but tinted.
        light = sorted(min(c) for c in ring if min(c) > 225 and max(c) - min(c) < 8)
        if len(light) < 0.3 * len(ring):
            return "full-bleed"
        return "flat" if light[len(light) // 2] >= 250 else "photo"

    def content_box(self):
        """Bounding box of the foreground, excluding bright artifact lines at the borders."""
        if self.kind() != "photo":
            return self.bbox(lambda c: min(c) < INK)
        g = lambda x, y: sum(self.px(x, y)) / 3
        rows = [sum(g(x, y) for x in range(0, self.w, 3)) / len(range(0, self.w, 3)) for y in range(self.h)]
        cols = [sum(g(x, y) for y in range(0, self.h, 3)) / len(range(0, self.h, 3)) for x in range(self.w)]

        def extent(p):
            a, b = 0, len(p) - 1
            while a < b and p[a] > ARTIFACT:
                a += 1
            while b > a and p[b] > ARTIFACT:
                b -= 1
            backdrop = sorted(p[a:b + 1])[-max(1, len(p) // 10)]
            idx = [i for i in range(a, b + 1) if p[i] < backdrop - 2.5] or [a, b]
            return idx[0], idx[-1], a, b

        y0, y1, ya, yb = extent(rows)
        x0, x1, xa, xb = extent(cols)
        self.usable = (xa, ya, xb, yb)
        return x0, y0, x1, y1

    def margins(self, box):
        ua = getattr(self, "usable", (0, 0, self.w - 1, self.h - 1))
        return {"left": box[0] - ua[0], "top": box[1] - ua[1], "right": ua[2] - box[2], "bottom": ua[3] - box[3]}


def files_of(args):
    out = []
    for a in args:
        p = Path(a)
        out += sorted(p.glob("*.png"), key=lambda f: (len(f.name), f.name)) if p.is_dir() else [p]
    return out


def cmd_analyse(a):
    for f in files_of(a.paths):
        im = Image(f)
        kind = im.kind()
        line = f"{f.name:14} {im.w}x{im.h:<5} {kind:10} white={im.white_fraction():.2f}"
        if kind != "full-bleed":
            box = im.content_box()
            m = im.margins(box)
            line += "  margins " + " ".join(f"{k[0].upper()}{v}" for k, v in m.items())
            line += f"  content={box}"
        print(line)


def dilate(mask, w, h, r):
    """Square max-filter of radius r over a flat 0/1 list, done as two sliding-window passes."""
    def run(src, length, count, idx):
        out = bytearray(len(src))
        for line in range(count):
            total = 0
            for i in range(min(r, length - 1) + 1):
                total += src[idx(line, i)]
            for i in range(length):
                out[idx(line, i)] = 1 if total else 0
                if i + r + 1 < length:
                    total += src[idx(line, i + r + 1)]
                if i - r >= 0:
                    total -= src[idx(line, i - r)]
        return out
    rows = run(mask, w, h, lambda y, x: y * w + x)
    return run(rows, h, w, lambda x, y: y * w + x)


def outside_transparent(src, dst, close):
    """Make only the white *outside* the artwork transparent; enclosed white (paper) stays.

    Dashed outlines leak, so the lines are morphologically closed (dilate then erode by `close` px),
    which bridges dash gaps without moving the outline, before flood-filling from the border.
    Near-neutral pixels just outside the region are unblended from white, so anti-aliased line
    edges fade into the page instead of leaving a white halo.
    """
    im = Image(src)
    w, h = im.w, im.h
    light = bytearray(1 if min(im.px(x, y)) > 245 else 0 for y in range(h) for x in range(w))
    ink = bytearray(1 - v for v in light)
    thick = dilate(ink, w, h, close)
    barrier = bytearray(1 - v for v in dilate(bytearray(1 - v for v in thick), w, h, close))
    outside = bytearray(w * h)
    stack = [i for i in range(w) if not barrier[i]] + [(h - 1) * w + i for i in range(w) if not barrier[(h - 1) * w + i]]
    stack += [y * w for y in range(h) if not barrier[y * w]] + [y * w + w - 1 for y in range(h) if not barrier[y * w + w - 1]]
    while stack:
        i = stack.pop()
        if outside[i] or barrier[i]:
            continue
        outside[i] = 1
        x, y = i % w, i // w
        if x > 0: stack.append(i - 1)
        if x < w - 1: stack.append(i + 1)
        if y > 0: stack.append(i - w)
        if y < h - 1: stack.append(i + w)
    fringe = dilate(outside, w, h, 2)
    out = bytearray(w * h * 4)
    for i in range(w * h):
        r, g, b = im.s[i * im.n:i * im.n + 3]
        a = 255
        if outside[i]:
            a = 0
        elif fringe[i] and not light[i] and max(r, g, b) - min(r, g, b) < 20:
            # grey line edge: keep as black at partial opacity
                a, r, g, b = 255 - min(r, g, b), 0, 0, 0
        out[i * 4:i * 4 + 4] = bytes((r, g, b, a))
    pymupdf.Pixmap(pymupdf.csRGB, w, h, bytes(out), True).save(dst)


def cmd_transparent(a):
    if a.outside:
        outside_transparent(a.input, a.output, a.close)
        if not a.no_trim:
            subprocess.run(["magick", a.output, "-trim", "+repage", a.output], check=True)
    else:
        subprocess.run(["magick", a.input, "-alpha", "set", "-fuzz", f"{a.fuzz}%", "-transparent", "white",
                        *([] if a.no_trim else ["-trim", "+repage"]), a.output], check=True)
    print(subprocess.run(["magick", "identify", "-format", "%f %wx%h\n", a.output],
                         capture_output=True, text=True).stdout, end="")


def parse_box(text):
    x0, y0, x1, y1 = (int(v) for v in text.split(","))
    return x0, y0, x1, y1


def cmd_crop(a):
    images = [Image(f) for f in files_of(a.files)]
    sizes = {(im.w, im.h) for im in images}
    if len(images) > 1 and len(sizes) > 1:
        sys.exit("a shared frame needs images of identical size")

    def union(boxes):
        return (min(b[0] for b in boxes), min(b[1] for b in boxes), max(b[2] for b in boxes), max(b[3] for b in boxes))

    contents = [im.content_box() for im in images]
    everything = union(contents)
    if a.anchor == "dark":
        anchor = union([im.bbox(lambda c: max(c) < 80) for im in images])
    elif a.anchor:
        anchor = parse_box(a.anchor)
    else:
        anchor = everything
    ref = images[0]
    m = ref.margins(anchor)
    # Flat art has exact edges; a photo's backdrop profile is noisy, so small margins there are noise.
    sides = [k for k, v in m.items() if v >= (MIN_MARGIN if ref.kind() == "photo" else 1)]
    if not sides:
        sys.exit("no side has a white margin; nothing to even up")
    # Anything protruding past the anchor must stay inside the margin.
    protrusion = {"left": anchor[0] - everything[0], "top": anchor[1] - everything[1],
                  "right": everything[2] - anchor[2], "bottom": everything[3] - anchor[3]}
    need = max(protrusion[s] for s in sides) + (a.gap if a.anchor else 0)
    e = a.margin if a.margin is not None else max(min(m[s] for s in sides), need)
    if e < need:
        sys.exit(f"margin {e} would clip protruding content; need at least {need}")
    ua = getattr(ref, "usable", (0, 0, ref.w - 1, ref.h - 1))
    x0 = anchor[0] - e if "left" in sides else ua[0]
    y0 = anchor[1] - e if "top" in sides else ua[1]
    x1 = anchor[2] + e if "right" in sides else ua[2]
    y1 = anchor[3] + e if "bottom" in sides else ua[3]
    print(f"anchor={anchor} margins={m} -> even {e} on {','.join(sides)}")
    out = Path(a.out)
    out.mkdir(parents=True, exist_ok=True)
    for im in images:
        # Crop to the part inside the image, then pad with the background colour where the crop runs past it.
        cx0, cy0, cx1, cy1 = max(x0, 0), max(y0, 0), min(x1, im.w - 1), min(y1, im.h - 1)
        bg = "srgb({},{},{})".format(*im.px(ua[0], ua[1])) if im.kind() == "photo" else "white"
        cmd = ["magick", str(im.path), "-crop", f"{cx1 - cx0 + 1}x{cy1 - cy0 + 1}+{cx0}+{cy0}", "+repage",
               "-background", bg]
        for grav, amount, geo in (("west", cx0 - x0, "{}x0"), ("north", cy0 - y0, "0x{}"),
                                  ("east", x1 - cx1, "{}x0"), ("south", y1 - cy1, "0x{}")):
            if amount > 0:
                cmd += ["-gravity", grav, "-splice", geo.format(amount)]
        cmd += ["+repage", str(out / im.path.name)]
        subprocess.run(cmd, check=True)
        print(f"  {im.path.name}: {x1 - x0 + 1}x{y1 - y0 + 1}")


def cmd_measure(a):
    im = Image(a.file)
    target = [int(v) for v in a.color.split(",")]
    near = lambda c: all(abs(c[i] - target[i]) <= a.tol for i in range(3))
    box = im.bbox(near)
    if not box:
        sys.exit("colour not found; sample it with: magick FILE -format '%[pixel:p{X,Y}]' info:")
    widest = max((sum(1 for x in range(im.w) if near(im.px(x, y))), y) for y in range(box[1], box[3] + 1, 2))
    tallest = max((sum(1 for y in range(im.h) if near(im.px(x, y))), x) for x in range(box[0], box[2] + 1, 2))
    bw, bh = box[2] - box[0] + 1, box[3] - box[1] + 1
    # Other pieces can cover part of this one, so trust the side that is fully visible and check the ratio.
    print(f"{im.path.name} {im.w}x{im.h} bbox={box} size={bw}x{bh} ratio={max(bw, bh) / min(bw, bh):.2f} "
          f"widest_row={widest[0]}@y{widest[1]} tallest_col={tallest[0]}@x{tallest[1]}")


def cmd_pins(a):
    """Ring solid dark dots (e.g. pin heads) in a contrasting colour so they read on dark fabric.

    A distance transform gives, for each dark pixel, the distance to the nearest non-dark pixel.
    A dot's centre is where that distance peaks, and the peak is the dot's radius. Lines, arrows,
    dashes and text never get deeper than half their stroke width, so only places deeper than
    `min/2` count, and a dot touching an arrow still gets its own centre and radius. A circular,
    anti-aliased ring is painted around each dot.
    """
    pix = pymupdf.Pixmap(a.input)
    if not pix.alpha:
        pix = pymupdf.Pixmap(pymupdf.csRGB, pix) if pix.n < 3 else pix
        pix = pymupdf.Pixmap(pix, 1)
    if pix.n != 4:
        pix = pymupdf.Pixmap(pymupdf.csRGB, pix)
    w, h = pix.width, pix.height
    s = bytearray(pix.samples)
    dark = bytearray(1 if s[i * 4 + 3] > 128 and max(s[i * 4:i * 4 + 3]) < 70 else 0 for i in range(w * h))
    # Two-pass chamfer distance transform (steps of 1 and sqrt 2).
    big = float(w + h)
    dist = [big if v else 0.0 for v in dark]
    diag = 2 ** 0.5
    for y in range(h):
        for x in range(w):
            i = y * w + x
            if dist[i]:
                best = dist[i]
                if x: best = min(best, dist[i - 1] + 1)
                if y:
                    best = min(best, dist[i - w] + 1)
                    if x: best = min(best, dist[i - w - 1] + diag)
                    if x < w - 1: best = min(best, dist[i - w + 1] + diag)
                dist[i] = best
    for y in range(h - 1, -1, -1):
        for x in range(w - 1, -1, -1):
            i = y * w + x
            if dist[i]:
                best = dist[i]
                if x < w - 1: best = min(best, dist[i + 1] + 1)
                if y < h - 1:
                    best = min(best, dist[i + w] + 1)
                    if x < w - 1: best = min(best, dist[i + w + 1] + diag)
                    if x: best = min(best, dist[i + w - 1] + diag)
                dist[i] = best
    # Each connected region deeper than min/2 holds one dot; its deepest pixel is the centre.
    deep = [d >= a.min / 2 for d in dist]
    seen = bytearray(w * h)
    dots = []
    for start in range(w * h):
        if not deep[start] or seen[start]:
            continue
        stack, peak = [start], start
        seen[start] = 1
        while stack:
            i = stack.pop()
            if dist[i] > dist[peak]:
                peak = i
            x = i % w
            for j in (i - 1 if x else -1, i + 1 if x < w - 1 else -1, i - w, i + w):
                if 0 <= j < w * h and deep[j] and not seen[j]:
                    seen[j] = 1
                    stack.append(j)
        cx, cy, radius = peak % w, peak // w, dist[peak] + 0.5
        # Round check: just outside a dot there is almost no dark; an arrowhead's corners and
        # shaft are still dark there.
        probe = radius + 3
        angles = [t * math.tau / 36 for t in range(36)]
        samples = [(round(cx + probe * math.cos(t)), round(cy + probe * math.sin(t))) for t in angles]
        inside = [(x, y) for x, y in samples if 0 <= x < w and 0 <= y < h]
        darkness = sum(dark[y * w + x] for x, y in inside) / max(1, len(inside))
        if darkness <= a.max_dark:
            dots.append((cx, cy, radius))
        else:
            print(f"  skipped blob at ({cx},{cy}) r={radius:.0f}: {darkness:.0%} dark around it")
    colour = [int(a.color[i:i + 2], 16) for i in (1, 3, 5)]
    for cx, cy, radius in dots:
        outer = radius + a.ring
        for y in range(max(0, int(cy - outer - 1)), min(h, int(cy + outer + 2))):
            for x in range(max(0, int(cx - outer - 1)), min(w, int(cx + outer + 2))):
                d = ((x - cx) ** 2 + (y - cy) ** 2) ** 0.5
                cover = min(1.0, max(0.0, outer - d + 0.5))  # anti-aliased outer edge
                if cover <= 0 or d < radius - 0.5:
                    continue
                i = (y * w + x) * 4
                inner = min(1.0, max(0.0, d - radius + 0.5))  # blend into the dot's own edge
                k = cover * inner
                for c in range(3):
                    s[i + c] = round(s[i + c] * (1 - k) + colour[c] * k)
                s[i + 3] = max(s[i + 3], round(255 * cover))
    pymupdf.Pixmap(pymupdf.csRGB, w, h, bytes(s), True).save(a.output)
    print(f"{Path(a.input).name}: ringed {len(dots)} dots " + " ".join(f"r={d[2]:.0f}" for d in dots))


def cmd_widths(a):
    """Display widths that keep the PDF's relative scale, after trimming or padding."""
    import json
    placements = json.loads(Path(a.manifest).read_text())
    raw, done = Path(a.raw).resolve(), Path(a.processed)
    rows = {}
    for pl in placements:
        source = Path(pl["file"]).resolve()
        if source.parent != raw:  # reused from an existing site directory
            continue
        name = source.name
        target = done / name
        if not target.exists():
            continue
        x0, y0, x1, y1 = pl["bbox"]
        pt_per_px = (x1 - x0) / pl["px"][0]
        aspect_drift = abs((y1 - y0) / pl["px"][1] - pt_per_px) / pt_per_px
        width = round(Image(target).w * pt_per_px * a.k)
        rows.setdefault(name, []).append((pl["page"], width, aspect_drift))
    for name, uses in sorted(rows.items(), key=lambda r: (len(r[0]), r[0])):
        widths = sorted({u[1] for u in uses})
        note = "  (placed at different sizes)" if max(widths) - min(widths) > 2 else ""
        if any(u[2] > 0.05 for u in uses):
            note += "  (stretched in the PDF; aspect ratio not kept)"
        print(f"{name:14} width {'/'.join(map(str, widths))}px  pages {sorted({u[0] for u in uses})}{note}")


def main():
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    sub = p.add_subparsers(dest="cmd", required=True)
    s = sub.add_parser("analyse")
    s.add_argument("paths", nargs="+")
    s.set_defaults(fn=cmd_analyse)
    s = sub.add_parser("transparent")
    s.add_argument("input")
    s.add_argument("output")
    s.add_argument("--fuzz", type=float, default=10)
    s.add_argument("--no-trim", action="store_true")
    s.add_argument("--outside", action="store_true",
                   help="only the white connected to the border (keeps enclosed white such as paper)")
    s.add_argument("--close", type=int, default=0,
                   help="with --outside: px of dash gap to bridge so dashed outlines also enclose (default 0)")
    s.set_defaults(fn=cmd_transparent)
    s = sub.add_parser("crop", help="even up existing white margins; several files share one frame")
    s.add_argument("files", nargs="+")
    s.add_argument("--out", required=True)
    s.add_argument("--anchor", help="'dark' (bbox of black outlines) or x0,y0,x1,y1; default: all content")
    s.add_argument("--margin", type=int, help="explicit even margin in px (pads with background if needed)")
    s.add_argument("--gap", type=int, default=5, help="extra room beyond protruding content (with --anchor)")
    s.set_defaults(fn=cmd_crop)
    s = sub.add_parser("measure")
    s.add_argument("file")
    s.add_argument("--color", required=True, help="R,G,B of the piece, e.g. 189,212,56")
    s.add_argument("--tol", type=int, default=40)
    s.set_defaults(fn=cmd_measure)
    s = sub.add_parser("pins", help="ring solid dark dots (pin heads) so they contrast with dark fabric")
    s.add_argument("input")
    s.add_argument("output")
    s.add_argument("--min", type=int, default=22, help="px; dark strokes thinner than this are not dots")
    s.add_argument("--ring", type=float, default=6, help="ring width in px")
    s.add_argument("--color", default="#ffffff", help="ring colour (default white)")
    s.add_argument("--max-dark", type=float, default=0.15,
                   help="max share of dark just outside a dot (arrowheads score higher)")
    s.set_defaults(fn=cmd_pins)
    s = sub.add_parser("widths", help="CSS widths that keep the PDF's relative scale")
    s.add_argument("manifest", help="JSON from extract_pdf_images.py --manifest")
    s.add_argument("raw", help="the directory extract_pdf_images.py wrote to")
    s.add_argument("processed", help="directory of the final (trimmed/cropped) images")
    s.add_argument("--k", type=float, default=1.4, help="CSS px per PDF point (default 1.4)")
    s.set_defaults(fn=cmd_widths)
    a = p.parse_args()
    a.fn(a)


if __name__ == "__main__":
    main()
