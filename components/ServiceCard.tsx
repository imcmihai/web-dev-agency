import styles from './ServiceCard.module.css'; // Assuming you will create this CSS module

interface ServiceCardProps {
  title: string;
  description: string;
}

export default function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
} 