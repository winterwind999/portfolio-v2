type Props = {
  certification: Certification;
};

export default function Certification({ certification }: Readonly<Props>) {
  return (
    <div className="flex flex-col gap-1">
      <p>{certification.title}</p>
      <p className="text-sm">{certification.organization}</p>
      <ul className="list-inside list-disc text-xs">
        {certification.description.map((desc) => (
          <li key={desc}>{desc}</li>
        ))}
      </ul>
    </div>
  );
}
