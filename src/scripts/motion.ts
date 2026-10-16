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
  // Defer the heavy chunk until the browser is idle so it never competes
  // with the critical path (HTML, CSS, fonts) for bandwidth. LCP does not
  // depend on it: hero content has no [data-reveal] staging.
  const load = () =>
    import("./motion-core.ts")
      .then((m) => m.initMotion(mode))
      .catch(() => {
        document.documentElement.classList.remove("motion");
      });
  if ("requestIdleCallback" in window) {
    (window as any).requestIdleCallback(load, { timeout: 2500 });
  } else {
    setTimeout(load, 0);
  }
}
