import { gemini } from "@genkit-ai/googleai";

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  deployUrl?: string;
  type: 'web' | 'mobile';
  image?: string;
  dataAiHint?: string;
}

export const projects: Project[] = [
  {
    id: 'dashboard-ui',
    title: 'Dashboard UI',
    description: 'A modern and responsive dashboard UI created with React and ShadCN UI components, showcasing data visualization and user interface design.',
    technologies: ['React', 'ShadCN UI', 'Tailwind CSS'],
    githubUrl: 'https://github.com/rahulitme/Dashboard-UI',
    deployUrl: 'https://dashboard-ui-roan.vercel.app/',
    type: 'web',
    image: 'https://placehold.co/600x400/E0E0E0.png',
    dataAiHint: 'dashboard data',
  },
  {
    id: 'fit-and-finder',
    title: 'FIT AND FINDER',
    description: 'The Fit and Finder mobile app leverages Dart and Firebase to provide personalized clothing recommendations based on facial analysis.',
    technologies: ['Flutter', 'Dart', 'Firebase'],
    githubUrl: 'https://github.com/rahulitme/Final_Year_Project',
    type: 'mobile',
    image: 'https://placehold.co/600x400/D6EAF8.png',
    dataAiHint: 'fashion mobile',
  },
  {
    id: 'personal-portfolio',
    title: 'Personal Portfolio',
    description: 'A modern, responsive portfolio website built with React and Next.js. Features dynamic content loading, dark mode support, and seamless animations.',
    technologies: ['React', 'Next.js', 'Tailwind CSS'],
    githubUrl: 'https://github.com/rahulitme/myportfolio',
    type: 'web',
    image: 'https://placehold.co/600x400/D1F2EB.png',
    dataAiHint: 'portfolio website',
  },
  {
    id: 'grocery-app',
    title: 'Grocery App',
    description: 'A comprehensive mobile application that transforms grocery shopping with features like product browsing, cart management, order tracking, and seamless payments.',
    technologies: ['Flutter', 'Dart', 'State Management'],
    githubUrl: 'https://github.com/rahulitme/Grocery-App',
    type: 'mobile',
    image: 'https://placehold.co/600x400/FDEDEC.png',
    dataAiHint: 'ecommerce mobile',
  },
  {
    id: 'customer-feedback-form',
    title: 'Customer Feedback Form',
    description: 'A web-based Feedback Form built with React and Firebase to collect feedback from customers.',
    technologies: ['React', 'Firebase', 'Material-UI'],
    githubUrl: 'https://github.com/rahulitme/-customers-_survey',
    deployUrl: 'https://customers-survey-5j16.vercel.app/',
    type: 'web',
    image: 'https://placehold.co/600x400/FCF3CF.png',
    dataAiHint: 'feedback form',
  },
  {
    id: 'traveling-web-app',
    title: 'Traveling Web App',
    description: 'Travel web app providing features like best places discovery, user guidance, hotel inquiries, and global destination information.',
    technologies: ['React', 'CSS', 'Bootstrap', 'Firebase'],
    githubUrl: 'https://github.com/rahulitme/Travel-web-application',
    deployUrl: 'https://travel-web-application.vercel.app/',
    type: 'web',
    image: 'https://placehold.co/600x400/E8DAEF.png',
    dataAiHint: 'travel booking',
  },
  {
    id: 'clock-app',
    title: 'Clock App',
    description: 'A sophisticated daily reminder application that helps users manage their schedule. Features include customizable time picker, daily notifications, and persistent storage.',
    technologies: ['Flutter', 'Dart', 'Local Storage'],
    githubUrl: 'https://github.com/rahulitme/Daily_Reminder_App',
    deployUrl: 'https://welcome-aa71e.web.app',
    type: 'mobile',
    image: 'https://placehold.co/600x400/D5F5E3.png',
    dataAiHint: 'reminder clock',
  },
  {
    id: 'library-management-system',
    title: 'Library Management System',
    description: 'A web-based library management system that shows details about college resources and information.',
    technologies: ['React', 'Node.js'],
    githubUrl: 'https://github.com/rahulitme/library-management',
    type: 'web',
    image: 'https://placehold.co/600x400/FAE5D3.png',
    dataAiHint: 'library system',
  },
  {
    id: 'weather-application',
    title: 'Weather Application',
    description: 'A Weather application that provides real-time weather updates and forecasts for any location.',
    technologies: ['React', 'OpenWeather API'],
    githubUrl: 'https://github.com/rahulitme/Weather_Web_app',
    type: 'web',
    image: 'https://placehold.co/600x400/CFD8DC.png',
    dataAiHint: 'weather forecast',
  },
  {
    id: 'bluetooth-beacon-app',
    title: 'Bluetooth Beacon App',
    description: 'An innovative application for detecting and managing nearby Bluetooth devices. The app provides real-time device discovery and connection management capabilities.',
    technologies: ['Flutter', 'Dart', 'Bluetooth API'],
    githubUrl: 'https://github.com/rahulitme/-Bluetooth-_beacon_App',
    type: 'mobile',
    image: 'https://placehold.co/600x400/FDEBD0.png',
    dataAiHint: 'bluetooth beacon',
  },
  {
    id: 'event-application',
    title: 'Event Application',
    description: 'A secure event management platform featuring phone authentication for user verification. The app streamlines event access and management while maintaining high security standards.',
    technologies: ['Flutter', 'Dart', 'Firebase Auth'],
    githubUrl: 'https://github.com/rahulitme/Event_Application',
    type: 'mobile',
    image: 'https://placehold.co/600x400/EAEDED.png',
    dataAiHint: 'event mobile',
  },
    {
    id: 'Blog Application',
    title: 'Blog Application',
    description: 'A full-stack blog application featuring CRUD operations for creating, reading, updating, and deleting blog posts. Built with modern web technologies for seamless content management.',
    technologies: ['react','nodejs','mongodb','express'],
    deployUrl:'https://v0-blog-website-requirements-rho.vercel.app/',
    githubUrl: 'https://github.com/rahulitme/Crud-operations',
    type: 'web',
    image: 'https://placehold.co/600x400/EAEDED.png',
    dataAiHint: 'blog content',
  },{
    id: 'Hotel Booking',
    title: 'Hotel Management',
    description: 'A comprehensive hotel management system that allows users to browse available rooms, make reservations, and manage bookings. Features an intuitive interface for both guests and hotel administrators.',
    technologies: ['react','nodejs','mongodb','express'],
    deployUrl:'https://rahulitme.github.io/Hotel-Management/',
    githubUrl: ' https://github.com/rahulitme/Hotel-Management',
    type: 'web',
    image: 'https://placehold.co/600x400/EAEDED.png',
    dataAiHint: 'hotel booking',
  },

  {
    id: 'Movie recommnedation',
    title: 'Movie Recommendation',
    description: 'An intelligent movie recommendation system powered by AI that suggests personalized movies based on user preferences and viewing history. Features movie search, ratings, and detailed information.',
    technologies: ['react','imdb','geminiapi'],
    deployUrl:'https://gemini-movie-verse.vercel.app//',
    githubUrl: ' https://github.com/rahulitme/gemini-movie-verse',
    type: 'web',
    image: 'https://placehold.co/600x400/EAEDED.png',
    dataAiHint: 'movie recommendation',
  },

  {
    id: 'interview-schedule-web-app',
    title: 'Interview Schedule Web App',
    description: 'A web application for scheduling and managing interviews. It allows users to book, reschedule, and cancel interviews while providing notifications and reminders.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    deployUrl: 'https://interview-schedule-web-app.vercel.app//',
    githubUrl: 'https://github.com/rahulitme/interview-schedule-web-app',
    type: 'web',
    image: 'https://placehold.co/600x400/EAEDED.png',
    dataAiHint: 'interview scheduling',
  },
  {
    id: 'staff-profile-management',
    title: 'Staff Profile Management',
    description: 'A web application for managing staff profiles, including creating, viewing, and updating staff information.',
    technologies: ['React', 'Tailwind CSS'],
    deployUrl: 'https://v0-vite-react-setup-ten.vercel.app/',
    githubUrl: 'https://github.com/rahulitme/Staff-profile-Create',
    type: 'web',
    image: 'https://placehold.co/600x400/EAEDED.png',
    dataAiHint: 'staff management',
  },


];


export const allTechnologies = Array.from(new Set(projects.flatMap(p => p.technologies))).sort();
export const allProjectTypes = Array.from(new Set(projects.map(p => p.type))).sort();
