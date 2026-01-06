import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EXPERIENCES } from "@/data/experiences";
import { BriefcaseBusinessIcon } from "lucide-react";
import Experience from "./experience";

export default function Experiences() {
  return (
    <Card id="experiences">
      <CardHeader>
        <CardTitle className="flex items-center gap-1 text-lg">
          <BriefcaseBusinessIcon />
          <p>Experiences</p>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {EXPERIENCES.map((experience) => (
          <Experience key={experience.title} experience={experience} />
        ))}
      </CardContent>
    </Card>
  );
}
