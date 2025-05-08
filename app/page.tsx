// No 'use client' here - this is now a Server Component

import HomePageClient from "@/components/HomePageClient"; // Import the new client component

// Enhanced Metadata for SEO
export const metadata = {
  title: "WebDevAgency | Custom Web Development for Your Business",
  description: "Boost your brand with expert web development services. We build fast, responsive websites using Next.js, React, TypeScript & Framer Motion",
  keywords: "web development, Next.js development, React development, TypeScript, Framer Motion, custom websites, e-commerce solutions, responsive design, SEO optimization, web design agency",
  // You can also add openGraph and twitter card metadata here for social sharing
  openGraph: {
    title: "Expert Web Development Services | Dynamic Websites with Next.js, React & Framer Motion",
    description: "Specializing in Next.js, React, and Framer Motion to build stunning, high-performance websites.",
    type: 'website',
    url: 'https://web-dev-agency-seven.vercel.app/', // Replace with your actual URL when deployed
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
