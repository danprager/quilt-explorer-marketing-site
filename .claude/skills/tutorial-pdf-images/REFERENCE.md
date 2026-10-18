# Reference

## imgtool.py subcommands

| Command | Does |
|---|---|
| `analyse DIR` | kind (`full-bleed`/`flat`/`photo`), white fraction, margins L/T/R/B, content bbox |
| `transparent IN OUT [--fuzz 10] [--no-trim]` | near-white → transparent everywhere, then trim |
| `transparent --outside IN OUT [--close N]` | only white connected to the border; anti-aliased line edges become soft alpha |
| `crop FILES --out DIR [--anchor dark\|x0,y0,x1,y1] [--margin N] [--gap 5]` | even up existing margins; several files share one crop |
| `measure IMG --color R,G,B [--tol 40]` | bbox, size, aspect ratio, widest row / tallest column of a colour |
| `widths MANIFEST RAW PROCESSED [--k 1.4]` | CSS widths from the PDF placement scale; flags images placed at several sizes or stretched |

Classification: `full-bleed` = the border ring is mostly not light-neutral; `flat` = light-neutral
border with median ≥ 250; `photo` = light-neutral but greyer (backdrop with JPEG noise). For
photos, margins come from row/column brightness profiles; bright 1px artifact lines at the
edges are ignored.

## Pitfalls seen so far

- **PDFs rarely carry alpha.** Check `doc.extract_image(xref)["smask"]`; if 0, the white is baked
  in and re-extracting won't help.
- **Occluded measurements.** In the HRT twisted-pair diagrams the orange piece covers part of the
  green rectangle near the bottom, so a band measurement read 255px instead of 280px and those
  diagrams rendered ~9% too large. Use the bbox and check the ratio (a 1:2 piece must read 2.00).
- **Enclosed white survives a border flood fill.** That is right for paper, wrong for e.g. a taped
  window on a transparent ruler drawing; use global `transparent` there.
- **Square-kernel closing makes staircase notches** on diagonal dashed lines; prefer `--close 0`.
- **Different placements of one file.** `widths` reports them; the PDF may also stretch an image
  (arrows were placed at 32×11pt and 32×19pt). Use the natural aspect ratio.
- **Reused images.** The extractor maps images already on the site (e.g. the logo) to the existing
  file; `widths` skips them because they are not in RAW.
- `-splice` with `-gravity center` inserts space *inside* an image; use `-border` for previews.
- zsh does not word-split `$VAR` commands; use a shell function (`T() { ...; }`).

## Previews

```bash
magick montage $SP/clean/*.png -tile 6x -geometry 200x150+6+6 -background '#f2d4de' $SP/montage.png
magick IMG -background '#f2d4de' -flatten -crop 200x150+X+Y +repage -scale 300% $SP/zoom.png
```

## Page screenshot

Headless Chrome hangs if the server is down; check with curl first and wait for the file:

```bash
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:5317/tutorials/<slug>
( "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --disable-gpu \
  --no-first-run --hide-scrollbars --user-data-dir=$SP/chrome --window-size=1000,4000 \
  --screenshot=$SP/page.png http://localhost:5317/tutorials/<slug> >/dev/null 2>&1 & )
for i in $(seq 1 60); do [ -s $SP/page.png ] && break; sleep 0.5; done; pkill -f "user-data-dir=$SP/chrome"
```
Crop the tall screenshot into ~1400px sections before reading it.
