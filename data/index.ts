
export const NAV_LINKS = [
  { label: "Experiences", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO_DATA = {
  name: "Md Hasib Talukder",
  greeting: "Hi there!",
  description: "With over 1.5+ years of industry experience, I build high-quality web experiences with modern technologies. Passionate about Next.js, React, and clean design.",
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
    title: "Frontend Engineer",
    company: "Abexita IT",
    period: "Dec 2024 - Present", 
    description: [
      "Building Industry Standard Product Ambel (https://ambel.ca)",
      "Working with Micro-Frontend Architecture: Module Federation, Mono-repo, NX etc.",
      "Tech Stack: TypeScript, Redux, RTK-Query, React.js, Next.js, REST Api, Tailwind CSS etc.",
      "REST API Integration"
    ],
    skills: ["Next.js", "React.js", "TypeScript", "Redux Toolkit", "RTK-Query", "NX", "Module Federation"]
  },
  {
    title: "Frontend Engineer(Internship)",
    company: "6sense Technologies",
    period: "Jul 2024 – Oct 2024",
    description: [
      "Built Production Grade Application",
      "Used Technologies like: React.js, Next.js, TypeScript, Tanstack Query, REST API Integration",
      "Converted the official website of 6sense HQ to Next.js, TypeScript from WordPress",
      "Contributed to international Enterprise grade applications"
    ],
    skills: ["React.js", "Next.js", "TypeScript", "Tanstack Query", "REST API", "Tailwind CSS"]
  },
  {
    title: "Jr. Software Engineer",
    company: "Codexpert, Inc.",
    period: "Sep 2019 – Feb 2020",
    description: [
      "Mostly I worked as a WordPress Plugin developer here",
      "Created WordPress Websites, Customized Plugins, etc.",
      "Created Responsive Website using HTML, CSS, JavaScript, etc."
    ],
    skills: ["WordPress", "PHP", "JavaScript", "HTML5", "CSS3", "Bootstrap"]
  }
];

export const PROJECTS_DATA = [
  {
    title: "6senseHQ - Official Website",
    description: "Built the official website of 6sense Technologies using Next.js, TypeScript, Tanstack Query, REST API Integration",
    tags: ["Next.js", "TypeScript", "Tanstack Query", "REST API", "Tailwind CSS"],
    link: "https://6sensehq.vercel.app/",
    github: "#",
    featured: true
  },
  {
    title: "Assignment Portal",
    description: "Assignment Portal is a portal where assignment can be submitted and graded.",
    tags: ["React", "Express.js", "TypeScript", "Tailwind CSS", "Redux Toolkit", "React Query", "REST API", "Firebase", "JWT", "MongoDB"],
    link: "https://assignment-portal-d23d4.web.app",
    github: "https://github.com/hasibmuhammad/portal-client"
  },
  {
    title: "TMDB Movies App",
    description: "TMDB Movies App is a movie app where you can search movies, make favorute that persist in local storage, and show casts.",
    tags: ["Next.js", "TypeScript", "Tanstack Query", "REST API", "Tailwind CSS", "TMDB API", "Zod", "React Hook Form", "ISR, SSR, CSR"],
    link: "https://tmdb-movies-app.vercel.app",
    github: "https://github.com/hasibmuhammad/tmdb-movies-app"
  },
  {
    title: "Foodie",
    description: "A simple e-commerce app where you can showcase your products and make orders.",
    tags: ["React", "Tanstack Query", "REST API", "Tailwind CSS","React Hook Form","Firebase", "JWT", "MongoDB"],
    link: "https://foodie-be4f4.web.app/",
    github: "https://github.com/hasibmuhammad/foodie-frontend"
  },
  {
    title: "Knowledge Caffe",
    description: "A landing page with blogs having facility to bookmark and add total read minutes.",
    tags: ["React.js", "Tailwind CSS"],
    link: "https://knowledge-cafe-hasib.surge.sh/",
    github: "https://github.com/hasibmuhammad/knowledge-caffe"
  },
];

export const EDUCATION_DATA = [
  {
    institution: "Bangladesh University of Business and Technology (BUBT)",
    degree: "Bachelor of Science in Computer Science",
    period: "Oct 2019 – Oct 2023",
    description: [
      "CGPA - 3.98",
      "Completed Thesis on Deep Learning( Created 'DualNet' Model using Ensemble Learning ) to achieve higher accuracy during Tomato Leaf Disease Classification"
    ],
    icon: "GraduationCap"
  }
];
