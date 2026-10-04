import { site } from '../data/content.js';

export default function Footer() {
  return (
    <footer id="contact">
      <h2 className="g">Let’s talk</h2>
      <a className="btn" href={`mailto:${site.email}`}>{site.email}</a>
      <div className="links">
        <a href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href={site.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        <span>{site.phone}</span>
      </div>
    </footer>
  );
}
