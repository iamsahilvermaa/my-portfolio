import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import FadeIn from '../components/FadeIn.jsx';
import { projects } from '../data/content.js';
import { navigate } from '../router.js';

const go = (h) => (e) => { e.preventDefault(); navigate(h); };

// One page per project at #/project/<slug>. Content comes from the matching entry in `projects`.
export default function ProjectDetail({ slug }) {
  const i = projects.findIndex((p) => p.slug === slug);
  const p = projects[i];

  if (!p) {
    return (
      <div className="page page-detail">
        <Navbar sub />
        <section className="pd">
          <h1 className="pd-title g">Project not found</h1>
          <a className="ghost" href="#/projects" onClick={go('#/projects')}>All projects</a>
        </section>
        <Footer />
      </div>
    );
  }
  const next = projects[(i + 1) % projects.length];

  return (
    <div className="page page-detail">
      <Navbar sub />
      <article className="pd">
        <FadeIn as="a" className="back" href="#/projects" onClick={go('#/projects')}>← All projects</FadeIn>
        <FadeIn className="cat">{p.category}{p.status ? ` · ${p.status}` : ''}</FadeIn>
        <FadeIn as="h1" className="pd-title g" delay={0.1}>{p.name}</FadeIn>
        <FadeIn as="p" className="lead" delay={0.2}>{p.summary}</FadeIn>
        {p.links && p.links.length > 0 && (
          <FadeIn className="btnrow left" delay={0.3}>
            {p.links.map((l) => <a key={l.label} className="btn" href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a>)}
          </FadeIn>
        )}

        <h3>About this project</h3>
        {p.description.map((t, k) => <FadeIn as="p" key={k}>{t}</FadeIn>)}

        {p.features && (<><h3>Key features</h3>
          <FadeIn as="ul" className="feat">{p.features.map((f) => <li key={f}>{f}</li>)}</FadeIn></>)}

        {p.tech && (<><h3>Tech stack</h3>
          <FadeIn className="chips">{p.tech.map((t) => <span className="chip" key={t}>{t}</span>)}</FadeIn></>)}

        {p.images && (<><h3>Gallery</h3>
          <div className="gallery">
            {p.images.map((im) => (
              <FadeIn as="figure" key={im.src}>
                <img src={im.src} alt={im.alt} />
                {im.caption && <figcaption>{im.caption}</figcaption>}
              </FadeIn>
            ))}
          </div></>)}

        <div className="nextp">
          <a className="ghost" href="#/projects" onClick={go('#/projects')}>All projects</a>
          {next && next.slug !== p.slug && (
            <a className="ghost" href={`#/project/${next.slug}`} onClick={go(`#/project/${next.slug}`)}>Next: {next.name} →</a>
          )}
        </div>
      </article>
      <Footer />
    </div>
  );
}
