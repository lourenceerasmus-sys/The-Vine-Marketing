// Homepage motion. Everything is visible and complete without it: this only
// adds a slow settle on the hero artwork and a gentle rise as sections arrive.
// Nothing runs when the visitor prefers reduced motion.

export async function initHome() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const { gsap } = await import('gsap');
  const { ScrollTrigger } = await import('gsap/ScrollTrigger');
  gsap.registerPlugin(ScrollTrigger);

  const img = document.querySelector<HTMLElement>('.stage-img');
  if (img) {
    gsap.fromTo(img, { scale: 1.07 }, { scale: 1, duration: 2.4, ease: 'power2.out' });
    if (window.matchMedia('(min-width: 1000px)').matches) {
      gsap.to(img, {
        yPercent: 4,
        ease: 'none',
        scrollTrigger: { trigger: '.stage', start: 'top top', end: 'bottom top', scrub: 0.6 },
      });
    }
  }

  gsap.from('.stage-copy > *', { y: 18, opacity: 0, duration: 0.9, ease: 'power3.out', stagger: 0.09, delay: 0.15 });
  gsap.from('.stop', { y: 10, opacity: 0, duration: 0.8, ease: 'power2.out', stagger: 0.18, delay: 0.7 });

  gsap.utils.toArray<HTMLElement>('.rung').forEach((el, i) => {
    gsap.from(el, {
      y: 36,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      delay: i * 0.08,
      scrollTrigger: { trigger: '.ladder', start: 'top 82%', once: true },
    });
  });

  gsap.utils.toArray<HTMLElement>('.path-step, .leak, .system-list li').forEach((el) => {
    gsap.from(el, {
      y: 22,
      opacity: 0,
      duration: 0.7,
      ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 90%', once: true },
    });
  });
}
