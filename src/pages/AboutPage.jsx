import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import FadeIn from '../components/FadeIn.jsx';
import { aboutPage as a } from '../data/content.js';

// The separate About PAGE. Text comes from `aboutPage` in data/content.js.
export default function AboutPage() {
  return (
    <div className="page page-about">
      <Navbar sub />
      <section className="abt">
        <FadeIn as="h2" className="g">{a.heading}</FadeIn>
        {a.paragraphs.map((t, i) => <FadeIn as="p" key={i}>{t}</FadeIn>)}
      </section>
      <Footer />
    </div>
  );
}
