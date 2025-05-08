// Server Component for Prices Page metadata

export const metadata = {
  title: "Our Web Development Pricing | Transparent Packages for Next.js & React Projects",
  description: "Explore our clear and competitive pricing packages for web development services. We offer transparent costs for Next.js, React, and Framer Motion projects, tailored to your budget and needs.",
  keywords: "web development pricing, Next.js pricing, React project cost, website development packages, affordable web design, e-commerce pricing, Framer Motion animation cost",
  openGraph: {
    title: "Transparent Web Development Pricing Packages",
    description: "Find the perfect pricing plan for your Next.js, React, or custom web development project.",
    url: 'https://web-dev-agency-seven.vercel.app/prices', // Replace with your actual URL
    // images: [ /* Add relevant images for social sharing */ ],
  },
  // twitter: { /* Add Twitter card metadata */ },
};

// We will create and import a client component for the actual page content
import PricesPageClient from "@/components/PricesPageClient";

export default function PricesPage() {
  return <PricesPageClient />;
} 