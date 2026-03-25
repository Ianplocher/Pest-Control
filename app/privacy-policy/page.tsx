import type { Metadata } from "next";
import { siteConfig } from "@/config/site.config";
import BreadcrumbNav from "@/components/BreadcrumbNav";

export const metadata: Metadata = {
  title: "Privacy Policy | Riverside Pest Control",
  description: `Privacy policy for ${siteConfig.brand}. Learn how we collect, use, and protect your personal information.`,
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <BreadcrumbNav
        items={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy" },
        ]}
      />

      <h1 className="mt-4 text-3xl font-bold text-[#14331A]">Privacy Policy</h1>
      <p className="mt-2 text-sm text-gray-500">
        Last updated: January 1, 2025
      </p>

      <div className="mt-8 space-y-8 text-sm leading-relaxed text-gray-700">
        <section>
          <h2 className="mb-3 text-xl font-semibold text-[#14331A]">
            Information We Collect
          </h2>
          <p>
            {siteConfig.brand} collects information you voluntarily provide when
            you request a free quote, contact us by phone or email, or fill out
            any form on our website. This may include your name, phone number,
            email address, service address, and details about your pest control
            needs.
          </p>
          <p className="mt-3">
            We also automatically collect certain technical information when you
            visit our website, including your IP address, browser type, device
            type, pages visited, and the date and time of your visit. This
            information is collected through cookies and similar tracking
            technologies.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-[#14331A]">
            How We Use Your Information
          </h2>
          <p>We use the information we collect to:</p>
          <ul className="ml-5 mt-2 list-disc space-y-1">
            <li>Respond to your quote requests and service inquiries</li>
            <li>Schedule and provide pest control services</li>
            <li>Communicate with you about appointments and follow-up treatments</li>
            <li>Send you relevant pest prevention tips and seasonal reminders (with your consent)</li>
            <li>Improve our website, services, and customer experience</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-[#14331A]">
            Information Sharing
          </h2>
          <p>
            {siteConfig.brand} does not sell, rent, or trade your personal
            information to third parties. We may share your information only in
            the following circumstances:
          </p>
          <ul className="ml-5 mt-2 list-disc space-y-1">
            <li>
              With trusted service providers who help us operate our website and
              business (such as our form processing service), under strict
              confidentiality agreements
            </li>
            <li>
              When required by law, regulation, or legal process such as a court
              order or subpoena
            </li>
            <li>
              To protect the rights, property, or safety of {siteConfig.brand},
              our customers, or the public
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-[#14331A]">
            Data Security
          </h2>
          <p>
            We implement reasonable administrative, technical, and physical
            security measures to protect your personal information from
            unauthorized access, use, alteration, or disclosure. Our website uses
            SSL encryption to protect data transmitted between your browser and
            our servers. However, no method of transmission over the internet is
            completely secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-[#14331A]">
            Cookies and Tracking
          </h2>
          <p>
            Our website uses cookies and similar tracking technologies to enhance
            your browsing experience and analyze website traffic. Cookies are
            small data files stored on your device. We use:
          </p>
          <ul className="ml-5 mt-2 list-disc space-y-1">
            <li>
              <strong>Essential cookies</strong> that are necessary for the
              website to function properly
            </li>
            <li>
              <strong>Analytics cookies</strong> that help us understand how
              visitors use our website so we can improve it
            </li>
          </ul>
          <p className="mt-3">
            You can control cookies through your browser settings. Disabling
            cookies may affect certain features of our website.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-[#14331A]">
            Your Rights
          </h2>
          <p>
            Under California law (including the California Consumer Privacy Act),
            you have the right to:
          </p>
          <ul className="ml-5 mt-2 list-disc space-y-1">
            <li>Know what personal information we collect about you</li>
            <li>Request deletion of your personal information</li>
            <li>Opt out of the sale of your personal information (we do not sell your data)</li>
            <li>Not be discriminated against for exercising your privacy rights</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-[#14331A]">
            Contact Us
          </h2>
          <p>
            If you have questions about this Privacy Policy or wish to exercise
            your privacy rights, please contact us:
          </p>
          <ul className="ml-5 mt-2 list-none space-y-1">
            <li>
              <strong>Email:</strong>{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-[#309C42] hover:underline"
              >
                {siteConfig.email}
              </a>
            </li>
            <li>
              <strong>Phone:</strong>{" "}
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="text-[#309C42] hover:underline"
              >
                {siteConfig.phone}
              </a>
            </li>
            <li>
              <strong>Website:</strong> {siteConfig.domain}
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
