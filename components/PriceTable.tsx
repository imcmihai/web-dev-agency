import styles from './PriceTable.module.css'; // Assuming you will create this CSS module

interface PriceItem {
  name: string;
  price: string;
  features: string[];
}

interface PriceTableProps {
  items: PriceItem[];
}

export default function PriceTable({ items }: PriceTableProps) {
  return (
    <div className={styles.priceTable}>
      {items.map((item, index) => (
        <div key={index} className={styles.priceItem}>
          <h4>{item.name}</h4>
          <p className={styles.price}>{item.price}</p>
          <ul>
            {item.features.map((feature, fIndex) => (
              <li key={fIndex}>{feature}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
} 