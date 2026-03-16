"use client";

import { MotionContainer, MotionItem } from "@/components/motion-wrapper";
import { Badge } from "@/components/ui/badge";
import { ALL_TOOLBOXES } from "@/data/tech-stack";
import { ArrowLeftIcon } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ViewAllTechStack() {
  const { theme } = useTheme();

  const [mounted, setMounted] = useState<boolean>(false);

  const allToolboxes = ALL_TOOLBOXES(theme);

  useEffect(() => {
    const mount = () => setMounted(true);
    mount();
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="mx-3 my-6 flex min-h-dvh justify-center">
      <MotionContainer className="flex flex-col gap-3 md:m-0 md:w-1/2">
        <MotionItem>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-6">
              <Link
                aria-label="back-to-home"
                href="/"
                className="flex items-center gap-1 text-sm hover:underline hover:underline-offset-4"
              >
                <ArrowLeftIcon className="size-4" /> Back to Home
              </Link>
              <h1 className="text-lg font-bold">Tech Stack</h1>
            </div>
            <div className="flex flex-col gap-6">
              {allToolboxes.map((toolbox) => (
                <div key={toolbox.title} className="flex flex-col gap-1">
                  <p className="font-semibold">{toolbox.title}</p>
                  <div className="flex flex-wrap gap-3">
                    {toolbox.items.map((tool) => (
                      <Badge
                        key={tool.title}
                        variant="secondary"
                        className="p-2"
                      >
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
                </div>
              ))}
            </div>
          </div>
        </MotionItem>
      </MotionContainer>
    </div>
  );
}
