import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserIcon } from "lucide-react";

export default function AboutMe() {
  return (
    <Card id="about-me">
      <CardHeader>
        <CardTitle className="flex items-center gap-1 text-lg">
          <UserIcon />
          <p>About Me</p>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <p>I transform complex problems into simple and elegant solutions.</p>
        <p>
          As a software engineer, I prioritize high-quality UI/UX, robust
          security, and the delivery of scalable applications. I take pride in
          meeting project timelines while always learning better ways to improve
          my technical craft.
        </p>
        <p>
          I’m looking for opportunities to join a team, learn from experienced
          developers, and work on real-world projects. My focus is on writing
          clean, maintainable code and building user-friendly solutions that
          solve actual problems.
        </p>
      </CardContent>
    </Card>
  );
}
