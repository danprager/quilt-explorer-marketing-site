---
name: tutorial-pdf-images
description: Extracts images from a tutorial PDF into the marketing site, removes or evens up their white backgrounds (white to transparent, outside-only transparency for paper/line art, or even-margin cropping for photos), and sizes them so pieces keep a consistent scale. Use when turning a tutorial PDF into a /tutorials page, or when tutorial images have white boxes that clash with the pink page, uneven white borders, or pieces that render at inconsistent sizes.
---

# Tutorial PDF images

Images go in `public/tutorials/<slug>-images/`; pages are `src/pages/tutorials/<Name>Tutorial.tsx`
(copy the structure of `HRTsTutorial.tsx` / `DotsOvalsTutorial.tsx`), plus a route in `src/App.tsx`,
a Tutorials entry in `src/components/qe/Navbar.tsx` and a line in `public/sitemap.xml`.

## Setup

```bash
SP=<scratchpad>; python3 -m venv $SP/venv && $SP/venv/bin/pip -q install pymupdf
T() { $SP/venv/bin/python -I .claude/skills/tutorial-pdf-images/scripts/imgtool.py "$@"; }
```
ImageMagick (`magick`) must be on PATH. Work in the scratchpad; copy into `public/` only after
previewing. The dev server needs Node 20+: `PATH=~/.nvm/versions/node/v20.20.2/bin:$PATH npx vite`.

## Workflow

- [ ] **Extract** with placements recorded:
  `python3 -I scripts/extract_pdf_images.py IN.pdf $SP/raw --existing public/tutorials/*-images public/tutorials/images --manifest $SP/manifest.json`
  Render each page (`page.get_pixmap(dpi=80)`) and read the text (`page.get_text()`) to see the layout.
- [ ] **Classify**: `T analyse $SP/raw`. Each image is `full-bleed`, `flat` or `photo`. Then look at
  a montage on the page colour: `magick montage ... -background '#f2d4de'`.
- [ ] **Treat each image** by what its white *means* (decision table below).
- [ ] **Preview** the processed images on `#f2d4de` and zoom into edges, dashed lines and enclosed white.
- [ ] **Size**: `T widths $SP/manifest.json $SP/raw $SP/clean` gives CSS widths that keep the
  PDF's relative scale (`--k` = CSS px per PDF point; 1.4 matches existing pages). Put the widths in
  the page as `style={{ width }}` with `className="h-auto max-w-full"`.
- [ ] **Verify in the real page** (headless Chrome screenshot, see REFERENCE.md), then show the user.

## What the white means → treatment

| Image | Treatment | Command |
|---|---|---|
| Fabric/colour art on pure white, no meaningful white | global white → transparent, trim | `T transparent IN OUT` |
| Line art where white inside outlines is *paper* | outside-only transparency | `T transparent --outside IN OUT` |
| Photo on light-grey backdrop (e.g. a clear ruler) | keep the backdrop, crop margins even | `T crop IN --out DIR` |
| Sequence frames sharing a frame (same size, same outline) | one shared crop, even margins around the outline | `T crop F1 F2 ... --anchor dark --out DIR` |
| Content that sticks out of its main rectangle | even margin around everything; pad where needed | `T crop IN --margin N --out DIR` |
| Full-bleed swatches | nothing | — |

Rules of thumb:
- Never key out white on photos of transparent objects: the object's body is nearly the backdrop
  colour and fuzzy fills leak into it. Crop instead (or ask before attempting an unblend).
- `--outside` keeps only white enclosed by **solid** lines; dashed seam lines end up on the page
  colour. That is the consistent choice: closing dash gaps (`--close N`) varies with dash spacing.
- Leave sides where the content runs off the image flush; only even up sides that have a margin.
- In a step sequence, keep the shared reference (ruler, outline) fixed across frames.
- If two treatments are both reasonable, show a preview and ask the user.

## Scale

Prefer the PDF placement scale (`T widths`). When the same piece appears inside images with
different margins (e.g. a rectangle inside twisted-pair diagrams), size by the piece instead:
`T measure IMG --color R,G,B` and use the **unoccluded** side (check `ratio` matches the piece's
known proportions; other pieces can hide part of it). Widths = image width × target / piece size.

See [REFERENCE.md](REFERENCE.md) for pitfalls, previews and screenshots.
