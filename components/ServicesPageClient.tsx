'use client';

import styles from '@/app/services/services.module.css'; // We'll create this CSS module
import { motion } from 'framer-motion';
import Image from 'next/image'; // For service icons/images (optional)
import Link from 'next/link'; // Import Link for CTA

// Define a type for our service items for better structure
interface ServiceItem {
  id: string;
  title: string;
  description: string;
  details: string[]; // Array of detailed points about the service
  icon?: string; // Optional path to an icon image
  keywords: string[];
}

// Expanded list of services with more details
const servicesData: ServiceItem[] = [
  {
    id: "custom-dev",
    title: "Custom Next.js & React Development",
    description: "Building high-performance, scalable, and SEO-friendly web applications tailored to your unique business requirements using the power of Next.js and React.",
    details: [
      "Full-stack application development with modern JavaScript/TypeScript.",
      "Server-Side Rendering (SSR) and Static Site Generation (SSG) for optimal performance.",
      "API integration and development (RESTful, GraphQL).",
      "Headless CMS integration (e.g., Strapi, Sanity, Contentful).",
      "Robust state management solutions (e.g., Redux, Zustand, Context API)."
    ],
    icon: "/icons/dev-icon.svg", // Replace with actual icon path
    keywords: ["Next.js", "React", "TypeScript", "Full-stack", "SSR", "SSG", "API Integration"]
  },
  {
    id: "ecommerce",
    title: "Advanced E-commerce Solutions",
    description: "From custom storefronts to complete e-commerce platforms, we provide solutions that drive sales and enhance customer experience, integrated with secure payment gateways.",
    details: [
      "Custom e-commerce website design and development.",
      "Integration with popular platforms like Shopify, WooCommerce, or custom backends.",
      "Payment gateway integration (Stripe, PayPal, etc.).",
      "Product catalog management and inventory systems.",
      "User account management and order processing workflows."
    ],
    icon: "/icons/cart-icon.svg", // Replace with actual icon path
    keywords: ["E-commerce", "Online Store", "Shopify", "WooCommerce", "Payment Gateway", "Custom Storefront"]
  },
  {
    id: "animations",
    title: "Dynamic UI/UX with Framer Motion",
    description: "Elevate user engagement with sophisticated and fluid animations. We leverage Framer Motion to create intuitive and memorable user interfaces.",
    details: [
      "Scroll-based animations and parallax effects.",
      "Interactive micro-animations for UI elements.",
      "Page transition animations for seamless navigation.",
      "Complex choreographed animation sequences.",
      "Performance-optimized animations for smooth experiences."
    ],
    icon: "/icons/motion-icon.svg", // Replace with actual icon path
    keywords: ["Framer Motion", "UI/UX Animation", "Interactive Design", "Micro-animations", "User Engagement"]
  },
  {
    id: "seo-optimization",
    title: "Comprehensive SEO & Performance Optimization",
    description: "Ensuring your website not only looks great but also ranks well on search engines and loads lightning fast. We implement best practices for on-page SEO and performance.",
    details: [
      "Technical SEO audits and implementation.",
      "On-page optimization (meta tags, structured data, content strategy).",
      "Image optimization and lazy loading.",
      "Code splitting and bundle optimization for faster load times.",
      "Performance monitoring and Core Web Vitals improvements."
    ],
    icon: "/icons/seo-icon.svg", // Replace with actual icon path
    keywords: ["SEO", "Performance Optimization", "Core Web Vitals", "Technical SEO", "On-Page SEO"]
  }
];

export default function ServicesPageClient() {
  return (
    <div className={styles.pageContainer}>
      <motion.header 
        className={styles.pageHeader}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1>Our Expert Web Development Services</h1>
        <p>Discover how our tailored solutions can elevate your digital presence and drive business growth.</p>
      </motion.header>

      <div className={styles.servicesList}>
        {servicesData.map((service, index) => (
          <motion.section 
            key={service.id} 
            className={styles.serviceItem}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {service.icon && (
              <div className={styles.serviceIconContainer}>
                <Image src={service.icon} alt={`${service.title} icon`} width={50} height={50} />
              </div>
            )}
            <div className={styles.serviceContent}>
              <h2>{service.title}</h2>
              <p className={styles.serviceDescription}>{service.description}</p>
              <h3>Key Features:</h3>
              <ul>
                {service.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
              <div className={styles.serviceKeywords}>
                <strong>Keywords:</strong> {service.keywords.join(", ")}
              </div>
            </div>
          </motion.section>
        ))}
      </div>

      {/* CTA Section at the bottom */}
      <motion.section 
        className={styles.ctaSection} // Re-use or create specific styles
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <h2>Have a Project in Mind?</h2>
        <p>Let's turn your ideas into reality. Reach out to us for a detailed discussion and a no-obligation quote.</p>
        <Link href="/contact" className={styles.ctaButton}> 
          Get in Touch
        </Link>
      </motion.section>
    </div>
  );
} 