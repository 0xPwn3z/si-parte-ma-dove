import Lenis from "lenis";
import { animate, hover, inView, stagger } from "motion";

const ease = [0.16, 1, 0.3, 1] as const;
const reduceMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// motion's DOM typings do not include every transform key used by the vanilla API.
const animateMotion = animate as unknown as (
  target: unknown,
  keyframes: Record<string, unknown>,
  options?: Record<string, unknown>,
) => { finished: Promise<unknown>; stop: () => void };

let lenis: Lenis | null = null;

const initLenis = () => {
  if (reduceMotion() || lenis) return;

  lenis = new Lenis({
    duration: 1.05,
    easing: (t) => 1 - Math.pow(1 - t, 4),
    smoothWheel: true,
    touchMultiplier: 1.08,
  });

  const raf = (time: number) => {
    lenis?.raf(time);
    requestAnimationFrame(raf);
  };

  requestAnimationFrame(raf);
};

const initReveals = () => {
  document.querySelectorAll<HTMLElement>(".reveal, .image-mask").forEach((element) => {
    if (element.dataset.revealReady === "true") return;
    element.dataset.revealReady = "true";

    if (reduceMotion()) {
      element.classList.add("is-visible");
      return;
    }

    inView(
      element,
      () => {
        element.classList.add("is-visible");
      },
      { amount: 0.18, margin: "0px 0px -8% 0px" },
    );
  });
};

const initIntroMotion = () => {
  if (reduceMotion()) return;

  const intro = document.querySelectorAll<HTMLElement>("[data-intro-piece]");
  if (!intro.length || intro[0]?.dataset.introAnimated === "true") return;
  intro.forEach((element) => {
    element.dataset.introAnimated = "true";
  });

  animateMotion(
    intro,
    { opacity: [0, 1], y: [16, 0], filter: ["blur(14px)", "blur(0px)"] },
    { duration: 0.82, delay: stagger(0.16), easing: ease },
  );
};

const initTouchFeedback = () => {
  document.querySelectorAll<HTMLElement>("[data-lift]").forEach((element) => {
    if (element.dataset.liftReady === "true") return;
    element.dataset.liftReady = "true";

    hover(element, () => {
      if (reduceMotion()) return;
      const controls = animateMotion(element, { y: -4 }, { duration: 0.45, easing: ease });
      return () => {
        controls.stop();
        animateMotion(element, { y: 0 }, { duration: 0.45, easing: ease });
      };
    });
  });
};

const makeParticle = (host: HTMLElement, x: number, y: number, index: number) => {
  const particle = document.createElement("span");
  particle.className = "celebration-particle";
  particle.setAttribute("aria-hidden", "true");
  host.appendChild(particle);

  const angle = (Math.PI * 2 * index) / 18;
  const distance = 38 + (index % 5) * 9;

  particle.style.left = `${x}px`;
  particle.style.top = `${y}px`;

  animateMotion(
    particle,
    {
      opacity: [0, 1, 0],
      x: [0, Math.cos(angle) * distance],
      y: [0, Math.sin(angle) * distance - 18],
      scale: [0.45, 1, 0.2],
    },
    { duration: 0.82, easing: ease },
  ).finished.then(() => particle.remove());
};

const initChoice = () => {
  const choiceArea = document.querySelector<HTMLElement>("[data-choice-area]");
  if (!choiceArea || choiceArea.dataset.choiceReady === "true") return;

  choiceArea.dataset.choiceReady = "true";
  const buttons = Array.from(choiceArea.querySelectorAll<HTMLButtonElement>("[data-choice]"));
  const resultTitle = choiceArea.querySelector<HTMLElement>("[data-choice-title]");
  const resultText = choiceArea.querySelector<HTMLElement>("[data-choice-text]");
  const liveRegion = choiceArea.querySelector<HTMLElement>("[data-choice-live]");
  const particleHost = choiceArea.querySelector<HTMLElement>("[data-particles]");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedLine = button.dataset.selectedLine ?? "Ottima scelta.";
      const destination = button.dataset.choice ?? "";

      buttons.forEach((item) => {
        item.classList.toggle("is-selected", item === button);
        item.setAttribute("aria-pressed", item === button ? "true" : "false");
      });

      choiceArea.classList.add("has-choice");

      if (resultTitle) resultTitle.textContent = "Allora è deciso. ❤️";
      if (resultText) resultText.textContent = "Mi manca già. Adesso preparo tutto io.";
      if (liveRegion) liveRegion.textContent = `Hai scelto ${destination}. ${selectedLine}`;

      if (!reduceMotion() && particleHost) {
        const rect = button.getBoundingClientRect();
        const hostRect = particleHost.getBoundingClientRect();
        const x = rect.left + rect.width / 2 - hostRect.left;
        const y = rect.top + rect.height / 2 - hostRect.top;

        for (let i = 0; i < 18; i += 1) {
          makeParticle(particleHost, x, y, i);
        }

        animateMotion(button, { scale: [1, 1.035, 1] }, { duration: 0.56, easing: ease });
        if (resultTitle && resultText) {
          animateMotion(
            [resultTitle, resultText],
            { opacity: [0, 1], y: [12, 0], filter: ["blur(10px)", "blur(0px)"] },
            { duration: 0.62, delay: stagger(0.08), easing: ease },
          );
        }
      }
    });
  });
};

const initParallax = () => {
  if (reduceMotion()) return;

  document.querySelectorAll<HTMLElement>("[data-parallax]").forEach((element) => {
    if (element.dataset.parallaxReady === "true") return;
    element.dataset.parallaxReady = "true";

    const update = () => {
      const rect = element.getBoundingClientRect();
      const progress = (rect.top + rect.height / 2 - window.innerHeight / 2) / window.innerHeight;
      element.style.setProperty("--parallax-y", `${Math.max(-1, Math.min(1, progress)) * -18}px`);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
  });
};

const initScrollProgress = () => {
  const bar = document.querySelector<HTMLElement>(".scroll-progress");
  if (!bar || bar.dataset.scrollReady === "true") return;
  bar.dataset.scrollReady = "true";

  const update = () => {
    const scrollTop = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const progress = max > 0 ? Math.min(1, Math.max(0, scrollTop / max)) : 0;
    bar.style.setProperty("--scroll-progress", progress.toString());
  };

  update();
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
};

const initExperience = () => {
  initLenis();
  initReveals();
  initIntroMotion();
  initTouchFeedback();
  initChoice();
  initParallax();
  initScrollProgress();
};

document.addEventListener("astro:page-load", initExperience);
document.addEventListener("DOMContentLoaded", initExperience, { once: true });
