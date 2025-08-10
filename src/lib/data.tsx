import { User, Briefcase, GraduationCap, Code } from 'lucide-react'

export const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'My Projects', path: '/#projects' },
  { name: 'About Me', path: '/#about' },
  { name: 'Contact', path: '/#contact' },
]

export const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    desc: 'This fullstack project allows customers to browse and search for products, view product details, add items to their shopping cart, and proceed to checkout. The project includes interactive features such as user authentication, product filtering, and sorting.',
    githubURL: 'https://github.com/yourusername/ecommerce-platform',
    demoURL: 'https://lorinecakes.netlify.app',
    imageURL:
      'https://res.cloudinary.com/gentlegiant/image/upload/v1681177403/Screenshot_from_2023-04-11_02-35-28_jrtduw.png',
    span: 'md:col-span-4',
  },
  {
    id: 2,
    title: 'Bar & Lounge Website',
    desc: 'A sleek and modern bar & lounge website designed for an immersive customer experience. Built with a responsive UI, smooth navigation, and engaging visuals to showcase the ambience, menu, and events effortlessly.',
    githubURL: 'https://github.com/yourusername/bar-lounge-website',
    demoURL: 'https://godrichelounge.netlify.app/',
    imageURL:
      'https://res.cloudinary.com/gentlegiant/image/upload/v1740245537/barlounge_pv64wb.png',
    span: 'md:col-span-2',
  },
  {
    id: 3,
    title: 'Crypto Tracker',
    desc: 'Real-time price tracking app using MEXC API.',
    githubURL: 'https://github.com/yourusername/crypto-tracker',
    demoURL: 'https://empire19.netlify.app',
    imageURL:
      'https://res.cloudinary.com/gentlegiant/image/upload/v1691251706/myreads_g5jcjm.png',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    id: 4,
    title: 'Portfolio Website',
    desc: 'Modern dark-mode developer portfolio with animation.',
    githubURL: 'https://github.com/yourusername/portfolio-website',
    demoURL: 'https://yourportfolio.com',
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
  { id: 'interests', label: 'My Interest', icon: Code }, // changed icon from GraduationCap
]

// Since content is an array, better define TabId as string union based on your tabs:
export type TabId =
  | 'about'
  | 'skills'
  | 'experience'
  | 'education'
  | 'interests'

export const content = [
  // About section
  {
    type: 'about',
    desc: 'Hi, I am a passionate frontend developer with strong skills in modern frontend frameworks and backend APIs. I enjoy building clean and scalable systems.',
    phone: '+(234) 916-0932-246',
    email: 'godricikeji@gmail.com',
    location: 'Lagos, Nigeria',
    availability: 'Available for hire',
    imageURL: '/pic.png',
  },

  // Skills section
  {
    type: 'skill',
    name: 'JavaScript',
    level: 95,
    color: 'from-yellow-400 to-yellow-600',
  },
  {
    type: 'skill',
    name: 'TypeScript',
    level: 75,
    color: 'from-blue-500 to-blue-700',
  },
  {
    type: 'skill',
    name: 'React',
    level: 85,
    color: 'from-blue-400 to-cyan-500',
  },
  {
    type: 'skill',
    name: 'Next.js',
    level: 90,
    color: 'from-yellow-200 to-yellow-800',
  },
  {
    type: 'skill',
    name: 'HTML5',
    level: 95,
    color: 'from-orange-500 to-red-600',
  },
  {
    type: 'skill',
    name: 'CSS3 / Tailwind CSS',
    level: 90,
    color: 'from-teal-400 to-teal-600',
  },
  {
    type: 'skill',
    name: 'Git & Version Control',
    level: 88,
    color: 'from-red-500 to-red-700',
  },
  {
    type: 'skill',
    name: 'RESTful APIs & Fetch/Axios',
    level: 85,
    color: 'from-green-400 to-green-600',
  },
  {
    type: 'skill',
    name: 'Responsive Design & Cross-browser Compatibility',
    level: 90,
    color: 'from-pink-400 to-pink-600',
  },
  {
    type: 'skill',
    name: 'Testing (Jest, React Testing Library)',
    level: 75,
    color: 'from-indigo-400 to-indigo-600',
  },
  {
    type: 'skill',
    name: 'GraphQL',
    level: 70,
    color: 'from-pink-500 to-purple-600',
  },
  {
    type: 'skill',
    name: 'CI/CD Basics',
    level: 65,
    color: 'from-green-500 to-green-700',
  },

  // Experience section
  {
    type: 'experience',
    id: 1,
    title: 'Frontend Developer',
    company: 'Andela Community',
    period: '2023 - Present',
    description:
      'Contributed to open-source projects and collaborated on frontend solutions within a global network of developers.',
    achievements: [
      'Implemented responsive UI components that improved user engagement by 25%',
      'Mentored junior developers during community code reviews',
      'Organized and led 3 community workshops on React and modern frontend best practices',
    ],
  },
  {
    type: 'experience',
    id: 2,
    title: 'Google Africa Developer Scholarship Graduate',
    company: 'Google / Andela',
    period: '2022 - 2023',
    description:
      'Completed an intensive program focusing on full frontend web development using modern JavaScript and React ecosystem.',
    achievements: [
      'Built and deployed 4 real-world projects including Progressive Web Apps (PWA)',
      'Achieved top 10% performance in cohort assessments',
      'Collaborated in a team-based capstone project integrating APIs and frontend state management',
    ],
  },
  {
    type: 'experience',
    id: 3,
    title: 'Fullstack Developer Trainee',
    company: 'ALX',
    period: '2021 - 2022',
    description:
      'Intensive training covering frontend development, backend APIs, and software engineering best practices.',
    achievements: [
      'Developed reusable React components and improved app modularity',
      'Contributed to Agile sprints and code reviews',
      'Completed projects on Next.js with API integration and authentication',
    ],
  },
  {
    type: 'experience',
    id: 4,
    title: 'Freelance Frontend Developer',
    company: 'Self-employed',
    period: '2020 - Present',
    description:
      'Worked with startups and small businesses to deliver responsive websites and web apps tailored to their needs.',
    achievements: [
      'Delivered 10+ client projects including e-commerce sites and portfolio websites',
      'Improved site performance and SEO resulting in 30% increase in traffic for clients',
      'Provided ongoing maintenance and UI/UX improvements',
    ],
  },
  {
    type: 'experience',
    id: 5,
    title: 'Frontend Developer Intern',
    company: 'Tech Startup XYZ',
    period: '2019 - 2020',
    description:
      'Assisted in frontend development and QA testing for a SaaS product targeting SMEs.',
    achievements: [
      'Enhanced UI components for better accessibility and mobile responsiveness',
      'Collaborated with backend developers to integrate RESTful APIs',
      'Participated in sprint planning and retrospectives',
    ],
  },

  // Interests section
  {
    type: 'interest',
    name: 'Chess',
    description:
      'Enjoy playing and analyzing chess games to improve strategic thinking and problem-solving skills.',
  },
  {
    type: 'interest',
    name: 'Open Source Contribution',
    description:
      'Active contributor to open source projects, collaborating with developers worldwide.',
  },
  {
    type: 'interest',
    name: 'UI/UX Design',
    description:
      'Passionate about creating intuitive and user-friendly interfaces with attention to detail.',
  },
  {
    type: 'interest',
    name: 'Tech Blogging',
    description:
      'Writing articles and tutorials to share knowledge about frontend development and new technologies.',
  },
  {
    type: 'interest',
    name: 'Learning New Frameworks',
    description:
      'Continuously exploring modern frontend frameworks and libraries to stay updated with industry trends.',
  },
  {
    type: 'interest',
    name: 'Gaming',
    description:
      'Enjoy video games and indie games as a way to relax and draw inspiration for interactive design.',
  },
  {
    type: 'interest',
    name: 'Photography',
    description:
      'Interest in photography, focusing on capturing moments and enhancing creativity.',
  },

  // Education section
  {
    type: 'education',
    id: 1,
    institution: 'Caritas University Enugu',
    degree: 'B.Eng. Electrical/Electronics Engineering',
    period: '2017 - 2022',
    description:
      'Completed a comprehensive engineering program focusing on electrical systems, electronics, and circuit design.',
    achievements: [
      'Graduated with Second Class Upper Division',
      'Final year project on renewable energy systems',
      'Active member of the Electronics Club',
    ],
  },
  {
    type: 'education',
    id: 2,
    institution: 'Google Africa Developer Scholarship (via Andela)',
    degree: 'Fullstack Web Development',
    period: '2022 - 2023',
    description:
      'Intensive online scholarship program focusing on JavaScript, React, Node.js, and modern web technologies.',
    achievements: [
      'Built and deployed multiple real-world projects',
      'Top 10% in cohort assessments',
      'Collaborated on open source projects within the community',
    ],
  },
  {
    type: 'education',
    id: 3,
    institution: 'ALX',
    degree: 'Software Engineering Program',
    period: '2021 - 2022',
    description:
      'Hands-on training in frontend and backend development, software engineering principles, and version control.',
    achievements: [
      'Completed multiple projects using React, Next.js, and REST APIs',
      'Participated in Agile development cycles',
      'Collaborated with peers on team projects',
    ],
  },
  {
    type: 'education',
    id: 4,
    institution: 'Udemy',
    degree: 'Various Online Courses',
    period: '2020 - Present',
  },
] // <-- closing array bracket for content

export const testimonials = [
  {
    id: 1,
    name: 'Wunmi. O',
    role: 'CEO, Cakes & Bakes',
    photo: '/hs1.jpg',
    feedback:
      'Great work on the ecommerce platform! The user experience is smooth and the design is very modern. Highly recommend.',
  },
  {
    id: 2,
    name: 'Sue Mayo.',
    role: 'Tech Lead, Angelmax',
    photo: '/hs2.jpg',
    feedback:
      'Godric is a talented developer who is always eager to learn and help the team succeed.',
  },
  {
    id: 3,
    name: 'Dominic Lyrel.',
    role: 'Founder, StartupX',
    photo: '/hs3.jpg',
    feedback:
      'Pixel-perfect and user-friendly website is what God has done for us. I highly recommend him.',
  },
]
