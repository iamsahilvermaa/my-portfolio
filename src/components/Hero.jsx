import { site, nav } from '../data/content.js';
import FadeIn from './FadeIn.jsx';
import Magnet from './Magnet.jsx';

export default function Hero() {
  return (
    <section id="hero">
      <FadeIn as="nav">{nav.map((n) => <a key={n.label} href={n.href}>{n.label}</a>)}</FadeIn>
      <FadeIn as="h1" className="big g" delay={0.15}>{site.heroHeading}</FadeIn>
      <FadeIn id="orbw" delay={0.6}>
        <Magnet><img id="orb" src={site.mascot} alt="Sahil 3D mascot" /></Magnet>
      </FadeIn>
      <div className="bar">
        <FadeIn as="p" delay={0.35}>{site.tagline}</FadeIn>
        <FadeIn as="a" className="btn" delay={0.5} href={`mailto:${site.email}`}>{site.contactLabel}</FadeIn>
      </div>
    </section>
  );
}
