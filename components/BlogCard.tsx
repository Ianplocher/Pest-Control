import Link from "next/link";

interface BlogCardProps {
  title: string;
  slug: string;
  description: string;
}

export default function BlogCard({ title, slug, description }: BlogCardProps) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow transition-shadow hover:shadow-md">
      <h3 className="text-lg font-semibold text-[#14331A]">
        <Link
          href={`/blog/${slug}`}
          className="hover:text-[#309C42] hover:underline"
        >
          {title}
        </Link>
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-600">
        {description}
      </p>
      <Link
        href={`/blog/${slug}`}
        className="mt-4 inline-block text-sm font-medium text-[#309C42] hover:underline"
      >
        Read More &rarr;
      </Link>
    </div>
  );
}
