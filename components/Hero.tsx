import Link from "next/link";
import { siteConfig } from "@/config/site.config";

export default function Hero() {
  return (
    <section
      className="relative bg-[#14331A] py-20 md:py-28"
      style={{
        backgroundImage:
          "linear-gradient(rgba(20,51,26,0.95), rgba(20,51,26,0.95)), url(\"data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M0 40V0h40' stroke='%23ffffff08' fill='none'/%3E%3C/svg%3E\")",
      }}
    >
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h1 className="text-4xl font-bold text-white md:text-5xl">
          Pest Control in {siteConfig.city}, {siteConfig.state}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
          Trusted by {siteConfig.homesProtected}+ Riverside homeowners.
          Fast, effective, and family-safe pest solutions with a{" "}
          {siteConfig.rating}-star rating across {siteConfig.reviewCount}+ reviews.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/free-quote"
            className="rounded-md bg-[#D7FD19] px-8 py-3 text-lg font-semibold text-[#14331A] transition-colors hover:bg-[#c2e316]"
          >
            Get My Free Quote
          </Link>
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="rounded-md border-2 border-white px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-white hover:text-[#14331A]"
          >
            Call {siteConfig.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
