"use client";

import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Header() {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState<boolean>(false);

  const sections: Section[] = [
    { title: "about me", link: "about-me" },
    { title: "tech stack", link: "tech-stack" },
    { title: "experiences", link: "experiences" },
    { title: "projects", link: "projects" },
  ];

  useEffect(() => {
    const mount = () => setMounted(true);
    mount();
  }, []);

  const scrollTo = (link: string) => {
    document.getElementById(link)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  if (!mounted) {
    return null;
  }

  return (
    <nav>
      <div className="flex flex-wrap items-center gap-3">
        {sections.map((section) => (
          <button
            key={section.title}
            type="button"
            onClick={() => scrollTo(section.link)}
            className="text-foreground/60 hover:text-foreground font-semibold"
          >
            {section.title}
          </button>
        ))}

        <Button
          type="button"
          variant="outline"
          size="icon"
          aria-label="theme"
          title="Light/Dark Mode"
          className="sm:ml-auto"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? <SunIcon /> : <MoonIcon />}
        </Button>
      </div>
    </nav>
  );
}
