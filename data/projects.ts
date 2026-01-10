import {
  CLOUDINARY,
  DOCKER,
  EXPRESSJS,
  FLUTTER,
  GITHUB_ACTIONS,
  GOOGLE_GEMINI,
  MONGODB,
  NESTJS,
  NEXTJS,
  NODEJS,
  REACT,
  REDUX,
  RENDER,
  SOCKETIO,
  TAILWINDCSS,
  TYPESCRIPT,
  ZUSTAND,
} from "@/components/icons";

export const PROJECTS = (theme: Theme): Project[] => [
  {
    title: "Portfolio",
    description:
      "A modern, interactive portfolio showcasing my work as a Software Engineer",
    tools: [TYPESCRIPT, NEXTJS(theme), TAILWINDCSS, GOOGLE_GEMINI],
    links: [
      {
        type: "github",
        title: "Sourcecode",
        link: "https://github.com/winterwind999/portfolio-v2",
      },
      {
        type: "website",
        title: "jordanfaciol.vercel.app",
        link: "https://jordanfaciol.vercel.app/",
      },
    ],
    images: [
      {
        title: "portfolio",
        src: "/assets/projects/portfolio/portfolio.webp",
      },
    ],
    highlights: [
      "Integrated a custom AI chatbot using Google Gemini for interactive profile exploration",
    ],
  },

  {
    title: "Matchy",
    description:
      "A real time full stack dating application with secure live chat and matchmaking.",
    tools: [
      TYPESCRIPT,
      NEXTJS(theme),
      NODEJS,
      NESTJS,
      ZUSTAND,
      TAILWINDCSS,
      MONGODB,
      GITHUB_ACTIONS,
      DOCKER,
      RENDER(theme),
      CLOUDINARY,
      SOCKETIO(theme),
    ],
    links: [
      { type: "github", title: "Frontend", link: "" },
      { type: "github", title: "Backend", link: "" },
      { type: "website", title: "Website", link: "" },
    ],
    images: [
      {
        title: "landing",
        src: "/assets/projects/matchy/landing.webp",
      },
      { title: "feeds", src: "/assets/projects/matchy/feeds.webp" },
      { title: "chats", src: "/assets/projects/matchy/chats.webp" },
      {
        title: "profile",
        src: "/assets/projects/matchy/profile.webp",
      },
    ],
    highlights: [
      "Used React Server Components (RSC) for optimized data fetching, Server-Side Rendering (SSR) through Server Actions for secure mutations, and Client-Side Rendering (CSR) for interactive user interfaces",
      "Backend developed using NestJS, MongoDB/Mongoose, Passport.js (JWT + Google OAuth), and Cloudinary",
      "Implemented CSRF protection and CORS",
      "Added real-time chats and notifications using WebSockets + Socket.IO",
      "Includes Feeds module with swipe-style matchmaking",
      "Supports photo and album uploads with Cloudinary optimization",
      "Fully Dockerized frontend & backend for dev and production",
      "Automated CI/CD pipeline using GitHub Actions → Docker Hub → Render Deployment",
    ],
  },

  {
    title: "Web Application of Patient Workflow System",
    description:
      "MediQueue is a Patient Workflow System that includes both a mobile and web application. It aims to simplify and improve patient data processing and care delivery",
    tools: [REACT, REDUX, NODEJS, EXPRESSJS(theme), MONGODB],
    links: [],
    images: [
      {
        title: "landing",
        src: "/assets/projects/web-mediqueue/landing.webp",
      },
      {
        title: "about",
        src: "/assets/projects/web-mediqueue/about.webp",
      },
      {
        title: "dashboard",
        src: "/assets/projects/web-mediqueue/dashboard.webp",
      },
      {
        title: "tickets",
        src: "/assets/projects/web-mediqueue/tickets.webp",
      },
      {
        title: "appointments",
        src: "/assets/projects/web-mediqueue/appointments.webp",
      },
      {
        title: "queues",
        src: "/assets/projects/web-mediqueue/queues.webp",
      },
      {
        title: "monitor-queues",
        src: "/assets/projects/web-mediqueue/monitor-queues.webp",
      },
      {
        title: "descriptive-analytics",
        src: "/assets/projects/web-mediqueue/descriptive-analytics.webp",
      },
      {
        title: "archives",
        src: "/assets/projects/web-mediqueue/archives.webp",
      },
      {
        title: "clinics",
        src: "/assets/projects/web-mediqueue/clinics.webp",
      },
    ],
    highlights: [
      "Optimized database interactions using MongoDB aggregations, pagination, and efficient search capabilities",
      "Secured the app with JWT-based authentication, role-based access control, CORS, and request logging",
      "Implemented OTP-based recovery for email address and mobile number",
      "Automated deployments using CI/CD pipelines using GitHub Actions",
      "Designed a descriptive analytics module with Chart.js for data visualization and PDF/Excel report generation",
    ],
  },

  {
    title: "Mobile Application of Patient Workflow System",
    description:
      "MediQueue is a Patient Workflow System that includes both a mobile and web application. It aims to simplify and improve patient data processing and care delivery",
    tools: [FLUTTER, NODEJS, EXPRESSJS(theme), MONGODB],
    links: [],
    images: [
      {
        title: "login",
        src: "/assets/projects/mobile-mediqueue/login.webp",
      },
      {
        title: "home",
        src: "/assets/projects/mobile-mediqueue/home.webp",
      },
      {
        title: "appointment-booking",
        src: "/assets/projects/mobile-mediqueue/appointment-booking.webp",
      },
      {
        title: "appointment-details",
        src: "/assets/projects/mobile-mediqueue/appointment-details.webp",
      },
      {
        title: "notifications",
        src: "/assets/projects/mobile-mediqueue/notifications.webp",
      },
      {
        title: "profile",
        src: "/assets/projects/mobile-mediqueue/profile.webp",
      },
    ],
    highlights: [
      "Implemented real-time data synchronization using Socket.io for web and Server-Sent Events (SSE) for mobile application",
      "Designed and developed modules such as book an appointment, book a specific doctor, tracking of queue, viewing of referral requests, tracking of test results sent, notifications, and profile",
      "Utilized shared preferences to maintain user's login state",
    ],
  },
];
