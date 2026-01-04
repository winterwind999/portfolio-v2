// Header
type Section = { title: string; link: string };

// Timeline
type Path = { title: string; company: string; year: string };

// Tech Stack
type Toolbox = { title: string; items: Tool[] };
type Tool = { title: string; icon: string };

// Experiences
type Experience = {
  title: string;
  company: string;
  startYear: number;
  endYear: number;
  highlights: {
    title: string;
    descriptions: string[];
  }[];
};

// Projects
type Project = {
  title: string;
  description: string;
  tools: Tool[];
  links: { type: "github" | "website"; title: string; link: string }[];
  images: { title: string; src: string }[];
  highlights: string[];
};

// ChatBot
type Message = {
  sender: "user" | "gemini";
  text: string;
};
