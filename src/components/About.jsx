import { about, site } from '../data/content.js';
import FadeIn from './FadeIn.jsx';
import AnimatedText from './AnimatedText.jsx';

const orbs = [
  { size: 170, pos: { top: '4%', left: '4%' }, bg: 'radial-gradient(circle at 35% 30%,#BBCCD7,#646973)' },
  { size: 130, pos: { bottom: '8%', left: '10%' }, bg: 'radial-gradient(circle at 35% 30%,#B600A8,#18011F)' },
  { size: 170, pos: { top: '4%', right: '4%' }, bg: 'radial-gradient(circle at 35% 30%,#BE4C00,#18011F)' },
  { size: 150, pos: { bottom: '8%', right: '10%' }, bg: 'radial-gradient(circle at 35% 30%,#7621B0,#0C0C0C)' },
];

export default function About() {
  return (
    <section id="about">
      {orbs.map((o, i) => (
        <div key={i} className="dec" style={{ width: o.size, height: o.size, background: o.bg, ...o.pos }} />
      ))}
      <FadeIn as="h2" className="g">{about.heading}</FadeIn>
      <AnimatedText className="t" text={about.text} />
      <FadeIn as="a" className="btn" href={`mailto:${site.email}`}>{site.contactLabel}</FadeIn>
    </section>
  );
}
