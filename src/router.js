// Tiny hash router (no library). Pages: "#/" (home), "#/about", "#/projects".
// "#/skills" opens home and scrolls to Skills. "#/contact" scrolls to the footer of the current page.
export function navigate(hash) {
  if (window.location.hash === hash) window.dispatchEvent(new Event('hashchange'));
  else window.location.hash = hash;
}
