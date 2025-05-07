import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Awesome Web Development Services",
  description: "Professional web development services specializing in Next.js, React, and Framer Motion.",
};

// JSON-LD for Organization Schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "My Awesome Web Development",
  // "url": "https://yourwebsite.com", // Replace with your actual URL
  // "logo": "https://yourwebsite.com/logo.png", // Replace with your logo URL
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-555-555-5555", // Replace with your phone number
    "contactType": "Customer Service" // Or appropriate type
  },
  // "sameAs": [
  //   "https://www.facebook.com/yourprofile",
  //   "https://www.twitter.com/yourprofile",
  //   "https://www.linkedin.com/company/yourprofile"
  // ] // Add social media profile URLs
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
