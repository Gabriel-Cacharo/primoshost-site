import Image from 'next/image';

import { BiRightArrowAlt } from 'react-icons/bi';

import styles from './styles.module.css';
import Link from 'next/link';

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
        {imageUrl.includes('palworld') ? (
          <Image src={imageUrl} alt="Render" width={140} height={140} />
        ) : imageUrl.includes('esmeralda') ? (
          <Image src={imageUrl} alt="Render" width={260} height={140} />
        ) : (
          <Image src={imageUrl} alt="Render" width={200} height={200} style={{ marginTop: '-80px' }} />
        )}
        <p style={imageUrl.includes('host') ? { marginTop: '-20px' } : {}}>{description}</p>

        <div>
          <p>A partir de </p>
          <p>
            <span>R$</span> {price}
          </p>
        </div>

        <Link href={link}>
          Conhecer <BiRightArrowAlt />
        </Link>
      </div>
    </div>
  );
}
