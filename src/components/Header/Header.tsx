import Image from 'next/image';
import Link from 'next/link';

import { BsPersonFill } from 'react-icons/bs';

import LogoWithSlogan from '../../../public/images/logoWithSlogan.png';

import styles from './styles.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <Image src={LogoWithSlogan} alt="PrimosHost Logo" width={200} height={45} />

      <ul>
        <li>
          <Link href="/minecraft">Minecraft</Link>
        </li>{' '}
        <li>
          <a href="" style={{ color: '#9e9e9e' }}>
            Servidores VPS
          </a>
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
