import { useEffect, useRef } from 'react';
import { marqueeItems } from '../data/content.js';

const colors = ['#18011F', '#1b1b22', '#2a0a3a', '#1f1208'];
const row1 = marqueeItems.slice(0, 11);
const row2 = marqueeItems.slice(11);
const tiles = (items) =>
  [0, 1, 2].flatMap((k) =>
    items.map((n, i) => <div key={`${k}-${n}`} className="tile g" style={{ background: colors[i % 4] }}>{n}</div>)
  );

export default function Marquee() {
  const sec = useRef(null), r1 = useRef(null), r2 = useRef(null);
  useEffect(() => {
    const update = () => {
      const off = (window.scrollY - sec.current.offsetTop + window.innerHeight) * 0.3;
      r1.current.style.transform = `translateX(${off - 200}px)`;
      r2.current.style.transform = `translateX(${-(off - 200)}px)`;
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);
  return (
    <section id="mq" ref={sec}>
      <div className="row" ref={r1}>{tiles(row1)}</div>
      <div className="row" ref={r2}>{tiles(row2)}</div>
    </section>
  );
}
