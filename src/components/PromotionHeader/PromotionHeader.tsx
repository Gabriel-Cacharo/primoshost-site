import { GiGhost } from 'react-icons/gi';

import styles from './styles.module.css';

export function PromotionHeader() {
  return (
    <header className={styles.promotionHeader}>
      <h3>
        <GiGhost size={20} /> PROMOÇÃO DE HALLOWEEN! Utilize o cupom <span>HALLOWEEN10</span> e garanta 10% de desconto!
      </h3>
    </header>
  );
}
