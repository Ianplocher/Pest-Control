import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site.config";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import NeighborhoodBadge from "@/components/NeighborhoodBadge";

export const metadata: Metadata = {
  title: "Service Areas | Pest Control Riverside CA",
  description: `${siteConfig.brand} serves all Riverside CA neighborhoods including Arlington Heights, Canyon Crest, La Sierra, Wood Streets, Orangecrest, and more. Licensed pest control near you.`,
};

export default function ServiceAreasPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <BreadcrumbNav
        items={[
          { label: "Home", href: "/" },
          { label: "Service Areas" },
        ]}
      />

      <h1 className="mt-4 text-3xl font-bold text-[#14331A] md:text-4xl">
        Pest Control Service Areas in Riverside, CA
      </h1>
      <p className="mt-4 max-w-3xl text-gray-600">
        {siteConfig.brand} provides licensed, professional pest control across
        every neighborhood in Riverside, California. From the established homes
        of Arlington Heights and the Wood Streets to the growing communities of
        Orangecrest and Alessandro Heights, our certified technicians deliver
        fast and effective pest treatments to keep your family safe. We serve
        all of Riverside CA and the surrounding Inland Empire, including nearby
        cities like {siteConfig.nearbyAreas.join(", ")}.
      </p>

      {/* Neighborhood Grid */}
      <section className="mt-12">
        <h2 className="mb-6 text-2xl font-bold text-[#14331A]">
          Riverside Neighborhoods We Serve
        </h2>
        <div className="flex flex-wrap gap-3">
          {siteConfig.neighborhoods.map((name) => (
            <NeighborhoodBadge key={name} name={name} />
          ))}
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="mt-12">
        <h2 className="mb-4 text-2xl font-bold text-[#14331A]">
          Nearby Cities We Also Serve
        </h2>
        <p className="mb-4 text-gray-600">
          In addition to every Riverside neighborhood, our pest control services
          extend to communities throughout Riverside County. Contact us to find
          out if we serve your area.
        </p>
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {siteConfig.nearbyAreas.map((area) => (
            <div
              key={area}
              className="rounded-lg border border-gray-200 bg-white px-5 py-3 text-center text-sm font-medium text-gray-700 shadow-sm"
            >
              {area}, CA
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-12 rounded-lg bg-[#14331A] p-8 text-center">
        <h2 className="text-2xl font-bold text-white">
          Get Pest Control in Your Riverside Neighborhood
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-gray-300">
          No matter where you live in Riverside CA, we have you covered. Request
          your free pest control quote today and a licensed technician will be in
          touch.
        </p>
        <Link
          href="/free-quote"
          className="mt-6 inline-block rounded-md bg-[#D7FD19] px-8 py-3 font-semibold text-[#14331A] transition-colors hover:bg-[#c2e316]"
        >
          Get My Free Quote &rarr;
        </Link>
      </section>
    </div>
  );
}
