import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site.config";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { ChevronRight, Phone } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Content database for all 6 service pages                          */
/* ------------------------------------------------------------------ */

interface ServiceContent {
  intro: string;
  signs: string[];
  treatmentApproach: string;
  whyActQuickly: string;
  faqs: { question: string; answer: string }[];
  relatedServices: string[];
  relatedBlog: string;
}

const serviceContent: Record<string, ServiceContent> = {
  /* ---- ANT CONTROL ---- */
  "ant-control": {
    intro:
      "Riverside homeowners know all too well how persistent ant infestations can be. The warm, dry climate of Riverside, CA creates ideal conditions for Argentine ants, fire ants, and carpenter ants to establish large colonies in and around residential properties. If you have spotted long ant trails streaming across your kitchen counter, around your foundation, or through cracks in the walls, you need professional ant control in Riverside before the problem escalates. At Riverside Pest Control, our licensed ant exterminators understand the unique ant species that thrive in the Inland Empire. We use scientifically proven baiting systems and perimeter treatments designed specifically for Riverside pest pressures. Ant colonies in Riverside can contain hundreds of thousands of workers, which means a single can of store-bought spray will never reach the queen. Our Riverside ant control technicians locate the colony, apply targeted treatments, and create a lasting barrier so ants stay out of your home for good. Do not let ants take over your Riverside property — call for a free ant control quote today.",

    signs: [
      "Visible ant trails along baseboards, counters, or exterior walls",
      "Small mounds of dirt or sand near your foundation or in your yard",
      "Fine wood shavings or sawdust near wooden structures, indicating carpenter ants",
      "Winged ants (swarmers) appearing indoors, especially near windows",
      "Ants found inside food packaging or around pet food bowls",
      "Persistent ant activity despite repeated DIY spray treatments",
    ],

    treatmentApproach:
      "Our Riverside ant control program begins with a thorough inspection of your home and property to identify the species present, locate active colonies, and find entry points. We deploy commercial-grade gel and granular baiting systems that worker ants carry back to the colony, eliminating the queen and the entire nest at the source. We then apply a long-lasting perimeter treatment around your home's foundation, sealing cracks and applying residual barriers in key entry zones. For carpenter ant infestations in Riverside homes, we may use targeted dust applications inside wall voids. Every treatment plan includes a follow-up visit and our satisfaction guarantee, so you can trust that the ants are gone for good.",

    whyActQuickly:
      "Ant colonies grow rapidly in Riverside's warm climate, and delaying treatment allows the infestation to spread to multiple areas of your home. Carpenter ants, which are common in older Riverside neighborhoods like Wood Streets and Arlington Heights, can cause serious structural damage by hollowing out wooden beams and framing over time. Argentine ants contaminate food and can introduce bacteria to kitchen surfaces. Fire ants create painful stinging hazards in yards where children and pets play. The longer you wait, the larger the colony becomes and the more expensive treatment will be. Acting quickly saves you money and protects your family.",

    faqs: [
      {
        question:
          "How much does ant control cost in Riverside, CA?",
        answer:
          "Ant control in Riverside typically costs between $150 and $350 for an initial treatment depending on the severity of the infestation and the size of your property. Ongoing quarterly prevention plans start at $89 per visit. We offer free inspections and quotes so you know the exact cost before we begin any work.",
      },
      {
        question:
          "How long does it take to get rid of ants in a Riverside home?",
        answer:
          "Most ant infestations in Riverside homes are resolved within 7 to 14 days after the initial treatment. Our baiting systems work by allowing worker ants to carry the product back to the colony, which takes several days to fully eliminate the queen and all workers. You may see increased ant activity in the first 48 hours as ants are attracted to the bait — this is a sign that the treatment is working.",
      },
      {
        question:
          "Why do I keep getting ants in my Riverside house even after spraying?",
        answer:
          "Over-the-counter sprays kill only the ants you can see, but they do not reach the colony or the queen. In Riverside's climate, ant colonies can contain hundreds of thousands of ants, and the queen continues producing new workers even after surface ants are sprayed. Professional baiting systems solve this by targeting the colony at its source. Our licensed technicians also seal entry points and apply perimeter barriers to prevent reinfestation.",
      },
    ],

    relatedServices: ["cockroach-control", "termite-control"],
    relatedBlog: "common-pests-riverside-ca",
  },

  /* ---- COCKROACH CONTROL ---- */
  "cockroach-control": {
    intro:
      "Cockroaches are one of the most common and distressing pest problems in Riverside, CA. The warm temperatures and abundant moisture sources found in Riverside homes make them a haven for German cockroaches, American cockroaches, and Oriental cockroaches. If you have spotted roaches scurrying across your floor at night or noticed a musty odor in your kitchen or bathroom, you need professional cockroach control in Riverside right away. At Riverside Pest Control, our cockroach exterminators in Riverside use a multi-pronged approach combining gel baits, insect growth regulators, and crack-and-crevice treatments to eliminate roaches at every life stage. Cockroach infestations in Riverside spread fast — a single German cockroach egg case contains up to 40 nymphs, and one female can produce multiple cases in her lifetime. Our Riverside cockroach control experts stop the reproductive cycle and flush roaches from their hiding spots so your home is truly pest-free. If you are searching for a cockroach exterminator in Riverside, CA, contact us for a free inspection today.",

    signs: [
      "Small dark droppings that resemble ground pepper or coffee grounds near cabinets and appliances",
      "Brown, oval-shaped egg cases (oothecae) in hidden areas like behind refrigerators or under sinks",
      "A musty, oily odor that gets stronger as the infestation grows",
      "Live roach sightings at night when you turn on a light in the kitchen or bathroom",
      "Smear marks or streaks along walls, baseboards, or countertops",
      "Shed skins from nymphs as cockroaches molt through their growth stages",
    ],

    treatmentApproach:
      "Our Riverside cockroach control program starts with a detailed inspection to identify the species, locate harborage areas, and assess the severity of the infestation. We apply professional gel baits in cracks, crevices, and voids where cockroaches nest — this targets roaches where they live, not just where they wander. We also use insect growth regulators (IGRs) that prevent nymphs from maturing into reproducing adults, breaking the breeding cycle. For heavy infestations common in some Riverside apartment complexes and older homes, we perform targeted crack-and-crevice applications and dust wall voids. Every treatment includes sanitation recommendations and follow-up visits to ensure complete elimination.",

    whyActQuickly:
      "Cockroaches are more than a nuisance — they are a genuine health hazard. In Riverside homes, cockroach droppings, shed skins, and saliva are known triggers for asthma and allergies, especially in children. Roaches carry bacteria such as Salmonella and E. coli on their bodies and contaminate food and cooking surfaces as they move through your kitchen. A single pair of German cockroaches can produce thousands of offspring within a year if left untreated. The longer you wait, the deeper roaches embed themselves into wall voids, electrical boxes, and plumbing chases — making treatment more difficult and costly. Early professional intervention is always the most effective and affordable approach.",

    faqs: [
      {
        question:
          "What types of cockroaches are common in Riverside, CA?",
        answer:
          "The three most common cockroach species in Riverside are German cockroaches, American cockroaches, and Oriental cockroaches. German cockroaches are small, light-brown roaches that infest kitchens and bathrooms indoors. American cockroaches are the large, reddish-brown roaches often called water bugs that come in from sewers and drains. Oriental cockroaches are dark, shiny roaches that prefer cool, damp areas like basements and crawl spaces. Each species requires a different treatment strategy.",
      },
      {
        question:
          "Are cockroaches in Riverside dangerous to my health?",
        answer:
          "Yes. Cockroaches are a significant health concern in Riverside homes. They carry bacteria like Salmonella, E. coli, and Staphylococcus on their bodies and legs, contaminating food and surfaces. Their droppings and shed skins are recognized allergens and asthma triggers, particularly for children and the elderly. The World Health Organization identifies cockroaches as carriers of intestinal diseases. Professional extermination is the best way to eliminate these health risks.",
      },
      {
        question:
          "How do I prevent cockroaches from coming back after treatment in Riverside?",
        answer:
          "After our Riverside cockroach treatment, we recommend sealing cracks around pipes and utility entries, fixing any water leaks promptly, storing food in airtight containers, taking out trash regularly, and reducing clutter that provides hiding spots. Our quarterly maintenance plans are the best long-term defense — we reapply barriers and monitor for any new activity so you stay roach-free year-round.",
      },
    ],

    relatedServices: ["ant-control", "rodent-control"],
    relatedBlog: "common-pests-riverside-ca",
  },

  /* ---- RODENT CONTROL ---- */
  "rodent-control": {
    intro:
      "Mice and rats are a serious problem for Riverside homeowners, especially during the cooler fall and winter months when rodents seek shelter inside attics, walls, and garages. Riverside's mix of older residential neighborhoods, citrus groves, and open fields creates the perfect environment for roof rats, Norway rats, and house mice to thrive. If you are hearing scratching sounds in your ceiling at night, finding small dark droppings in your kitchen drawers, or noticing gnaw marks on food packaging, you need professional rodent control in Riverside immediately. Riverside Pest Control provides comprehensive rodent removal and exclusion services designed to eliminate existing infestations and seal your home against future entry. Our Riverside rodent control technicians use a combination of strategic trapping, sanitation recommendations, and structural exclusion to solve the problem at its root. As an experienced rodent exterminator in Riverside, CA, we understand the entry points, nesting habits, and travel routes that rodents use in local homes. Contact us today for a free rodent inspection in Riverside.",

    signs: [
      "Small, dark droppings found in kitchen drawers, pantries, along walls, or in the attic",
      "Gnaw marks on food packaging, wires, wood, or plastic materials",
      "Scratching, scurrying, or squeaking sounds coming from walls or ceilings at night",
      "Nesting material such as shredded paper, fabric, or insulation in hidden areas",
      "Grease marks or rub marks along baseboards and walls where rodents travel",
      "A musky, ammonia-like odor from rodent urine, especially in enclosed spaces",
    ],

    treatmentApproach:
      "Our Riverside rodent control process begins with a comprehensive inspection of your home, attic, crawl space, and exterior to identify entry points, nesting sites, and the rodent species involved. We deploy tamper-resistant trapping stations in strategic locations along travel routes to rapidly reduce the active population. Simultaneously, we perform structural exclusion — sealing gaps, cracks, and openings around your roofline, foundation, utility penetrations, and vents with professional-grade materials that rodents cannot chew through. We also provide sanitation guidance to eliminate food and water sources that attract rodents. Our program includes follow-up visits to monitor trap stations, remove captured rodents, and verify that all exclusion points are holding. This integrated approach ensures complete rodent removal and long-term prevention for your Riverside home.",

    whyActQuickly:
      "Rodents pose serious risks to both your property and your family's health. In Riverside homes, rats and mice gnaw on electrical wiring inside walls and attics, creating a real fire hazard — rodent-damaged wiring is a leading cause of unexplained house fires nationwide. Rodents also contaminate food and surfaces with droppings, urine, and hair, and they can transmit diseases including Hantavirus, Salmonella, and Leptospirosis. A single pair of mice can produce up to 60 offspring per year, and roof rats breed at a similar pace. The longer rodents occupy your home, the more damage they do to insulation, ductwork, and stored belongings. Prompt professional intervention is essential to stop the damage and protect your household.",

    faqs: [
      {
        question:
          "What is the difference between mice and rats in Riverside homes?",
        answer:
          "House mice are small, about 3 to 4 inches long with large ears relative to their body. They typically nest inside walls, cabinets, and storage areas. Roof rats are the most common rat species in Riverside — they are larger, 6 to 8 inches long with a long thin tail, and prefer to nest in attics, palm trees, and upper areas of structures. Norway rats are stockier and tend to burrow in the ground near foundations. Each species requires different trapping and exclusion strategies, which is why professional identification matters.",
      },
      {
        question:
          "How do rodents get into my Riverside home?",
        answer:
          "Rodents in Riverside enter homes through surprisingly small openings. Mice can squeeze through a gap the width of a dime, and rats can fit through a hole the size of a quarter. Common entry points in Riverside homes include gaps around roofline edges, openings where utility pipes and wires enter the structure, damaged attic vents, garage door seals, and gaps under doors. Overhanging tree branches and dense vegetation also give roof rats access to your roofline. Our exclusion service identifies and seals all these entry points.",
      },
      {
        question:
          "Is rodent control in Riverside safe for my pets and children?",
        answer:
          "Absolutely. Our Riverside rodent control methods prioritize safety. We use tamper-resistant, locked trapping stations that pets and children cannot access. We do not use loose rodenticide baits inside living spaces. All products and methods we use are approved by the EPA and applied by licensed, trained technicians. We also provide guidance on how to keep your family and pets safe during and after the treatment process.",
      },
    ],

    relatedServices: ["cockroach-control", "spider-control"],
    relatedBlog: "how-much-does-pest-control-cost-riverside",
  },

  /* ---- SPIDER CONTROL ---- */
  "spider-control": {
    intro:
      "Riverside, CA is home to several spider species, including the venomous black widow and the brown recluse, both of which pose a genuine health risk to families and pets. The warm Riverside climate and abundance of insects that spiders feed on make local homes especially susceptible to spider infestations. If you are finding webs in the corners of your garage, seeing spiders in your bathtub or closets, or have discovered a black widow under outdoor furniture, you need professional spider control in Riverside right away. At Riverside Pest Control, our spider exterminators in Riverside combine targeted web removal, perimeter treatments, and harborage reduction to eliminate spiders from your property. Many Riverside homeowners try to manage spiders with general bug spray, but this approach fails because spiders walk on the tips of their legs and often avoid treated surfaces. Our specialized spider control treatments in Riverside are designed to address spider biology directly, using residual products applied to web attachment points, entry zones, and exterior harborage areas. If you are looking for a reliable spider exterminator in Riverside, CA, call us for a free inspection and same-day service.",

    signs: [
      "Webs accumulating in corners of rooms, garages, sheds, and under eaves",
      "Egg sacs attached to webs, walls, or hidden surfaces — each can contain hundreds of spiderlings",
      "Frequent spider sightings indoors, especially in bathrooms, closets, and storage areas",
      "Black widows identified by their glossy black body and red hourglass marking on the underside",
      "Unexplained bite marks that become red, swollen, or develop a blister",
      "Large numbers of other insects in your home, which attract and sustain spider populations",
    ],

    treatmentApproach:
      "Our Riverside spider control program starts with a thorough property inspection to identify spider species, locate active web sites, and find harborage areas such as woodpiles, dense ground cover, and cluttered storage. We physically remove all accessible webs and egg sacs from the interior and exterior of your home. We then apply a residual perimeter spray around the foundation, window frames, door frames, eaves, and other exterior attachment points where spiders build webs. Interior crack-and-crevice treatments target areas where spiders hide and travel. We also address the root cause by reducing the insect prey population around your home with targeted exterior treatments. Our ongoing spider prevention plans for Riverside homes include quarterly perimeter applications and web removal to keep your property spider-free throughout the year.",

    whyActQuickly:
      "While most spiders in Riverside are harmless, black widow spiders are abundant in the area and their venom is a neurotoxin that can cause severe pain, muscle cramps, and in rare cases, life-threatening reactions — especially in children, the elderly, and pets. Brown recluse spiders, though less common, can deliver bites that cause necrotic tissue damage requiring medical treatment. Even non-venomous spiders create unsightly webs that make your home look neglected and can trigger anxiety for family members with arachnophobia. Spider egg sacs hatch hundreds of tiny spiderlings at once, so a small spider problem in your Riverside home can become a large one very quickly. Professional treatment is the safest and most effective way to protect your household.",

    faqs: [
      {
        question:
          "Are black widow spiders common in Riverside, CA?",
        answer:
          "Yes, black widow spiders are very common in Riverside and throughout the Inland Empire. They prefer dark, undisturbed areas such as garages, storage sheds, meter boxes, outdoor furniture, and woodpiles. Black widows are most active from spring through fall in Riverside. Their webs are messy and irregular, typically found close to the ground in sheltered spots. If you see a glossy black spider with a red hourglass on its underside, do not attempt to handle it — contact our team for safe removal.",
      },
      {
        question:
          "How can I reduce spiders around my Riverside home?",
        answer:
          "To reduce spider populations around your Riverside home, start by removing clutter in garages, sheds, and closets where spiders hide. Trim vegetation and shrubs away from exterior walls, move firewood at least 20 feet from the house, replace outdoor white lights with yellow or sodium vapor bulbs that attract fewer insects, and seal cracks around windows, doors, and your foundation. However, the most effective long-term solution is a professional perimeter treatment combined with regular web removal.",
      },
      {
        question:
          "What should I do if I get bitten by a spider in Riverside?",
        answer:
          "If you suspect a black widow or brown recluse bite, clean the area with soap and water, apply a cold compress, and seek medical attention promptly. Try to safely capture or photograph the spider for identification. Symptoms of a black widow bite include intense pain, muscle cramping, and sweating. Brown recluse bites may develop a blister or ulcerated wound over several days. Even if symptoms seem mild, it is best to consult a healthcare provider. Then call Riverside Pest Control so we can inspect and treat your property to prevent future encounters.",
      },
    ],

    relatedServices: ["ant-control", "wasp-removal"],
    relatedBlog: "common-pests-riverside-ca",
  },

  /* ---- TERMITE CONTROL ---- */
  "termite-control": {
    intro:
      "Termites cause more structural damage to homes in Riverside, CA than storms, fires, and earthquakes combined. The Riverside region's warm climate and clay-heavy soils create ideal conditions for both subterranean termites and drywood termites to attack wooden structures year-round. If you have noticed mud tubes running along your foundation, hollow-sounding wood, tiny pellet-like droppings near window sills, or swarms of winged insects inside your home, you may already have a significant termite problem. As Riverside's trusted termite control experts, we provide thorough inspections, targeted treatments, and long-term monitoring to protect your most valuable investment — your home. Our Riverside termite exterminators use proven methods including liquid termiticide barriers, bait monitoring stations, and localized treatments for drywood infestations. Termite damage in Riverside homes can cost homeowners thousands of dollars in repairs if left untreated, and most homeowner insurance policies do not cover termite damage. Whether you are buying a new home, selling a property, or protecting the one you live in, professional termite control in Riverside, CA is essential. Contact Riverside Pest Control for a free termite inspection today.",

    signs: [
      "Mud tubes on foundation walls, piers, or in crawl spaces — a clear sign of subterranean termites",
      "Hollow or papery-sounding wood when you tap on walls, window frames, or door frames",
      "Small piles of frass (tiny wood-colored pellets) beneath kick-out holes, indicating drywood termites",
      "Swarms of winged termites (alates) inside your home, often near windows or light sources",
      "Sagging or buckling floors, warped door frames, or windows that suddenly stick",
      "Darkened or blistered areas on wood surfaces that crumble when probed",
    ],

    treatmentApproach:
      "Our Riverside termite control process begins with a comprehensive inspection of your entire property, including the interior, exterior, attic, crawl space, and sub-area. For subterranean termites, we apply a continuous liquid termiticide barrier around your foundation using products like Termidor that are proven to eliminate entire colonies through transfer effect. We also install bait monitoring stations at strategic intervals for ongoing detection and protection. For drywood termite infestations, we offer localized treatments including direct wood injection and heat treatment for contained infestations, as well as whole-structure fumigation for widespread activity. Every treatment comes with a warranty, detailed reporting, and access to our annual termite monitoring program so your Riverside home stays protected year after year.",

    whyActQuickly:
      "Termites work silently and continuously, eating wood 24 hours a day, 7 days a week. A mature subterranean termite colony can consume over 15 pounds of wood per week, and most homeowners do not discover termite damage until it has been accumulating for years. In Riverside, where termite activity is high throughout the year, delays in treatment can lead to thousands of dollars in structural repairs — costs that are almost never covered by homeowner insurance. Compromised structural members including floor joists, wall studs, and roof rafters can create genuine safety hazards. The cost of professional termite treatment is a fraction of what repair bills will total if the infestation is allowed to progress. Early detection and treatment is always the smartest financial decision.",

    faqs: [
      {
        question:
          "What types of termites are found in Riverside, CA?",
        answer:
          "Riverside is home to two primary termite types. Subterranean termites live in underground colonies and access your home through mud tubes built from the soil to the wood. They are the most destructive species and cause the majority of termite damage in Riverside. Drywood termites nest directly inside the wood they consume and do not require soil contact. They are commonly found in attic framing, door and window frames, and furniture. Both types are active year-round in Riverside's warm climate.",
      },
      {
        question:
          "How much does termite treatment cost in Riverside?",
        answer:
          "Termite treatment costs in Riverside depend on the type of termite, the extent of the infestation, and the treatment method. Localized drywood termite treatments typically range from $500 to $1,500. Full subterranean liquid barrier treatments range from $1,200 to $3,000 for an average-sized Riverside home. Whole-structure fumigation for severe drywood infestations can range from $1,500 to $4,000 or more. We provide free inspections and detailed quotes so there are never surprises.",
      },
      {
        question:
          "Does homeowner insurance cover termite damage in Riverside?",
        answer:
          "In almost all cases, no. Homeowner insurance policies in California typically exclude termite damage because it is considered a maintenance issue rather than a sudden event. This means the full cost of both treatment and repairs falls on the homeowner. This is why proactive termite inspections and preventive treatment are so important for Riverside homeowners. Our annual monitoring program catches activity early before it results in expensive damage.",
      },
    ],

    relatedServices: ["ant-control", "rodent-control"],
    relatedBlog: "signs-you-have-termites-riverside",
  },

  /* ---- WASP & BEE REMOVAL ---- */
  "wasp-removal": {
    intro:
      "Wasps and bees are a common concern for Riverside homeowners, particularly during the warm spring and summer months when colonies are at their most active. Riverside's sunny climate and abundance of flowering plants attract paper wasps, yellow jackets, mud daubers, and honeybees to residential properties throughout the city. If you have noticed a papery nest forming under your eaves, increased wasp activity around your patio, buzzing sounds coming from inside a wall, or aggressive insects near your doorway, you need professional wasp and bee removal in Riverside before someone gets stung. At Riverside Pest Control, our wasp removal technicians safely eliminate active nests and apply preventive treatments to keep stinging insects from returning. We also offer humane honeybee relocation services for Riverside residents who want to preserve these important pollinators while keeping their families safe. As a licensed wasp exterminator in Riverside, CA, we handle everything from a single small nest to large yellow jacket colonies embedded in walls or underground. Do not risk a painful sting or dangerous allergic reaction — contact Riverside Pest Control for fast, safe wasp and bee removal today.",

    signs: [
      "A visible paper nest under eaves, porch ceilings, deck railings, or inside attic spaces",
      "Increased wasp or bee activity around entry points like doors, windows, and vents",
      "Buzzing or humming sounds coming from inside a wall, soffit, or chimney",
      "Aggressive behavior from wasps or yellow jackets when you approach a specific area",
      "Yellow jackets entering and exiting a hole in the ground or a gap in your home's exterior",
      "Honeycomb or dark staining on interior walls or ceilings, indicating a hive inside the structure",
    ],

    treatmentApproach:
      "Our Riverside wasp and bee removal process begins with identifying the species involved, since the treatment approach differs significantly between paper wasps, yellow jackets, and honeybees. For paper wasps and yellow jackets, we apply targeted insecticidal treatments directly to the nest during low-activity periods, then physically remove the nest once it is safe to do so. For yellow jacket colonies nesting in walls or underground, we use dust applications that reach deep into the void where the colony resides. For honeybees, we offer live relocation services in partnership with local Riverside beekeepers — the colony is carefully extracted and moved to an apiary where they can continue pollinating safely. After any nest removal, we seal the entry point and apply a residual treatment to prevent new colonies from building in the same location. Our preventive treatments include treating eaves, overhangs, and other common nesting sites before wasps arrive in spring.",

    whyActQuickly:
      "Wasp and bee stings are painful, and for the estimated 5 to 7 percent of the population with venom allergies, a single sting can trigger a life-threatening anaphylactic reaction. Yellow jackets are especially dangerous because they can sting multiple times and often attack in swarms when their nest is disturbed. In Riverside, wasp nests grow quickly during warm weather — a paper wasp colony that starts with a few cells in April can house hundreds of wasps by July. Yellow jacket colonies can contain thousands of workers by late summer. Honeybee hives inside walls produce honeycombs that can melt in Riverside's summer heat, causing honey to seep through drywall and attract secondary pest problems like ants and cockroaches. The sooner you address a stinging insect problem, the smaller the nest, the lower the risk, and the simpler the removal will be.",

    faqs: [
      {
        question:
          "What is the difference between wasps, yellow jackets, and honeybees in Riverside?",
        answer:
          "Paper wasps have long legs and build open, umbrella-shaped nests under eaves and overhangs. They are moderately aggressive when their nest is disturbed. Yellow jackets are stockier, bright yellow and black, and build enclosed nests in wall voids, attics, or underground. They are the most aggressive stinging insects in Riverside and can sting repeatedly. Honeybees are fuzzy, golden-brown, and build large wax combs usually inside wall cavities or trees. They are generally docile unless the hive is threatened. Identifying the species is critical because each requires a different removal approach.",
      },
      {
        question:
          "Can you remove honeybees without killing them in Riverside?",
        answer:
          "Yes. Riverside Pest Control offers live honeybee relocation for colonies that can be safely accessed. We work with local Riverside County beekeepers who take the colony to an apiary where the bees can continue their essential pollination work. Live removal involves carefully extracting the queen, workers, and comb and transferring them to a portable hive box. This service is available when the colony location and structural conditions allow safe access. We will advise you on whether live removal is feasible during our free inspection.",
      },
      {
        question:
          "How can I prevent wasps from nesting on my Riverside home?",
        answer:
          "To reduce the likelihood of wasp nests on your Riverside property, seal gaps and cracks in your siding, soffits, and eaves in early spring before queens begin scouting for nesting sites. Remove old nests — wasps do not reuse nests, but the presence of an old nest can attract new queens to the area. Keep outdoor garbage cans tightly sealed, clean up fallen fruit, and avoid leaving sugary drinks open outdoors. Our spring preventive treatment, which coats common nesting surfaces with a residual product, is the most effective way to deter wasps before they establish colonies.",
      },
    ],

    relatedServices: ["spider-control", "ant-control"],
    relatedBlog: "pest-control-season-riverside-ca",
  },
};

/* ------------------------------------------------------------------ */
/*  Static params & metadata                                          */
/* ------------------------------------------------------------------ */

export function generateStaticParams() {
  return siteConfig.services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = siteConfig.services.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: `${service.name} in Riverside CA | Free Quote | Riverside Pest Control`,
    description: `Professional ${service.name.toLowerCase()} services in Riverside, CA. Licensed & insured technicians. Fast results and free inspections. Call ${siteConfig.phone} today.`,
  };
}

/* ------------------------------------------------------------------ */
/*  Page component                                                    */
/* ------------------------------------------------------------------ */

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = siteConfig.services.find((s) => s.slug === slug);
  const content = serviceContent[slug];

  if (!service || !content) notFound();

  const relatedServices = content.relatedServices
    .map((rs) => siteConfig.services.find((s) => s.slug === rs))
    .filter(Boolean);

  const relatedBlog = siteConfig.blogPosts.find(
    (b) => b.slug === content.relatedBlog,
  );

  /* JSON-LD structured data */
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service.name} in Riverside, CA`,
    description: service.shortDesc,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.brand,
      telephone: siteConfig.phone,
      address: {
        "@type": "PostalAddress",
        addressLocality: siteConfig.city,
        addressRegion: siteConfig.state,
        postalCode: siteConfig.zip,
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: siteConfig.rating,
        reviewCount: siteConfig.reviewCount,
      },
    },
    areaServed: {
      "@type": "City",
      name: siteConfig.city,
    },
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="bg-white border-b border-gray-200"
      >
        <div className="max-w-4xl mx-auto px-4 py-3">
          <ol className="flex items-center gap-2 text-sm text-gray-600">
            <li>
              <Link href="/" className="hover:text-[#309C42]">
                Home
              </Link>
            </li>
            <li>
              <ChevronRight className="h-4 w-4" />
            </li>
            <li>
              <Link href="/services" className="hover:text-[#309C42]">
                Services
              </Link>
            </li>
            <li>
              <ChevronRight className="h-4 w-4" />
            </li>
            <li className="text-gray-900 font-medium">{service.name}</li>
          </ol>
        </div>
      </nav>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        {/* H1 + Intro */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          {service.name} in Riverside, CA
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-12">
          {content.intro}
        </p>

        {/* Signs */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Signs You Have {service.name.replace(" Control", "").replace(" Removal", "")} Problems
          </h2>
          <ul className="space-y-3">
            {content.signs.map((sign, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-[#D7FD19] shrink-0" />
                <span className="text-gray-700">{sign}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Treatment Approach */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Our {service.name.replace(" Control", "").replace(" Removal", "")} Treatment Approach
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {content.treatmentApproach}
          </p>
        </section>

        {/* Why Act Quickly */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Why Act Quickly
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {content.whyActQuickly}
          </p>
        </section>

        {/* FAQs */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions About{" "}
            {service.name.replace(" Control", "").replace(" Removal", "")} Control in Riverside
          </h2>
          <Accordion className="border rounded-lg divide-y bg-white">
            {content.faqs.map((faq, i) => (
              <AccordionItem key={i} value={i}>
                <AccordionTrigger className="px-4 text-base font-medium text-gray-900">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-4">
                  <p className="text-gray-700">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Related Services */}
        {relatedServices.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Related Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedServices.map(
                (rs) =>
                  rs && (
                    <Link
                      key={rs.slug}
                      href={`/services/${rs.slug}`}
                      className="block bg-white rounded-lg border border-gray-200 p-5 hover:border-[#309C42] hover:shadow transition"
                    >
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {rs.name}
                      </h3>
                      <p className="text-sm text-gray-600">{rs.shortDesc}</p>
                    </Link>
                  ),
              )}
            </div>
          </section>
        )}

        {/* Related Blog Post */}
        {relatedBlog && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Related Article
            </h2>
            <Link
              href={`/blog/${relatedBlog.slug}`}
              className="block bg-white rounded-lg border border-gray-200 p-5 hover:border-[#309C42] hover:shadow transition"
            >
              <h3 className="font-semibold text-gray-900 mb-1">
                {relatedBlog.title}
              </h3>
              <p className="text-sm text-gray-600">
                {relatedBlog.description}
              </p>
            </Link>
          </section>
        )}

        {/* CTA Box */}
        <section className="bg-[#14331A] text-white rounded-xl p-8 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Get a Free {service.name} Quote in Riverside
          </h2>
          <p className="text-gray-300 mb-6">
            Fill out the form below or call us directly at{" "}
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="underline font-semibold text-white"
            >
              {siteConfig.phone}
            </a>{" "}
            for same-day service.
          </p>

          <form
            action={`https://formspree.io/f/${siteConfig.formspreeId}`}
            method="POST"
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <input type="hidden" name="service" value={service.name} />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="rounded-lg px-4 py-3 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#309C42]"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              className="rounded-lg px-4 py-3 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#309C42]"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="rounded-lg px-4 py-3 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#309C42] sm:col-span-2"
            />
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full bg-white text-[#309C42] font-bold px-6 py-3 rounded-lg hover:bg-green-50 transition-colors"
              >
                Request My Free Quote
              </button>
            </div>
          </form>

          <div className="mt-6 flex items-center gap-3 text-gray-300 text-sm">
            <Phone className="h-4 w-4" />
            <span>
              Or call now:{" "}
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="text-white font-semibold underline"
              >
                {siteConfig.phone}
              </a>
            </span>
          </div>
        </section>
      </article>
    </main>
  );
}
