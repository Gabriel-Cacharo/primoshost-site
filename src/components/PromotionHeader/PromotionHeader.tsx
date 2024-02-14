import { GiStarFormation } from 'react-icons/gi';

import styles from './styles.module.css';

export function PromotionHeader() {
  return (
    <header className={styles.promotionHeader}>
      <h3>
        <GiStarFormation size={20} /> PROMOÇÃO DE ANO NOVO! Utilize o cupom <span>ANONOVO15</span> e garanta 15% de
        desconto!
      </h3>
    </header>
  );
}
