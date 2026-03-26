export const siteConfig = {
  brand: "Riverside Pest Control",
  city: "Riverside",
  state: "CA",
  county: "Riverside County",
  zip: "92501",
  phone: "(951) 777-2049",
  phoneRaw: "9517772049",
  email: "info@riversidepestcontrol.com",
  domain: "riversidepestcontrol.com",
  formspreeId: "YOUR_FORMSPREE_ID",
  foundedYear: "2010",
  reviewCount: "127",
  rating: "4.9",
  homesProtected: "500",
  licenseNumber: "PR-12345",
  nearbyAreas: [
    "Corona",
    "Moreno Valley",
    "Norco",
    "Jurupa Valley",
    "Eastvale",
    "Perris",
  ],
  neighborhoods: [
    "Arlington Heights",
    "Canyon Crest",
    "La Sierra",
    "Wood Streets",
    "Orangecrest",
    "Hunter Park",
    "Alessandro Heights",
    "Victoria",
    "Magnolia Center",
    "Downtown Riverside",
    "University District",
    "Arlanza",
  ],
  commonPests: [
    "ants",
    "cockroaches",
    "spiders",
    "rodents",
    "termites",
    "wasps",
  ],
  services: [
    {
      slug: "ant-control",
      name: "Ant Control",
      icon: "bug",
      shortDesc:
        "Eliminate ant colonies at the source with targeted treatments.",
      keyword: "ant control riverside ca",
    },
    {
      slug: "cockroach-control",
      name: "Cockroach Control",
      icon: "shield",
      shortDesc:
        "Fast, effective cockroach extermination for Riverside homes.",
      keyword: "cockroach exterminator riverside ca",
    },
    {
      slug: "rodent-control",
      name: "Rodent Control",
      icon: "home",
      shortDesc: "Mice and rat removal with full exclusion services.",
      keyword: "rodent control riverside ca",
    },
    {
      slug: "spider-control",
      name: "Spider Control",
      icon: "zap",
      shortDesc:
        "Safe spider removal including black widows and brown recluses.",
      keyword: "spider control riverside ca",
    },
    {
      slug: "termite-control",
      name: "Termite Control",
      icon: "alert-triangle",
      shortDesc:
        "Protect your Riverside home from costly termite damage.",
      keyword: "termite control riverside ca",
    },
    {
      slug: "wasp-removal",
      name: "Wasp & Bee Removal",
      icon: "wind",
      shortDesc:
        "Safe removal of wasp nests and bee hives around your property.",
      keyword: "wasp removal riverside ca",
    },
  ],
  blogPosts: [
    {
      slug: "how-much-does-pest-control-cost-riverside",
      title: "How Much Does Pest Control Cost in Riverside CA? (2025 Guide)",
      keyword: "pest control cost riverside ca",
      description:
        "A complete breakdown of pest control pricing in Riverside CA including what affects cost and how to get the best value.",
    },
    {
      slug: "signs-you-have-termites-riverside",
      title: "5 Signs You Have a Termite Problem in Your Riverside Home",
      keyword: "signs of termites riverside ca",
      description:
        "Learn the top warning signs of termite damage specific to Riverside CA homes and what to do if you spot them.",
    },
    {
      slug: "common-pests-riverside-ca",
      title: "Most Common Pests in Riverside CA and How to Stop Them",
      keyword: "common pests riverside ca",
      description:
        "A guide to the most common household pests found in Riverside CA homes and the most effective treatments for each.",
    },
    {
      slug: "diy-vs-professional-pest-control-riverside",
      title: "DIY vs Professional Pest Control in Riverside: What Works?",
      keyword: "diy pest control riverside ca",
      description:
        "Comparing DIY pest control methods vs hiring a professional exterminator in Riverside CA. Which one actually works?",
    },
    {
      slug: "pest-control-season-riverside-ca",
      title:
        "Riverside CA Pest Season: A Month-by-Month Guide for Homeowners",
      keyword: "pest season riverside ca",
      description:
        "When are pests most active in Riverside CA? A seasonal guide to pest prevention and treatment for local homeowners.",
    },
    {
      slug: "best-pest-control-riverside-ca",
      title: "How to Find the Best Pest Control in Riverside CA (2025)",
      keyword: "best pest control riverside ca",
      description:
        "What to look for when hiring a pest control company in Riverside CA. Tips, red flags, and what questions to ask.",
    },
  ],
} as const;

export type ServiceConfig = (typeof siteConfig.services)[number];
export type BlogPostConfig = (typeof siteConfig.blogPosts)[number];
