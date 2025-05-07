'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import styles from '@/app/contact/contact.module.css'; // We'll create this CSS module
import { motion } from 'framer-motion';
import Link from 'next/link'; // For linking to privacy policy, etc.

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  packageInterest?: string; // To pre-fill if coming from pricing page
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function ContactPageClient() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  // Handle pre-filling package interest from URL query parameters (if any)
  // This requires `useSearchParams` from `next/navigation` if done on client side properly
  // For simplicity in this step, we won't implement full URL param reading here
  // but you could pass it as a prop from the server component if needed.

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid.";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate API call / form submission
    // Replace this with your actual form submission logic (e.g., to Formspree, Netlify, or a backend API)
    try {
      // const response = await fetch('YOUR_FORM_ENDPOINT', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });
      // if (!response.ok) throw new Error('Submission failed');
      
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate delay
      console.log("Form data submitted:", formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputVariants = {
    focus: { scale: 1.03, borderColor: 'var(--primary-color)' },
    blur: { scale: 1, borderColor: 'var(--border-standard)' },
  };

  return (
    <div className={styles.pageContainer}>
      <motion.header 
        className={styles.pageHeader}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1>Get in Touch</h1>
        <p className={styles.pageSubtitle}>
          We&apos;'re excited to hear about your project! Whether you have a clear vision or just a spark of an idea, 
          our team is ready to discuss how we can bring it to life. Fill out the form below, or use one of our alternative contact methods. 
          We aim to respond to all inquiries within 24 business hours.
        </p>
      </motion.header>

      <div className={styles.contactLayout}>
        <motion.div 
          className={styles.formContainer}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2>Send Us a Message</h2>
          <p className={styles.formIntro}>Please provide as much detail as possible so we can better understand your needs.</p>
          {submitStatus === 'success' && (
            <motion.p className={styles.successMessage} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              Thank you for your message! We&apos;'ll get back to you soon.
            </motion.p>
          )}
          {submitStatus === 'error' && (
            <motion.p className={styles.errorMessage} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              Oops! Something went wrong. Please try again or contact us directly.
            </motion.p>
          )}
          {submitStatus !== 'success' && (
            <form onSubmit={handleSubmit} noValidate>
              <motion.div className={styles.formGroup} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                <label htmlFor="name">Full Name</label>
                <motion.input 
                  type="text" id="name" name="name" 
                  value={formData.name} onChange={handleChange} 
                  variants={inputVariants} whileFocus="focus" animate="blur"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && <p id="name-error" className={styles.errorText}>{errors.name}</p>}
              </motion.div>

              <motion.div className={styles.formGroup} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                <label htmlFor="email">Email Address</label>
                <motion.input 
                  type="email" id="email" name="email" 
                  value={formData.email} onChange={handleChange} 
                  variants={inputVariants} whileFocus="focus" animate="blur"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && <p id="email-error" className={styles.errorText}>{errors.email}</p>}
              </motion.div>

              <motion.div className={styles.formGroup} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                <label htmlFor="subject">Subject <span className={styles.optionalText}>(e.g., Project Inquiry, Quote Request)</span></label>
                <motion.input 
                  type="text" id="subject" name="subject" 
                  value={formData.subject} onChange={handleChange} 
                  variants={inputVariants} whileFocus="focus" animate="blur"
                  aria-invalid={!!errors.subject}
                  aria-describedby={errors.subject ? "subject-error" : undefined}
                />
                {errors.subject && <p id="subject-error" className={styles.errorText}>{errors.subject}</p>}
              </motion.div>

              <motion.div className={styles.formGroup} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
                <label htmlFor="message">Your Message <span className={styles.optionalText}>(Details about your project, goals, budget, etc.)</span></label>
                <motion.textarea 
                  id="message" name="message" rows={5} 
                  value={formData.message} onChange={handleChange} 
                  variants={inputVariants} whileFocus="focus" animate="blur"
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && <p id="message-error" className={styles.errorText}>{errors.message}</p>}
              </motion.div>

              <motion.button 
                type="submit" 
                className={styles.submitButton} 
                disabled={isSubmitting}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          )}
        </motion.div>

        <motion.div 
          className={styles.contactDetails}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2>Other Ways to Reach Us</h2>
          <p className={styles.contactDetailsIntro}>
            We value clear communication and are always happy to discuss your needs. 
            Whether you prefer email for detailed inquiries, a phone call for urgent matters, or have a quick question, don&apos;'t hesitate to connect. 
            Our team is dedicated to providing timely and helpful responses.
          </p>
          <ul>
            <li><strong>Email:</strong> <a href="mailto:hello@yourwebsite.com">hello@yourwebsite.com</a> (Preferred for detailed project discussions)</li>
            <li><strong>Phone:</strong> <a href="tel:+15551234567">+1 (555) 123-4567</a> (For urgent matters or quick consultations)</li>
            <li><strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 5:30 PM (Your Local Timezone - please specify)</li>
            {/* Optional: Add Address */}
            {/* ... */}
            {/* Optional: Add Social Media Links */}
            {/* ... */}
          </ul>
          <p className={styles.privacyNote}>
            By submitting your information through our contact form or other means, you acknowledge and agree to our <Link href="/privacy-policy">Privacy Policy</Link> and consent to us contacting you regarding your inquiry.
          </p>
        </motion.div>
      </div>
    </div>
  );
} 