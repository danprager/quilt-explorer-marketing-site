#!/usr/bin/env python3
"""Extract the images from a tutorial PDF for use on the site.

Each image is written once, in order of first appearance, oriented the way it
is placed on the page (some PDF images are stored rotated). Images that appear
more than once in the PDF, or whose pixels match an image already in one of the
--existing directories, are not written again; the script reports which file
to reuse instead.

Usage:
    pip install pymupdf
    python3 scripts/extract_pdf_images.py TUTORIAL.pdf public/tutorials/hrt-images \
        --existing public/tutorials/images public/tutorials/qst-images
"""

import argparse
import hashlib
import sys
from pathlib import Path

import pymupdf


def rotation_of(transform):
    """Clockwise rotation (0/90/180/270) of an image placement matrix."""
    a, b, c, d = transform[:4]
    if a * d - b * c < 0:
        raise ValueError(f"mirrored image placement not supported: {transform}")
    if abs(a) >= abs(b):
        return 0 if a > 0 else 180
    return 90 if b > 0 else 270


def rgb_pixmap(pix):
    if pix.colorspace is None or pix.colorspace.n != 3:
        pix = pymupdf.Pixmap(pymupdf.csRGB, pix)
    if pix.alpha:
        pix = pymupdf.Pixmap(pix, 0)
    return pix


def pixel_key(pix):
    pix = rgb_pixmap(pix)
    return (pix.width, pix.height, hashlib.sha256(pix.samples).hexdigest())


def oriented_pixmap(doc, xref, rotation):
    pix = rgb_pixmap(pymupdf.Pixmap(doc, xref))
    if rotation == 0:
        return pix
    # Draw the image rotated onto a scratch page sized to its pixels, then render at 1:1.
    w, h = (pix.width, pix.height) if rotation == 180 else (pix.height, pix.width)
    scratch = pymupdf.open()
    page = scratch.new_page(width=w, height=h)
    # insert_image rotates anti-clockwise.
    page.insert_image(page.rect, pixmap=pix, rotate=(360 - rotation) % 360, keep_proportion=False)
    return page.get_pixmap(alpha=False)


def main():
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("pdf", type=Path)
    parser.add_argument("outdir", type=Path)
    parser.add_argument("--existing", type=Path, nargs="*", default=[], help="directories of images to reuse")
    parser.add_argument("--prefix", default="image", help="output file name prefix (default: image)")
    args = parser.parse_args()

    known = {}
    for directory in args.existing:
        for path in sorted(directory.glob("*.png")):
            known.setdefault(pixel_key(pymupdf.Pixmap(str(path))), path)

    args.outdir.mkdir(parents=True, exist_ok=True)
    doc = pymupdf.open(args.pdf)
    seen = {}
    count = 0
    for page in doc:
        for info in page.get_image_info(xrefs=True):
            placement = (info["xref"], rotation_of(info["transform"]))
            where = f"page {page.number + 1} at {tuple(round(v) for v in info['bbox'])}"
            if placement in seen:
                print(f"{where}: same as {seen[placement]}")
                continue
            pix = oriented_pixmap(doc, *placement)
            key = pixel_key(pix)
            if key in known:
                seen[placement] = known[key]
                print(f"{where}: reuse existing {known[key]}")
                continue
            count += 1
            path = args.outdir / f"{args.prefix}{count}.png"
            pix.save(path)
            seen[placement] = known[key] = path
            print(f"{where}: wrote {path} ({pix.width}x{pix.height}, rotated {placement[1]})")
    return 0


if __name__ == "__main__":
    sys.exit(main())
