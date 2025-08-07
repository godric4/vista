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
    id: 1,
    title: 'School Management System',
    desc: 'Fullstack project with roles, results, and invoices.',
    githubURL: 'github.com',
    demoURL: 'github.com',
    imageURL: '/rcl.png',
    span: 'md:col-span-4',
  },
  {
    id: 2,
    title: 'React Blog',
    desc: 'Markdown blog with dynamic routing.',
    image: '/phase.jpeg',
    span: 'md:col-span-2',
  },
  {
    id: 3,
    title: 'Crypto Tracker',
    desc: 'Real-time price tracking app using MEXC API.',
    githubURL: 'github.com',
    demoURL: 'github.com',
    imageURL: 'bg1.jpg',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    id: 4,
    title: 'Portfolio Website',
    desc: 'Modern dark-mode developer portfolio with animation.',
    githubURL: 'github.com',
    demoURL: 'github.com',
    imageURL: 'bg2.jpg',
    span: 'md:col-span-4',
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
  githubURL: 'github.com',
  demoURL: 'github.com',
  imageURL: '/pic.png',
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
      id: 1,
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
