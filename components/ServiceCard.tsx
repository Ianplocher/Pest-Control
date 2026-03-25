import Link from "next/link";

interface ServiceCardProps {
  name: string;
  slug: string;
  shortDesc: string;
  icon: string;
}

const iconMap: Record<string, string> = {
  bug: "\uD83D\uDC1C",
  shield: "\uD83D\uDEE1\uFE0F",
  home: "\uD83C\uDFE0",
  zap: "\u26A1",
  "alert-triangle": "\u26A0\uFE0F",
  wind: "\uD83D\uDCA8",
};

export default function ServiceCard({ name, slug, shortDesc, icon }: ServiceCardProps) {
  return (
    <Link
      href={`/services/${slug}`}
      className="group block rounded-lg border border-gray-200 bg-white p-6 shadow transition-all hover:border-orange-400 hover:shadow-lg"
    >
      <div className="mb-3 text-3xl">{iconMap[icon] ?? "\uD83D\uDC1B"}</div>
      <h3 className="text-lg font-semibold text-[#14331A] group-hover:text-[#309C42]">
        {name}
      </h3>
      <p className="mt-2 text-sm text-gray-600">{shortDesc}</p>
      <span className="mt-4 inline-block text-sm font-medium text-[#309C42]">
        Learn More &rarr;
      </span>
    </Link>
  );
}
