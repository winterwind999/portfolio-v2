import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import GitHubIcon from "@/utils/GitHubIcon";
import { GlobeIcon } from "lucide-react";
import { memo, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Inline from "yet-another-react-lightbox/plugins/inline";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

type Props = {
  project: Project;
};

const Project = ({ project }: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(0);

  const toggleOpen = (state: boolean) => () => setOpen(state);

  const updateIndex =
    (when: boolean) =>
    ({ index: current }: { index: number }) => {
      if (when === open) {
        setIndex(current);
      }
    };

  return (
    <Card>
      <CardHeader>
        <div>
          <CardTitle>{project.title}</CardTitle>
          <p className="text-justify text-sm">{project.description}</p>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap items-center gap-3">
            Built with
            {project.tools.map((tool) => (
              <Badge key={tool.title} variant="secondary" className="p-2">
                <img
                  src={tool.icon}
                  alt={tool.title}
                  width={20}
                  loading="lazy"
                />
                <p className="text-center">{tool.title}</p>
              </Badge>
            ))}
          </div>

          {project.links.length > 0 && (
            <div className="flex flex-wrap items-center gap-3">
              {project.links.map((link) => (
                <Button key={link.title} type="button" variant="link">
                  {link.type === "github" ? (
                    <GitHubIcon className="fill-primary" />
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
                    "--yarl__color_button": "var(--primary-foreground)",
                    "--yarl__color_button_hover": "var(--primary-foreground)",
                    "--yarl__color_button_active": "var(--primary-foreground)",
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
                    "--yarl__color_button": "var(--primary-foreground)",
                    "--yarl__color_button_hover": "var(--primary-foreground)",
                    "--yarl__color_button_active": "var(--primary-foreground)",
                  } as Record<string, any>,
                }}
              />
            </div>
          )}

          <ul className="ml-6 list-disc">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="text-justify">
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

const memoizedProject = memo(Project);

export default memoizedProject;
