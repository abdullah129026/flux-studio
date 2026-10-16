/* Motion bootstrap: tiny, always bundled.
   Gates on prefers-reduced-motion, then dynamically imports the heavy
   animation code (GSAP + ScrollTrigger + SplitText + Lenis) only when the
   page opted in via data-motion on <html>. If the import fails, the
   .motion class is removed so every [data-reveal] / [data-split] target
   stays visible in its final state. Content never depends on animation. */

const mode = document.documentElement.dataset.motion || "basic";
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!reduceMotion && mode !== "none") {
  document.documentElement.classList.add("motion");
  import("./motion-core.ts")
    .then((m) => m.initMotion(mode))
    .catch(() => {
      document.documentElement.classList.remove("motion");
    });
}
