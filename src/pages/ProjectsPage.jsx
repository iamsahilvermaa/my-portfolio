import Navbar from '../components/Navbar.jsx';
import Projects from '../components/Projects.jsx';
import Footer from '../components/Footer.jsx';
import { projectsPage, projects } from '../data/content.js';

// The full Projects PAGE: lists EVERY project in `projects` (data/content.js).
export default function ProjectsPage() {
  return (
    <div className="page page-projects">
      <Navbar sub />
      <Projects heading={projectsPage.heading} intro={projectsPage.intro} items={projects} detail />
      <Footer />
    </div>
  );
}
