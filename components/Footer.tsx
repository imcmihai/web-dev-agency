import Link from 'next/link';
import styles from './Footer.module.css'; // Assuming you will create this CSS module

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const emailAddress = "hello@yourwebsite.com"; // Replace with actual email

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        <div className={styles.footerColumn} id="company-info">
          <Link href="/" className={styles.footerLogo}>YOUR_LOGO</Link>
          <p className={styles.copyright}>
            &copy; {currentYear} Your Company Name.
            <br />
            All rights reserved.
          </p>
        </div>

        <div className={styles.footerColumn} id="quick-links">
          <h4>Quick Links</h4>
          <nav className={styles.footerNav}>
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/prices">Pricing</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>

        <div className={styles.footerColumn} id="contact-social">
          <h4>Connect With Us</h4>
          <p className={styles.footerEmail}>
            <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
          </p>
          <div className={styles.socialIcons}>
            {/* Replace # with actual profile URLs */}
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="TikTok">[Tik]</a> 
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">[Inst]</a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook">[FB]</a>
            {/* Add SVG icons or an icon library later */}
          </div>
        </div>

      </div>
    </footer>
  );
} 