interface ParallaxOptions {
  speed?: number; // default 0.3
}

const createParallax = (elementId: string, options: ParallaxOptions = {}): void => {
  const el = document.getElementById(elementId) as HTMLElement | null;
  const section = el?.closest('section') as HTMLElement | null;
  const { speed = 0.3 } = options;

  if (!el || !section) return;

  window.addEventListener('scroll', (): void => {
    const rect: DOMRect = section.getBoundingClientRect();
    const scrolled: number = -rect.top;
    const rate: number = scrolled * speed;

    el.style.transform = `translateY(${rate}px)`;
  });
};

// Usage — add as many as you want, each with their own speed
createParallax('parallax-img');
createParallax('parallax-img-2', { speed: 0.1 });
createParallax('parallax-img-3', { speed: 0.1 });
createParallax('parallax-text', { speed: 0.5 });