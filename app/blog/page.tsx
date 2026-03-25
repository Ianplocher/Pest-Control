import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site.config";

export const metadata: Metadata = {
  title: "Pest Control Blog | Riverside Pest Control",
  description:
    "Expert pest control tips, guides, and advice for Riverside CA homeowners. Learn about common pests, prevention strategies, and when to call a professional.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-[#309C42] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Blog</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <section className="bg-[#14331A] text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Pest Control Tips for Riverside Homeowners
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Stay informed with expert advice on pest prevention, treatment
            options, and seasonal pest guides tailored specifically for
            Riverside, CA homeowners. Our team shares the knowledge you need to
            keep your home pest-free year-round.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.blogPosts.map((post) => (
            <div
              key={post.slug}
              className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6 flex flex-col"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                <Link
                  href={`/blog/${post.slug}`}
                  className="hover:text-[#309C42] transition-colors"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 mb-4 flex-grow">
                {post.description}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="text-[#309C42] font-semibold hover:text-[#28812C] transition-colors inline-flex items-center gap-1"
              >
                Read More &rarr;
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
