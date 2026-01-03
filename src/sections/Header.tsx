import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "../components/theme-provider";
import { Button } from "../components/ui/button";

const Header = () => {
  const { theme, setTheme } = useTheme();

  const sections: Section[] = [
    { title: "about me", link: "about-me" },
    { title: "tech stack", link: "tech-stack" },
    { title: "experiences", link: "experiences" },
    { title: "projects", link: "projects" },
  ];

  const scrollTo = (link: string) => {
    document.getElementById(link)?.scrollIntoView({
      behavior: "smooth",
    });
  };

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

        <div className="flex gap-3 sm:ml-auto">
          {/* <Button
            type="button"
            variant="default"
            size="icon"
            aria-label="chat-bot"
            title="Chat Bot"
          >
            <BotIcon />
          </Button> */}

          <Button
            type="button"
            variant="outline"
            size="icon"
            aria-label="theme"
            title="Light/Dark Mode"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? <SunIcon /> : <MoonIcon />}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
