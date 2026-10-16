/* Phase 3 motion core. Imported dynamically by motion.ts only when motion
   is welcome and the page opted in via data-motion.
   GSAP 3.15 is used under GreenSock's free "No Charge" license (not MIT).
   Everything here is progressive enhancement: markup renders complete
   without it, and every target falls back to its final state. */

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

gsap.registerPlugin(ScrollTrigger, SplitText);

/* expo.out is the GSAP spelling of the --ease-out token
   (cubic-bezier(0.16, 1, 0.3, 1)). Durations mirror the token scale. */
const EASE = "expo.out";
const DUR_SLOW = 0.6;
const DUR_BASE = 0.3;

const splits: SplitText[] = [];

export function initMotion(mode: string): void {
  const finePointer = window.matchMedia("(pointer: fine)").matches;

  /* ---- Smooth scroll: one raf loop, driven by GSAP's ticker ---- */
  const lenis = new Lenis({
    autoRaf: false,
    anchors: { offset: -84 },
    lerp: 0.1,
  });
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);
  document.documentElement.classList.add("lenis-on");

  /* Pause smooth scroll while the mobile menu is open. The menu dispatches
     flux:menu from the inline layout script. */
  window.addEventListener("flux:menu", (e) => {
    const open = (e as CustomEvent).detail?.open === true;
    if (open) lenis.stop();
    else lenis.start();
  });

  initReveals();
  initSplits();

  if (mode === "home") {
    initProcess();
    initCounters();
    initParallax();
  }
  if (mode === "detail") {
    initDiagrams();
  }
  if (finePointer) {
    initMagnetic();
  }

  /* Re-measure after webfonts land so triggers sit in the right places. */
  if (document.fonts?.ready) {
    document.fonts.ready.then(() => ScrollTrigger.refresh()).catch(() => {});
  }

  /* If the user flips the OS setting to reduced motion mid-session,
     tear everything down and restore the static final state. */
  window
    .matchMedia("(prefers-reduced-motion: reduce)")
    .addEventListener("change", (e) => {
      if (!e.matches) return;
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
      gsap.killTweensOf("*");
      splits.forEach((s) => s.revert());
      splits.length = 0;
      gsap.set("[data-reveal]", { clearProps: "all" });
      gsap.set("[data-split]", { clearProps: "all" });
      document.querySelectorAll<SVGLineElement>("[data-diagram] .pd-edge line").forEach((line) => {
        line.style.strokeDasharray = "";
        line.style.strokeDashoffset = "";
      });
      gsap.set("[data-diagram] .pd-edge path, [data-diagram] .pd-node-box, [data-diagram] .pd-node-num, [data-diagram] .pd-node-label", {
        clearProps: "all",
      });
      document.querySelectorAll(".process-step.is-active").forEach((s) => s.classList.remove("is-active"));
      const progress = document.querySelector<HTMLElement>(".process-progress");
      if (progress) progress.style.height = "";
      document.documentElement.classList.remove("motion", "lenis-on");
    });
}

/* ---- Scroll-triggered reveals: fade + rise, small consistent stagger ---- */
function initReveals(): void {
  ScrollTrigger.batch("[data-reveal]", {
    start: "top 88%",
    once: true,
    onEnter: (batch) =>
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        duration: DUR_SLOW,
        ease: EASE,
        stagger: 0.08,
        overwrite: true,
      }),
  });
}

/* ---- Split headings: line-mask reveals. Parent stays opacity 0 (CSS)
   until SplitText stages it, so there is no flash of unsplit text. ---- */
function initSplits(): void {
  document.querySelectorAll<HTMLElement>("[data-split]").forEach((el) => {
    const split = SplitText.create(el, {
      type: "lines",
      mask: "lines",
      linesClass: "split-line",
      autoSplit: true,
      aria: "auto",
      onSplit(self) {
        gsap.set(el, { opacity: 1 });
        return gsap.from(self.lines, {
          yPercent: 110,
          duration: DUR_SLOW,
          ease: EASE,
          stagger: 0.09,
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        });
      },
    });
    splits.push(split);
  });
}

/* ---- Process: pinned, scroll-scrubbed storytelling on desktop;
   plain scrubbed progress line on mobile (no pinning under 769px). ---- */
function initProcess(): void {
  const section = document.querySelector<HTMLElement>("[data-process]");
  const list = section?.querySelector<HTMLElement>(".process-list");
  const progress = section?.querySelector<HTMLElement>(".process-progress");
  const steps = section ? Array.from(section.querySelectorAll<HTMLElement>(".process-step")) : [];
  if (!section || !list || !progress || steps.length === 0) return;

  const paint = (p: number) => {
    progress.style.height = `${Math.round(p * 100)}%`;
    const active = Math.min(steps.length - 1, Math.floor(p * steps.length));
    steps.forEach((s, i) => s.classList.toggle("is-active", i <= active));
  };
  const reset = () => {
    progress.style.height = "";
    steps.forEach((s) => s.classList.remove("is-active"));
  };

  const mm = gsap.matchMedia();
  mm.add("(min-width: 769px)", () => {
    ScrollTrigger.create({
      trigger: list,
      start: "top 60%",
      end: "+=120%",
      pin: true,
      scrub: 0.6,
      anticipatePin: 1,
      onUpdate: (self) => paint(self.progress),
    });
    return reset;
  });
  mm.add("(max-width: 768px)", () => {
    const st = ScrollTrigger.create({
      trigger: list,
      start: "top 75%",
      end: "bottom 45%",
      scrub: 0.6,
      onUpdate: (self) => paint(self.progress),
    });
    return () => {
      st.kill();
      reset();
    };
  });
}

/* ---- Light parallax on product visuals. Decorative only. ---- */
function initParallax(): void {
  gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
    gsap.to(el, {
      yPercent: 14,
      ease: "none",
      scrollTrigger: {
        trigger: el.closest("article, section") || el,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  });
}

/* ---- Animated counters. The final values are already in the HTML;
   JS only tweens toward them. ---- */
function initCounters(): void {
  document.querySelectorAll<HTMLElement>("[data-counter]").forEach((el) => {
    const target = parseInt(el.textContent || "0", 10);
    if (!Number.isFinite(target)) return;
    const state = { v: 0 };
    ScrollTrigger.create({
      trigger: el,
      start: "top 88%",
      once: true,
      onEnter: () =>
        gsap.to(state, {
          v: target,
          duration: 1,
          ease: EASE,
          onUpdate: () => {
            el.textContent = String(Math.round(state.v));
          },
        }),
    });
  });
}

/* ---- Magnetic buttons: subtle pull toward the cursor, fine pointers only. ---- */
function initMagnetic(): void {
  document.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((el) => {
    const xTo = gsap.quickTo(el, "x", { duration: DUR_BASE, ease: EASE });
    const yTo = gsap.quickTo(el, "y", { duration: DUR_BASE, ease: EASE });
    el.addEventListener("mousemove", (e) => {
      const r = el.getBoundingClientRect();
      xTo((e.clientX - (r.left + r.width / 2)) * 0.25);
      yTo((e.clientY - (r.top + r.height / 2)) * 0.35);
    });
    el.addEventListener("mouseleave", () => {
      xTo(0);
      yTo(0);
    });
  });
}

/* ---- Architecture diagrams: edges draw in, nodes rise, arrowheads fade.
   Without JS the full diagram renders statically. ---- */
function initDiagrams(): void {
  document.querySelectorAll<SVGSVGElement>("[data-diagram]").forEach((svg) => {
    const lines = Array.from(svg.querySelectorAll<SVGLineElement>(".pd-edge line"));
    const heads = svg.querySelectorAll(".pd-edge path");
    const nodes = svg.querySelectorAll(".pd-node-box, .pd-node-num, .pd-node-label");

    lines.forEach((line) => {
      try {
        const len = line.getTotalLength();
        line.style.strokeDasharray = `${len}`;
        line.style.strokeDashoffset = `${len}`;
      } catch {
        /* If measuring fails, the line simply renders. */
      }
    });
    gsap.set(heads, { opacity: 0 });
    gsap.set(nodes, { opacity: 0, y: 12 });

    const tl = gsap.timeline({
      scrollTrigger: { trigger: svg, start: "top 80%", once: true },
    });
    tl.to(lines, {
      strokeDashoffset: 0,
      duration: 0.7,
      ease: EASE,
      stagger: 0.25,
    })
      .to(heads, { opacity: 1, duration: DUR_BASE }, "-=0.35")
      .to(nodes, { opacity: 1, y: 0, duration: 0.5, ease: EASE, stagger: 0.12 }, 0.1);
  });
}
