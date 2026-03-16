import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CERTIFICATIONS } from "@/data/certifications";
import { AwardIcon } from "lucide-react";
import Certification from "./certification";

export default function Certifications() {
  return (
    <Card id="certifications">
      <CardHeader>
        <CardTitle className="flex items-center gap-1 text-lg">
          <AwardIcon />
          <p>Certifications</p>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {CERTIFICATIONS.map((certification) => (
          <Certification
            key={certification.title}
            certification={certification}
          />
        ))}
      </CardContent>
    </Card>
  );
}
