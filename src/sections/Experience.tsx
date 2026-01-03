import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { memo } from "react";

type Props = {
  experience: Experience;
};

const Experience = ({ experience }: Props) => {
  return (
    <Card>
      <CardHeader>
        <div>
          <div className="flex items-center justify-between gap-3">
            <CardTitle>{experience.title}</CardTitle>
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
        <p className="text-sm font-semibold">Highlights</p>
        <ul className="ml-6 list-disc">
          {experience.highlights.map((highlight) => (
            <li key={highlight.title}>
              <p>{highlight.title}</p>
              <ul className="ml-6 list-disc">
                {highlight.descriptions.map((description) => (
                  <li key={description} className="text-justify">
                    {description}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

const memoizedExperience = memo(Experience);

export default memoizedExperience;
