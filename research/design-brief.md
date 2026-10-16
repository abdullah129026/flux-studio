# Flux Studio — Design Brief (Phase 0 synthesis)

Date: 2026-10-16. Source: research/notes.md (13 reference sites, library/API verification).

## Concept statement

**"Everything here is a current moving toward something shipped."** The name Flux means change and the flow of energy; the site expresses it with restraint, not literal waves. Thin stream-lines thread through the layout the way commit histories and data flows do: they converge, branch, and terminate at real products. Nothing decorates what it can't explain. The voice is dry, specific, and engineer-honest; credibility comes from a public shipping log, not adjectives. A reviewer should feel they are reading the output of a working studio, not a template.

## 3 things borrowed in spirit (not copied)

1. **Darkroom's Activity Log → a studio shipping log.** A dated, honest journal of launches, releases, and experiments. This is the credibility engine: it proves momentum with verifiable dates instead of invented metrics, and it fits a studio whose whole portfolio is shipped work.
2. **Linear's restraint + documentation framing.** One accent color used sparingly, hairline structure, and product visuals presented like documentation figures (numbered, captioned, specific). Borrow the discipline, not the dark-lavender look.
3. **Plausible's specificity standard.** Every claim on the site must be concrete, verifiable, and signed. No adjectives where a number or a link would do. This becomes the copy-review rule for Phase 5.

## 3 things deliberately avoided

1. **The Linear clone look** (near-black + single blue/lavender accent, dark-only). The most copied formula in dev marketing; we ship dual themes with our own accent and typographic identity.
2. **Full-immersion WebGL single-viewport sites** (Active Theory / Resn extreme). They trade away SEO, keyboard access, and the 10-second comprehension rule. Our signature hero interaction must never cost clarity.
3. **Faked social proof and SaaS-band wallpaper.** No logo walls, no testimonial carousels, no invented stats, no alternating image/text bands without real product visuals to fill them.

## Brand direction (to be finalized in DESIGN.md)

- **Wordmark:** clean typographic wordmark with one subtle custom detail on a single letterform (e.g. the "x" drawn as two converging stream-lines). SVG, no clip-art.
- **Color:** restrained system — one neutral scale, one primary accent, one optional secondary. Dual themes (dark + light), WCAG AA minimum. Accent candidates to test: a signal orange/amber (energy, distinct from the blue-accent crowd) or a deep teal. Decision at Phase 1.
- **Typography:** distinctive display face (not Inter/Poppins for display; candidates from Fontshare/Google Fonts variable families, e.g. a grotesque with character or an editorial serif for contrast), highly readable text face, monospace for technical details. Variable fonts, fluid clamp() scale, max 3 families, self-hosted WOFF2.
- **Motion language:** one easing family, 3–4 named durations; CSS scroll-driven reveals as progressive enhancement, GSAP ScrollTrigger only for load-bearing choreography (pinned storytelling, scrubbed sequences); pinning disabled below ~768px; full prefers-reduced-motion pass.

## Sitemap (from brief, confirmed)

`/`, `/products`, `/products/[slug]`, `/about`, `/contact`, `/404`, plus `/changelog` (the shipping log — recommended, not optional in practice). Optional later: `/process`, `/legal`.

## Hero concepts (for owner approval)

**A. "The Current."** A canvas flow-field of thin stream-lines drifts across the hero and bends subtly around the cursor, converging toward the headline. Performant (capped DPR, pauses off-screen), with a static SVG stream-line composition as fallback. Most literal to "flux", most ambient.

**B. "The Shipping Log."** Typographic hero: oversized wordmark, and beneath it a live, dated feed of real shipped products streaming in like a changelog ("2026-10-14 — Spec2Run v1.0", "2026-10-07 — PRISM live"). Zero decoration, maximum honesty; a recruiter understands the studio in 10 seconds. Least risky, most distinctive in voice.

**C. "The Diagram."** A live-coded system diagram of how the studio works (idea → build → ship → product) drawn as an animated SVG that draws itself in on load, with nodes linking to the actual products. Developer-native, ownable, doubles as the "how we work" story.

Recommendation: **B as the hero** (it is the credibility argument and nothing else on the internet looks like it), with **A as a restrained ambient layer** behind later sections and **C as the "how we work" section** visual. But they also work standalone — owner picks.

## Open questions for the owner

1. Studio name for the wordmark and AWS resubmission: "Flux Studio" or "FluxyAI"? (One consistent name everywhere.)
2. Product list: PRISM, Spec2Run, API Contract Firewall, GhostCode confirmed? Trace/PatchPilot listed as upcoming or omitted until real?
3. Contact email + profiles to link; any real numbers/milestones; any brand color/type leanings.
