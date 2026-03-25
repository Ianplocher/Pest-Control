import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site.config";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Pest Control FAQs | Riverside CA",
  description: `Frequently asked questions about pest control in Riverside CA. Learn about costs, safety, service areas, and more from ${siteConfig.brand}.`,
};

const faqItems = [
  {
    question: "How much does pest control cost in Riverside CA?",
    answer:
      "Pest control costs in Riverside CA typically range from $150 to $300 for a one-time treatment and $40 to $70 per month for ongoing service plans. The exact price depends on the type of pest, the size of your property, and the severity of the infestation. Termite treatments tend to cost more due to the specialized techniques required. We offer free, no-obligation quotes so you can get an accurate price for your specific situation before committing to any service.",
  },
  {
    question: "How do I know if I have termites in my Riverside home?",
    answer:
      "Common signs of termites in Riverside homes include mud tubes along your foundation or walls, hollow-sounding wood when tapped, discarded wings near windows and doors, and small piles of frass (termite droppings) that look like sawdust. You may also notice bubbling or peeling paint and sagging floors or ceilings. Because Riverside's warm climate supports year-round termite activity, we recommend annual inspections even if you do not see visible signs. Early detection can save thousands of dollars in structural repairs.",
  },
  {
    question: "Is pest control safe for my kids and pets?",
    answer:
      "Yes, the treatments we use are safe for families and pets. We exclusively use EPA-approved products and apply them using targeted methods that minimize exposure to non-pest areas of your home. Our technicians are trained in safe application techniques and will provide specific instructions for each treatment, such as keeping pets off treated surfaces until they dry. We also offer green and organic pest control options for families who prefer the most natural approach possible.",
  },
  {
    question: "Do you offer same-day pest control in Riverside?",
    answer:
      "Yes, we offer same-day pest control service in Riverside Monday through Saturday. For the best availability, we recommend calling before noon. Same-day service is especially important for urgent situations like wasp nests near entryways, black widow sightings around children's play areas, or active rodent infestations. Our dispatch team prioritizes emergency calls and will do everything possible to get a licensed technician to your Riverside home as quickly as possible.",
  },
  {
    question: "How long does a pest control treatment take?",
    answer:
      "Most pest control treatments take between 30 and 90 minutes depending on the type of pest, the size of your home, and the treatment method used. A standard ant or cockroach treatment for an average-sized Riverside home typically takes about 45 minutes. Termite treatments and rodent exclusion work may take longer. Your technician will provide preparation instructions beforehand and follow-up care instructions after the treatment is complete.",
  },
  {
    question:
      "How often should I get pest control service in Riverside?",
    answer:
      "We recommend quarterly pest control service for most Riverside homes. The warm, dry climate in the Inland Empire keeps pests active year-round, so regular treatments help maintain a protective barrier around your property. For homes with severe infestations or properties near open fields and waterways, monthly service may be more appropriate until the situation is under control. After the initial treatment period, your technician will recommend the best ongoing schedule for your specific property.",
  },
  {
    question: "What pests are most common in Riverside CA?",
    answer:
      "The most common pests in Riverside CA include Argentine ants, German cockroaches, black widow spiders, roof rats and house mice, subterranean termites, and paper wasps. Riverside's warm climate and proximity to agricultural areas create ideal conditions for pest activity throughout the entire year. Seasonal patterns affect which pests are most active: ants and spiders increase in spring and summer, rodents seek shelter indoors during fall and winter, and termites swarm in the warmer months.",
  },
  {
    question: "Do I need to leave my home during treatment?",
    answer:
      "For most standard pest control treatments, you do not need to leave your home. Our products are applied in targeted areas and dry within 30 to 60 minutes. We will let you know if any rooms should be temporarily avoided during application. The exception is full-structure fumigation for severe termite infestations, which requires vacating the home for two to three days. Your technician will explain exactly what to expect before any treatment begins.",
  },
  {
    question: "What areas of Riverside do you serve?",
    answer:
      "We serve every neighborhood in Riverside CA including Arlington Heights, Canyon Crest, La Sierra, Wood Streets, Orangecrest, Hunter Park, Alessandro Heights, Victoria, Magnolia Center, Downtown Riverside, University District, and Arlanza. We also provide pest control services to nearby communities including Corona, Moreno Valley, Norco, Jurupa Valley, Eastvale, and Perris. If you are unsure whether we serve your area, give us a call and we will let you know.",
  },
  {
    question:
      "Are your pest control technicians licensed in California?",
    answer:
      "Yes, all of our pest control technicians are licensed by the California Structural Pest Control Board (SPCB). We carry full liability insurance and workers compensation coverage. Our team members complete ongoing continuing education to stay current on the latest pest control methods, products, and safety protocols. We are proud to maintain the highest professional standards in the industry and are happy to provide our license information upon request.",
  },
];

export default function FAQPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="mx-auto max-w-3xl px-4 py-8">
        <BreadcrumbNav
          items={[
            { label: "Home", href: "/" },
            { label: "FAQ" },
          ]}
        />

        <h1 className="mt-4 text-3xl font-bold text-[#14331A] md:text-4xl">
          Pest Control FAQs &mdash; Riverside, CA
        </h1>
        <p className="mt-4 text-gray-600">
          Have questions about pest control in Riverside? Below are answers to
          the most common questions our customers ask. If you need additional
          information, feel free to contact us or request a free quote.
        </p>

        <div className="mt-8">
          <FAQAccordion items={faqItems} />
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-lg bg-gray-50 p-8 text-center">
          <h2 className="text-xl font-bold text-[#14331A]">
            Still Have Questions?
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Our team is ready to help. Get a free pest control quote or explore
            our services to learn more.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/free-quote"
              className="rounded-md bg-[#D7FD19] px-6 py-3 text-sm font-semibold text-[#14331A] transition-colors hover:bg-[#c2e316]"
            >
              Get My Free Quote &rarr;
            </Link>
            <Link
              href="/services"
              className="rounded-md border border-gray-300 px-6 py-3 text-sm font-semibold text-[#14331A] transition-colors hover:bg-gray-100"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
