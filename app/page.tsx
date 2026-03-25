import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site.config";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ServiceCard from "@/components/ServiceCard";
import ReviewCard from "@/components/ReviewCard";
import BlogCard from "@/components/BlogCard";
import NeighborhoodBadge from "@/components/NeighborhoodBadge";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title:
    "Pest Control Riverside CA | Free Quote | Riverside Pest Control",
  description:
    "Riverside Pest Control provides licensed pest control in Riverside CA. Expert exterminator services for ants, termites, rodents, spiders, cockroaches, and wasps. Family-safe treatments. Free quotes. Call (951) 555-0100.",
};

const reviews = [
  {
    text: "We had a terrible ant problem in our kitchen for months. Called Riverside Pest Control and they came out the same day. Haven't seen a single ant since. Highly recommend to anyone in Canyon Crest!",
    name: "Sarah M.",
    neighborhood: "Canyon Crest",
  },
  {
    text: "Found a black widow nest near our kids' play area. These guys were out within hours and made sure our Arlington Heights home was completely safe. Professional and thorough.",
    name: "Mike T.",
    neighborhood: "Arlington Heights",
  },
  {
    text: "Had a rodent issue in our attic. Riverside Pest Control found the entry points, sealed them up, and removed everything. No more scratching sounds at night. Worth every penny.",
    name: "Jennifer L.",
    neighborhood: "Orangecrest",
  },
  {
    text: "Cockroach infestation in our restaurant near Downtown Riverside. They were discreet, fast, and completely resolved the issue. We've been on their maintenance plan ever since.",
    name: "David R.",
    neighborhood: "Downtown Riverside",
  },
];

const howItWorks = [
  {
    step: 1,
    title: "Request Your Free Quote",
    description:
      "Fill out our online form or call us. Tell us about your pest problem, and we will schedule a convenient time to visit your Riverside home.",
  },
  {
    step: 2,
    title: "Inspection & Custom Plan",
    description:
      "A licensed pest control technician inspects your property, identifies the pest species, and creates a targeted treatment plan designed for your situation.",
  },
  {
    step: 3,
    title: "Treatment & Prevention",
    description:
      "We apply family-safe treatments to eliminate the problem and provide ongoing prevention recommendations to keep your Riverside home pest-free.",
  },
];

const whyChooseUs = [
  {
    title: "Licensed & Insured",
    description:
      "CA Structural Pest Control Board licensed technicians with full liability insurance for your peace of mind.",
  },
  {
    title: "Same-Day Service",
    description:
      "Pest emergencies happen fast. Our Riverside pest control team offers same-day service Monday through Saturday.",
  },
  {
    title: "Family & Pet Safe",
    description:
      "We use EPA-approved products and family-safe application methods so your loved ones stay protected.",
  },
  {
    title: "Satisfaction Guaranteed",
    description:
      "We stand behind every treatment. If pests return between visits, we come back at no additional cost.",
  },
];

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "PestControlService",
    name: siteConfig.brand,
    description:
      "Licensed pest control services in Riverside CA. Expert exterminator for ants, termites, rodents, spiders, cockroaches, and wasps.",
    url: `https://${siteConfig.domain}`,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    areaServed: {
      "@type": "City",
      name: "Riverside",
      addressRegion: "CA",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.state,
      postalCode: siteConfig.zip,
      addressCountry: "US",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: siteConfig.rating,
      reviewCount: siteConfig.reviewCount,
      bestRating: "5",
    },
    priceRange: "$$",
    openingHours: ["Mo-Sa 07:00-19:00", "Su 08:00-17:00"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Section 1: Hero */}
      <Hero />
      <TrustBar />

      {/* Section 2: Services Grid */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-bold text-[#14331A]">
            Pest Control Services in Riverside, CA
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
            From ant control to termite treatment, our licensed exterminators in
            Riverside CA provide comprehensive pest control services tailored to
            your home and property.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {siteConfig.services.map((service) => (
              <ServiceCard
                key={service.slug}
                name={service.name}
                slug={service.slug}
                shortDesc={service.shortDesc}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Why Choose Us */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-bold text-[#14331A]">
            Why Riverside Homeowners Choose Us
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
            Riverside Pest Control has been the trusted exterminator in Riverside
            CA since {siteConfig.foundedYear}. Here is why homeowners across the
            city count on us for reliable pest control in Riverside.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="rounded-lg bg-white p-6 text-center shadow"
              >
                <h3 className="text-lg font-semibold text-[#14331A]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: How It Works */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-center text-3xl font-bold text-[#14331A]">
            How It Works
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-gray-600">
            Getting pest control in Riverside CA has never been easier. Three
            simple steps to a pest-free home.
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {howItWorks.map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#D7FD19] text-2xl font-bold text-[#14331A]">
                  {item.step}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#14331A]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Reviews */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-bold text-[#14331A]">
            What Riverside Homeowners Are Saying
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-gray-600">
            {siteConfig.rating} stars across {siteConfig.reviewCount}+ reviews.
            Riverside pest control you can trust.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reviews.map((review) => (
              <ReviewCard
                key={review.name}
                text={review.text}
                name={review.name}
                neighborhood={review.neighborhood}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Service Areas */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-bold text-[#14331A]">
            Pest Control Service Areas in Riverside
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
            Our licensed pest control technicians serve every neighborhood in
            Riverside CA and the surrounding Inland Empire communities. Whether
            you need an exterminator in Riverside CA for your home or business, we
            provide fast and effective pest control in Riverside and beyond.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {siteConfig.neighborhoods.map((name) => (
              <NeighborhoodBadge key={name} name={name} />
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-gray-500">
            We also serve nearby areas including{" "}
            {siteConfig.nearbyAreas.join(", ")}.
          </p>
          <div className="mt-4 text-center">
            <Link
              href="/service-areas"
              className="text-sm font-medium text-[#309C42] hover:underline"
            >
              View All Service Areas &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Section 7: Blog Preview */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-bold text-[#14331A]">
            Pest Control Tips for Riverside Homeowners
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-gray-600">
            Expert advice on pest prevention and treatment from your local
            Riverside pest control professionals.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {siteConfig.blogPosts.slice(0, 3).map((post) => (
              <BlogCard
                key={post.slug}
                title={post.title}
                slug={post.slug}
                description={post.description}
              />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/blog"
              className="text-sm font-medium text-[#309C42] hover:underline"
            >
              View All Articles &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Section 8: CTA Banner */}
      <CTABanner />
    </>
  );
}
