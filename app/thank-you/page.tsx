import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site.config";

export const metadata: Metadata = {
  title: "Thank You | Riverside Pest Control",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 text-center">
      <div className="mb-8 text-6xl">&#10003;</div>
      <h1 className="text-4xl font-bold text-[#14331A]">
        Thank You &mdash; We&apos;ll Be In Touch Shortly!
      </h1>
      <p className="mx-auto mt-4 max-w-xl text-lg text-gray-600">
        Your free pest control quote request has been received. A member of our
        team will review your information and reach out to you soon.
      </p>

      {/* What Happens Next */}
      <div className="mt-12 grid gap-6 text-left md:grid-cols-3">
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-lg font-bold text-[#28812C]">
            1
          </div>
          <h3 className="font-semibold text-[#14331A]">We Review Your Request</h3>
          <p className="mt-2 text-sm text-gray-600">
            Our team reviews your pest concern and property details to prepare a
            customized solution for your Riverside home.
          </p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-lg font-bold text-[#28812C]">
            2
          </div>
          <h3 className="font-semibold text-[#14331A]">We Contact You</h3>
          <p className="mt-2 text-sm text-gray-600">
            A licensed technician will call or email you within a few hours to
            discuss your pest issue and schedule an inspection.
          </p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-lg font-bold text-[#28812C]">
            3
          </div>
          <h3 className="font-semibold text-[#14331A]">We Solve the Problem</h3>
          <p className="mt-2 text-sm text-gray-600">
            We arrive at your Riverside home, perform a thorough inspection, and
            apply targeted treatments to eliminate your pest problem.
          </p>
        </div>
      </div>

      {/* Urgent Contact */}
      <div className="mt-12 rounded-lg bg-gray-50 p-6">
        <p className="text-sm font-medium text-gray-700">
          Need immediate help? Call us now:
        </p>
        <a
          href={`tel:${siteConfig.phoneRaw}`}
          className="mt-2 inline-block text-2xl font-bold text-[#14331A] hover:text-[#309C42]"
        >
          {siteConfig.phone}
        </a>
        <p className="mt-1 text-sm text-gray-500">
          Mon&ndash;Sat 7am&ndash;7pm &bull; Sun 8am&ndash;5pm
        </p>
      </div>

      {/* While You Wait */}
      <div className="mt-12 text-left">
        <h2 className="mb-4 text-xl font-bold text-[#14331A]">
          While You Wait, Check Out These Resources
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link
            href={`/blog/${siteConfig.blogPosts[0].slug}`}
            className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
          >
            <h3 className="font-semibold text-[#14331A] hover:text-[#309C42]">
              {siteConfig.blogPosts[0].title}
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              {siteConfig.blogPosts[0].description}
            </p>
            <span className="mt-3 inline-block text-sm font-medium text-[#309C42]">
              Read More &rarr;
            </span>
          </Link>
          <Link
            href={`/blog/${siteConfig.blogPosts[1].slug}`}
            className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
          >
            <h3 className="font-semibold text-[#14331A] hover:text-[#309C42]">
              {siteConfig.blogPosts[1].title}
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              {siteConfig.blogPosts[1].description}
            </p>
            <span className="mt-3 inline-block text-sm font-medium text-[#309C42]">
              Read More &rarr;
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
