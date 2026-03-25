interface ReviewCardProps {
  text: string;
  name: string;
  neighborhood: string;
}

export default function ReviewCard({ text, name, neighborhood }: ReviewCardProps) {
  return (
    <div className="rounded-lg bg-white p-6 shadow">
      <div className="mb-3 text-lg text-yellow-400">
        {"\u2605\u2605\u2605\u2605\u2605"}
      </div>
      <p className="text-sm leading-relaxed text-gray-700">{text}</p>
      <p className="mt-4 text-sm font-medium text-gray-500">
        &mdash; {name}, {neighborhood}
      </p>
    </div>
  );
}
