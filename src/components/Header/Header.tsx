import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { BsPersonFill } from 'react-icons/bs';
import { HiOutlineStatusOnline } from 'react-icons/hi';
import { BiSolidBookBookmark, BiSolidBook } from 'react-icons/bi';

import LogoWithSlogan from '../../../public/images/logoWithSlogan.png';

import styles from './styles.module.css';

export function Header() {
  const [divIsOpened, setDivIsOpened] = useState(false);

  return (
    <header className={styles.header}>
      <Link href="/">
        <Image src={LogoWithSlogan} alt="PrimosHost Logo" width={200} height={45} />
      </Link>

      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>{' '}
        <li>
          <Link href="/minecraft">Minecraft</Link>
        </li>{' '}
        <li>
          <a href="" style={{ color: '#9e9e9e' }}>
            Servidores VPS
          </a>
        </li>
        <li>
          <a onClick={() => setDivIsOpened(!divIsOpened)}>Mais</a>
          <div style={divIsOpened ? { opacity: '1' } : { opacity: '0' }}>
            <a href="https://stats.uptimerobot.com/rrvlQFwnL5" target="_blank">
              <HiOutlineStatusOnline /> Status da Rede
            </a>
            <a
              href="https://docs.google.com/document/d/1Aq3_78JYY6qKgvW8eT6szwKCXdUjq67-8j74B5S3RjI/edit?usp=share_link"
              target="_blank"
            >
              <BiSolidBookBookmark /> Termos de Serviço
            </a>
            <a
              href="https://docs.google.com/document/d/12LjO7GKzx4p60-99s16rcr5xE8FNMN45cMSyUgI92bc/edit?usp=share_link"
              target="_blank"
            >
              <BiSolidBook /> Políticas de Privacidade
            </a>
          </div>
        </li>
      </ul>

      <a href="https://cliente.primoshost.com.br/" className={styles.clientButton}>
        <BsPersonFill /> Área do Cliente
      </a>
    </header>
  );
}
