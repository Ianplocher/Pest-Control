import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site.config";

export default function CTABanner() {
  return (
    <section className="relative py-20 md:py-24">
      {/* Background Image */}
      <Image
        src="/images/cta-home.jpg"
        alt="Beautiful Riverside CA home protected by pest control"
        fill
        className="object-cover"
        quality={80}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#0D210F]/85" />

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          Pests Don&apos;t Wait &mdash; Neither Should You
        </h2>
        <p className="mt-4 text-lg text-gray-200">
          Serving {siteConfig.city}, {siteConfig.state} and surrounding areas
          with fast, reliable pest control. Get your free quote today.
        </p>
        <Link
          href="/free-quote"
          className="mt-8 inline-block rounded-md bg-[#D7FD19] px-10 py-4 text-lg font-bold text-[#0D210F] transition-all hover:bg-[#c2e316] hover:shadow-lg shadow-md"
        >
          Get My Free Quote
        </Link>
        <p className="mt-4 text-sm text-gray-300">
          Or call us at{" "}
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="font-semibold text-white underline hover:text-[#D7FD19]"
          >
            {siteConfig.phone}
          </a>
        </p>
      </div>
    </section>
  );
}
