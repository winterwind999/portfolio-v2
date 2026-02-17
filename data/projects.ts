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
    description: "A modern developer portfolio.",
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
      "Integrated a custom AI chatbot using Google Gemini to enable interactive exploration of experience and work.",
    ],
  },

  {
    title: "Matchy",
    description:
      "A full-stack, real-time dating application with live messaging and matchmaking.",
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
      {
        type: "github",
        title: "Frontend",
        link: "https://github.com/winterwind999/web_dating_app_frontend",
      },
      {
        type: "github",
        title: "Backend",
        link: "https://github.com/winterwind999/web_dating_app_backend",
      },
      {
        type: "website",
        title: "https://matchy-1uri.onrender.com",
        link: "https://matchy-1uri.onrender.com",
      },
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
      "Engineered a secure authentication system using Google OAuth and JWT with Passport.js, reinforced by CSRF protection and CORS to safeguard user sessions and personal data.",
      "Automated deployment and delivery pipelines, reducing manual deployment effort and errors by implementing CI/CD with GitHub Actions, Docker, and containerized releases to Render.",
    ],
  },

  {
    title: "Web Application of Patient Workflow System",
    description:
      "A full-stack, efficient patient data processing application to centralize patient workflows and improve overall system responsiveness.",
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
      "Optimized MongoDB aggregations and search patterns to speed up data handling, reducing query time and improving data retrieval efficiency.",
      "Strengthened data security and access control through JWT authentication, RBAC, and OTP based account recovery for email and mobile users.",
      "Enabled data-driven decision-making using analytics dashboards with automated PDF/Excel reports.",
      "Automated testing and deployment using GitHub Actions for consistent and reliable releases.",
    ],
  },

  {
    title: "Mobile Application of Patient Workflow System",
    description: "A full-featured patient workflow mobile application.",
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
      "Implemented real-time data synchronization using Socket.io for web and SSE for mobile, ensuring consistent patient information across platforms.",
      "Developed appointment, queue, referral, test result tracking, notification, and profile modules, improving patient engagement and streamlining care workflows.",
      "Maintained seamless user experience by persisting login state with shared preferences, reducing repeated logins and improving usability.",
    ],
  },
];
