# Sahil Verma – Portfolio (Vite + React)

A dark, animated developer portfolio built with **Vite, React, JavaScript, HTML and CSS**.
No other libraries: animations use plain CSS and small React hooks.

## 1. Run it

You need [Node.js](https://nodejs.org) 18 or newer.

```bash
npm install        # once, installs dependencies
npm run dev        # starts the site at http://localhost:5173
npm run build      # makes the production site in the dist/ folder
npm run preview    # previews the built site locally
```

## 2. Project map

```
index.html                 page title, Google Font (Kanit)
public/images/             all pictures (mascot + project images)
src/data/content.js        ALL text, links and images  <-- edit this most
src/styles.css             ALL colours, sizes and layout
src/components/
  Hero.jsx                 top section: nav, big heading, mascot, button
  Marquee.jsx              two rows of scrolling tiles
  About.jsx                "About me" + scroll-reveal paragraph
  Skills.jsx               white numbered list
  Projects.jsx             stacking project cards
  Footer.jsx               contact section
  FadeIn.jsx / Magnet.jsx / AnimatedText.jsx   reusable effects
```

## 3. How to change things

### Text, links, contact details  →  `src/data/content.js`
| To change | Edit |
|---|---|
| Hero heading, tagline, email, phone, LinkedIn, GitHub, button label | `site` |
| Nav links (label + `#section-id`) | `nav` |
| Scrolling tile words | `marqueeItems` (first 11 = row 1, rest = row 2) |
| About heading and paragraph | `about` |
| Skills list (add/remove `{ title, text }`) | `skills.items` |
| Projects | `projects.items` |

### Mascot / hero picture
Replace `public/images/mascot.png` with your new image (keep the same name), or change `site.mascot` in `content.js`.
Use a **PNG with a transparent background**. To change its size, edit `#orbw` → `width` in `styles.css`.

### Add a project
Copy one block inside `projects.items` and edit it. Cards are numbered automatically and the stacking effect adapts to the count.

- **Image project:** put 3 pictures in `public/images/` and list them as `images` in this order:
  `[left-top (wide), left-bottom (wide), right (large)]`. Set `ratio` to width ÷ height of the first two images (e.g. 1600×540 → `2.96`).
- **Text project:** use `panels` (3 `{ title, text }` boxes) instead of `images`.
- `link` / `linkLabel` is the button in the top-right of the card (use `'Live Project'` for a deployed demo). Delete `link` to hide the button.

### Colours and fonts  →  `src/styles.css`
- Page background: `#0C0C0C` (search and replace to change everywhere).
- Heading gradient: the `.g` rule (`linear-gradient(180deg,#646973,#BBCCD7)`).
- Purple contact button: the `.btn` rule.
- Skills section colour: `#skills{background:#fff;...}`.
- Font: change the Google Fonts link in `index.html` and `font-family` in `html,body{...}`.

### Sizes and spacing
- Hero heading size: `.big{font-size:...}`
- Section heading size: `h2{font-size:clamp(...)}`
- Card stacking: at the top of `Projects.jsx` set `STACK_TOP` (where the first card pins), `STACK_OFFSET` (how much of each earlier card peeks out; bigger = more visible) and `SHRINK`. The scroll distance between cards is `.stack{gap:45vh}` in `styles.css`.

### Animations
- Fade-in delay: `delay={0.35}` props in the components (seconds).
- Marquee speed: the `0.3` multiplier in `Marquee.jsx` (larger = faster).
- Scroll text reveal: `AnimatedText.jsx`.
- Mascot magnet strength: `<Magnet padding={150} strength={3}>` in `Hero.jsx` (lower strength = stronger pull).

### Page title
Edit `<title>` in `index.html`.

## 4. Deploy
Run `npm run build`, then upload the `dist/` folder to Netlify, Vercel, GitHub Pages or any static host.
(Vercel/Netlify: connect the GitHub repo, build command `npm run build`, output directory `dist`.)

## 5. Troubleshooting
- **Image not showing:** check the file is in `public/images/` and the path starts with `/images/`.
- **Changes not showing:** make sure `npm run dev` is running; hard refresh with Ctrl+Shift+R.
- **Project cards not stacking:** all cards must be direct children of `.stack` (already done), and no parent may have `overflow:hidden/auto`.

- **"Failed to load PostCSS config ... Cannot find module 'tailwindcss'":** a `postcss.config.js` exists in a parent folder (e.g. `Downloads`). This project already ignores it via `css.postcss` in `vite.config.js`. You can also delete or move that stray file.
