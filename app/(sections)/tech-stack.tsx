"use client";

import {
  ANGULAR,
  AWS,
  AXIOS,
  CHATGPT,
  CLAUDE,
  CLOUDINARY,
  CSS,
  DOCKER,
  EXPRESSJS,
  FIGMA,
  GIT,
  GITHUB,
  GITHUB_ACTIONS,
  GOOGLE_GEMINI,
  GRAPHQL,
  HTML,
  JAVA,
  JAVASCRIPT,
  JEST,
  JUNIT,
  JWT,
  MONGODB,
  MYSQL,
  NESTJS,
  NEXTJS,
  NODEJS,
  OAUTH,
  POSTGRESQL,
  POSTMAN,
  REACT,
  REDUX,
  RENDER,
  REST_API,
  SOCKETIO,
  SPRING_BOOT,
  TAILWINDCSS,
  TANSTACK_QUERY,
  TYPESCRIPT,
  VERCEL,
  VSCODE,
  ZUSTAND,
} from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FlaskConicalIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function TechStack() {
  const { theme } = useTheme();

  const [mounted, setMounted] = useState<boolean>(false);

  const TOOLBOXES: Toolbox[] = [
    {
      title: "Frontend",
      items: [
        REACT,
        NEXTJS(theme),
        ANGULAR,
        HTML,
        CSS,
        JAVASCRIPT,
        TYPESCRIPT,
        TAILWINDCSS,
        ZUSTAND,
        TANSTACK_QUERY(theme),
        AXIOS,
        REDUX,
      ],
    },

    {
      title: "Backend",
      items: [
        NODEJS,
        EXPRESSJS(theme),
        NESTJS,
        JAVA,
        SPRING_BOOT,
        MONGODB,
        MYSQL,
        POSTGRESQL,
        JWT(theme),
        OAUTH,
        REST_API(theme),
        GRAPHQL,
        SOCKETIO(theme),
      ],
    },

    {
      title: "DevOps & Cloud",
      items: [
        AWS,
        DOCKER,
        GITHUB_ACTIONS,
        RENDER(theme),
        VERCEL(theme),
        CLOUDINARY,
      ],
    },

    {
      title: "AI",
      items: [CLAUDE, GOOGLE_GEMINI, CHATGPT(theme)],
    },

    {
      title: "Developer Tools",
      items: [GIT, GITHUB(theme), VSCODE, POSTMAN, JEST, JUNIT, FIGMA],
    },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Card id="tech-stack">
      <CardHeader>
        <CardTitle className="flex items-center gap-1 text-lg">
          <FlaskConicalIcon />
          <p>Tech Stack</p>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        {TOOLBOXES.map((toolbox) => (
          <div key={toolbox.title} className="flex flex-col gap-1">
            <p className="font-semibold">{toolbox.title}</p>
            <div className="flex flex-wrap gap-3">
              {toolbox.items.map((tool) => (
                <Badge key={tool.title} variant="secondary" className="p-2">
                  <img
                    src={tool.icon}
                    alt={tool.title}
                    width={20}
                    height={20}
                    className="h-5 w-5"
                    loading="lazy"
                  />
                  <p className="text-center">{tool.title}</p>
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
