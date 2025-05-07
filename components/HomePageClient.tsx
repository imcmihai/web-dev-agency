'use client';

import styles from "@/app/page.module.css"; // Adjusted path
import { motion } from 'framer-motion';
import Link from 'next/link';
import ServiceCard from "@/components/ServiceCard";

// Updated Sample service data with more descriptive content
const sampleServices = [
  { 
    title: "Next.js & React Development", 
    description: "Cutting-edge websites built with Next.js and React for unparalleled performance, SEO, and user experiences. Perfect for modern web applications."
  },
  { 
    title: "Dynamic E-commerce Platforms", 
    description: "Boost your online sales with bespoke e-commerce solutions. We build secure, scalable, and feature-rich platforms tailored to your business needs."
  },
  { 
    title: "Engaging Framer Motion Animations", 
    description: "Captivate your audience with stunning, fluid animations powered by Framer Motion. Elevate your brand with interactive and memorable designs."
  },
];

// Updated Sample testimonial data for more authenticity
const sampleTestimonials = [
  {
    quote: "The new website is a game-changer! Our engagement rates have skyrocketed, and the design perfectly captures our brand. Truly exceptional work with Next.js and Framer Motion.",
    author: "Sarah L.",
    company: "Innovatech Global"
  },
  {
    quote: "From concept to launch, the process was seamless. Their expertise in React development and attention to detail were evident throughout. Highly recommend for any web project!",
    author: "Michael B.",
    company: "Synergy Solutions"
  },
  {
    quote: "Our e-commerce sales have seen a significant uplift since the new site went live. The user experience is fantastic, and it's so easy to manage.",
    author: "Emily K.",
    company: "The Boutique Hub"
  }
];

export default function HomePageClient() {
  return (
    <div className={styles.pageContainer}> 
      <motion.section 
        className={styles.heroSection}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Transform Your Vision into a Stunning Digital Reality</h1>
        <p>We craft high-performance, visually captivating websites using the latest technologies like Next.js, React, and Framer Motion. Let's build your success story online.</p>
        <Link href="/services" className={styles.ctaButton}>
          Discover Our Expertise
        </Link>
      </motion.section>

      <section className={styles.servicesOverview}>
        <h2>Core Expertise: Building Tomorrow's Web, Today</h2>
        <div className={styles.serviceCardsContainer}>
          {sampleServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <ServiceCard title={service.title} description={service.description} />
            </motion.div>
          ))}
        </div>
      </section>

      <section className={styles.testimonialsSection}>
        <h2>Trusted by Businesses Like Yours</h2>
        <div className={styles.testimonialsContainer}>
          {sampleTestimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className={styles.testimonialItem}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <p className={styles.testimonialQuote}>\"{testimonial.quote}\"</p>
              <p className={styles.testimonialAuthor}>- {testimonial.author}, {testimonial.company}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <motion.section 
        className={styles.ctaSection}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <h2>Ready to Elevate Your Digital Presence?</h2>
        <p>Partner with us to create a website that not only looks incredible but also drives results. Contact our experts today for a personalized consultation and free quote.</p>
        <Link href="/contact" className={styles.ctaButton}> 
          Start Your Project Today
        </Link>
      </motion.section>
    </div>
  );
} 