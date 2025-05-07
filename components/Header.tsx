import Link from 'next/link';
import styles from './Header.module.css'; // Assuming you will create this CSS module

export default function Header() {
  // TODO: Add state and logic for mobile menu toggle

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          YOUR_LOGO {/* Replace with text or <Image /> */}
        </Link>
        <nav className={styles.navDesktop}> {/* Hide on mobile */}
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/prices">Prices</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <button className={styles.menuToggle} aria-label="Toggle menu"> {/* Show on mobile */}
          {/* Hamburger Icon Lines */}
          <span></span>
          <span></span>
          <span></span>
        </button>
        {/* TODO: Add mobile navigation menu here, conditionally rendered */}
      </div>
    </header>
  );
} 