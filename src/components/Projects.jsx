import { useEffect, useRef } from 'react';
import { projects } from '../data/content.js';

// Stacking settings (edit these):
const STACK_TOP = 96;      // px from top where the first card sticks
const STACK_OFFSET = 64;   // extra px per card, so earlier cards peek out above
const SHRINK = 0.03;       // how much each earlier card shrinks

const pad = (i) => String(i + 1).padStart(2, '0');
const Panel = ({ p, style }) => <div className="pic" style={style}><b>{p.title}</b>{p.text}</div>;

export default function Projects() {
  const cards = useRef([]);
  const total = projects.items.length;

  // Each card shrinks slightly as the NEXT card slides up over it.
  useEffect(() => {
    const update = () => {
      const vh = window.innerHeight;
      cards.current.forEach((c, i) => {
        const next = cards.current[i + 1];
        let prog = 0;
        if (next) {
          const nextTop = STACK_TOP + (i + 1) * STACK_OFFSET;
          prog = Math.min(1, Math.max(0, (vh - next.getBoundingClientRect().top) / (vh - nextTop)));
        }
        const target = 1 - (total - 1 - i) * SHRINK;
        c.style.transform = `scale(${1 - (1 - target) * prog})`;
      });
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => { window.removeEventListener('scroll', update); window.removeEventListener('resize', update); };
  }, [total]);

  return (
    <section id="projects">
      <h2 className="g">{projects.heading}</h2>
      <div className="stack">
        {projects.items.map((p, i) => (
          <article className="card" key={p.name} ref={(el) => (cards.current[i] = el)} style={{ top: `${STACK_TOP + i * STACK_OFFSET}px` }}>
            <div className="top">
              <span className="num g">{pad(i)}</span>
              <div><div className="cat">{p.category}</div><h3>{p.name}</h3></div>
              {p.link && <a className="ghost" href={p.link} target="_blank" rel="noopener noreferrer">{p.linkLabel || 'Live Project'}</a>}
            </div>
            {p.images ? (
              <div className="cols">
                <div>
                  <img className="im" src={p.images[0].src} alt={p.images[0].alt} style={{ aspectRatio: p.images[0].ratio }} />
                  <img className="im" src={p.images[1].src} alt={p.images[1].alt} style={{ aspectRatio: p.images[1].ratio, flex: 1 }} />
                </div>
                <div><img className="im" src={p.images[2].src} alt={p.images[2].alt} style={{ height: '100%', objectPosition: 'left top' }} /></div>
              </div>
            ) : (
              <div className="cols">
                <div><Panel p={p.panels[0]} /><Panel p={p.panels[1]} /></div>
                <div><Panel p={p.panels[2]} style={{ height: '100%' }} /></div>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
