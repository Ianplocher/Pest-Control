import Link from "next/link";
import { siteConfig } from "@/config/site.config";

export default function CTABanner() {
  return (
    <section className="bg-[#14331A] py-16">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="text-3xl font-bold text-white">
          Pests Don&apos;t Wait &mdash; Neither Should You
        </h2>
        <p className="mt-4 text-gray-300">
          Serving {siteConfig.city}, {siteConfig.state} and surrounding areas
          with fast, reliable pest control. Get your free quote today.
        </p>
        <Link
          href="/free-quote"
          className="mt-8 inline-block rounded-md bg-[#D7FD19] px-10 py-4 text-lg font-semibold text-[#14331A] transition-colors hover:bg-[#c2e316]"
        >
          Get My Free Quote
        </Link>
        <p className="mt-4 text-sm text-gray-400">
          Or call us at{" "}
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="font-medium text-white underline hover:text-orange-300"
          >
            {siteConfig.phone}
          </a>
        </p>
      </div>
    </section>
  );
}
