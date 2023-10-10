import Image from 'next/image';

import { RiTwitterXFill } from 'react-icons/ri';
import { AiOutlineInstagram, AiOutlineMail } from 'react-icons/ai';
import { CiFacebook } from 'react-icons/ci';
import { BiLogoDiscordAlt } from 'react-icons/bi';

import LogoWithSlogan from '../../../public/images/logoWithSloganVertical.png';

import styles from './styles.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.firstFooterContent}>
        <Image src={LogoWithSlogan} height={169} width={175} alt="PrimosHost Logo" />

        <div>
          <h6>Nossos Serviços</h6>
          <ul>
            <li>Minecraft</li>
            <li>VPS</li>
          </ul>
        </div>

        <div>
          <h6>Empresa</h6>
          <ul>
            <li>Termos de Serviço</li>
            <li>Status</li>
            <li>Base de Conhecimento</li>
          </ul>
        </div>

        <div className={styles.contactDiv}>
          <h6>Contato</h6>
          <ul className={styles.contactDivUl}>
            <li>
              <RiTwitterXFill color="fff" />
            </li>
            <li>
              <AiOutlineInstagram color="fff" />
            </li>
            <li>
              <CiFacebook color="fff" />
            </li>
            <li>
              <BiLogoDiscordAlt color="fff" />
            </li>
          </ul>
          <p>
            <AiOutlineMail color="f78f1e" /> contato@primoshost.com.br
          </p>
        </div>
      </div>
      <div className={styles.secondFooterContent}>
        <p>Todos os direitos reservados PrimosHost © 2023</p>
        <p>Feito com 🤍 por PrimosHost</p>
      </div>
    </footer>
  );
}
