// Server Component for Services Page metadata

export const metadata = {
  title: "Our Web Development Services | Next.js, React, Framer Motion Experts",
  description: "Explore our comprehensive web development services, including custom Next.js & React applications, e-commerce solutions, and dynamic websites with Framer Motion animations. Let us build your digital success.",
  keywords: "web services, Next.js services, React services, Framer Motion animation, custom web applications, e-commerce development, responsive web design, full-stack development, UI/UX design",
  openGraph: {
    title: "Our Web Development Services | Next.js, React, Framer Motion Experts",
    description: "Discover our range of expert web development services designed to elevate your brand.",
    // url: 'https://yourwebsite.com/services', // Replace with your actual URL
    // images: [ /* Add relevant images for social sharing */ ],
  },
  // twitter: { /* Add Twitter card metadata */ },
};

// We will create and import a client component for the actual page content
import ServicesPageClient from "@/components/ServicesPageClient";

export default function ServicesPage() {
  return <ServicesPageClient />;
} 