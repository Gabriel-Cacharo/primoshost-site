import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { BsPersonFill } from 'react-icons/bs';
import { HiOutlineStatusOnline } from 'react-icons/hi';
import { BiSolidBookBookmark, BiSolidBook } from 'react-icons/bi';
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from 'react-icons/md';
import { TbBrandMinecraft } from 'react-icons/tb';
import { GiDinosaurRex } from 'react-icons/gi';

import LogoWithSlogan from '../../../public/images/logoWithSlogan.png';

import styles from './styles.module.css';

export function Header() {
  const pathname = usePathname();

  const [divIsOpened, setDivIsOpened] = useState(false);
  const [divGameIsOpened, setDivGameIsOpened] = useState(false);

  // useEffect(() => {
  //   const handleMouseOver = () => setDivIsOpened(true);
  //   const handleMouseLeave = () => setDivIsOpened(false);

  //   document.querySelector('#moreButton')?.addEventListener('mouseover', () => handleMouseOver);
  //   document.querySelector('#moreModal')?.addEventListener('mouseover', () => handleMouseOver);

  //   document.querySelector('#moreButton')?.addEventListener('mouseleave', () => handleMouseLeave);
  //   document.querySelector('#moreModal')?.addEventListener('mouseleave', () => handleMouseLeave);

  //   return () => {
  //     document.querySelector('#moreButton')?.addEventListener('mouseover', () => handleMouseOver);
  //     document.querySelector('#moreModal')?.addEventListener('mouseover', () => handleMouseOver);
  //     document.querySelector('#moreButton')?.addEventListener('mouseleave', () => handleMouseLeave);
  //     document.querySelector('#moreModal')?.addEventListener('mouseleave', () => handleMouseLeave);
  //   };
  // }, []);

  return (
    <header className={styles.header}>
      <Link href="/">
        <Image src={LogoWithSlogan} alt="PrimosHost Logo" width={200} height={45} />
      </Link>

      <ul>
        <li>
          <Link href="/" className={pathname === '/' ? styles.pageActive : ''}>
            Início
          </Link>
        </li>{' '}
        <li>
          <a id="gameButton" onClick={() => setDivGameIsOpened(!divGameIsOpened)}>
            Jogos {divGameIsOpened ? <MdOutlineArrowDropUp /> : <MdOutlineArrowDropDown />}
          </a>
          <div id="gameModal" style={divGameIsOpened ? { display: 'flex' } : { display: 'none' }}>
            <Link href="/minecraft" className={pathname === '/minecraft/' ? styles.pageActive : ''}>
              <TbBrandMinecraft /> Minecraft
            </Link>

            <Link href="/palworld" className={pathname === '/palworld/' ? styles.pageActive : ''}>
              <GiDinosaurRex /> Palworld
            </Link>
          </div>
        </li>
        <li>
          <Link href="/vpsGaming" className={pathname === '/vpsGaming/' ? styles.pageActive : ''}>
            VPS Gaming
          </Link>
        </li>
        <li>
          <a id="moreButton" onClick={() => setDivIsOpened(!divIsOpened)}>
            Mais
            {divIsOpened ? <MdOutlineArrowDropUp /> : <MdOutlineArrowDropDown />}
          </a>
          <div id="moreModal" style={divIsOpened ? { display: 'flex' } : { display: 'none' }}>
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
