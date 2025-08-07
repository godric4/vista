import { User, Briefcase, GraduationCap, Code } from 'lucide-react'

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
    title: 'E-commerce Platform',
    desc: 'This fullstack allows customers to browse and search for products, view product details, add items to their shopping cart, and proceed to checkout. The project includes interactive features such as user authentication, product filtering, and sorting. It employs responsive design to ensure compatibility across various devices.',
    githubURL: 'github.com',
    demoURL: 'https://lorinecakes.netlify.app',
    imageURL:
      'https://res.cloudinary.com/gentlegiant/image/upload/v1681177403/Screenshot_from_2023-04-11_02-35-28_jrtduw.png',
    span: 'md:col-span-4',
  },
  {
    id: 2,
    title: 'Bar & Lounge Website',
    desc: 'A sleek and modern bar & lounge website designed for an immersive customer experience. Built with a responsive UI, smooth navigation, and engaging visuals to showcase the ambience, menu, and events effortlessly',
    githubURL: 'github.com',
    demoURL: 'https://godrichelounge.netlify.app/',
    imageURL:
      'https://res.cloudinary.com/gentlegiant/image/upload/v1740245537/barlounge_pv64wb.png',
    span: 'md:col-span-2 ',
  },
  {
    id: 3,
    title: 'Crypto Tracker',
    desc: 'Real-time price tracking app using MEXC API.',
    githubURL: 'github.com',
    demoURL: 'https://empire19.netlify.app',
    imageURL:
      'https://res.cloudinary.com/gentlegiant/image/upload/v1691251706/myreads_g5jcjm.png',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    id: 4,
    title: 'Portfolio Website',
    desc: 'Modern dark-mode developer portfolio with animation.',
    githubURL: 'github.com',
    demoURL: 'github.com',
    imageURL:
      'https://res.cloudinary.com/gentlegiant/image/upload/v1740247577/Screenshot_from_2025-02-22_18-57-16_x4t1yr.png',
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
