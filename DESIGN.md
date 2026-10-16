# Flux Studio: DESIGN.md

Phase 1: design system, tokens, wordmark, layout skeleton, hero prototype.
Decisions are recorded here; research that informed them is in `research/notes.md`
and the approved concept in `research/design-brief.md`.

## Concept

"Everything here is a current moving toward something shipped." The site expresses
"flux" (change, flow of energy) with restraint: thin stream-lines in the wordmark,
a shipping log as the hero, dry and specific copy. Credibility comes from dated,
verifiable work, never adjectives.

## Stack

- **Astro 5, static output, TypeScript strict.** Content site, not an app. Islands
  architecture ships near-zero JS by default, which makes the Lighthouse targets
  (Performance 90+, LCP < 2.5s) achievable without heroics. Deploys to Vercel as
  plain static files; no adapter needed.
- **Vanilla CSS with custom properties, no Tailwind.** Justification: the design is
  token-driven and bespoke; Tailwind's preflight and utility layer would add weight
  and fight the custom type scale and dual-theme variable system. Total CSS is one
  small file. Revisit only if the component count grows past what hand-written CSS
  stays readable for.
- **Motion (Phase 1): CSS only.** The feed stream-in is a CSS transition with a
  per-item `--i` stagger. GSAP ScrollTrigger and Lenis arrive in the Phase 3 motion
  pass, for pinned storytelling and scroll choreography only.
- **Icons: inline SVG in Lucide style** (sun, moon, menu, close, arrows). One
  consistent stroke style, no emoji, no mixed sets.

## Color

One neutral scale, one accent, dual themes. All colors are CSS variables in
`src/styles/tokens.css`, switched by `data-theme` on `<html>`.

- **Neutrals:** deep slate. Light theme is paper white (`#fafaf7`) with near-black
  slate ink (`#11140f`). Dark theme is near-black with a green cast (`#0b0e0c`)
  with paper-white ink (`#ecefe8`). Hairline borders carry structure, not shadows.
- **Accent: terminal emerald.** Light theme uses emerald-700 (`#047857`, passes
  WCAG AA on paper for body text). Dark theme uses emerald-400 (`#34d399`).
  Rationale: it reads as "shipped" (terminal green), fits the shipping-log concept,
  and stands apart from the blue/purple accent crowd the research flagged as cloned.
  Used sparingly: dates, live indicators, primary CTA, focus rings. Never as
  decoration.
- **No gradients, no blobs, no glassmorphism.** Per the anti-slop rules.

## Typography

Three variable families, self-hosted WOFF2 via Fontsource (no Google Fonts
requests at runtime):

- **Display: Space Grotesk Variable.** Distinctive grotesque with character;
  tight tracking, large sizes. Used for the wordmark and headlines. Never Inter.
- **Text: Inter Variable.** Highly readable body face. Allowed by the brief
  (the ban is on Inter *for display*).
- **Mono: JetBrains Mono Variable.** Dates, labels, technical details, feed text.

Fluid scale with `clamp()`: hero `clamp(3.25rem, 11vw, 10.5rem)` down to mono
`0.8125rem`. Max three families, enforced.

## Wordmark

Typographic "Flux Studio" in Space Grotesk 700. The custom detail: the **x is drawn
as two converging stream-lines** (two gently curved strokes crossing like an x,
slightly asymmetric, round caps). Implemented as an inline SVG sized in `em` so it
scales with the surrounding type (`Wordmark.astro`, also exported as
`public/favicon.svg` for the tab icon). `role="img"` with an aria-label; the visual
letterforms are `aria-hidden`.

Optical alignment of the x against the font is eyeballed in Phase 1 and gets a
proper pass in Phase 2 against rendered type.

## Spacing, radius, elevation, grid

- Spacing scale: 0.25rem to 8rem steps (`--space-1` through `--space-32`).
- Radius: 6px / 10px / 16px / pill. No other radii.
- Elevation: none. Depth comes from hairline borders and background tints
  (`--bg-raised`, `--bg-sunken`), not shadows. Keeps both themes honest.
- Grid: single centered container (`--container: 76rem`), content measure 68ch.

## Motion language

One easing family (`--ease-out: cubic-bezier(0.16, 1, 0.3, 1)`), four durations:
150ms fast, 300ms base, 600ms slow, 1000ms dramatic. Animate transform and opacity
only.

Hero feed stream-in: entries are **visible in the HTML by default** (no-JS safe).
A head script adds `.js` to `<html>` only when `prefers-reduced-motion` is not set;
a body script then adds `.is-in` per item, staggered via `--i`. Reduced-motion
users and no-JS users see the full feed statically. This is the pattern for all
Phase 3 motion: content first, animation as enhancement.

## Layout

- **Header:** sticky, blurred, hairline bottom border. Wordmark, nav (Products,
  Changelog, About, Contact), theme toggle (persisted to localStorage, OS default
  on first visit), primary CTA. Mobile: hamburger opens a full-screen menu.
  Hide-on-scroll-down behavior is a Phase 3 addition.
- **Footer:** wordmark, studio statement, Studio nav, Elsewhere links (LinkedIn,
  GitHub, email, Flux Reviews blog), copyright base row.
- **Home (Phase 1):** hero only. Sections 2-7 of the brief's home spec
  (pillars, featured products, capabilities, process, numbers, final CTA) are
  Phase 2.

## Data

- `src/data/products.ts`: typed product records, the single source of truth.
  Fields are optional; missing data degrades gracefully (e.g. Upcoming products
  render name and status only). Copy drafted in studio voice is marked DRAFT for
  owner review. promostack has no GitHub link (private repo, by owner instruction).
- `src/data/shipping.ts`: the shipping log. Rule: every entry must be real and
  verifiable; nothing speculative goes in.
- `src/data/site.ts`: identity, contacts, nav, blog slot (Flux Reviews is a link,
  never a product card).

## Anti-slop compliance (Phase 1)

- No banned visuals: no gradients, blobs, glassmorphism, stock imagery, emoji icons.
- No banned phrases: copy reviewed against the brief's list ("seamless",
  "cutting-edge", "leverage", "unlock", etc.). None present.
- No invented proof: every shipping entry links to a real repo; no testimonials,
  no logo wall, no metrics. The footer claim "No trackers" is true (no analytics
  installed).
- No em dashes anywhere in code, copy, or docs.

## Open items for Phase 2

- Home sections 2-7; product detail template (`/products/[slug]`); real About,
  Contact (form via static provider), and Changelog pages; custom 404 polish.
- Optical pass on the wordmark x; accent color final confirmation against renders.
- Motion pass (GSAP ScrollTrigger + Lenis), then reduced-motion audit.
- OG images per page/product, JSON-LD, sitemap.xml generation, Lighthouse QA.
- Contact form provider choice (Formspree vs Web3Forms) with owner.
