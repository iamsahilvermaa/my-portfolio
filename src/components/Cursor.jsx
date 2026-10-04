import { useEffect, useRef } from 'react';

// 1) Purple custom cursor (dot + ring, desktop only).
// 2) When the cursor is over the hero name, the mascot fades ONLY in a circle
//    around the cursor so the name shows through. Edit REVEAL_RADIUS to change its size.
const REVEAL_RADIUS = 130;

export default function Cursor() {
  const dot = useRef(null), ring = useRef(null);
  useEffect(() => {
    if (!window.matchMedia('(hover:hover) and (pointer:fine)').matches) return;
    let mx = -200, my = -200, rx = mx, ry = my, R = 0, hov = false, shown = false, raf;
    const move = (e) => {
      mx = e.clientX; my = e.clientY; hov = !!e.target.closest('a,button,[data-hover]');
      if (!shown) { shown = true; rx = mx; ry = my; dot.current.style.opacity = ring.current.style.opacity = 1; }
    };
    const loop = () => {
      rx += (mx - rx) * 0.18; ry += (my - ry) * 0.18;
      const h = document.querySelector('.big'), img = document.getElementById('orb');
      let target = 0;
      if (h) { const b = h.getBoundingClientRect(); if (mx > b.left && mx < b.right && my > b.top && my < b.bottom) target = REVEAL_RADIUS; }
      R += (target - R) * 0.12;
      if (img) {
        if (R > 1) {
          const r = img.getBoundingClientRect();
          const m = `radial-gradient(circle at ${mx - r.left}px ${my - r.top}px, transparent 0, transparent ${R * 0.5}px, #000 ${R}px)`;
          img.style.webkitMaskImage = m; img.style.maskImage = m;
        } else { img.style.webkitMaskImage = 'none'; img.style.maskImage = 'none'; }
      }
      const size = Math.max(hov ? 64 : 34, R * 1.7);
      dot.current.style.transform = `translate(${mx}px, ${my}px)`;
      ring.current.style.width = ring.current.style.height = size + 'px';
      ring.current.style.left = rx + 'px'; ring.current.style.top = ry + 'px';
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener('mousemove', move);
    loop();
    return () => { window.removeEventListener('mousemove', move); cancelAnimationFrame(raf); };
  }, []);
  return (<><div id="cd" ref={dot} /><div id="cr" ref={ring} /></>);
}
