import { useEffect, useState } from 'react';
import Home from './pages/Home.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';
import ProjectDetail from './pages/ProjectDetail.jsx';
import Cursor from './components/Cursor.jsx';

const pages = { home: Home, about: AboutPage, projects: ProjectsPage };
const parse = () => window.location.hash.replace(/^#\/?/, '');

export default function App() {
  const [view, setView] = useState({ page: 'home' });

  useEffect(() => {
    const route = () => {
      const h = parse();
      if (h === 'contact') {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        return;
      }
      const [a, b] = h.split('/');
      if (a === 'project') setView({ page: 'project', slug: b });
      else setView({ page: a === 'about' || a === 'projects' ? a : 'home' });
      if (h === 'skills') setTimeout(() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }), 100);
      else window.scrollTo(0, 0);
    };
    route();
    window.addEventListener('hashchange', route);
    return () => window.removeEventListener('hashchange', route);
  }, []);

  const Page = view.page === 'project' ? ProjectDetail : pages[view.page];
  return (
    <main>
      <Cursor />
      <Page key={`${view.page}-${view.slug || ''}`} slug={view.slug} />
    </main>
  );
}
