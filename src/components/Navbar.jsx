import { nav } from '../data/content.js';
import { navigate } from '../router.js';
import FadeIn from './FadeIn.jsx';

// sub = true on About / Projects pages (adds a Home link, sits at the top of the page).
export default function Navbar({ sub = false }) {
  const items = sub ? [{ label: 'Home', href: '#/' }, ...nav] : nav;
  return (
    <FadeIn as="nav" className={sub ? 'subnav' : ''}>
      {items.map((n) => (
        <a key={n.label} href={n.href} onClick={(e) => { e.preventDefault(); navigate(n.href); }}>{n.label}</a>
      ))}
    </FadeIn>
  );
}
