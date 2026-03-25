import type { Metadata } from "next";
import { siteConfig } from "@/config/site.config";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import QuoteForm from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Free Pest Control Quote | Riverside CA",
  description: `Request your free pest control quote from ${siteConfig.brand}. Licensed exterminators serving all Riverside CA neighborhoods. No obligation, fast response.`,
};

export default function FreeQuotePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <BreadcrumbNav
        items={[
          { label: "Home", href: "/" },
          { label: "Free Quote" },
        ]}
      />

      <div className="mt-4 text-center">
        <h1 className="text-3xl font-bold text-[#14331A] md:text-4xl">
          Get Your Free Pest Control Quote in Riverside, CA
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-gray-600">
          Fill out the form below and a licensed pest control technician will
          contact you with a customized, no-obligation quote for your Riverside
          home or business.
        </p>

        {/* Trust Badges */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
          <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <svg
              className="h-5 w-5 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            100% Free
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <svg
              className="h-5 w-5 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            No Obligation
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <svg
              className="h-5 w-5 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            Licensed &amp; Insured
          </div>
        </div>
      </div>

      {/* Two-Column Layout */}
      <div className="mt-10 grid gap-10 lg:grid-cols-5">
        {/* Left: Form */}
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm lg:col-span-3">
          <QuoteForm title="Request Your Free Quote" />
        </div>

        {/* Right: Sidebar */}
        <div className="space-y-6 lg:col-span-2 lg:sticky lg:top-24 lg:self-start">
          {/* Trust Signals */}
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-lg font-bold text-[#14331A]">
              Why Choose {siteConfig.brand}?
            </h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <svg
                  className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                CA Structural Pest Control Board Licensed
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Family and pet safe treatments
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Same-day service available Mon&ndash;Sat
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {siteConfig.homesProtected}+ Riverside homes protected
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Satisfaction guaranteed
              </li>
            </ul>
          </div>

          {/* Phone CTA */}
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 text-center shadow-sm">
            <p className="text-sm font-medium text-gray-600">
              Prefer to call?
            </p>
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="mt-2 inline-block text-2xl font-bold text-[#14331A] hover:text-[#309C42]"
            >
              {siteConfig.phone}
            </a>
            <p className="mt-2 text-xs text-gray-500">
              Mon&ndash;Sat 7am&ndash;7pm &bull; Sun 8am&ndash;5pm
            </p>
          </div>

          {/* Rating Badge */}
          <div className="rounded-lg border border-gray-200 bg-white p-6 text-center shadow-sm">
            <div className="text-2xl text-yellow-400">
              &#9733;&#9733;&#9733;&#9733;&#9733;
            </div>
            <p className="mt-2 text-lg font-bold text-[#14331A]">
              {siteConfig.rating}/5 Rating
            </p>
            <p className="text-sm text-gray-500">
              Based on {siteConfig.reviewCount}+ reviews
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
