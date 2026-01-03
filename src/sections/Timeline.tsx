import { ChartGanttIcon } from "lucide-react";
import { useState } from "react";
import { Badge } from "../components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Label } from "../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";

const TIMELINE: Path[] = [
  {
    title: "Full Stack Developer (Intern)",
    company: "Clinica Manila",
    year: "2025",
  },
  {
    title: "BS Information Technology",
    company: "National University - Manila",
    year: "2025",
  },
  {
    title: "Hello World! 👋",
    company: "Wrote my first line of code",
    year: "2020",
  },
];

const Timeline = () => {
  const [pathHovered, setPathHovered] = useState<string>(TIMELINE[0].title);

  return (
    <Card onMouseLeave={() => setPathHovered(TIMELINE[0].title)}>
      <CardHeader>
        <CardTitle className="flex items-center gap-1 text-lg">
          <ChartGanttIcon />
          <p>Timeline</p>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative">
          <div className="border-muted absolute z-10 ml-1.5 h-full border-2"></div>

          <RadioGroup defaultValue={TIMELINE[0].title} value={pathHovered}>
            {TIMELINE.map((path) => (
              <div
                key={path.title}
                className="flex items-center gap-3"
                onMouseEnter={() => setPathHovered(path.title)}
              >
                <RadioGroupItem
                  value={path.title}
                  id={path.title}
                  className="z-20"
                />
                <div className="w-full">
                  <Label htmlFor={path.title}>{path.title}</Label>
                  <div className="flex flex-wrap justify-between">
                    <p className="text-sm">{path.company}</p>
                    <Badge variant="secondary">{path.year}</Badge>
                  </div>
                </div>
              </div>
            ))}
          </RadioGroup>
        </div>
      </CardContent>
    </Card>
  );
};

export default Timeline;
