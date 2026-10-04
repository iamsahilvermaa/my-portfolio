import { skills } from '../data/content.js';
import FadeIn from './FadeIn.jsx';

export default function Skills() {
  return (
    <section id="skills">
      <h2>{skills.heading}</h2>
      <div className="list">
        {skills.items.map((s, i) => (
          <FadeIn key={s.title} className="item" delay={i * 0.1}>
            <span className="num">{String(i + 1).padStart(2, '0')}</span>
            <div><h3>{s.title}</h3><p>{s.text}</p></div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
