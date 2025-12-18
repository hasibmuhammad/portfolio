
export const NAV_LINKS = [
  { label: "Experiences", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const HERO_DATA = {
  name: "Md Hasib Talukder",
  greeting: "Hi there!",
  description: "Building high-quality web experiences with modern technologies. Passionate about Next.js, React, and clean design.",
  resumeUrl: "https://drive.google.com/file/d/1wknaT1-fQcq0HQdhiCiE0M10RivTDFXQ/view",
  actions: {
    primary: { label: "View Projects", href: "#projects" },
    secondary: { label: "Resume", href: "https://drive.google.com/file/d/1wknaT1-fQcq0HQdhiCiE0M10RivTDFXQ/view" }
  },
  socials: [
    { platform: "GitHub", url: "https://github.com/hasibmuhammad", icon: "Github" },
    { platform: "LinkedIn", url: "https://www.linkedin.com/in/hasibmuhammad", icon: "Linkedin" },
    { platform: "Email", url: "mailto:hasibmuhammad@gmail.com", icon: "Mail" }
  ]
};

export const ABOUT_DATA = {
  title: "About Me",
  bioParagraphs: [
    "I am a passionate software engineer focused on building accessible, pixel-perfect, and performant web experiences.",
    "With deep expertise in the modern React ecosystem, I bridge the gap between design and engineering. I care deeply about user experience and code quality, always striving to write clean, maintainable code.",
    "When I'm not shipping code, I'm exploring new technologies, contributing to open source, or sharing knowledge with the community."
  ],
  resumeUrl: "https://drive.google.com/file/d/1wknaT1-fQcq0HQdhiCiE0M10RivTDFXQ/view",
  skills: [
    {
      category: "Frontend",
      items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "HTML5/CSS3", "Redux Toolkit", "React Query/Tanstack Query", "Module Federation"],
      icon: "Globe"
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js", "TypeScript", "JWT", "MongoDB"],
      icon: "Globe" 
    },
    {
      category: "Miscellaneous",
      items: ["Problem Solving", "Git", "GitHub", "VS Code", "Cursor", "Prompt Engineering", "Agile"],
      icon: "Terminal"
    }
  ]
};

export const EXPERIENCE_DATA = [
  {
    title: "Senior Frontend Engineer",
    company: "Tech Solutions Inc.",
    period: "2023 - Present",
    description: "Leading the frontend team in building scalable web applications. improved performance by 40% and implemented a new design system.",
    skills: ["Next.js", "TypeScript", "GraphQL", "AWS"]
  },
  {
    title: "Software Engineer",
    company: "Digital Innovations",
    period: "2021 - 2023",
    description: "Developed and maintained multiple client-facing websites. Collaborated with designers to implement pixel-perfect user interfaces.",
    skills: ["React", "Redux", "Node.js", "Material UI"]
  },
  {
    title: "Junior Web Developer",
    company: "Creative Agency",
    period: "2020 - 2021",
    description: "Assisted in the development of e-commerce platforms. Wrote clean, maintainable code and participated in code reviews.",
    skills: ["JavaScript", "HTML/CSS", "Bootstrap", "PHP"]
  }
];

export const PROJECTS_DATA = [
  {
    title: "Project One",
    description: "A comprehensive dashboard for data visualization using React and D3.js. Features real-time updates and interactive charts.",
    tags: ["Next.js", "TypeScript", "D3.js"],
    link: "#",
    github: "#",
    featured: true
  },
  {
    title: "Project Two",
    description: "E-commerce platform with full shopping cart functionality, payment integration, and user authentication.",
    tags: ["React", "Node.js", "Stripe"],
    link: "#",
    github: "#"
  },
  {
    title: "Project Three",
    description: "Task management application designed for team collaboration, featuring drag-and-drop kanban boards.",
    tags: ["Vue.js", "Firebase", "Tailwind"],
    link: "#",
    github: "#"
  },
  {
    title: "Project Four",
    description: "Real-time chat application with websocket integration and message encryption.",
    tags: ["Socket.io", "React", "Express"],
    link: "#",
    github: "#"
  },
  {
    title: "Project Five",
    description: "AI-powered content generator using OpenAI API and custom prompt engineering.",
    tags: ["Python", "FastAPI", "OpenAI"],
    link: "#",
    github: "#"
  },
  {
    title: "Project Six",
    description: "Mobile-first workout tracker progressive web app (PWA) with offline capabilities.",
    tags: ["PWA", "React", "IndexedDB"],
    link: "#",
    github: "#"
  },
];
