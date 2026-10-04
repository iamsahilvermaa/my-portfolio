import { useEffect, useRef } from 'react';

// Element drifts toward the cursor when it is within `padding` px.
export default function Magnet({ children, padding = 150, strength = 3 }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    const move = (e) => {
      const r = el.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height / 2);
      const near = Math.abs(dx) < r.width / 2 + padding && Math.abs(dy) < r.height / 2 + padding;
      el.style.transition = near ? 'transform .3s ease-out' : 'transform .6s ease-in-out';
      el.style.transform = near ? `translate3d(${dx / strength}px, ${dy / strength}px, 0)` : 'translate3d(0,0,0)';
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [padding, strength]);
  return <div ref={ref} style={{ willChange: 'transform' }}>{children}</div>;
}
