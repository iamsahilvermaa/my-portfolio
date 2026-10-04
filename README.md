# Sahil Verma – Portfolio (Vite + React)

A dark, animated developer portfolio built with **Vite, React, JavaScript, HTML and CSS**. No other libraries.

## 1. Run it
Needs [Node.js](https://nodejs.org) 18+.

```bash
npm install        # once
npm run dev        # http://localhost:5173
npm run build      # production site in dist/
npm run preview    # preview the build
```

## 2. How the site is organised

| Page | Address | What it shows |
|---|---|---|
| Home | `#/` | The main page: Hero, scrolling tiles, About, Skills, Projects (unchanged look) |
| About | `#/about` | Separate About page (your personal story only) |
| Projects | `#/projects` | Separate Projects page with ALL projects |
| One project | `#/project/<slug>` | Full story of a single project (opens when you click its card) |

Menu: **Skills** scrolls on Home, **Contact** scrolls to the footer.

### Content is separate per page (editing one does not change another)
In `src/data/content.js`:

| Block | Controls |
|---|---|
| `homeAbout` | the About section on **Home only** |
| `homeProjects` | the project cards on **Home only** |
| `aboutPage` | the **About page only** |
| `projects` | the **Projects page** and every project's own page |

So editing `aboutPage` never changes Home's About, and adding a project to `projects` never changes the Home cards.

## 3. Project map
```
index.html                 page title + Google Font (Kanit)
public/images/             all pictures (mascot + project images)
src/data/content.js        ALL text, links, projects  <-- edit this most
src/styles.css             ALL colours, sizes and layout
src/router.js              tiny hash router
src/App.jsx                chooses which page to show
src/pages/                 Home, AboutPage, ProjectsPage, ProjectDetail
src/components/            Navbar, Hero, Marquee, About (home), Skills, Projects (stacking cards),
                           Footer, Cursor, FadeIn, Magnet, AnimatedText
```

## 4. How to change things

### Add a new project (appears on Projects page + gets its own page)
1. Put 3 images in `public/images/`.
2. In `content.js`, copy a block inside `projects` and edit it:
   - `slug`: unique, lowercase, no spaces (e.g. `weather-app`). The page address becomes `#/project/weather-app`.
   - `category`, `status`, `name`, `summary`: header text.
   - `description`: list of paragraphs (the story).
   - `features`: bullet list. `tech`: chips. `links`: buttons (e.g. GitHub, Live demo).
   - `images`: exactly 3 = `[left-top (wide), left-bottom (wide), right (large)]`. `ratio` = width ÷ height of the image. `caption` shows under each image on the project page.
3. It shows on the Projects page only. Home has its own list: to show a card on Home too, add an item to `homeProjects.items` (its `link` button can point to GitHub or a live site).

### Edit or remove a project
Edit its block in `projects` (Projects page + its own page). Home cards are separate: edit them in `homeProjects.items`.

### About page
Edit `aboutPage`: `heading` and `paragraphs` (one string per paragraph, any number).

### Home About section and Home project cards
Edit `homeAbout` (`heading`, `text`) and `homeProjects.items`.

### Contact details, hero text, mascot
`site` in `content.js`. Replace `public/images/mascot.png` for a new mascot (transparent PNG).

### Menu
Edit `nav` in `content.js` (`href` is `#/about`, `#/projects`, `#/skills` or `#/contact`).

### Add a brand-new page
Create `src/pages/XPage.jsx`, register it in the `pages` object in `App.jsx`, and allow its name in the `route` function.

### Colours, fonts, sizes  →  `src/styles.css`
- Background `#0C0C0C`; heading gradient `.g`; purple button `.btn`; white Skills section `#skills`.
- Font: Google Fonts link in `index.html` + `html,body{font-family}`.
- Hero heading size `.big`; section heading size `h2`.
- Project page look: `.pd`, `.pd-title`, `.feat`, `.chip`, `.gallery`.

### Card stacking
CSS variables `--stack-top` and `--stack-off` at the end of `src/styles.css` (bigger offset = more of earlier cards visible; the phone values are inside the `@media (max-width:700px)` block). `SHRINK` is at the top of `Projects.jsx`. Scroll distance between cards: `.stack{gap:45vh}`.

### Cursor and name reveal
`src/components/Cursor.jsx`. `REVEAL_RADIUS` = size of the circle where the mascot fades to show the name (`0` = off). Cursor colours: `#cd` (dot) and `#cr` (ring) in `styles.css`. Desktop only.

### Animations
Fade delays: `delay={0.35}` props (seconds). Marquee speed: `0.3` in `Marquee.jsx`. Magnet pull: `<Magnet strength={3}>` in `Hero.jsx`.

### Mobile layout
All phone styles are in the `@media (max-width:700px)` block at the end of `src/styles.css` (and a smaller one for very narrow phones). On phones the project cards use one column with full-width images, the hero mascot is centred, and the orbs and tiles are smaller.

## 5. Deploy
`npm run build`, then upload `dist/` to Netlify, Vercel, GitHub Pages or any static host. The site uses `#/` addresses, so it works on static hosts with no extra setup.

## 6. Troubleshooting
- **Image not showing:** file must be in `public/images/` and the path must start with `/images/`.
- **Changes not showing:** keep `npm run dev` running; hard refresh (Ctrl+Shift+R).
- **"Failed to load PostCSS config ... tailwindcss":** a stray `postcss.config.js` exists in a parent folder. This project ignores it via `css.postcss` in `vite.config.js`; you can also delete that file.
- **Project page says "not found":** the slug in the address doesn't match any `slug` in `projects`.
- **Cards not stacking:** all cards must be direct children of `.stack`, and no parent may have `overflow:hidden/auto`.
