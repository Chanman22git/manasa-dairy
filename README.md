# Manasa Dairy — website

Institutional B2B marketing site for Manasa Dairy (Toopran, Telangana), built from the
`design_handoff_manasa_dairy_site` bundle. React + Vite + [Motion](https://motion.dev).

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # → dist/
```

## What follows the handoff exactly

- **Colour tokens** — `#0E3A20 / #16532F / #2F7D4B / #A8CDB2 / #F5F3ED / #FBFAF6` and the
  three border greys, sampled from the logo. See `:root` in `src/index.css`.
- **Typography** — Instrument Serif (display), Karla (UI/body), Noto Sans Telugu.
- **Logo** — `public/manasa-logo.jpeg`, 60×60 in the header lockup with the
  "Taste the best / EST. 1998 · TELANGANA" two-line block.
- **All copy** — every heading, paragraph, product spec, protocol step, plant, timeline
  entry and office is verbatim from the handoff (`src/data.js`).
- **Six routes** — `/`, `/products`, `/quality`, `/story`, `/enquiry`, `/contact`,
  as the handoff specifies (not the prototype's client-side page switching).
- **EN / తెలుగు toggle** — swaps nav, page H1s, section headings and CTAs only; body
  copy stays English by design. Persisted to `localStorage`.
- **Layout constants** — 1320px container, 56px gutters, 82px sticky header, 0 radius
  (except the language pill), no shadows — depth comes from hairlines and card fills.

## Deliberate deviations

| Deviation | Why |
|---|---|
| Layout reimagined with heavy motion graphics | Requested: keep palette/logo/content, make the UI far more modern and animated. |
| Header is a floating pill, not the handoff's 82px full-width sticky bar | Requested, after [cruip/tailwind-landing-page-template](https://github.com/cruip/tailwind-landing-page-template). See the note below. |
| Seven of the handoff's photo placeholders replaced (see below) | The originals showed the wrong product, a competitor's branding, or a supermarket shelf. |
| `--muted` darkened `#6F7F6C` → `#63715F` | The handoff value gives only 3.84:1 on paper at the 11–13px it is used for. `#63715F` reaches 4.66:1 (WCAG AA) in the same hue family. |
| Several low-alpha whites raised (`.45→.62`, `.6/.62/.66→.75`) | Same reason — all were under 4.5:1 on the green bands. |

## Two-layer pages

Every page is two stacked layers, set up once in `src/App.jsx`:

| Layer | Element | Role |
|---|---|---|
| 1 — back | `.backdrop` (`src/backdrop.jsx`) | Fixed, full-viewport, `z-index: 0`, `pointer-events: none`. **Currently plain white; this is where the animation goes.** |
| 2 — front | `.layer-content` | `position: relative; z-index: 1`. Header, main and footer all live here. |

**To add the background animation**, put it inside `<div className="backdrop-stage">`
in `src/backdrop.jsx`. The stage is already full-bleed, behind the content, and
pointer-transparent, so a canvas / SVG / WebGL / Motion tree needs no extra plumbing.
Two things to remember:

- Gate it on `useReducedMotion()` and render a still frame when motion is reduced.
- The green bands, cards and footer are **opaque**, so the backdrop only shows through
  the neutral areas. Make those surfaces translucent if you want the animation visible
  behind them too.

The backdrop colour is the `--backdrop` token in `src/index.css` (one value to change).
Note this replaces the handoff's `--paper` `#F5F3ED` as the page surface — set
`--backdrop: #f5f3ed` to go back to the specified cream.

## Header

The top bar follows the "Simple Light" treatment from
[cruip/tailwind-landing-page-template](https://github.com/cruip/tailwind-landing-page-template):
a rounded translucent bar detached from the top edge, blurred fill, hairline gradient
border, soft shadow.

**No code was copied from that repo and Tailwind was not added.** The treatment is
rebuilt on this project's own tokens in `.hdr` / `.hdr-shell` (`src/index.css`). That
was deliberate: the repo ships **no LICENSE file** (GitHub reports `license: null`) and
its README claims GPL while also saying "don't republish, redistribute, or resell" —
terms that contradict the GPL. Pulling copyleft source into a client's commercial
codebase on that basis would be a risk worth avoiding; reimplementing a generic
floating-bar pattern is not.

Departures from the handoff this implies: the header is `position: fixed` and out of
flow (so `main` carries a matching `padding-top`), the bar is 66px inside a 1180px
shell rather than 82px full-width, and the logo renders at 44px rather than 60px to
suit the smaller bar. The nav collapses to the burger at 1080px, since the pill runs
out of room before the page does.

## Photography — READ BEFORE LAUNCH

**Every image is still an Unsplash placeholder.** The handoff's instruction stands:
replace all of it with Manasa's own photography. Slots live in `src/images.js`, keyed
by the handoff's stable ids (`md-hero`, `md-p1` …). To swap one, change its `src` to a
local asset and delete its `credit`/`href` — the credit overlay disappears on its own.

Auditing the handoff's placeholders turned up seven that could not ship as-is:

| Slot | Handoff placeholder showed | Replaced with |
|---|---|---|
| `md-plant` | a **supermarket dairy aisle full of competitor packaging** | stainless processing tanks |
| `md-p9` (White Butter) | a **Kerrygold-branded** butter pack | an unbranded pat of butter |
| `md-p5` / `md-p6` (Ghee) | a milk bottle with cookies; cookies and a jar of milk | ghee in jars |
| `md-p7` (Paneer) | a milk bottling line | a block of fresh white cheese |
| `md-p8` (Set Curd) | a jar of milk | plain set curd in a bowl |
| `md-map` | a close-up of cattle, sitting under "Find us" | aerial farmland, captioned honestly as *not* a map |

Two known weaknesses left, both needing real photography rather than another swap:

- **`md-story`** is a red North-American barn — wrong region for a Toopran village story.
- **`md-cat-fresh` / `md-p7`** show Adyghe cheese, which resembles paneer but is not it.

The Contact page has no real map. The aerial shot is captioned as the collection belt,
with a note that an interactive map belongs there — wire one up (or drop the block).

## Motion

Scroll-driven and pointer-driven throughout: word-mask headline reveals, a scroll
progress rail, a magnetic-hover custom cursor, parallax on the photography, animated
counters, a drawn protocol rail, hover zoom on cards, and route crossfades.

Everything is gated behind `prefers-reduced-motion` — animations collapse to their end
state and the custom cursor and marquee switch off.

## Notes for productionising

- **SPA fallback** — client-side routes need the host to rewrite unknown paths to
  `index.html` (Netlify `_redirects`, Vercel rewrites, or `try_files` on nginx).
- **The enquiry form is client-side only.** `src/pages/Enquiry.jsx` validates and shows
  the success panel but posts nowhere — wire it to the CRM/email endpoint and keep the
  inline success state.
- **Content should move to a CMS.** Everything in `src/data.js` is static.
- `handoff/` and the source zip are kept for reference and are not part of the build.

## Structure

```
src/
├── App.jsx        routes, page transitions, document titles
├── ui.jsx         header, footer, language context, motion primitives, cursor
├── art.jsx        brand mark and utility glyphs (SVG)
├── shot.jsx       <Shot> — a photography slot (lazy, no CLS, parallax, credit)
├── images.js      every photo slot: src, alt, credit — swap real photos here
├── data.js        all content + i18n strings
├── index.css      design tokens and layout
└── pages/         Home · Products · Quality · Story · Enquiry · Contact
```
