import styles from './Footer.module.css'; // Assuming you will create this CSS module

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} My Awesome Website. All rights reserved.</p>
    </footer>
  );
} 