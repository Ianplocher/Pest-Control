import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site.config";
import { ChevronRight, Phone } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

const slugify = (name: string) => name.toLowerCase().replace(/\s+/g, "-");

/* ------------------------------------------------------------------ */
/*  Content database for all 12 neighborhood pages                     */
/* ------------------------------------------------------------------ */

interface NeighborhoodContent {
  intro: string;
  commonPests: { name: string; description: string }[];
}

const neighborhoodContent: Record<string, NeighborhoodContent> = {
  /* ---- ARLINGTON HEIGHTS ---- */
  "arlington-heights": {
    intro:
      "Arlington Heights is one of Riverside's oldest and most beloved residential neighborhoods, known for its mature tree-lined streets, historic craftsman homes, and a strong sense of community pride. While the charm of Arlington Heights is undeniable, the neighborhood's aging wood-frame structures and decades-old landscaping create persistent pest challenges that homeowners in Arlington Heights deal with year after year. Termites are a particular concern in Arlington Heights because so many homes feature original wood siding, hardwood floors, and exposed beams that are vulnerable to both subterranean and drywood termite species. The towering oaks and sycamores that define Arlington Heights provide beautiful shade, but they also attract rodents that use overhanging branches to access rooftops and attics. Riverside Pest Control has served Arlington Heights families for years with licensed, professional pest control treatments tailored to the unique characteristics of this historic Riverside neighborhood. Whether you are dealing with ants invading your kitchen, rodents nesting in your attic, or termites threatening the structural integrity of your craftsman bungalow, our certified technicians in Riverside understand the specific pest pressures that Arlington Heights homeowners face. We offer thorough inspections, targeted treatments, and ongoing prevention plans to keep your Arlington Heights home protected. Contact Riverside Pest Control today for a free quote and let us help you preserve your home in one of Riverside's most treasured neighborhoods.",
    commonPests: [
      {
        name: "Termites",
        description:
          "The historic craftsman homes and older wood-frame structures throughout Arlington Heights are highly susceptible to both subterranean and drywood termites. Many homes have original wood siding and exposed beams that termites target aggressively.",
      },
      {
        name: "Ants",
        description:
          "Argentine ants and carpenter ants thrive in Arlington Heights due to the mature landscaping and older foundations with small cracks and gaps that provide easy entry points into homes.",
      },
      {
        name: "Rodents",
        description:
          "The large, mature trees in Arlington Heights give roof rats direct access to rooftops and attics. Older homes with gaps in eaves and aging weatherstripping are especially vulnerable to rodent intrusion.",
      },
      {
        name: "Spiders",
        description:
          "Black widows and cellar spiders are commonly found in the garages, basements, and storage areas of older Arlington Heights homes where undisturbed corners provide ideal harborage.",
      },
    ],
  },

  /* ---- CANYON CREST ---- */
  "canyon-crest": {
    intro:
      "Canyon Crest is one of Riverside's most desirable upscale communities, nestled in the hillsides near UC Riverside with stunning views, newer construction, and natural canyon terrain that borders many properties. Homeowners in Canyon Crest enjoy a quieter, more secluded lifestyle, but the proximity to undeveloped canyon land and natural brush creates unique pest challenges that are distinct from other Riverside neighborhoods. Canyon Crest properties frequently encounter black widow spiders, which thrive in the rocky terrain, retaining walls, and sheltered outdoor spaces common throughout the neighborhood. The canyon environment also supports healthy rodent populations, and mice and rats in Canyon Crest are attracted to homes seeking food and shelter, which in turn can draw coyotes closer to residential areas. Riverside Pest Control provides specialized pest management services for Canyon Crest homeowners who need solutions that account for the neighborhood's unique geography and wildlife interface. Our licensed Riverside technicians understand the pest pressures that come with living adjacent to natural canyon habitat in Riverside, and we design treatment plans that protect your Canyon Crest home without disrupting the natural surroundings. From spider control along retaining walls to rodent exclusion that seals your home against wildlife-driven pest activity, Riverside Pest Control delivers reliable, professional results for Canyon Crest residents. Reach out to our Riverside team today for a free pest control quote tailored to your Canyon Crest property.",
    commonPests: [
      {
        name: "Black Widows",
        description:
          "The rocky canyon terrain, retaining walls, and sheltered outdoor spaces throughout Canyon Crest provide ideal habitat for black widow spiders. They are commonly found under patio furniture, in meter boxes, and along stone walls.",
      },
      {
        name: "Rodents",
        description:
          "Canyon Crest's proximity to undeveloped canyon land means roof rats and field mice are a persistent issue. Rodents from the surrounding brush seek food and shelter in homes, and their presence can attract predators like coyotes.",
      },
      {
        name: "Wasps",
        description:
          "Paper wasps and yellow jackets frequently build nests under the eaves and in the landscaped yards of Canyon Crest homes, especially during the warm spring and summer months when colony activity peaks.",
      },
      {
        name: "Ants",
        description:
          "Argentine ants are common throughout Canyon Crest, forming large super-colonies that send foraging trails into kitchens and bathrooms, particularly during hot, dry periods when ants seek moisture indoors.",
      },
    ],
  },

  /* ---- LA SIERRA ---- */
  "la-sierra": {
    intro:
      "La Sierra is a large, family-oriented neighborhood in western Riverside that blends older established homes with newer developments, creating a diverse residential landscape that families love. La Sierra's proximity to agricultural areas and open land on the western edge of Riverside means that pest activity in this neighborhood is often influenced by seasonal farming cycles and nearby undeveloped parcels. Ants are a persistent problem in La Sierra, with Argentine ant colonies forming vast networks that send foraging trails into homes throughout the year. Cockroaches are also common in La Sierra, particularly in older sections of the neighborhood where aging plumbing and foundation cracks provide harborage and entry points. Rodents migrate into La Sierra homes from surrounding agricultural areas, especially after harvest seasons when food sources in the fields are depleted. Riverside Pest Control has extensive experience serving La Sierra homeowners with comprehensive pest management programs designed for this neighborhood's specific challenges. Our licensed Riverside technicians provide thorough inspections, targeted treatments, and quarterly prevention plans that keep La Sierra homes pest-free across every season. Whether you live in an older La Sierra home near the historic district or a newer development along the western corridor, Riverside Pest Control delivers dependable results backed by our satisfaction guarantee. Contact us today for a free pest control quote for your La Sierra property in Riverside.",
    commonPests: [
      {
        name: "Ants",
        description:
          "Argentine ants form extensive super-colonies throughout La Sierra, sending persistent foraging trails into homes seeking food and moisture. The mix of older and newer construction provides numerous entry points.",
      },
      {
        name: "Cockroaches",
        description:
          "German and American cockroaches thrive in older La Sierra homes where aging plumbing, foundation cracks, and moisture-prone areas beneath sinks and appliances create ideal harborage conditions.",
      },
      {
        name: "Rodents",
        description:
          "La Sierra's proximity to agricultural areas and open land means rodents migrate into residential properties regularly, especially after harvest seasons when field food sources diminish.",
      },
      {
        name: "Spiders",
        description:
          "Black widows and common house spiders are found around La Sierra homes, particularly in garages, storage sheds, and along exterior walls adjacent to landscaped or undeveloped areas.",
      },
    ],
  },

  /* ---- WOOD STREETS ---- */
  "wood-streets": {
    intro:
      "The Wood Streets neighborhood is one of Riverside's most iconic historic districts, renowned for its beautiful tree-canopied avenues, craftsman bungalows, and Spanish colonial homes that date back to the early twentieth century. Living in the Wood Streets means enjoying architectural character and neighborhood charm that few Riverside communities can match, but it also means contending with pest problems that are amplified by the age and construction style of these beloved homes. Termites are the single biggest pest threat in the Wood Streets, and virtually every homeowner in this Riverside neighborhood will encounter termite activity at some point. The original wood framing, lath-and-plaster walls, and hardwood floors found in Wood Streets homes are highly attractive to both subterranean and drywood termite species that are active year-round in Riverside's warm climate. Carpenter ants are another serious concern in the Wood Streets because they excavate galleries in the same aging wood that termites target, compounding structural damage over time. Spiders, including black widows, find abundant harborage in the basements, crawl spaces, and detached garages typical of Wood Streets properties in Riverside. Riverside Pest Control specializes in protecting historic homes like those throughout the Wood Streets from the pest pressures unique to older construction. Our licensed Riverside technicians use targeted treatment methods that are effective against pests while being mindful of the irreplaceable architectural details that make Wood Streets homes so special. Trust Riverside Pest Control to safeguard your Wood Streets home with professional, licensed pest control service.",
    commonPests: [
      {
        name: "Termites",
        description:
          "Termites are the most significant pest threat in the Wood Streets. Original wood framing, hardwood floors, and lath-and-plaster construction make these historic homes highly vulnerable to both subterranean and drywood termite infestations.",
      },
      {
        name: "Carpenter Ants",
        description:
          "Carpenter ants excavate galleries in the aging wood structures of Wood Streets homes, often targeting the same moisture-damaged wood that attracts termites. They can cause significant structural damage if left untreated.",
      },
      {
        name: "Spiders",
        description:
          "Black widows and cellar spiders thrive in the basements, crawl spaces, and detached garages common in Wood Streets properties. The older construction provides abundant undisturbed spaces for web building and nesting.",
      },
      {
        name: "Rodents",
        description:
          "The mature tree canopy and older construction of Wood Streets homes create multiple entry points for roof rats and mice, which access attics through gaps in aging eaves, vents, and rooflines.",
      },
    ],
  },

  /* ---- ORANGECREST ---- */
  orangecrest: {
    intro:
      "Orangecrest is one of Riverside's premier planned communities, located in the southeastern part of the city and known for its modern homes, well-maintained parks, excellent schools, and family-friendly atmosphere. Developed primarily in the 1990s and 2000s, Orangecrest features newer construction that offers many advantages, but even these relatively young homes in Riverside are not immune to pest problems. Ants are one of the most common pest complaints from Orangecrest homeowners, as the settling of newer foundations and expansion joints creates small gaps that Argentine ants exploit to enter homes in search of food and water. Wasps are another frequent issue in Orangecrest because the clean eaves, fresh stucco overhangs, and protected architectural features of newer homes provide ideal nesting sites for paper wasps and yellow jackets during Riverside's warm months. Spiders, including black widows, establish themselves around the exterior of Orangecrest homes, building webs under eaves, near outdoor lighting, and in garage corners. Riverside Pest Control serves Orangecrest families with proactive pest management programs designed specifically for newer Riverside construction. Our licensed technicians understand that pest entry points in Orangecrest homes differ from those in older Riverside neighborhoods, and we tailor our inspections and treatments accordingly. From sealing expansion joints against ant invasions to treating eaves before wasp season begins, Riverside Pest Control provides the professional, preventive approach that Orangecrest homeowners need to keep their homes pest-free year-round. Call our Riverside team today for your free Orangecrest pest control quote.",
    commonPests: [
      {
        name: "Ants",
        description:
          "Argentine ants are the most common pest complaint in Orangecrest. Settling foundations and expansion joints in newer construction create small gaps that ants exploit to enter homes seeking food and moisture.",
      },
      {
        name: "Wasps",
        description:
          "Paper wasps and yellow jackets frequently build nests under the clean eaves, stucco overhangs, and protected architectural features of Orangecrest's newer homes, especially from spring through fall.",
      },
      {
        name: "Spiders",
        description:
          "Black widows and orb weaver spiders establish themselves around Orangecrest home exteriors, building webs under eaves, near outdoor lighting fixtures, and in garage corners where insects congregate.",
      },
      {
        name: "Cockroaches",
        description:
          "American cockroaches occasionally invade Orangecrest homes through sewer connections and garage doors, particularly during hot summer months when they seek cooler indoor environments.",
      },
    ],
  },

  /* ---- HUNTER PARK ---- */
  "hunter-park": {
    intro:
      "Hunter Park is a well-established neighborhood in central Riverside known for its older single-family homes, established landscaping, and convenient location near shopping, schools, and major roadways. The mature trees, dense hedges, and decades-old plantings that give Hunter Park its leafy, welcoming character also create favorable conditions for a variety of common pests that Riverside homeowners encounter regularly. Rodents are a persistent concern in Hunter Park because the dense vegetation and older construction provide abundant shelter and easy access to home interiors through gaps in aging foundations, vents, and weatherstripping. Cockroaches thrive in the older plumbing systems and moisture-prone areas found in many Hunter Park homes throughout Riverside. Ant infestations are a year-round issue in Hunter Park, with colonies exploiting the small cracks and settling gaps common in older Riverside homes to establish trails into kitchens, bathrooms, and pantries. Termites also pose a significant threat to Hunter Park's aging wood-frame structures, and proactive inspection and treatment is essential for homeowners in this Riverside neighborhood. Riverside Pest Control delivers expert pest management services tailored to the specific challenges that Hunter Park homeowners face. Our licensed Riverside technicians have treated hundreds of homes in central Riverside neighborhoods like Hunter Park and understand the pest entry points, nesting patterns, and treatment approaches that work best for older residential construction. Whether you need a one-time treatment or an ongoing prevention plan, Riverside Pest Control is your trusted partner for keeping your Hunter Park home safe from pests.",
    commonPests: [
      {
        name: "Rodents",
        description:
          "Dense, mature landscaping and older construction in Hunter Park provide rodents with abundant shelter and easy entry points. Roof rats access attics through aging eaves, while mice exploit foundation gaps.",
      },
      {
        name: "Cockroaches",
        description:
          "German and American cockroaches thrive in Hunter Park's older homes where aging plumbing, moisture-prone crawl spaces, and kitchen cabinet gaps create ideal conditions for infestation.",
      },
      {
        name: "Ants",
        description:
          "Argentine ants and odorous house ants are a year-round problem in Hunter Park, exploiting the settling cracks and foundation gaps common in older Riverside homes to invade kitchens and bathrooms.",
      },
      {
        name: "Termites",
        description:
          "The older wood-frame construction throughout Hunter Park makes homes in this neighborhood particularly vulnerable to subterranean termite damage, especially in structures with ground-to-wood contact.",
      },
    ],
  },

  /* ---- ALESSANDRO HEIGHTS ---- */
  "alessandro-heights": {
    intro:
      "Alessandro Heights is a growing residential community in southern Riverside that sits at the boundary between established suburban development and the open, undeveloped spaces that stretch toward the Riverside County foothills. Homeowners in Alessandro Heights enjoy larger lot sizes, newer construction, and a quieter pace of life, but the neighborhood's proximity to open land and natural terrain introduces pest challenges that are distinct from more urbanized parts of Riverside. Rodents are a primary concern in Alessandro Heights because field mice and pack rats from the surrounding undeveloped land regularly migrate into residential properties in search of food, water, and shelter. Black widow spiders are commonly found around Alessandro Heights homes, especially in garages, storage areas, block walls, and the rocky landscaping features that are popular in this part of Riverside. Wasps are another frequent issue in Alessandro Heights, with paper wasps and yellow jackets building nests on home exteriors, in attic spaces, and under covered patios during Riverside's extended warm season. Riverside Pest Control provides targeted pest management services for Alessandro Heights homeowners who need solutions designed for the interface between suburban living and open space in Riverside. Our licensed technicians understand the unique pest migration patterns that affect Alessandro Heights and neighboring southern Riverside communities. We design comprehensive treatment and exclusion plans that protect your Alessandro Heights home from rodents, spiders, wasps, and other pests that come with living near undeveloped land in Riverside. Schedule your free pest control inspection in Alessandro Heights today.",
    commonPests: [
      {
        name: "Rodents",
        description:
          "Field mice and pack rats from the undeveloped land surrounding Alessandro Heights regularly migrate into homes seeking food and shelter, making rodent exclusion essential for homeowners in this area.",
      },
      {
        name: "Black Widows",
        description:
          "Black widow spiders are prevalent in Alessandro Heights due to the rocky terrain and block wall construction common in the neighborhood. They are frequently found in garages, utility boxes, and landscape rock features.",
      },
      {
        name: "Wasps",
        description:
          "Paper wasps and yellow jackets build nests on Alessandro Heights home exteriors, under patio covers, and in attic spaces, taking advantage of the warm climate and open terrain nearby.",
      },
      {
        name: "Ants",
        description:
          "Argentine ants and harvester ants are active throughout Alessandro Heights, with colonies establishing large networks in the sandy soils common in southern Riverside and foraging into homes during hot weather.",
      },
      {
        name: "Scorpions",
        description:
          "The dry, rocky terrain surrounding Alessandro Heights occasionally brings bark scorpions onto residential properties, where they seek shelter in garages, shoes, and ground-level storage areas.",
      },
    ],
  },

  /* ---- VICTORIA ---- */
  victoria: {
    intro:
      "Victoria is an established residential community in Riverside that offers a comfortable mix of single-family homes and townhomes in a well-connected, family-friendly setting. The Victoria neighborhood is centrally located within Riverside, providing easy access to schools, parks, shopping, and major transportation routes. While Victoria's homes range from mid-century construction to more recent builds, the neighborhood as a whole experiences the full spectrum of residential pest issues that are common across Riverside. Ants are among the most persistent pest problems in Victoria, with Argentine ant colonies sending foraging trails into homes throughout the year, particularly during Riverside's hot, dry summer months when ants seek indoor moisture sources. Cockroaches are a concern in both older and newer Victoria homes, as German cockroaches spread through multi-unit housing and American cockroaches enter through sewer connections. Rodents find harborage in the mature landscaping and older sections of the Victoria neighborhood in Riverside, accessing homes through gaps in rooflines, foundation vents, and utility penetrations. Riverside Pest Control delivers dependable, professional pest management services to Victoria homeowners and residents who want to keep their properties pest-free. Our licensed Riverside technicians provide thorough inspections, effective treatments, and ongoing prevention plans tailored to the residential mix found throughout Victoria. Whether you own a single-family home or a townhome in Victoria, Riverside Pest Control has the experience and local knowledge to solve your pest problems quickly and professionally. Contact our Riverside office today for a free pest control quote for your Victoria property.",
    commonPests: [
      {
        name: "Ants",
        description:
          "Argentine ants are the most persistent pest in Victoria, forming large colonies that send foraging trails into homes year-round, especially during hot summer months when they seek indoor moisture.",
      },
      {
        name: "Cockroaches",
        description:
          "German cockroaches spread through Victoria's multi-unit housing, while American cockroaches enter single-family homes through sewer connections and garage doors during warm weather.",
      },
      {
        name: "Rodents",
        description:
          "Mature landscaping and a mix of older and newer construction in Victoria provide rodents with both shelter and entry points, making ongoing exclusion and monitoring important for homeowners.",
      },
      {
        name: "Spiders",
        description:
          "Common house spiders and occasional black widows are found around Victoria homes, particularly in garages, storage closets, and exterior corners where webs accumulate undisturbed.",
      },
    ],
  },

  /* ---- MAGNOLIA CENTER ---- */
  "magnolia-center": {
    intro:
      "Magnolia Center sits in the heart of central Riverside along the historic Magnolia Avenue corridor, a neighborhood defined by its eclectic mix of older residential homes, small businesses, and commercial properties that have served the Riverside community for decades. The blended commercial-residential character of Magnolia Center creates pest dynamics that differ from purely residential Riverside neighborhoods, as commercial food establishments and older multi-use buildings can harbor pest populations that spill over into adjacent homes. Cockroaches are a leading pest concern in Magnolia Center because the proximity to restaurants, bakeries, and food service operations along Magnolia Avenue creates conditions where roach populations can establish themselves in commercial kitchens and then migrate into nearby residential properties throughout Riverside. Rodents are similarly drawn to the food sources available in the commercial corridor, and they travel along utility lines and through shared walls to reach homes in Magnolia Center. Ant infestations are a constant battle for Magnolia Center homeowners in Riverside, compounded by the older foundations and infrastructure that provide easy access points. Riverside Pest Control understands the unique pest challenges that come with living in a mixed-use Riverside neighborhood like Magnolia Center. Our licensed technicians address not only the immediate infestation but also the environmental factors that drive pest activity in areas where commercial and residential properties coexist. We offer comprehensive pest control programs for Magnolia Center homes and businesses in Riverside that target cockroaches, rodents, ants, and other pests at their source. Contact Riverside Pest Control for a free inspection of your Magnolia Center property.",
    commonPests: [
      {
        name: "Cockroaches",
        description:
          "The commercial food establishments along Magnolia Avenue create conditions where cockroach populations thrive and spill over into adjacent residential properties, making professional treatment essential.",
      },
      {
        name: "Rodents",
        description:
          "Restaurants, bakeries, and commercial food sources along the Magnolia Avenue corridor attract rodents that migrate into nearby residential homes through utility lines, shared walls, and foundation gaps.",
      },
      {
        name: "Ants",
        description:
          "Argentine ants are relentless in Magnolia Center, drawn by food sources from both residential kitchens and nearby commercial operations. Older foundations provide easy entry points throughout the neighborhood.",
      },
      {
        name: "Flies",
        description:
          "The concentration of food service businesses in Magnolia Center contributes to higher fly activity in the surrounding residential areas, particularly during Riverside's warm summer months.",
      },
    ],
  },

  /* ---- DOWNTOWN RIVERSIDE ---- */
  "downtown-riverside": {
    intro:
      "Downtown Riverside is the historic urban core of the city, home to landmark buildings, the iconic Mission Inn, thriving restaurants and bars, professional offices, and a growing number of residential lofts and apartments. Downtown Riverside's dense urban environment, aging building stock, and concentration of food service establishments create pest conditions that are among the most challenging in the entire Riverside area. Cockroaches are a major pest issue in Downtown Riverside, where older commercial kitchens, shared building infrastructure, and aging plumbing systems provide ideal harborage for German and American cockroach populations that can quickly grow out of control. Rodents thrive in Downtown Riverside's network of older buildings, alleyways, and commercial waste areas, with Norway rats and roof rats both active in the area. Ant colonies establish themselves in the cracks and crevices of Downtown Riverside's historic buildings and sidewalks, sending foraging lines into ground-floor businesses and residential units alike. Riverside Pest Control provides professional, discreet pest management services for Downtown Riverside properties, including restaurants, offices, retail spaces, and residential units. Our licensed Riverside technicians are experienced with the unique challenges of urban pest control in historic buildings where access can be limited and treatment approaches must be carefully selected to protect both occupants and architectural features. We understand that pest issues in Downtown Riverside can impact a business's reputation and a resident's quality of life, and we respond with urgency. Contact Riverside Pest Control for a free Downtown Riverside pest control assessment today.",
    commonPests: [
      {
        name: "Cockroaches",
        description:
          "Downtown Riverside's concentration of restaurants, bars, and older commercial kitchens creates ideal conditions for German and American cockroach infestations that can spread through shared building infrastructure.",
      },
      {
        name: "Rodents",
        description:
          "Norway rats and roof rats are both active in Downtown Riverside, thriving in the network of older buildings, alleyways, dumpster areas, and aging sewer infrastructure throughout the urban core.",
      },
      {
        name: "Ants",
        description:
          "Ant colonies exploit the cracks and crevices of Downtown Riverside's historic buildings and sidewalks, sending foraging trails into ground-floor businesses and residential units year-round.",
      },
      {
        name: "Commercial Pests",
        description:
          "Stored product pests, drain flies, and occasional bird-related issues affect Downtown Riverside businesses and residential lofts in older converted commercial buildings.",
      },
      {
        name: "Spiders",
        description:
          "Cellar spiders and black widows inhabit the basements, utility rooms, and undisturbed storage areas common in Downtown Riverside's older building stock.",
      },
    ],
  },

  /* ---- UNIVERSITY DISTRICT ---- */
  "university-district": {
    intro:
      "The University District in Riverside surrounds UC Riverside and encompasses a diverse mix of student housing, rental properties, and established family homes that serve the campus community and long-time Riverside residents alike. The high turnover rate in rental properties throughout the University District creates pest conditions that can be difficult to manage without professional intervention, as tenants come and go and pest problems can be passed from one occupant to the next. Ants are one of the most reported pest issues in the University District, with Argentine ant colonies exploiting the frequent gaps between move-outs and move-ins when kitchens are cleaned less consistently and entry points go unaddressed. Cockroaches are another significant concern in the University District of Riverside, particularly German cockroaches that spread through multi-unit apartment complexes and are carried between units in furniture, appliances, and boxes during frequent moves. Rodents find easy access to University District rental homes through deferred maintenance issues like damaged vent screens, missing door sweeps, and gaps around utility lines. Riverside Pest Control works with University District homeowners, landlords, property managers, and tenants to deliver effective pest control solutions that account for the unique dynamics of a university-adjacent Riverside neighborhood. Our licensed Riverside technicians provide move-in and move-out pest treatments, ongoing maintenance plans for rental properties, and responsive service for active infestations throughout the University District. Protect your Riverside investment property or rental home in the University District with professional pest control from a team that understands this neighborhood's specific needs.",
    commonPests: [
      {
        name: "Ants",
        description:
          "Argentine ants exploit the frequent tenant turnover in University District rentals, invading during gaps between occupants when kitchens are less maintained and entry points go unrepaired.",
      },
      {
        name: "Cockroaches",
        description:
          "German cockroaches are a significant issue in University District apartment complexes, spreading between units through shared walls, plumbing, and being carried in furniture during frequent moves.",
      },
      {
        name: "Rodents",
        description:
          "Deferred maintenance common in rental properties throughout the University District gives rodents easy access through damaged vents, missing door sweeps, and gaps around utility penetrations.",
      },
      {
        name: "Bed Bugs",
        description:
          "The high turnover rate and movement of used furniture in the University District creates conditions where bed bugs can be introduced and spread between units in multi-family housing.",
      },
    ],
  },

  /* ---- ARLANZA ---- */
  arlanza: {
    intro:
      "Arlanza is a western Riverside neighborhood situated near the Santa Ana River, a geographic feature that significantly influences the pest landscape for homeowners in this part of the city. The Santa Ana River corridor and its associated riparian habitat support large populations of rodents, mosquitoes, and other pests that regularly migrate into the Arlanza residential area from the riverbed and surrounding open spaces. Rodents are the most pressing pest concern for Arlanza homeowners in Riverside, as roof rats and Norway rats travel from the dense vegetation along the Santa Ana River into nearby properties, nesting in attics, garages, and storage areas. Mosquitoes breed in the standing water and slow-moving pools found along the river corridor near Arlanza, and they can make outdoor living spaces uncomfortable and pose health risks during Riverside's warm months. Ant infestations are common throughout Arlanza, with colonies establishing themselves in the sandy soils near the riverbed and foraging into homes across the neighborhood. Spiders, including black widows, are attracted to the insect-rich environment near the river and establish themselves around Arlanza homes in Riverside. Riverside Pest Control provides comprehensive pest management services for Arlanza homeowners who need protection from the heightened pest activity that comes with living near the Santa Ana River in Riverside. Our licensed technicians understand the migration patterns and seasonal cycles that drive pest populations from the river corridor into the Arlanza neighborhood, and we design treatment and exclusion plans that create lasting barriers between your home and the pest-rich environment nearby. Call Riverside Pest Control for a free pest control quote for your Arlanza home today.",
    commonPests: [
      {
        name: "Rodents",
        description:
          "Roof rats and Norway rats travel from the dense vegetation along the Santa Ana River into Arlanza properties, nesting in attics, garages, and sheds. River-adjacent homes require ongoing exclusion and monitoring.",
      },
      {
        name: "Mosquitoes",
        description:
          "Standing water and slow-moving pools along the Santa Ana River corridor near Arlanza create breeding grounds for mosquitoes that make outdoor living uncomfortable and pose health risks during warm months.",
      },
      {
        name: "Ants",
        description:
          "Argentine ants and fire ants establish large colonies in the sandy soils near the riverbed and send persistent foraging trails into Arlanza homes throughout the year.",
      },
      {
        name: "Spiders",
        description:
          "Black widows and other spiders thrive in the insect-rich environment near the Santa Ana River and commonly establish webs around Arlanza home exteriors, garages, and outdoor structures.",
      },
    ],
  },
};

/* ------------------------------------------------------------------ */
/*  Static params & metadata                                           */
/* ------------------------------------------------------------------ */

export function generateStaticParams() {
  return siteConfig.neighborhoods.map((name) => ({
    neighborhood: slugify(name),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ neighborhood: string }>;
}): Promise<Metadata> {
  const { neighborhood } = await params;
  const name = siteConfig.neighborhoods.find(
    (n) => slugify(n) === neighborhood
  );
  if (!name) return {};

  const content = neighborhoodContent[neighborhood];
  const pests = content
    ? content.commonPests.map((p) => p.name.toLowerCase()).join(", ")
    : "ants, cockroaches, rodents, termites";

  return {
    title: `Pest Control ${name} Riverside CA | Free Quote`,
    description: `Professional pest control in ${name}, Riverside CA. Licensed treatment for ${pests}. Free inspections and same-day service. Call ${siteConfig.phone} today.`,
  };
}

/* ------------------------------------------------------------------ */
/*  Page component                                                     */
/* ------------------------------------------------------------------ */

export default async function NeighborhoodPage({
  params,
}: {
  params: Promise<{ neighborhood: string }>;
}) {
  const { neighborhood } = await params;
  const name = siteConfig.neighborhoods.find(
    (n) => slugify(n) === neighborhood
  );
  const content = neighborhoodContent[neighborhood];

  if (!name || !content) notFound();

  /* JSON-LD structured data */
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `${siteConfig.brand} - ${name}`,
    description: `Professional pest control services in ${name}, Riverside CA.`,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Riverside",
      addressRegion: "CA",
      postalCode: siteConfig.zip,
      streetAddress: name,
    },
    areaServed: {
      "@type": "Place",
      name: `${name}, Riverside, CA`,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: siteConfig.rating,
      reviewCount: siteConfig.reviewCount,
    },
    url: `https://${siteConfig.domain}/service-areas/${neighborhood}`,
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
              <Link href="/service-areas" className="hover:text-[#309C42]">
                Service Areas
              </Link>
            </li>
            <li>
              <ChevronRight className="h-4 w-4" />
            </li>
            <li className="text-gray-900 font-medium">{name}</li>
          </ol>
        </div>
      </nav>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        {/* H1 + Intro */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Pest Control in {name}, Riverside CA
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-12">
          {content.intro}
        </p>

        {/* Services Grid */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Pest Control Services in {name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {siteConfig.services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="block bg-white rounded-lg border border-gray-200 p-5 hover:border-[#309C42] hover:shadow transition"
              >
                <h3 className="font-semibold text-gray-900 mb-1">
                  {service.name}
                </h3>
                <p className="text-sm text-gray-600">{service.shortDesc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Common Pests */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Common Pests in {name}
          </h2>
          <div className="space-y-4">
            {content.commonPests.map((pest) => (
              <div
                key={pest.name}
                className="bg-white rounded-lg border border-gray-200 p-5"
              >
                <h3 className="font-semibold text-gray-900 mb-2">
                  {pest.name}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {pest.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Box */}
        <section className="bg-[#14331A] text-white rounded-xl p-8 md:p-10 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Get a Free Pest Control Quote in {name}
          </h2>
          <p className="text-gray-300 mb-6">
            Our licensed technicians serve {name} and all Riverside
            neighborhoods. Call us directly or request your free quote online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/free-quote"
              className="inline-block text-center bg-white text-[#14331A] font-bold px-8 py-3 rounded-lg hover:bg-green-50 transition-colors"
            >
              Request My Free Quote
            </Link>
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 bg-[#14331A] text-white font-bold px-8 py-3 rounded-lg hover:bg-[#1a3a1e] transition-colors"
            >
              <Phone className="h-4 w-4" />
              {siteConfig.phone}
            </a>
          </div>
        </section>

        {/* Back to Service Areas */}
        <div className="text-center">
          <Link
            href="/service-areas"
            className="text-[#309C42] font-medium hover:text-[#28812C] hover:underline"
          >
            &larr; View All Riverside Service Areas
          </Link>
        </div>
      </article>
    </main>
  );
}
