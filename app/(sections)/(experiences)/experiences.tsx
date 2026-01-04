import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BriefcaseBusinessIcon } from "lucide-react";
import Experience from "./experience";

export default function Experiences() {
  const EXPERIENCES: Experience[] = [
    {
      title: "Full Stack Developer (Intern)",
      company: "Clinica Manila",
      startYear: 2025,
      endYear: 2025,
      highlights: [
        {
          title: "Medical Examination Management System",
          descriptions: [
            "A web-based system designed to streamline the management of APE, PEME, Executive, and Diagnostic medical examinations.",
            "Built with Typescript, React, Node.js, Express.js, MySQL, Tailwind CSS, Tanstack Query, Axios, Zustand, REST API, and Socket.io",
            "Key features include pre-filled PDF generation, notifications, data analytics, a dynamic form builder, data versioning, and file encryption, decryption, viewing, and upload to cloudinary",
          ],
        },
        {
          title: "HR Portal",
          descriptions: [
            "A web application that enables HR staff to easily receive and view employees’ medical test results.",
            "Built with Typescript, React, Node.js, Express.js, MySQL, Tailwind CSS, Tanstack Query, Axios, Zustand, and REST API",
            "Supports secure viewing of uploaded medical documents and files stored in cloudinary.",
          ],
        },
      ],
    },
  ];
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
