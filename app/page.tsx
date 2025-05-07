// No 'use client' here - this is now a Server Component

import HomePageClient from "@/components/HomePageClient"; // Import the new client component

// Enhanced Metadata for SEO
export const metadata = {
  title: "Expert Web Development Services | Dynamic Websites with Next.js, React & Framer Motion",
  description: "Elevate your online presence with our professional web development services. We specialize in creating dynamic, responsive websites using Next.js, React, TypeScript, and Framer Motion animations. Contact us for a free quote!",
  keywords: "web development, Next.js development, React development, TypeScript, Framer Motion, custom websites, e-commerce solutions, responsive design, SEO optimization, web design agency",
  // You can also add openGraph and twitter card metadata here for social sharing
  openGraph: {
    title: "Expert Web Development Services | Dynamic Websites with Next.js, React & Framer Motion",
    description: "Specializing in Next.js, React, and Framer Motion to build stunning, high-performance websites.",
    type: 'website',
    // url: 'https://yourwebsite.com', // Replace with your actual URL when deployed
    // images: [
    //   {
    //     url: 'https://yourwebsite.com/og-image.jpg', // Replace with your OG image URL
    //     width: 1200,
    //     height: 630,
    //     alt: 'Web Development Services Showcase',
    //   },
    // ],
  },
  // twitter: {
  //   card: 'summary_large_image',
  //   title: "Expert Web Development Services | Dynamic Websites with Next.js, React & Framer Motion",
  //   description: "Specializing in Next.js, React, and Framer Motion to build stunning, high-performance websites.",
  //   // site: '@yourTwitterHandle', // Replace with your Twitter handle
  //   // creator: '@creatorTwitterHandle', // Optional
  //   // images: ['https://yourwebsite.com/twitter-image.jpg'], // Replace with your Twitter image URL
  // },
};

export default function Home() {
  return <HomePageClient />;
}
