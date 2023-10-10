import Image from 'next/image';

import { BiRightArrowAlt } from 'react-icons/bi';

import styles from './styles.module.css';

interface IMainProduct {
  title: string;
  description: string;
  price: string;
  link: string;
  imageUrl: string;
}

export function MainProduct({ description, link, price, title, imageUrl }: IMainProduct) {
  return (
    <div className={styles.mainProduct} data-aos="fade-in">
      <h5>{title}</h5>

      <div className={styles.mainProductInformations}>
        <Image src={imageUrl} alt="Render" height={120} width={70} />
        <p>{description}</p>

        <div>
          <p>A partir de </p>
          <p>
            <span>R$</span> {price}
          </p>
        </div>

        <button>
          Conhecer <BiRightArrowAlt />
        </button>
      </div>
    </div>
  );
}
