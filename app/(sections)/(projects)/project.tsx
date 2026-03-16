"use client";

import { GITHUB_SVG } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GlobeIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {
  project: Project;
};

export default function Project({ project }: Readonly<Props>) {
  const router = useRouter();

  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    const mount = () => setMounted(true);
    mount();
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Card
      className="hover:ring-primary/20 cursor-pointer hover:ring"
      onClick={() => router.push(`/projects/${project.slug}`)}
    >
      <CardHeader>
        <div className="flex flex-col gap-2">
          <CardTitle>{project.title}</CardTitle>
          <p className="text-sm">{project.description}</p>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-3">
          {project.links.length > 0 && (
            <div className="flex flex-wrap items-center gap-3">
              {project.links.map((link) => (
                <Button
                  key={link.title}
                  type="button"
                  variant="link"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(link.link, "_blank", "noopener,noreferrer");
                  }}
                >
                  {link.type === "github" ? (
                    <GITHUB_SVG className="fill-primary" />
                  ) : (
                    <GlobeIcon />
                  )}

                  <p>{link.title}</p>
                </Button>
              ))}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
