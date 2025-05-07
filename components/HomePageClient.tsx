'use client';

import styles from "@/app/page.module.css";
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
    quote: "Our e-commerce sales have seen a significant uplift since the new site went live. The user experience is fantastic, and it is so easy to manage.",
    author: "Emily K.",
    company: "The Boutique Hub"
  }
];

const clientLogos = [ // Placeholder client logos
  { name: "Framework", logoUrl: "/logos/framework-logo.svg" }, // Replace with actual paths
  { name: "Ribbit Capital", logoUrl: "/logos/ribbit-logo.svg" },
  { name: "Nascent", logoUrl: "/logos/nascent-logo.svg" },
  { name: "ParaFi Capital", logoUrl: "/logos/parafi-logo.svg" },
];

export default function HomePageClient() {
  return (
    <div className={styles.pageContainer}> 
      <section className={styles.heroSection}>
        <motion.div 
          className={styles.heroTextContainer}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className={styles.heroSubtitle}>YOUR NAME / COMPANY</h3>
          <h1>Creative Developer / Agency<br />Based in [Your Location]</h1>
          <p className={styles.heroDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed nulla dui tellus.</p>
          <div className={styles.heroButtons}>
            <Link href="/contact" className={styles.ctaButtonGradient}>
              HIRE ME
            </Link>
          </div>
          <div className={styles.heroStats}>
            <div>
              <h4>Successful Projects</h4>
              <p>50,000+</p>
            </div>
            <div>
              <h4>Trusted Clients</h4>
              <p>500+</p>
            </div>
          </div>
        </motion.div>
        <motion.div 
          className={styles.heroGraphicContainer}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className={styles.graphicPlaceholder}>
            3D Graphic Placeholder
          </div>
        </motion.div>
      </section>

      <section className={styles.clientLogosSection}>
        {clientLogos.map((client, index) => (
          <motion.div 
            key={index} 
            className={styles.clientLogoItem}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className={styles.logoPlaceholder}>{client.name}</div>
          </motion.div>
        ))}
      </section>

      <section className={styles.servicesOverview}>
        <h2>Core Expertise: Building Tomorrow&apos;'s Web, Today</h2>
        <div className={styles.serviceCardsContainer}>
          {sampleServices.map((service, index) => (
            <motion.div
              key={index}
              className={styles.serviceCardMotionWrapper}
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
              <p className={styles.testimonialQuote}>{testimonial.quote}</p>
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