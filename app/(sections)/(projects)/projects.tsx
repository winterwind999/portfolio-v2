"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PROJECTS } from "@/data/projects";
import { FolderIcon } from "lucide-react";
import { useTheme } from "next-themes";
import Project from "./project";

export default function Projects() {
  const { theme } = useTheme();

  const projects = PROJECTS(theme);

  return (
    <Card id="projects">
      <CardHeader>
        <CardTitle className="flex items-center gap-1 text-lg">
          <FolderIcon />
          <p>Projects</p>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        {projects.map((project) => (
          <Project key={project.title} project={project} />
        ))}
      </CardContent>
    </Card>
  );
}
