/**
 * Portfolio content — single source of truth for copy, links, and project metadata.
 */

export const siteConfig = {
  name: 'Malcolm “GoldToothCoder” Benton',
  /** Identity line (primary subtitle under the name) */
  title: 'Software Engineer building web apps, internal tools, and interactive systems',
  /** Supporting line under the identity */
  supportingLine:
    'B.S. in Software Engineering, master’s student, and builder focused on structure, growth, and software with real purpose.',
  /** Main hero blurb (body text) */
  heroBlurb:
    'I build software that combines clean structure, practical value, and a distinct point of view — from full-stack tools to interactive systems that carry memory, consequence, and personality.',
  /** Document title & tab; keep `index.html` <title> aligned for first paint */
  siteTitle: 'Malcolm “GoldToothCoder” Benton | Software Engineer',
  /** Footer secondary line */
  footerTagline: 'Building useful software, stronger systems, and a future on purpose.',
  email: 'malcolmtbenton@gmail.com',
  github: 'https://github.com/tetsurugan',
  linkedin: 'https://www.linkedin.com/in/malcolm-benton/',
  /** Resume PDF — served from `public/resume/`; `base` from Vite config is prepended for GitHub Pages */
  resumePdfUrl: `${import.meta.env.BASE_URL}resume/Malcolm-Benton-26-Resume.pdf`,
} as const

export type ProjectLink = { label: string; href: string; variant?: 'github' | 'live' | 'case' }

export type Project = {
  id: string
  title: string
  /** Shown under the title on cards */
  subtitle: string
  description: string
  tech: string[]
  features: string[]
  links: ProjectLink[]
  /** Optional image — `/...` = public folder, or full URL */
  image?: string
  featured: boolean
}

/** Short aside under About — permanent gold teeth / identity */
export const goldToothCoderShort =
  'GoldToothCoder reflects both where I come from and what I build. The permanent gold teeth are intentional — a way of carrying my identity into technical work without feeling like I have to erase myself to be taken seriously.'

export const aboutParagraphs: string[] = [
  'I’m Malcolm “GoldToothCoder” Benton, a software engineer with a nontraditional path into tech. I completed my B.S. in Software Engineering in April 2026 and am continuing forward as a master’s student while building web apps, internal tools, and interactive systems that combine strong architecture with clear user experience.',
  'My background is not a polished or conventional one, and I don’t try to pretend otherwise. I came into this work through a path shaped by significant adversity, a rough environment, and hard-earned change. That experience gave me resilience, discipline, and perspective — and it is a big part of why I care so much about building a future on purpose.',
  'What matters most to me now is growth that is real. I want my work to reflect skill, consistency, and forward motion. I’m building software that is useful, thoughtful, and well-structured, while also trying to be proof that people can come from difficult places and still build something meaningful.',
  goldToothCoderShort,
]

export const aboutSection = {
  eyebrow: 'About',
  title: 'Who I am',
  subtitle: 'Engineering, structure, and forward motion — with an honest through-line from where I’ve been to what I build now.',
} as const

export const projectsSection = {
  eyebrow: 'Work',
  title: 'Selected projects',
  subtitle:
    'My recent work spans full-stack business tools, mobile-first user-facing apps, and interactive systems built around modular architecture and persistent state. I’m especially interested in software that feels intentional — useful in the real world, but still shaped by clear design and strong underlying structure.',
} as const

export const skillsSection = {
  eyebrow: 'Stack',
  title: 'Skills & focus areas',
  subtitle: 'A concise map of what I work with and where I’m growing — not an exhaustive keyword list.',
} as const

export const resumeSection = {
  eyebrow: 'Experience',
  title: 'Resume & highlights',
  subtitle:
    'A concise snapshot. Download the PDF for the full story — details, tools, and timeline beyond what fits here.',
} as const

export const contactSection = {
  eyebrow: 'Contact',
  title: 'Let’s build something real',
  intro:
    'I’m currently looking for freelance opportunities, junior software engineering roles, and projects where I can contribute, grow, and keep building. If you want to talk about web apps, internal tools, or interactive systems, reach out.',
  formHint:
    'Direct email is the fastest way to reach me. The form opens a message in your mail client. You can swap in a hosted form later if you prefer.',
} as const

export const projects: Project[] = [
  {
    id: 'pov',
    title: 'POV Project',
    subtitle: 'Interactive anthology engine for browser and mobile web',
    description:
      'A modular interactive anthology engine built for browser and mobile-browser play. POV Project focuses on persistent world memory, branching aftermath, hidden truth vs belief, modular story lanes, and connected continuity across multiple playable narrative modules.',
    tech: ['React', 'TypeScript', 'Vite', 'Zustand', 'CSS'],
    features: [
      'React + TypeScript application architecture',
      'persistent client-side world/profile state',
      'branching logic and continuation routing',
      'modular content systems',
      'responsive UI for story browsing, play flow, endings, and profile/history',
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/tetsurugan/Game_Engine', variant: 'github' },
      { label: 'Live Demo', href: 'https://tetsurugan.github.io/Game_Engine/', variant: 'live' },
    ],
    image: undefined,
    featured: true,
  },
  {
    id: 'your-thoughts',
    title: 'Your Thoughts',
    subtitle: 'Mobile-first task capture app for low-friction note-to-task workflows',
    description:
      'A mobile-first web app that turns unstructured note input into organized tasks using client-side parsing and browser persistence. Designed around plain language, low-friction capture, and simpler workflows for users who benefit from more accessible task management.',
    tech: ['React', 'TypeScript', 'Vite', 'Context API', 'localStorage', 'Tailwind CSS'],
    features: [
      'React + TypeScript front-end development',
      'local persistence and state management',
      'mobile-first product design',
      'rule-based parsing and task organization',
      'practical UX for user-facing applications',
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/tetsurugan/your-thoughts-app', variant: 'github' },
      { label: 'Live Demo', href: 'https://your-thoughts-app.vercel.app', variant: 'live' },
    ],
    image: undefined,
    featured: false,
  },
  {
    id: 'leave',
    title: 'Employee Leave Management System',
    subtitle: 'Full-stack PTO request app with role-based approval workflows',
    description:
      'A full-stack internal tool where employees can submit leave requests and managers can approve, reject, and review upcoming approved leave. Built to feel like a small business tool a team could actually use tomorrow.',
    tech: ['React', 'TypeScript', 'Vite', 'Node.js', 'Express', 'SQLite'],
    features: [
      'full-stack CRUD workflow design',
      'role-based views and approval logic',
      'session-based user behavior',
      'business process modeling',
      'practical internal-tool UX',
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/tetsurugan/employee-leave-management-system', variant: 'github' },
      { label: 'Live Demo', href: 'https://tetsurugan.github.io/employee-leave-management-system/', variant: 'live' },
    ],
    image: undefined,
    featured: false,
  },
]

export const skillGroups: { title: string; items: string[] }[] = [
  {
    title: 'Frontend',
    items: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Material UI', 'Tailwind CSS', 'Angular'],
  },
  {
    title: 'Backend / Data',
    items: ['Node.js', 'Express', 'Java', 'Spring Boot', 'REST APIs', 'SQLite', 'MySQL'],
  },
  {
    title: 'Tools / Platforms',
    items: ['Git', 'GitHub', 'Vercel', 'Netlify', 'AWS', 'Vite'],
  },
  {
    title: 'Interests',
    items: [
      'Interactive systems',
      'Full-stack product development',
      'Internal tools',
      'Responsive UX',
      'Narrative/game systems design',
    ],
  },
]

export const resumeHighlightBullets: string[] = [
  'Completed B.S. in Software Engineering — April 23, 2026',
  'Continuing forward as a master’s student in software engineering',
  'Built and shipped multiple projects across product, systems, and business-tool categories',
  'Focused on full-stack development, responsive UX, and modular application design',
]
