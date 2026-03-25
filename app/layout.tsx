import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";
import MobileCallButton from "@/components/MobileCallButton";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: {
    template: "%s | Riverside Pest Control",
    default: "Pest Control Riverside CA | Riverside Pest Control",
  },
  description:
    "Riverside Pest Control provides licensed, family-safe pest control in Riverside CA. Ants, termites, rodents, spiders, cockroaches, and wasps. Free quotes. Call (951) 555-0100.",
  metadataBase: new URL("https://riversidepestcontrol.com"),
  alternates: {
    canonical: "https://riversidepestcontrol.com",
  },
  openGraph: {
    title: "Pest Control Riverside CA | Riverside Pest Control",
    description:
      "Trusted pest control in Riverside CA. Licensed exterminators serving all Riverside neighborhoods. Free quotes available.",
    url: "https://riversidepestcontrol.com",
    siteName: "Riverside Pest Control",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <StickyHeader />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <MobileCallButton />
      </body>
    </html>
  );
}
