import Link from "next/link";

interface NeighborhoodBadgeProps {
  name: string;
}

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

export default function NeighborhoodBadge({ name }: NeighborhoodBadgeProps) {
  return (
    <Link
      href={`/service-areas/${slugify(name)}`}
      className="inline-block rounded-full bg-gray-100 px-4 py-1.5 text-sm font-medium text-[#14331A] transition-colors hover:bg-[#D7FD19] hover:text-[#14331A]"
    >
      {name}
    </Link>
  );
}
