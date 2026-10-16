# Flux Studio — Phase 0 Design Research Notes

Research date: 2026-10-16. Method: live page fetches via text extraction (structure, copy, nav, image inventory) for 11 sites, plus secondary design analyses (Awwwards entries, Webby Awards case notes, third-party design.md specs, font/tech directories) where a live fetch was blocked or the site is a WebGL SPA with no text surface. Nothing here is copied from any site; observations are paraphrased and no site copy is reused for Flux Studio. Sections D–F verify current (2025–2026) library versions and APIs against documentation, not memory.

---

## A. Developer-product marketing sites

### 1. Linear — https://linear.app (fetched live)

- **Layout system:** Centered single-column narrative with alternating full-bleed product-visual sections. Numbered "Fig 0.1 / 0.2 / 0.3" figure captions frame feature blocks like software documentation, which is a distinctive editorial device.
- **Typography:** Custom "Linear Display" sans for headlines at 500–600 weight with tight negative tracking (display 80px / -3px tracking); Inter for product UI; monospace for technical identifiers. Large display sizes scale aggressively down at breakpoints.
- **Color:** Near-black canvas (#010102, essentially black with a faint blue tint), light gray text (#f7f8f8), charcoal panels (#0f1011) with hairline borders (#23252a). Exactly one chromatic accent: lavender-blue (#5e6ad2), used only on the brand mark, primary CTA, focus rings, and link emphasis, never decoratively. Marketing site is dark-only.
- **Hero approach:** Typography-first and minimal. Current headline: "The product development system for teams and agents" with a live product-UI visual below, no hero image needed. Purposeful whitespace.
- **Scroll behavior:** Subtle GPU-accelerated grid-dot pattern loops (multi-second cycles). Reveals are restrained; the page reads as documentation rather than theater.
- **Hover/transition details:** Micro-interactions are instant and quiet (Linear's brand is speed: sub-100ms response is a stated product principle, and the marketing site mirrors it).
- **Product presentation:** Real product UI screenshots framed in dark panels, feature sections written as specific engineering scenarios (issue triage, PR review, offline mode), a changelog, and a "Powering the companies building the future" customer strip.
- **Overdone / avoid:** The dark-theme + single-accent formula is now the most copied look in dev marketing. Borrowing it wholesale would read as a Linear clone. Also avoid the "AI workflows" bandwagon phrasing without specifics.

### 2. Stripe — https://stripe.com (fetched live)

- **Layout system:** Classic enterprise-marketing rhythm: hero → product family → stat band → customer-story accordion → testimonials → integration paths → annual-letter teaser. Generous spacing, clear section dividers.
- **Typography:** Clean grotesque sans, strong hierarchy, italic serif accent in the hero headline ("Financial infrastructure to grow your revenue").
- **Color:** Light theme with the signature Stripe blurple/indigo used sparingly; section backgrounds alternate white and very light gray with occasional dark bands.
- **Hero approach:** One-line value statement plus a data-visualization graphic. Proof-led rather than visual-led.
- **Scroll behavior:** Mostly static with animated stat counters and an interactive customer-story accordion. Motion serves the numbers.
- **Hover/transition details:** Accordion-style customer stories with image crossfades; restrained.
- **Product presentation:** The standout device is brand integration in photography: customer-story images (street intersection, boutique window, grocery bag, newspaper kiosk) are art-directed so real-world scenes form Stripe's parallelogram logo shape. Stats are concrete ($1.9T payments volume in 2025, 99.999% uptime, 500M+ API requests/day). Testimonials carry name, title, company, headshot.
- **Overdone / avoid:** The stat-band + testimonial-carousel + logo-wall formula is enterprise wallpaper. Do not replicate the rhythm; borrow only the specificity of the numbers and the idea of baking the brand mark into imagery conceptually.

### 3. Raycast — https://www.raycast.com (fetched live)

- **Layout system:** Vertical narrative with one idea per section, each anchored by a large product visual. Generous vertical rhythm.
- **Typography:** Bold grotesque headlines, tight tracking, short punchy section titles ("Take the short way.", "Don't repeat yourself.").
- **Color:** Light theme, colorful product visuals, blue glass-effect imagery for feature sections.
- **Hero approach:** The signature move: the hero visual is a field of keyboard keys (esc, F1–F12, symbols, letters), which is both on-brand (keyboard-first product) and memorable. Headline: "Your shortcut to everything." Copy line "It's not about saving time. It's about feeling like you're never wasting it." is feeling-led rather than feature-led.
- **Scroll behavior:** Alternating text/visual sections with parallax on the key field; smooth and calm.
- **Hover/transition details:** Product visuals use glass and depth; extension icons shown at real sizes.
- **Product presentation:** Four pillars (Fast / Ergonomic / Personal / Reliable) each with one concrete proof point ("Think in milliseconds", "Keyboard First", "99.8% crash-free rate"). A 24-person testimonial wall of real, named, recognizable people (Vercel CEO, MKBHD, Tailwind creator) with favorite-feature quotes. "There's an extension for that" section lists real capabilities. Final CTA: "Download and use Raycast for free."
- **Overdone / avoid:** The giant testimonial avatar wall only works with real recognizable names; a studio without that must not fake an equivalent. The keyboard motif is theirs; do not lift key-cap imagery.

### 4. Supabase — https://supabase.com (fetched live)

- **Layout system:** Product-tile grid as primary nav (Database, Auth, Edge Functions, Storage, Realtime, Vector, Data APIs), then alternating sections: dashboard, framework integrations, customer stories, community, open-source.
- **Typography:** Strong grotesque display type, technical mono accents.
- **Color:** Dark theme, signature green accent (#3ecf8e family) used consistently for CTAs, code highlights, and active states.
- **Hero approach:** "The Postgres Development Platform" with an interactive product-tile grid that doubles as navigation. The line "Use one or all. Best of breed products. Integrated as a platform." does positioning work in one sentence.
- **Scroll behavior:** Standard reveals; the tiles and dashboard carry the interactivity.
- **Hover/transition details:** Tiles lift and highlight on hover; code snippets with syntax highlighting.
- **Product presentation:** Each product gets a one-line concrete description ("Every project is a full Postgres database"). Customer stories name real companies (Lovable: "Powering millions of AI-generated apps"). "Open source from day one" section with GitHub link as trust device. Closer: "Build in a weekend, scale to millions."
- **Overdone / avoid:** The product-tile grid is now standard dev-marketing furniture. The green-on-dark terminal aesthetic is heavily imitated. Borrow the one-line-per-product concreteness, not the grid.

### 5. Resend — https://resend.com (fetched live)

- **Layout system:** Long narrative page, one feature per band, each with a short looping 3D video (broadcast, React emails, control panel).
- **Typography:** Large display serif/sans mix ("Email for developers"), generous sizes.
- **Color:** Light warm theme with photographic backgrounds (floor texture, light rays) rather than flat color or gradients.
- **Hero approach:** "Email for developers" over a photographic floor background with light rays; subline is concrete: "The best way to reach humans instead of spam folders."
- **Scroll behavior:** Each band pairs text with a looping video; videos autoplay muted in a loop.
- **Hover/transition details:** Minimal; the videos do the work.
- **Product presentation:** Developer-credibility devices: "First-class developer experience / We are a team of engineers who love building tools for other engineers", test mode, modular webhooks, react-email open-source library, a deliverability checklist (blocklist tracking, BIMI, DMARC, dedicated IPs), one real testimonial (Vercel CEO). Closer: "Email reimagined. Available today."
- **Overdone / avoid:** The looping-3D-video-per-section pattern is becoming a Resend/Linear-era cliché when the videos are abstract rather than product-true. Keep video only where it shows the real product.

---

## B. Design-engineering studio / agency portfolios

### 6. Basement — https://basement.studio (fetched live; font/stack data via A1 Gallery)

- **Layout system:** Bold stacked sections: hero → 36-logo "Trusted by Visionaries" wall → Featured Projects → Capabilities → Contact. Heavy, confident, maximalist within a grid.
- **Typography:** FFFlauta (expressive display face) for headlines, Geist for body, Geist Mono for technical labels. Big type, tight leading.
- **Color:** Dark theme with high-contrast type; color comes from project imagery.
- **Hero approach:** Attitude-led: "A digital studio & branding powerhouse making cool shit that performs." No product visual needed; the voice is the visual.
- **Scroll behavior:** Bold reveals, marquee-like logo wall, large imagery.
- **Hover/transition details:** Project cards with rich hover states; the logo wall is the interactive texture.
- **Product/case-study presentation:** Featured Projects (Vercel Ship, Daylight, KidSuper, Shop MrBeast) each with a dedicated /showcase/ case-study URL, a 2–3 sentence outcome-led description, and service tags. Capabilities split into four pillars (Websites & Features, Visual Branding, IRL Experience Design, Marketing Execution) with sub-service lists.
- **Stack (verified):** Next.js + Sanity CMS.
- **Overdone / avoid:** The profanity-as-brand voice is theirs and inimitable without sounding forced. The 36-logo wall only works because the logos are real and impressive; a young studio must not build a logo wall of aspirational names. Do not copy the "cool shit" register.

### 7. Locomotive — https://locomotive.ca/en (via third-party design.md spec; live fetch returned minimal text)

- **Layout system:** Editorial-minimal single-page: massive display type, generous whitespace, hard 1–2px hairline borders as structural dividers, fully photographic/video hero.
- **Typography:** Custom serif display (Editorial New / PP Locomotive New, originally designed from train-car technical iconography) paired with Helvetica Now for body. Display type is the brand.
- **Color:** Near-black (#0d0d0d), warm off-white text (#f0ede6), single red accent (#da382e) for CTAs and highlights.
- **Hero approach:** Full-bleed photography/video with huge serif type overlaid. The type carries the identity, not effects.
- **Scroll behavior:** GSAP timelines driven by Lenis smooth scroll; letterforms shuffle, fade, and parallax on cue; a Three.js team canvas loads 28 rigged character models on demand. Barba.js page transitions.
- **Hover/transition details:** Signature "Shuffle" hover on link text (letters scramble); one easing language across the site (expo-out cubic-bezier(0.16, 1, 0.3, 1)).
- **Product/case-study presentation:** Work presented as large editorial spreads with film/animation/3D credited to collaborators; playful copy with emoji accents.
- **Overdone / avoid:** The Three.js-everywhere approach is expensive and fragile on mid-range devices; the shuffle-text hover is now widely imitated. Borrow the editorial serif + hairline-border discipline and the single-easing rule, not the effects.

### 8. Active Theory — https://activetheory.net (live fetch timed out; via Webby Awards case notes and design press)

- **Layout system:** The site is a single WebGL journey, not a page: the landing experience moves through a series of 3D environments.
- **Typography:** Custom type with flickering-light treatments contributing to an alien, otherworldly feel.
- **Color:** Moody, dark, atmospheric lighting; premium and cinematic.
- **Hero approach:** No hero section at all; arrival drops the visitor into the first of eight 3D environments inspired by the studio's offices (Venice Beach, Amsterdam Canals) and past projects.
- **Scroll behavior:** Scene-to-scene transitions are the navigation; each environment is a portfolio piece.
- **Hover/transition details:** Networked presence elements show other concurrent visitors' movements, making the site feel alive.
- **Product/case-study presentation:** The studio's own site is the case study ("practices what it preaches"); client work appears as environments within the journey. Webby Technical Achievement nominee on the strength of the site itself.
- **Overdone / avoid:** This is the extreme end of "site as demo." It is a poor model for a studio that needs visitors to understand products in 10 seconds; immersion trades away clarity, SEO, and accessibility. Borrow nothing structurally; note only that a signature interactive moment must never cost comprehension.

### 9. Resn — https://resn.co.nz (via third-party design.md spec; live fetch returned near-empty because the site is a WebGL SPA)

- **Layout system:** No conventional page at all. The entire viewport is one full-bleed WebGL "drop" scene; fixed shell buttons (Drop, Discover, Showreel, Audio) pin to the four corners; a centered tagline; a thin interactive bar near the bottom; an award-count ticker.
- **Typography:** Proprietary "Fort" in five weights (Extralight to Bold) with Work Sans as secondary.
- **Color:** Deliberately monochrome (black/white) with exactly one warm peach accent (#ffda93) used as the single hover/accent token.
- **Hero approach:** The "Drop" interaction: tapping enters a 3D water-drop scene (Three.js) that morphs into a project. The custom inline-SVG drop symbol recurs as the visual signature.
- **Scroll behavior:** There is no scroll; interaction is the navigation (Discover opens a vertical category menu, Showreel opens fullscreen video).
- **Hover/transition details:** The single-accent-token discipline makes every hover feel intentional. Ambient audio toggle sampled from a sprite sheet.
- **Product/case-study presentation:** Projects are discovered through the drop morph and the Discover menu rather than a grid.
- **Overdone / avoid:** Same caution as Active Theory: total immersion sacrifices clarity, SEO (the live fetch returned almost no indexable text), and keyboard/screen-reader access. The transferable lesson is the single-accent-token discipline and a recurring signature motif, not the no-scroll structure.

### 10. Darkroom Engineering — https://darkroom.engineering (fetched live; formerly the team behind Studio Freight)

- **Layout system:** Confident stacked narrative: dictionary-definition hero → looping case-study videos → testimonials → open-source tools → capabilities lists → dated Activity Log.
- **Typography:** Strong grotesque, sentence-case headlines, dry tone.
- **Color:** Light theme, neutral; color arrives via project video thumbnails.
- **Hero approach:** The wordmark is defined like a dictionary entry: "Darkroom, noun: 1. A Lightproof Room for Developing Photographs. 2. A Studio Engineering Creativity into Reality." This is a distinctive, ownable hero device built from typography alone.
- **Scroll behavior:** Standard smooth scroll (Lenis, which they built); case videos loop in place.
- **Hover/transition details:** Quiet; videos and the log carry motion.
- **Product/case-study presentation:** "A Small Sample, Just Three Builds We Liked for Different Reasons" with looping video cards linking to a full Work page — honest curation instead of an exhaustive grid. "Tools We Build and Use. Now Yours Too." presents open-source libraries (Satus starter kit: Next.js 16, React 19, strict TS, Zod) as products. The Activity Log is a dated shipping journal (project launches, OSS updates, experiments, even redacted stealth work) — an excellent indie-studio credibility device that shows momentum without invented metrics.
- **Stack (stated on site):** Next.js, Lenis, R3F/Three.js, GSAP.
- **Overdone / avoid:** The dictionary-definition hero is theirs; do not imitate the device, but note the underlying principle: define the name in one memorable typographic gesture.

---

## C. Open-source and indie product pages with strong storytelling

### 11. shadcn/ui — https://ui.shadcn.com (fetched live)

- **Layout system:** Docs-first: hero → component gallery → philosophy → installation. The product is the interface.
- **Typography:** Clean sans, technical precision, restrained sizes.
- **Color:** Light/dark dual theme; the hero shows the same dashboard in light and dark side by side.
- **Hero approach:** "The Foundation for your Design System" with the actual product UI (dashboard screenshots) as the hero visual. No metaphor, no illustration: the work speaks.
- **Scroll behavior:** Calm, documentation-like.
- **Hover/transition details:** Minimal; component previews are interactive by nature.
- **Product presentation:** The copy-paste-not-a-library philosophy ("Composable, accessible components with thoughtful defaults. Build your own component library with code you can customize, extend, and make your own.") is the story. Live interactive demos of every component replace marketing visuals.
- **Overdone / avoid:** Docs-style minimalism only works when the product is genuinely interactive. For a studio site, the lesson is: show the real artifact, not a metaphor for it.

### 12. Plausible — https://plausible.io (fetched live)

- **Layout system:** Single long founder-letter-style page: problem → three concrete reasons → invitation → signed P.S.
- **Typography:** Readable serif-leaning body, calm headlines.
- **Color:** Simple light theme, minimal accent.
- **Hero approach:** Confrontational and specific: "It's time to ditch Google Analytics." The page then argues its case like an essay.
- **Scroll behavior:** Reading-like; almost no motion.
- **Hover/transition details:** Negligible; the words carry it.
- **Product presentation:** Storytelling through specifics: "Our script is 54 times smaller than Google Analytics", "Every visitor downloads 135KB less JavaScript", "A site with 100,000 monthly visitors saves around 4 kg of CO2 per year", "21,000 paying customers". The P.S. is signed by the two co-founders and states the business model honestly: "completely independent, self-funded, bootstrapped and profitable team of 10... No outside investors, no acquisition targets. We choose the subscription business model rather than surveillance capitalism. Our code is open source too, so you're never locked in."
- **Overdone / avoid:** The founder-letter format is powerful once; it would feel derivative to copy the structure. Borrow the standard it sets: every claim is specific, verifiable, and signed.

### 13. Ghost — https://ghost.org (fetched live)

- **Layout system:** Alternating feature bands (Easy site design / Advanced creator tools / Grow your audiences / Run your business), each with product screenshots, then an integrations logo grid, then customer cards grouped by audience (Publishers / Creators / Businesses).
- **Typography:** Editorial serif headlines with clean sans body; calm and confident.
- **Color:** Light, warm neutrals; product screenshots provide color.
- **Hero approach:** Product screenshot hero with a direct headline: "Ghost: The best open source blog & newsletter platform."
- **Scroll behavior:** Gentle reveals; screenshots are the visual interest.
- **Hover/transition details:** Restrained; integration logos and customer cards are the texture.
- **Product presentation:** Customer cards carry real metrics (404 Media: 123K members; Tangle: $281K MRR; Creator Science: $39K MRR) — social proof with numbers, not adjectives. Integrations grid is exhaustive and honest ("Works with everything... Yes."). The "Built to last" closer is blunt: "Ghost is open source, independent, and funded 100% by its users. No investors. No bullshit."
- **Overdone / avoid:** The alternating-band layout is the most common SaaS pattern on earth; it works for Ghost because every band shows the real product. Without real screenshots per band, the pattern collapses into template.

---

## D. Best practices (verified 2025–2026)

### Scroll-driven animation: CSS scroll-timeline vs GSAP ScrollTrigger

- **CSS scroll-driven animations** (`animation-timeline: scroll()` / `view()`, `animation-range`): shipped in Chrome/Edge 115+ (July 2023) and Safari 26+ (Sept 2025). **Firefox has not shipped** (behind `layout.css.scroll-driven-animations.enabled` flag; Interop 2026 focus area). Global coverage ~84%; status is "Limited availability," not Baseline. They run on the compositor thread (no main-thread scroll listeners, no rAF), which is the real performance win.
- **Mandatory guard:** wrap in `@supports (animation-timeline: view())`. The safe fallback is that content simply renders in its final keyframe state (visible, un-animated) — never let a scroll-driven animation be the only thing that makes content visible.
- **GSAP ScrollTrigger** works everywhere, and CSS cannot do: pinning, sequenced timelines, stagger across breakpoints, scroll callbacks, or `gsap.matchMedia` responsive choreography. Cost: ~34–46 KB gzipped for core + plugin, main-thread.
- **Working rule from production guides:** CSS for cheap independent reveals (fades, progress bars, single-property parallax) as progressive enhancement; ScrollTrigger for anything load-bearing (pinned storytelling sections, scrubbed sequences, anything where "no animation in Firefox" is unacceptable). Mixing is normal and encouraged. On mobile: disable pinning below ~768px, cap parallax at ~2 layers, reduce scrub values.

### View Transitions API

- **Same-document** (`document.startViewTransition`): **Baseline since October 2025** — Chrome 111+, Edge 111+, Firefox 133+/144+, Safari 18+. ~88% of users. Safe as progressive enhancement with a feature-detect fallback (`if (document.startViewTransition)`), where unsupported browsers just apply the DOM change instantly.
- **Cross-document** (`@view-transition { navigation: auto; }` for MPA navigations): Chromium 126+ and Safari 18.2+; **not Firefox**. Fallback is a plain instant navigation — no error, no polyfill needed. Both documents must opt in; same-origin; user-initiated navigations only.
- **Rules:** gate the opt-in behind `prefers-reduced-motion: no-preference` so reduced-motion users never capture snapshots; give fixed/sticky headers their own `view-transition-name` or they appear to drift; never wrap the network request inside `startViewTransition` (resolve on `finished`, guard against interrupted transitions); the legacy `<meta name="view-transition" content="same-origin">` opt-in is deprecated.
- Astro 5+ exposes this via the `<ClientRouter />` component (renamed from `<ViewTransitions />` in v5.0) for SPA-like navigation; native CSS cross-document transitions are the lighter alternative for a static MPA.

### Variable fonts

- One variable file replaces all static weights (e.g. a single 100–900 file instead of 6+ files); cuts requests and usually total bytes.
- Best practice: WOFF2 only, `font-display: swap` (best for LCP/CLS balance), preload 1–2 critical faces with `crossorigin`, self-host (Google Fonts serves variable by default; Fontsource and Fontshare are the usual self-host sources), subset with `unicode-range` (pyftsubset/glyphhanger) for non-Latin ranges you don't need.
- Use `size-adjust` in `@font-face` to match fallback metrics and kill CLS from font swap; fluid type scale with `clamp()`; limit to 2–3 families max (display + text + mono).

### Performance budgets for animation-heavy sites

- Hard targets (from the brief, consistent with industry): Lighthouse Performance ≥ 90, LCP < 2.5s, CLS < 0.1, INP < 200ms.
- Animation-specific: animate only `transform` and `opacity`; keep JS payload small and lazy-load heavy animation/3D code per route (dynamic import); WebGL/canvas must pause when off-screen, cap `devicePixelRatio` (usually ≤ 2, often 1.5), and ship a CSS/static fallback; no animation may block content readability or interactivity.
- Reference costs: GSAP core + ScrollTrigger ~34–46 KB gzip; Lenis ~5 KB gzip; a variable display font ~30–60 KB WOFF2 subset. A scroll-heavy page should keep its total blocking JS well under ~150 KB gzip.
- Images: AVIF/WebP with responsive `srcset`, explicit width/height, lazy below the fold, eager for hero/LCP image.

### Accessibility for motion (prefers-reduced-motion)

- `prefers-reduced-motion` is supported in all modern browsers since 2019 and exposed at OS level (macOS, iOS, Windows, Android). WCAG 2.2: SC 2.3.3 Animation from Interactions (AAA) requires motion be disableable unless essential; SC 2.2.2 Pause, Stop, Hide (A) requires auto-playing motion to be pausable.
- Strategy — remove / reduce / replace / retain: remove parallax, autoplay, and decorative loops; reduce durations and travel distances (no bounce/overshoot); replace slide/scale with opacity fades; retain only essential feedback (loading, focus) in simplified form. Never flash more than 3×/second (seizure risk, WCAG 2.3.1 Level A).
- Implementation: CSS `@media (prefers-reduced-motion: reduce)` (Tailwind: `motion-reduce:` variant), JS `matchMedia('(prefers-reduced-motion: reduce)')` checked at setup time to skip or zero-out GSAP/Lenis (Lenis natively respects the setting; disable smooth scroll for these users).

### Static-site SEO / Open Graph metadata

- Per page: unique `<title>` (~50–60 chars, brand-suffixed), unique meta description (~150–160 chars), canonical URL, one `<h1>`, semantic heading order, descriptive alt text.
- `robots.txt` at root (allow + sitemap pointer); `sitemap.xml` with all public routes and `lastmod`.
- Open Graph per page: `og:title`, `og:description`, `og:type`, `og:url`, `og:image` (1200×630, hand-designed card per product/page), `og:site_name`; Twitter card `summary_large_image` mirroring OG values.
- JSON-LD: `Organization` + `WebSite` globally; `SoftwareApplication` per product page; `BreadcrumbList` on content pages.
- Favicons, web manifest, `theme-color`; absolute URLs everywhere (set `metadataBase` once); noindex on 404/staging.

### Library versions (verified against current docs, Oct 2026)

- **GSAP 3.x (3.13+, current line ~3.14):** 100% free since April 30, 2025 (post-Webflow acquisition), including all former Club plugins — SplitText, ScrollTrigger, ScrollSmoother, MorphSVG, DrawSVG. License is GreenSock's "No Charge" license (free for commercial use; **not** MIT — do not relicense or present it as MIT). SplitText was rewritten in 3.13: `SplitText.create()` with `autoSplit`, `mask: "lines"`, and screen-reader-safe defaults.
- **Lenis 1.x (1.1.18 → 1.3.x current):** MIT, by darkroom.engineering. Package name `lenis` (not `@studio-freight/lenis`). `autoRaf: true` option, `lenis/react` and `lenis/vue` subpackages, `anchors: true` for anchor links, respects `prefers-reduced-motion` natively, standard GSAP ScrollTrigger sync recipe (`lenis.on('scroll', ScrollTrigger.update)` + `gsap.ticker`).
- **Astro (5.x current line; 6/7 referenced in 2026 sources):** islands architecture, zero JS by default, `client:visible`/`client:load` hydration directives, Content Layer for typed content, `<ClientRouter />` for view transitions. The static-MPA default plus native CSS cross-document view transitions avoids the WebGL-lifecycle bugs that SPA soft-navigation can cause.

---

## E. Overdone patterns to avoid (synthesis)

1. Purple-to-blue gradient hero with blurry blobs; generic 3D spheres / neon grids / particle fields (banned by the brief; confirmed everywhere in low-effort clones).
2. Glassmorphism cards in a 3-column grid as the only layout idea; identical rounded cards repeated per section.
3. The Linear formula copied wholesale: near-black + one lavender/blue accent + hairline panels. Restraint is the lesson, not the palette.
4. Logo walls, testimonial avatar walls, or stat counters without real, attributable proof behind them (brief bans invented social proof; Basement/Raycast/Ghost only work because theirs is real).
5. "Trusted by" strips, marquee tickers, and accordion customer stories as enterprise wallpaper.
6. Scroll-jacking: heavy `pin: true` sections, especially on mobile (pin-spacer layout bugs are well documented); full-WebGL single-viewport sites that destroy SEO, keyboard access, and clarity (Active Theory / Resn are the cautionary extreme).
7. Text-shuffle hover effects and expo-ease-everything — widely imitated since Locomotive popularized them.
8. Looping abstract 3D videos per section that show nothing about the real product (the Resend-era cliché).
9. Preloaders that don't mask real loading; custom cursors that fight usability; emoji as icons.
10. Agency-speak copy ("we craft digital experiences," "unlock," "seamless," "cutting-edge") — the brief's banned list; every reference site that works avoids it by being specific.
11. Dark-only design with no light theme (Linear gets away with it; a studio site aiming at recruiters and AWS-style reviewers should not).
12. The alternating image/text SaaS band layout without real product screenshots to fill it (the Ghost pattern collapses into template without the artifact).

---

## F. Sources

- Live fetches (2026-10-16): linear.app, stripe.com, raycast.com, supabase.com, resend.com, basement.studio, darkroom.engineering, ui.shadcn.com, plausible.io, ghost.org, locomotive.ca/en (minimal text returned).
- activetheory.net: live fetch timed out; observations via webbyawards.com/crafted-with-code/active-theory and shouldseethis.com/website/active-theory.
- Locomotive + Resn structural specs: third-party design.md reconstructions (github.com/shuvam-banerji-seal/modern-design.md).
- Basement font/stack data: a1.gallery/website/basement-studio.
- Linear token-level analyses: voltagent/awesome-design-md and zimu5683/honor-hwt-theme-studio DESIGN.md files; yosoyjavieruiz linear-design skill.
- Scroll-driven animations support: MDN browser-compat-data via athevon/genjutsu and athevon/creative-excellence (verified Sept 2026); webstatus.dev references.
- GSAP vs CSS guidance: gsapvault.com/blog/how-to-animate-on-scroll; dev.to/xuanhai0913 (pin pitfalls); clcreative.co (IO vs GSAP); trayy animation-stack-comparison.
- View Transitions: web.dev Baseline notes; github.com/claudialnathan/skills view-transitions.md; sevastijan/code-with-seb-blog VT guide; dev.to/linou518.
- GSAP 3.13 free licensing: css-tricks.com/gsap-is-now-completely-free-even-for-commercial-use; gsap.com/blog/3-13; artofstyleframe.com 2026 release notes.
- Lenis: github.com/darkroomengineering/lenis; lenis skill docs (1.1.18 → 1.3.26 verified Oct 2026).
- Astro: astro docs skill references; ClientRouter rename noted from Astro 5.0 changelog references.
- Variable fonts: web.dev font guidance; designyourway.net variable-font guide (fonttools/pyftsubset, glyphhanger).
- Reduced motion: W3C WCAG 2.2 (SC 2.3.3, 2.2.2, 2.3.1); MDN prefers-reduced-motion; web.dev/articles/prefers-reduced-motion.
- SEO/OG: ogp.me; schema.org; Google Search Central structured-data docs; seite-sh 12-point static SEO checklist; craigvandotcom seo-metadata skill.
