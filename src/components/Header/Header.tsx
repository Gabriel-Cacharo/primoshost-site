import Image from 'next/image';

import { BsPersonFill } from 'react-icons/bs';

import styles from './styles.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <Image src="/images/logoWithSlogan.png" alt="PrimosHost Logo" width={200} height={45} />

      <ul>
        <li>
          <a href="">Minecraft</a>
        </li>{' '}
        <li>
          <a href="">Servidores VPS</a>
        </li>
        <li>
          <a href="">Mais</a>
        </li>
      </ul>

      <a href="">
        <BsPersonFill /> Área do Cliente
      </a>
    </header>
  );
}
