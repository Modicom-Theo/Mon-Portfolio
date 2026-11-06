export function initReveal(): void {
  const items = document.querySelectorAll<HTMLElement>("[data-reveal]");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!items.length || reducedMotion || !("IntersectionObserver" in window)) return;

  document.documentElement.classList.add("js-reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    },
    { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
  );

  items.forEach((el) => observer.observe(el));
}
