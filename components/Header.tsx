import Link from 'next/link';
import styles from './Header.module.css'; // Assuming you will create this CSS module

export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/services">Services</Link>
        <Link href="/prices">Prices</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
} 