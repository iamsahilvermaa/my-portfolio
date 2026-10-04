// ALL TEXT, LINKS AND IMAGES LIVE HERE. Edit this file to change the site.
//
// Content is SEPARATE per page, so editing one never changes another:
//   homeAbout, homeProjects -> the HOME page only (exactly as the main page looks)
//   aboutPage                 -> the About PAGE only
//   projects                  -> the Projects PAGE + each project's own page

export const site = {
  heroHeading: 'Hi, i’m sahil',
  tagline: 'a full stack java developer building secure, ai-enabled applications',
  mascot: '/images/mascot.png', // file in public/images/
  email: 'svermaa005@gmail.com',
  phone: '+91 81716 40321',
  linkedin: 'https://www.linkedin.com/in/iamsahilvermaa',
  github: 'https://github.com/iamsahilvermaa',
  contactLabel: 'Contact Me',
};

// Menu. #/about and #/projects are pages; #/skills and #/contact scroll.
export const nav = [
  { label: 'About', href: '#/about' },
  { label: 'Skills', href: '#/skills' },
  { label: 'Projects', href: '#/projects' },
  { label: 'Contact', href: '#/contact' },
];

// Scrolling tiles. First 11 go in row 1, the rest in row 2.
export const marqueeItems = [
  'Java', 'Spring Boot', 'React', 'PostgreSQL', 'JWT', 'WebSocket', 'AWS', 'Azure', 'Hibernate', 'REST', 'Vite',
  'System Design', 'DSA', 'Security', 'Forensics', 'SQL', 'OOP', 'LLM API', 'CRDT', 'BM25', 'C',
];

export const skills = {
  heading: 'Skills',
  items: [
    { title: 'Languages', text: 'Java, C, JavaScript and SQL, backed by 500+ solved Data Structures and Algorithms problems.' },
    { title: 'Backend', text: 'Spring Boot, Hibernate, JDBC and REST APIs, with PostgreSQL for data.' },
    { title: 'Frontend', text: 'React, Vite, HTML and CSS for clean, responsive interfaces.' },
    { title: 'Cloud & Security', text: 'AWS, Azure, cyber security and digital forensics, with security considered from the first line of code.' },
    { title: 'Core', text: 'Object-oriented programming, data structures and algorithms, and system design.' },
  ],
};

// ---------------- HOME PAGE ONLY (looks exactly like the original single page) ----------------
export const homeAbout = {
  heading: 'About me',
  text: 'BCA student specializing in Cloud and Cyber Security (CGPA 8.9), building secure, AI-enabled full-stack applications with Java, Spring Boot and React. I have solved 500+ DSA problems, earned AWS, Azure and NPTEL certificates, and focus on shipping projects end to end with security built in from day one.',
};

// Home project cards. Separate from the `projects` list below, so adding projects there does NOT change Home.
// Each card is EITHER `images` (3 items: left-top, left-bottom, right-tall) OR `panels` (3 text boxes).
export const homeProjects = {
  heading: 'Projects',
  items: [
    {
      slug: 'home-codocs',
      category: 'In Progress',
      name: 'CoDocs: Real-Time Collaborative Editor',
      link: 'https://github.com/iamsahilvermaa',
      linkLabel: 'GitHub',
      images: [
        { src: '/images/codocs-stack.jpg', alt: 'CoDocs tech stack', ratio: 2.95 },
        { src: '/images/codocs-security.jpg', alt: 'CoDocs secure collaboration', ratio: 2.5 },
        { src: '/images/codocs-editor.jpg', alt: 'CoDocs live editing dashboard' },
      ],
    },
    {
      slug: 'home-search',
      category: 'In Progress',
      name: 'Full-Text Search Engine in Java',
      link: 'https://github.com/iamsahilvermaa',
      linkLabel: 'GitHub',
      images: [
        { src: '/images/search-stack.jpg', alt: 'Search engine tech stack', ratio: 2.95 },
        { src: '/images/search-rbac.jpg', alt: 'Role-based access control', ratio: 2.96 },
        { src: '/images/search-dashboard.jpg', alt: 'CoDocs search dashboard' },
      ],
    },
    {
      slug: 'home-achievements',
      category: 'Achievements',
      name: 'Certified & Battle-Tested',
      panels: [
        { title: '500+ DSA problems', text: 'Strong problem-solving foundation.' },
        { title: 'NPTEL Certified', text: 'Completed NPTEL certification courses.' },
        { title: 'Cloud Certified', text: 'AWS and Microsoft Azure cloud certificates.' },
      ],
    },
  ],
};

// ---------------- ABOUT PAGE ONLY (separate page, separate text) ----------------
export const aboutPage = {
  heading: 'About me',
  paragraphs: [
    "I'm Sahil Verma, a BCA student at IIMT University, Meerut, specializing in Cloud and Cyber Security, with a CGPA of 8.9.",
    "I'm aiming to become a Full Stack Java Developer who builds secure, AI-enabled applications. My stack is Java, Spring Boot, Hibernate, JDBC, and PostgreSQL on the backend, with React on the frontend. I've solved over 500 DSA problems and earned AWS and Azure certifications, which gave me a strong base in problem-solving and cloud fundamentals.",
    "My main project is CoDocs, a real-time collaborative editor like Google Docs. Multiple users edit one document live over WebSockets, and CRDT-based sync merges concurrent edits without overwriting anyone's work. I secured it with JWT authentication and role-based access control for owners, editors, and viewers, enforced on every API request and socket message. I'm also integrating an LLM API for summarization and writing suggestions.",
    "Alongside it, I'm building a full-text search engine in Java from scratch, with an inverted index, BM25 ranking, and heap-based top-k retrieval. It is permission-aware, so users only see documents they're allowed to access.",
    "One thing I'm working on is knowing when to stop going deep and move forward. I now time-box problems and prioritize by impact.",
    "Outside work, I enjoy badminton and gaming. I'm excited to build real-world software at scale and keep improving by one percent every day. Thank you",
  ],
};

// ---------------- PROJECTS PAGE + PROJECT PAGES ----------------
export const projectsPage = {
  heading: 'Projects',
  intro: 'Everything I’m building. Click a project to read the full story.',
};

// Each project gets its own page at #/project/<slug>.
// `images`: exactly 3 = [left-top (wide), left-bottom (wide), right (large)]. `ratio` = width / height.
// `caption` is shown under the image on the project's own page.
export const projects = [
  {
    slug: 'codocs',
    category: 'Full Stack',
    status: 'In Progress',
    name: 'CoDocs: Real-Time Collaborative Editor',
    summary: 'A Google Docs-style editor where multiple users edit one document live.',
    description: [
      'CoDocs is a real-time collaborative editor where multiple users edit the same document at once. It uses WebSockets and CRDT-based synchronization, so concurrent edits merge instead of overwriting each other.',
      'Security is built in from the start. JWT authentication and role-based access control (owner, editor, viewer) are enforced on every API request and every socket message.',
      'AI-assisted features, such as document summarization and writing suggestions, are being integrated through an LLM API.',
    ],
    features: [
      'Live multi-user editing over WebSockets',
      'CRDT-based sync so concurrent edits merge cleanly',
      'JWT authentication on every API request and socket message',
      'Role-based access control: owner, editor and viewer',
      'AI summarization and writing suggestions through an LLM API',
      'Responsive React front end',
    ],
    tech: ['Java', 'Spring Boot', 'WebSocket', 'React', 'PostgreSQL', 'JWT', 'CRDT', 'LLM API'],
    links: [{ label: 'GitHub', href: 'https://github.com/iamsahilvermaa' }],
    images: [
      { src: '/images/codocs-stack.jpg', alt: 'CoDocs tech stack', ratio: 2.95, caption: 'The technologies behind CoDocs.' },
      { src: '/images/codocs-security.jpg', alt: 'CoDocs secure collaboration', ratio: 2.5, caption: 'Secure collaboration: JWT authentication and role-based access on every API request and WebSocket message.' },
      { src: '/images/codocs-editor.jpg', alt: 'CoDocs live editing dashboard', caption: 'Live editing: several collaborators working in one document at the same time.' },
    ],
  },
  {
    slug: 'search-engine',
    category: 'Backend & Search',
    status: 'In Progress',
    name: 'Full-Text Search Engine in Java',
    summary: 'A search engine built from scratch, with permission-aware results.',
    description: [
      'A full-text search engine written from scratch in Java. It uses an inverted index for fast lookups, BM25 for relevance ranking, and heaps for top-k retrieval.',
      'Search is permission-aware across CoDocs documents, so users only see results they are allowed to access.',
    ],
    features: [
      'Inverted index built from scratch',
      'BM25 relevance ranking',
      'Top-k retrieval using heaps',
      'Permission-aware results based on the user’s role',
      'React search interface with filters',
    ],
    tech: ['Java', 'Spring Boot', 'PostgreSQL', 'React'],
    links: [{ label: 'GitHub', href: 'https://github.com/iamsahilvermaa' }],
    images: [
      { src: '/images/search-stack.jpg', alt: 'Search engine tech stack', ratio: 2.95, caption: 'The technologies behind the search engine.' },
      { src: '/images/search-rbac.jpg', alt: 'Role-based access control', ratio: 2.96, caption: 'Role-based access control: results are filtered by what each role may see.' },
      { src: '/images/search-dashboard.jpg', alt: 'CoDocs search dashboard', caption: 'The search dashboard: full-text search across documents with filters.' },
    ],
  },
];
