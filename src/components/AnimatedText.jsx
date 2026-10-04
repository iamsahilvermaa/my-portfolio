import { useEffect, useRef } from 'react';

// Each character fades from 20% to 100% opacity as you scroll past.
export default function AnimatedText({ text, className }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    const update = () => {
      const b = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.min(1, Math.max(0, (vh * 0.8 - b.top) / (b.height + vh * 0.6)));
      const n = el.children.length;
      for (let i = 0; i < n; i++) {
        const s = (i / n) * 0.8, e = ((i + 1) / n) * 0.8;
        el.children[i].style.opacity = 0.2 + 0.8 * Math.min(1, Math.max(0, (p - s) / (e - s)));
      }
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => { window.removeEventListener('scroll', update); window.removeEventListener('resize', update); };
  }, [text]);
  return (
    <p ref={ref} className={className}>
      {[...text].map((c, i) => <span key={i} style={{ opacity: 0.2 }}>{c}</span>)}
    </p>
  );
}
