/* ============================================================
   EDIT THIS FILE â€” every word on the website lives here.
   ============================================================ */

export const profile = {
  name: 'Karan Ganesh Aher',
  shortName: 'Karan',
  role: 'B.Tech CSE Â· First Year Â· SGGSIE&T Nanded',
  tagline: "First-year engineering student exploring software development, AI/ML and core engineering â€” currently learning C, one program at a time.",
  location: 'Nanded, Maharashtra, India',
  email: 'karanaher098@gmail.com',
  // TODO: paste your GitHub profile link once your account/repo is set up
  github: '',
  linkedin: 'https://www.linkedin.com/in/karan-aher-904144437',
  // Public websites attract spam calls. Delete this whole line to hide your number.
  phone: '+91 9225317652',
  // Add a Google Drive / Dropbox link to your resume PDF later
  resume: '',
  about: [
    "I'm Karan, a first-year Computer Science student at SGGSIE&T, Nanded. Right now I'm at the very start of my engineering journey â€” learning C programming, settling into college, and figuring out where technology can take me.",
    "Three areas excite me most: software development, AI/ML, and core engineering. I don't have it all figured out yet â€” and that's the fun part. This page will grow as I do: new skills, new projects, new lessons. Watch this space.",
  ],
  contactBlurb:
    "I'm a first-year student looking to learn from everyone â€” seniors, peers, and anyone building interesting things. If you have advice, an opportunity, or just want to say hi, my inbox is open.",
};

// The 4 stat cards in the About section
export const stats = [
  { value: '1st', label: 'Year of B.Tech' },
  { value: 'C', label: 'Language in progress' },
  { value: '3', label: "Paths I'm exploring" },
  { value: 'âˆž', label: 'Curiosity' },
];

// Roadmap instead of a fake "skills" list â€” honest for year one
export const roadmap = {
  'Learning now': {
    icon: 'ðŸ“–',
    items: ['C programming', 'Engineering maths & fundamentals', 'Git & GitHub basics'],
    note: 'Building rock-solid foundations before moving up the stack.',
  },
  'Next up': {
    icon: 'ðŸ§­',
    items: ['C++ & DSA', 'Python', 'HTML / CSS / JavaScript', 'Linux & the command line'],
    note: 'The tools I want in my belt by the end of second year.',
  },
  'Long-term': {
    icon: 'ðŸš€',
    items: ['Software development', 'AI / Machine Learning', 'Core engineering'],
    note: 'Three tracks to explore deeply before choosing where to specialise.',
  },
};

export const projects = [
  {
    emoji: 'ðŸŒ',
    title: 'This Portfolio Website',
    description: "You're looking at it! My first shipped project â€” built with React + Vite, animated with GSAP and WebGL components from React Bits, and deployed on GitHub Pages.",
    tech: ['React', 'Vite', 'GSAP', 'WebGL'],
    github: '',
    live: '',
  },
  {
    emoji: 'ðŸ› ï¸',
    title: 'Coming Soon',
    description: 'My next build is in the works â€” most likely something small in C to sharpen the fundamentals. Follow me on GitHub so you catch it the moment it ships.',
    tech: ['C'],
    github: '',
    live: '',
    soon: true,
  },
];

// Adjust the years below if your batch differs (e.g. 2025â€“2029 vs 2026â€“2030)
export const journey = [
  {
    year: '2026',
    title: 'Joined SGGSIE&T â€” B.Tech CSE',
    place: 'Shri Guru Gobind Singhji Institute of Engineering and Technology, Nanded',
    detail: 'First year: C programming, maths, engineering fundamentals â€” and discovering how much there is to learn.',
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
    detail: 'DSA and development next, then deeper into AI/ML and core engineering. Check back in a year â€” things will look different.',
  },
];

// Aurora hero colors â€” 2 to 5 hex colors, blended left â†’ right
export const auroraColors = ['#5227FF', '#00e5ff', '#7cff67'];