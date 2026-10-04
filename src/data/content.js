// ALL TEXT, LINKS AND IMAGES LIVE HERE. Edit this file to change the site.

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

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

// Scrolling tiles. First 11 go in row 1, the rest in row 2.
export const marqueeItems = [
  'Java', 'Spring Boot', 'React', 'PostgreSQL', 'JWT', 'WebSocket', 'AWS', 'Azure', 'Hibernate', 'REST', 'Vite',
  'System Design', 'DSA', 'Security', 'Forensics', 'SQL', 'OOP', 'LLM API', 'CRDT', 'BM25', 'C',
];

export const about = {
  heading: 'About me',
  text: 'BCA student specializing in Cloud and Cyber Security (CGPA 8.9), building secure, AI-enabled full-stack applications with Java, Spring Boot and React. I have solved 500+ DSA problems, earned AWS, Azure and NPTEL certificates, and focus on shipping projects end to end with security built in from day one.',
};

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

// Each project is EITHER `images` (3 items: left-top, left-bottom, right-tall)
// OR `panels` (3 text boxes in the same layout). `ratio` = width / height of the image.
export const projects = {
  heading: 'Projects',
  items: [
    {
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
