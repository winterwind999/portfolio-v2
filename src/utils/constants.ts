import type { Theme } from "@/components/theme-provider";

// FRONTEND
export const REACT: Tool = {
  title: "React",
  icon: "https://cdn.simpleicons.org/react",
};

export const NEXTJS = (theme: Theme): Tool => ({
  title: "Next.js",
  icon:
    theme === "light"
      ? "https://cdn.simpleicons.org/nextdotjs"
      : "https://cdn.simpleicons.org/nextdotjs/fff",
});

export const ANGULAR: Tool = {
  title: "Angular",
  icon: "https://cdn.simpleicons.org/angular/de0031",
};

export const HTML: Tool = {
  title: "HTML",
  icon: "https://cdn.simpleicons.org/html5",
};

export const CSS: Tool = {
  title: "CSS",
  icon: "https://cdn.simpleicons.org/css",
};

export const JAVASCRIPT: Tool = {
  title: "Javascript",
  icon: "https://cdn.simpleicons.org/javascript",
};

export const TYPESCRIPT: Tool = {
  title: "Typescript",
  icon: "https://cdn.simpleicons.org/typescript",
};

export const TAILWINDCSS: Tool = {
  title: "Tailwind CSS",
  icon: "https://cdn.simpleicons.org/tailwindcss",
};

export const ZUSTAND: Tool = {
  title: "Zustand",
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/zustand/zustand-original.svg",
};

export const TANSTACK_QUERY = (theme: Theme): Tool => ({
  title: "Tanstack Query",
  icon:
    theme === "light"
      ? "https://cdn.simpleicons.org/tanstack"
      : "https://cdn.simpleicons.org/tanstack/fff",
});

export const AXIOS: Tool = {
  title: "Axios",
  icon: "https://cdn.simpleicons.org/axios",
};

export const REDUX: Tool = {
  title: "Redux",
  icon: "https://cdn.simpleicons.org/redux",
};

// BACKEND
export const NODEJS: Tool = {
  title: "Node.js",
  icon: "https://cdn.simpleicons.org/node.js",
};

export const EXPRESSJS = (theme: Theme): Tool => ({
  title: "Express.js",
  icon:
    theme === "light"
      ? "https://cdn.simpleicons.org/express"
      : "https://cdn.simpleicons.org/express/fff",
});

export const NESTJS: Tool = {
  title: "NestJS",
  icon: "https://cdn.simpleicons.org/nestjs",
};

export const JAVA: Tool = {
  title: "Java",
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
};

export const SPRING_BOOT: Tool = {
  title: "Spring Boot",
  icon: "https://cdn.simpleicons.org/springboot",
};

export const MONGODB: Tool = {
  title: "MongoDB",
  icon: "https://cdn.simpleicons.org/mongodb",
};

export const MYSQL: Tool = {
  title: "MySQL",
  icon: "https://cdn.simpleicons.org/mysql",
};

export const POSTGRESQL: Tool = {
  title: "PostgreSQL",
  icon: "https://cdn.simpleicons.org/postgresql",
};

export const JWT = (theme: Theme): Tool => ({
  title: "JWT",
  icon:
    theme === "light"
      ? "https://cdn.simpleicons.org/jsonwebtokens"
      : "https://cdn.simpleicons.org/jsonwebtokens/fff",
});

export const OAUTH: Tool = {
  title: "OAUTH",
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oauth/oauth-original.svg",
};

export const REST_API = (theme: Theme): Tool => ({
  title: "REST API",
  icon:
    theme === "light"
      ? "https://img.icons8.com/?size=100&id=21893&format=png&color=000000"
      : "https://img.icons8.com/?size=100&id=21893&format=png&color=ffffff",
});

export const GRAPHQL: Tool = {
  title: "GraphQL",
  icon: "https://cdn.simpleicons.org/graphql",
};

export const SOCKETIO = (theme: Theme): Tool => ({
  title: "Socket.io",
  icon:
    theme === "light"
      ? "https://cdn.simpleicons.org/socketdotio"
      : "https://cdn.simpleicons.org/socketdotio/fff",
});

// DEVOPS & CLOUD
export const AWS: Tool = {
  title: "AWS",
  icon: "https://skillicons.dev/icons?i=aws",
};

export const DOCKER: Tool = {
  title: "Docker",
  icon: "https://cdn.simpleicons.org/docker",
};

export const GITHUB_ACTIONS: Tool = {
  title: "GitHub Actions",
  icon: "https://cdn.simpleicons.org/githubactions",
};

export const RENDER = (theme: Theme): Tool => ({
  title: "Render",
  icon:
    theme === "light"
      ? "https://cdn.simpleicons.org/render"
      : "https://cdn.simpleicons.org/render/fff",
});

export const CLOUDINARY: Tool = {
  title: "Cloudinary",
  icon: "https://cdn.simpleicons.org/cloudinary",
};

// DEVELOPER TOOLS
export const GIT: Tool = {
  title: "Git",
  icon: "https://cdn.simpleicons.org/git",
};

export const GITHUB = (theme: Theme): Tool => ({
  title: "GitHub",
  icon:
    theme === "light"
      ? "https://cdn.simpleicons.org/github"
      : "https://cdn.simpleicons.org/github/fff",
});

export const VSCODE: Tool = {
  title: "VS Code",
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
};

export const POSTMAN: Tool = {
  title: "Postman",
  icon: "https://cdn.simpleicons.org/postman",
};

export const JEST: Tool = {
  title: "Jest",
  icon: "https://cdn.simpleicons.org/jest",
};

export const JUNIT: Tool = {
  title: "JUnit",
  icon: "https://cdn.simpleicons.org/junit5",
};

export const FIGMA: Tool = {
  title: "Figma",
  icon: "https://cdn.simpleicons.org/figma",
};

// MOBILE
export const FLUTTER: Tool = {
  title: "Flutter",
  icon: "https://cdn.simpleicons.org/flutter",
};
