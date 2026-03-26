import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site.config";

export default function Hero() {
  return (
    <section className="relative min-h-[500px] md:min-h-[600px] flex items-center">
      {/* Background Image */}
      <Image
        src="/images/hero-technician.jpg"
        alt="Professional pest control service in Riverside CA"
        fill
        className="object-cover"
        priority
        quality={85}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#0D210F]/80" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 py-20 text-center md:py-28">
        <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl leading-tight">
          Pest Control in {siteConfig.city}, {siteConfig.state}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-200 md:text-xl">
          Trusted by {siteConfig.homesProtected}+ Riverside homeowners.
          Fast, effective, and family-safe pest solutions with a{" "}
          {siteConfig.rating}-star rating across {siteConfig.reviewCount}+ reviews.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/free-quote"
            className="rounded-md bg-[#D7FD19] px-8 py-4 text-lg font-bold text-[#0D210F] transition-all hover:bg-[#c2e316] hover:shadow-lg shadow-md"
          >
            Get My Free Quote
          </Link>
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="rounded-md border-2 border-white px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-white hover:text-[#0D210F]"
          >
            Call {siteConfig.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
