import styles from './styles.module.css';

interface ISectionTitle {
  title: string;
  subtitle: string;
}

export function SectionTitle({ title, subtitle }: ISectionTitle) {
  return (
    <div className={styles.sectionTitle}>
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </div>
  );
}
