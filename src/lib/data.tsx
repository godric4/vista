import {
  User,
  Briefcase,
  GraduationCap,
  Code,
  Award,
  Heart,
  Coffee,
  Music,
  Camera,
  Gamepad2,
  Book,
  Plane,
} from 'lucide-react'

export const navLinks = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'My Projects',
    path: '/portfolio',
  },
  {
    name: 'About Me',
    path: '/about',
  },

  // {
  //   name: 'Journal',
  //   path: '/blog',
  // },
]

export const projects = [
  {
    title: 'E-Commerce',
    description: 'A responsive online store built with modern tools.',
    imageURL: '/phase.jpeg',
    tools: ['Next.js', 'TypeScript', 'Tailwind'],
    githubURL: 'https://github.com/your-repo',
    demoURL: 'https://your-live-demo.com',
  },
  {
    title: 'Portfolio',
    description: 'Showcase your work beautifully.',
    imageURL: '/rcl.png',
    tools: ['React', 'Framer Motion', 'Tailwind'],
    githubURL: 'https://github.com/your-portfolio',
    demoURL: 'https://portfolio-demo.com',
  },

  {
    title: 'E-Gaming',
    description: 'A responsive online store built with modern tools.',
    imageURL: '/avail.png',
    tools: ['Next.js', 'TypeScript', 'Tailwind'],
    githubURL: 'https://github.com/your-repo',
    demoURL: 'https://your-live-demo.com',
  },
]

export const tabs = [
  { id: 'about', label: 'About Me', icon: User },
  { id: 'skills', label: 'Skills', icon: Code },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'interests', label: 'My Interest', icon: GraduationCap },
]
type TabId = keyof typeof content
export const content = {
  about:
    'Hi, I’m a passionate full-stack developer with strong skills in modern frontend frameworks and backend APIs. I enjoy building clean and scalable systems..',
  imageUrl: '/pic.png',
  skills: [
    {
      name: 'JavaScript/TypeScript',
      level: 95,
      color: 'from-yellow-500 to-orange-500',
    },
    { name: 'React/Next.js', level: 92, color: 'from-blue-500 to-cyan-500' },
    // more...
  ],
  experience: [
    {
      title: 'Senior Frontend Developer',
      company: 'TechCorp Inc.',
      period: '2022 - Present',
      description:
        'Leading frontend development for enterprise applications...',
      achievements: [
        'Improved app performance by 40%',
        'Led team of 5',
        'CI/CD pipeline',
      ],
    },
    // more...
  ],
  interests: [
    {
      name: 'Senior Frontend Developer',
      company: 'TechCorp Inc.',
      period: '2022 - Present',
      description:
        'Leading frontend development for enterprise applications...',
      achievements: [
        'Improved app performance by 40%',
        'Led team of 5',
        'CI/CD pipeline',
      ],
    },
    // more...
  ],
  education: 'B.Sc. in Computer Science – XYZ University (2014–2018).',
}
