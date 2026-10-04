import Hero from '../components/Hero.jsx';
import Marquee from '../components/Marquee.jsx';
import About from '../components/About.jsx';
import Skills from '../components/Skills.jsx';
import Projects from '../components/Projects.jsx';
import Footer from '../components/Footer.jsx';
import { homeProjects } from '../data/content.js';

// The Home page: hero, tiles, About, Skills, Projects, footer (same as the original single page).
export default function Home() {
  return (
    <div className="page">
      <Hero /><Marquee /><About /><Skills />
      <Projects heading={homeProjects.heading} items={homeProjects.items} />
      <Footer />
    </div>
  );
}
