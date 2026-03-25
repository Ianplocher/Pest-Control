import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site.config";
import {
  Bug,
  Shield,
  Home,
  Zap,
  AlertTriangle,
  Wind,
  ChevronRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Pest Control Services in Riverside CA | Riverside Pest Control",
  description:
    "Professional pest control services in Riverside, CA. We treat ants, cockroaches, rodents, spiders, termites, wasps, and more. Licensed, insured, and locally owned. Call for a free quote today.",
};

const iconMap: Record<string, React.ReactNode> = {
  bug: <Bug className="h-8 w-8 text-[#309C42]" />,
  shield: <Shield className="h-8 w-8 text-[#309C42]" />,
  home: <Home className="h-8 w-8 text-[#309C42]" />,
  zap: <Zap className="h-8 w-8 text-[#309C42]" />,
  "alert-triangle": <AlertTriangle className="h-8 w-8 text-[#309C42]" />,
  wind: <Wind className="h-8 w-8 text-[#309C42]" />,
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="bg-white border-b border-gray-200"
      >
        <div className="max-w-6xl mx-auto px-4 py-3">
          <ol className="flex items-center gap-2 text-sm text-gray-600">
            <li>
              <Link href="/" className="hover:text-[#309C42]">
                Home
              </Link>
            </li>
            <li>
              <ChevronRight className="h-4 w-4" />
            </li>
            <li className="text-gray-900 font-medium">Services</li>
          </ol>
        </div>
      </nav>

      {/* Hero / Intro */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
          <h1 className="text-3xl md:text-4xl font-bold text-[#14331A] mb-6">
            Pest Control Services in Riverside, CA
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl leading-relaxed">
            {siteConfig.brand} provides comprehensive pest control services to
            homeowners and businesses throughout Riverside and{" "}
            {siteConfig.county}. Our licensed and insured technicians are trained
            to handle the most common pests found in Southern California,
            including ants, cockroaches, rodents, spiders, termites, and wasps.
            Whether you are dealing with an active infestation or want to
            prevent one before it starts, we deliver reliable results backed by
            our satisfaction guarantee.
          </p>
        </div>
      </section>

      {/* Service Cards Grid */}
      <section className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group bg-white rounded-lg shadow hover:shadow-md transition-shadow p-6 flex flex-col border border-transparent hover:border-[#309C42]"
            >
              <div className="mb-4">{iconMap[service.icon]}</div>
              <h2 className="text-xl font-semibold text-[#14331A] mb-2 group-hover:text-[#309C42] transition-colors">
                {service.name}
              </h2>
              <p className="text-gray-600 mb-4 flex-1">{service.shortDesc}</p>
              <span className="text-[#309C42] font-medium text-sm inline-flex items-center gap-1">
                Learn More <ChevronRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#14331A] text-white">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Get Rid of Pests for Good?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact {siteConfig.brand} today for a free, no-obligation quote.
            We serve Riverside and surrounding communities including{" "}
            {siteConfig.nearbyAreas.slice(0, 4).join(", ")}, and more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/free-quote"
              className="inline-block bg-[#D7FD19] text-[#14331A] font-semibold px-8 py-3 rounded-lg hover:bg-[#c2e316] transition-colors"
            >
              Get a Free Quote
            </Link>
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="inline-block border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              Call {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
