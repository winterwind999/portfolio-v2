"use client";

import { GITHUB_SVG } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GlobeIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import { Inline, Zoom } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/styles.css";

type Props = {
  project: Project;
};

export default function Project({ project }: Readonly<Props>) {
  const [open, setOpen] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(0);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    const mount = () => setMounted(true);
    mount();
  }, []);

  const toggleOpen = (state: boolean) => () => setOpen(state);

  const updateIndex =
    (when: boolean) =>
    ({ index: current }: { index: number }) => {
      if (when === open) {
        setIndex(current);
      }
    };

  if (!mounted) {
    return null;
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col gap-2">
          <CardTitle>{project.title}</CardTitle>
          <p className="text-sm">{project.description}</p>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap items-center gap-3">
            Built with
            {project.tools.map((tool) => (
              <Badge key={tool.title} variant="secondary" className="p-2">
                <Image
                  src={tool.icon}
                  alt={tool.title}
                  width={20}
                  height={20}
                  className="h-5 w-5"
                  loading="lazy"
                  unoptimized
                />
                <p className="text-center">{tool.title}</p>
              </Badge>
            ))}
          </div>

          {project.links.length > 0 && (
            <div className="flex flex-wrap items-center gap-3">
              {project.links.map((link) => (
                <Button
                  key={link.title}
                  type="button"
                  variant="link"
                  onClick={() => {
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

          {project.images.length > 0 && (
            <div>
              <Lightbox
                index={index}
                slides={project.images}
                plugins={[Inline, Zoom]}
                on={{
                  view: updateIndex(false),
                  click: toggleOpen(true),
                }}
                carousel={{
                  padding: 0,
                  spacing: 0,
                  imageFit: "cover",
                }}
                inline={{
                  style: {
                    width: "100%",
                    cursor: "pointer",
                    aspectRatio: "4 / 1",
                    "--yarl__color_button": "#fff",
                    "--yarl__color_button_hover": "#fff",
                    "--yarl__color_button_active": "#fff",
                  } as React.CSSProperties,
                }}
              />

              <Lightbox
                open={open}
                close={toggleOpen(false)}
                index={index}
                slides={project.images}
                plugins={[Zoom]}
                on={{ view: updateIndex(true) }}
                animation={{ fade: 0 }}
                controller={{
                  closeOnPullDown: true,
                  closeOnBackdropClick: true,
                }}
                styles={{
                  container: {
                    "--yarl__color_button": "#fff",
                    "--yarl__color_button_hover": "#fff",
                    "--yarl__color_button_active": "#fff",
                  } as Record<string, string | number>,
                }}
              />
            </div>
          )}

          <ul className="ml-6 list-disc">
            {project.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
