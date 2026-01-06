"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TOOLBOXES } from "@/data/tech-stack";
import { FlaskConicalIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function TechStack() {
  const { theme } = useTheme();

  const [mounted, setMounted] = useState<boolean>(false);

  const toolboxes = TOOLBOXES(theme);

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
        {toolboxes.map((toolbox) => (
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
