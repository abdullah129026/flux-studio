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
  Changelog, About, Contact), command-palette trigger, theme toggle (persisted
  to localStorage, OS default on first visit), primary CTA. Hides on scroll
  down, reveals on scroll up (Phase 2). Mobile: hamburger opens a full-screen menu.
- **Footer:** wordmark, studio statement, Studio nav, Elsewhere links (LinkedIn,
  GitHub, email, Flux Reviews blog), copyright base row.
- **Home (Phase 1):** hero only. Sections 2-7 of the brief's home spec
  (pillars, featured products, capabilities, process, numbers, final CTA) are
  Phase 2.

## Data

- `src/data/products.ts`: typed product records, the single source of truth.
  Fields are optional; missing data degrades gracefully (e.g. Upcoming products
  render name and status only). Copy drafted in studio voice, approved by the
  owner 2026-10-16. promostack has no GitHub link (private repo, by owner instruction).
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

Done in Phase 2 (2026-10-16):

- Home sections 2-7: Pillars (two-column split), Featured (numbered editorial
  rows, alternating), Capabilities (definition rows with concrete proof),
  Process (vertical timeline, progress bar is motion-ready for Phase 3),
  Numbers (real counts only: 3 live, 3 in development, 2 upcoming, 106
  Spec2Run tests), Final CTA. Each section uses a different composition.
- Product detail template (`/products/[slug]`): hero, problem, what-it-is,
  how-it-works stepper, code-drawn SVG pipeline diagram (illustrative, marked
  in a comment), features, stack, prev/next nav, per-product SEO + OG,
  SoftwareApplication JSON-LD. Upcoming products degrade gracefully.
- Products index: category + status filters, list/grid toggle, deep-linkable
  via query params, client-side, all items server-rendered (works without JS).
- About: honest founder-led story, 5 principles with concrete examples,
  working stack, real timeline from the shipping log, profile links.
- Contact: Web3Forms (see below), validation, inline errors, honeypot,
  success/failure states, copy-email button, direct links.
- Changelog: full shipping-log page. 404: custom, on-brand.
- Global: header hides on scroll down / reveals on up; native system cursor everywhere
  (the custom ring-and-dot cursor was removed 2026-10-16 per owner feedback);
  cross-document view transitions via CSS `@view-transition` gated on
  `prefers-reduced-motion: no-preference` (fallback is instant navigation);
  Cmd/Ctrl+K command palette (pages + products, keyboard navigable);
  scroll progress bar; skip link.
- SEO: canonical, per-page title/meta/OG, 1200x630 PNG OG cards generated in
  code (`scripts/og.mjs` + `scripts/og-rasterize.mjs`), twitter large cards,
  Organization + WebSite JSON-LD globally, sitemap via @astrojs/sitemap 3.7.4,
  robots.txt, webmanifest, favicons.

## Contact form provider

Chosen: **Web3Forms**. Free, no account needed, plain JSON POST from the
browser, supports a honeypot field, returns success/failure as JSON. The
access key ships as the `PUBLIC_WEB3FORMS_KEY` build-time env var; without
it the form shows an honest "not connected yet" note and the mailto fallback.
Formspree was rejected (account required, free tier caps submissions);
Netlify Forms was rejected (only works on Netlify hosting; the site targets
Vercel). Setup steps are in README.md.

## Open items for Phase 3

Done in Phase 3 (2026-10-16):

- **Packages (pinned):** gsap@3.15.0, lenis@1.3.27. GSAP is used under
  GreenSock's free "No Charge" license (not MIT). APIs verified against
  current docs: `SplitText.create` with `type/mask/autoSplit/aria/onSplit`,
  Lenis `autoRaf:false + anchors:{offset} + lerp`, the single-raf-loop sync
  recipe (`lenis.on("scroll", ScrollTrigger.update)` driven by gsap.ticker
  with `lagSmoothing(0)`).
- **Loading:** `src/scripts/motion.ts` is a tiny bootstrap bundled with the
  page; it gates on `prefers-reduced-motion` and `data-motion`, adds
  `html.motion` synchronously, then dynamically imports `motion-core.ts`
  (GSAP + ScrollTrigger + SplitText + Lenis, ~145KB minified in its own
  chunk). If the import fails, `.motion` is removed and everything renders
  statically. 404 uses `motion="none"` and skips the bundle.
- **Easing:** `expo.out` is the GSAP spelling of the `--ease-out` token
  (cubic-bezier(0.16, 1, 0.3, 1)). One easing family, durations mirror the
  token scale (0.6s slow, 0.3s base).
- **Implemented:** scroll reveals (`[data-reveal]`, batched, 0.08 stagger);
  line-mask split headings (`[data-split]`, SplitText, aria auto);
  pinned + scrubbed process timeline on desktop only (step nodes light up,
  progress bar fills; plain scrubbed fill on mobile, no pinning under 769px);
  light parallax on the featured ghost numerals (one layer); magnetic
  primary CTAs (fine pointers only, quickTo); counters (final values in
  HTML, JS only tweens); SVG diagram draw-in on product pages (edges draw,
  nodes rise, arrowheads fade); Lenis smooth scroll with anchor support
  (offset for the sticky header) and `data-lenis-prevent` on the palette;
  view transitions completed with `view-transition-name` on the header and
  progress bar (gated on no-preference, fallback is instant navigation).
- **Reduced motion:** the module never loads when the OS setting is set;
  CSS keeps every target visible (reveals, splits, counters, full process
  bar); Lenis is never constructed; a mid-session flip to reduced motion
  tears everything down and restores the static state. Tested by emulating
  the media query: no hidden content, no Lenis, no pinning, no errors.
- **Verified:** `npm run build` green (14 pages); zero console errors;
  skip-link anchors, keyboard scrolling (End key), and magnetic reset all
  work under Lenis; no-JS renders everything in final state.

## Open items for Phase 4

- Lighthouse QA on the production build; responsive spot-checks.
- Optical pass on the wordmark x against rendered type.
