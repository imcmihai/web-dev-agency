// Server Component for Contact Page metadata

export const metadata = {
  title: "Contact Us | Get a Free Quote for Web Development Projects",
  description: "Get in touch with our expert web development team. Contact us for a free consultation or quote for your Next.js, React, or Framer Motion project. We're here to help!",
  keywords: "contact web development, get a quote website, Next.js contact, React developer contact, web design inquiry, custom web project quote, Framer Motion projects",
  openGraph: {
    title: "Contact Us for Expert Web Development Services",
    description: "Reach out to discuss your project requirements and get a personalized quote.",
    url: 'https://web-dev-agency-seven.vercel.app/contact', // Replace with your actual URL
    // images: [ /* Add relevant images for social sharing */ ],
  },
  // twitter: { /* Add Twitter card metadata */ },
};

// We will create and import a client component for the actual page content
import ContactPageClient from "../../components/ContactPageClient";

export default function ContactPage() {
  return <ContactPageClient />;
} 