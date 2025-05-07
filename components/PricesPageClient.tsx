'use client';

import styles from '@/app/prices/prices.module.css'; // We'll create this CSS module
import { motion } from 'framer-motion';
import Link from 'next/link';
// import PriceTable from "@/components/PriceTable"; // We might use this or a custom structure

// Define a type for our pricing packages
interface PricingPackage {
  id: string;
  name: string;
  price: string;
  frequency?: string; // e.g., "/month" or "one-time"
  description: string;
  features: string[];
  isFeatured?: boolean; // To highlight a specific package
  ctaText: string;
  ctaLink: string;
}

// Sample pricing data
const pricingPackages: PricingPackage[] = [
  {
    id: "basic",
    name: "Starter Site",
    price: "$999",
    frequency: "one-time",
    description: "Perfect for individuals or small businesses needing a professional online presence.",
    features: [
      "Up to 5 Pages (e.g., Home, About, Services, Blog, Contact)",
      "Responsive Design (Mobile, Tablet, Desktop)",
      "Basic SEO Setup",
      "Contact Form Integration",
      "Social Media Links Integration",
      "1 Month Post-Launch Support"
    ],
    ctaText: "Get Started",
    ctaLink: "/contact?package=starter"
  },
  {
    id: "business",
    name: "Business Pro",
    price: "$2,499",
    frequency: "one-time",
    description: "Ideal for growing businesses looking for advanced features and customization.",
    features: [
      "Up to 10 Pages with Custom Design",
      "Next.js & React Development",
      "Content Management System (CMS) Integration (e.g., Strapi)",
      "Advanced SEO Optimization",
      "Framer Motion Animations (Basic set)",
      "Blog Setup & Integration",
      "Google Analytics Setup",
      "3 Months Post-Launch Support"
    ],
    isFeatured: true,
    ctaText: "Choose Business Pro",
    ctaLink: "/contact?package=business"
  },
  {
    id: "enterprise",
    name: "Enterprise Solution",
    price: "Custom",
    description: "Tailored solutions for large businesses or complex projects requiring bespoke functionalities.",
    features: [
      "Unlimited Pages & Custom Functionality",
      "Full-Stack Next.js/React Application",
      "Advanced E-commerce Features (if applicable)",
      "Custom API Integrations",
      "Dedicated Project Manager",
      "Advanced Framer Motion Animations & Interactions",
      "Ongoing Maintenance & Support Options"
    ],
    ctaText: "Request a Quote",
    ctaLink: "/contact?package=enterprise"
  }
];

// FAQ Data
const faqData = [
  {
    question: "What does 'one-time' price mean?",
    answer: "A one-time price means you pay the stated amount once for the development and launch of your website as per the package details. There are no recurring fees for the development itself unless you opt for ongoing maintenance or specific subscription-based services."
  },
  {
    question: "Can I customize a package?",
    answer: "Absolutely! While our packages are designed to cover common needs, we understand every project is unique. We can customize any package or create a completely bespoke proposal based on your specific requirements. Just get in touch!"
  },
  {
    question: "What is not included in these packages?",
    answer: "These packages typically cover design and development. Domain name registration, web hosting, premium third-party plugins/services (unless specified), and extensive custom content creation (e.g., copywriting, professional photography) are usually separate. We can discuss these during our consultation."
  },
  {
    question: "How long does it take to build a website?",
    answer: "The timeline depends on the complexity and scope of the project. A Starter Site might take 3-5 weeks, while a Business Pro site could take 6-10 weeks. Enterprise solutions vary greatly. We'll provide a detailed timeline after our initial consultation."
  }
];

export default function PricesPageClient() {
  return (
    <div className={styles.pageContainer}>
      <motion.header 
        className={styles.pageHeader}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1>Transparent Pricing for Your Success</h1>
        <p className={styles.introductoryText}>
          Investing in a professional website is investing in your business's future. We offer clear, competitive pricing to provide you with the best value. 
          Below, you'll find our standard packages designed to meet a variety of needs. If you don't see a perfect fit, don't worry! We're always happy to discuss your project and create a custom quote.
        </p>
      </motion.header>

      <section className={styles.philosophySection}>
        <h2>Our Pricing Philosophy</h2>
        <p>
          We believe in transparency and partnership. Our goal is to provide you with a high-quality website that meets your objectives without any surprises. 
          Our prices reflect the expertise, time, and resources invested in creating modern, efficient, and engaging web experiences. 
          We focus on delivering tangible value and a strong return on your investment.
        </p>
      </section>

      <div className={styles.pricingGrid}>
        {pricingPackages.map((pkg, index) => (
          <motion.div 
            key={pkg.id} 
            className={`${styles.pricingPackage} ${pkg.isFeatured ? styles.featuredPackage : ''}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            {pkg.isFeatured && <div className={styles.featuredBadge}>Most Popular</div>}
            <h2>{pkg.name}</h2>
            <p className={styles.packagePrice}>{pkg.price} {pkg.frequency && <span className={styles.priceFrequency}>{pkg.frequency}</span>}</p>
            <p className={styles.packageDescription}>{pkg.description}</p>
            <ul className={styles.featuresList}>
              {pkg.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <Link href={pkg.ctaLink} className={styles.ctaButton}>
              {pkg.ctaText}
            </Link>
          </motion.div>
        ))}
      </div>

      <section className={styles.customQuoteSection}>
        <h2>Need Something Different?</h2>
        <p>Every project is unique. If our packages don't quite fit, we're happy to discuss your specific requirements and provide a custom quote tailored to your goals.</p>
        <Link href="/contact?source=pricing-custom" className={styles.ctaButtonSecondary}>
          Get a Custom Quote
        </Link>
      </section>

      <section className={styles.faqSection}>
        <h2>Frequently Asked Questions</h2>
        <div className={styles.faqContainer}>
          {faqData.map((faq, index) => (
            <motion.div 
              key={index} 
              className={styles.faqItem}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
} 