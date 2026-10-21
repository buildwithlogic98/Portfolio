/* ============================================================
   EDIT THIS FILE - every word on the website lives here.
   All text is plain ASCII so encoding can never break it.
   ============================================================ */

export const profile = {
  name: 'Karan Ganesh Aher',
  shortName: 'Karan',
  role: 'B.Tech CSE | First Year | SGGSIE&T Nanded',
  tagline:
    'First-year engineering student exploring software development, AI/ML and core engineering. Currently learning C, one program at a time.',
  location: 'Nanded, Maharashtra, India',
  email: 'karanaher098@gmail.com',
  // TODO: paste your GitHub profile link once your account/repo is set up
  github: '',
  linkedin: 'https://www.linkedin.com/in/karan-aher-904144437',
  // Public websites attract spam calls. Delete this line to hide your number.
  phone: '+91 9225317652',
  // Add a Google Drive / Dropbox link to your resume PDF later
  resume: '',
  about: [
    "I'm Karan, a first-year Computer Science student at SGGSIE&T, Nanded. Right now I'm at the very start of my engineering journey: learning C programming, settling into college, and figuring out where technology can take me.",
    "Three areas excite me most: software development, AI/ML, and core engineering. I don't have it all figured out yet, and that's the fun part. This page will grow as I do: new skills, new projects, new lessons. Watch this space.",
  ],
  contactBlurb:
    "I'm a first-year student looking to learn from everyone: seniors, peers, and anyone building interesting things. If you have advice, an opportunity, or just want to say hi, my inbox is open.",
};

// The 4 stat cards in the About section
export const stats = [
  { value: '1st', label: 'Year of B.Tech' },
  { value: 'C', label: 'Language in progress' },
  { value: '3', label: "Paths I'm exploring" },
  { value: '\u221E', label: 'Curiosity' }, // '\u221E' = infinity symbol, encoding-safe
];

// Roadmap instead of a fake "skills" list - honest for year one
export const roadmap = {
  'Learning now': {
    icon: 'book',
    items: ['C programming', 'Engineering maths & fundamentals', 'Git & GitHub basics'],
    note: 'Building rock-solid foundations before moving up the stack.',
  },
  'Next up': {
    icon: 'compass',
    items: ['C++ & DSA', 'Python', 'HTML / CSS / JavaScript', 'Linux & the command line'],
    note: 'The tools I want in my belt by the end of second year.',
  },
  'Long-term': {
    icon: 'rocket',
    items: ['Software development', 'AI / Machine Learning', 'Core engineering'],
    note: 'Three tracks to explore deeply before choosing where to specialise.',
  },
};

export const projects = [
  {
    icon: 'globe',
    title: 'This Portfolio Website',
    description:
      "You're looking at it! My first shipped project, built with React + Vite, animated with GSAP and WebGL components from React Bits, and deployed on GitHub Pages.",
    tech: ['React', 'Vite', 'GSAP', 'WebGL'],
    github: '', // fill in once the repo is up
    live: '',   // fill in after deploy
  },
  {
    icon: 'hammer',
    title: 'Coming Soon',
    description:
      'My next build is in the works, most likely something small in C to sharpen the fundamentals. Follow me on GitHub so you catch it the moment it ships.',
    tech: ['C'],
    github: '',
    live: '',
    soon: true,
  },
];

// Adjust the years if your batch differs (e.g. joined 2025, graduating 2029)
export const journey = [
  {
    year: '2026',
    title: 'Joined SGGSIE&T - B.Tech CSE',
    place: 'Shri Guru Gobind Singhji Institute of Engineering and Technology, Nanded',
    detail:
      'First year: C programming, maths, engineering fundamentals, and discovering how much there is to learn.',
  },
  {
    year: 'Now',
    title: 'Learning in public',
    place: 'This website',
    detail: 'Started tracking my journey with a portfolio of my own. Every new skill and project gets added here.',
  },
  {
    year: 'Ahead',
    title: 'The road to SDE / AI-ML',
    place: 'The plan',
    detail:
      'DSA and development next, then deeper into AI/ML and core engineering. Check back in a year, things will look different.',
  },
];

// Aurora hero colors - darker palette (less bright). Swap in brighter hex codes if you want.
export const auroraColors = ['#3b2fb3', '#0a7ea4', '#1d6f42'];