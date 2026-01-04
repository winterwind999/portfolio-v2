import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Props = {
  experience: Experience;
};

export default function Experience({ experience }: Props) {
  return (
    <Card>
      <CardHeader>
        <div>
          <div className="flex items-center justify-between gap-3">
            <CardTitle>
              <p>{experience.title}</p>
            </CardTitle>
            <Badge variant="secondary" className="text-sm">
              {experience.startYear === experience.endYear
                ? experience.endYear
                : `${experience.startYear} - ${experience.endYear}`}
            </Badge>
          </div>
          <p>{experience.company}</p>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm">Highlights</p>
        <ul className="ml-6 list-disc">
          {experience.highlights.map((highlight) => (
            <li key={highlight.title}>
              <p>{highlight.title}</p>
              <ul className="ml-6 list-disc">
                {highlight.descriptions.map((description) => (
                  <li key={description}>{description}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
