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
            {/* <li>VPS</li> */}
          </ul>
        </div>

        <div>
          <h6>Empresa</h6>
          <ul>
            <li>
              <a
                href="https://docs.google.com/document/d/1Aq3_78JYY6qKgvW8eT6szwKCXdUjq67-8j74B5S3RjI/edit?usp=share_link"
                target="_blank"
              >
                Termos de Serviço
              </a>
            </li>
            <li>
              <a
                href="https://docs.google.com/document/d/12LjO7GKzx4p60-99s16rcr5xE8FNMN45cMSyUgI92bc/edit?usp=share_link"
                target="_blank"
              >
                Políticas de Privacidade
              </a>
            </li>
            <li>
              <a href="https://stats.uptimerobot.com/rrvlQFwnL5">Status</a>
            </li>
            <li>
              <a href="https://cliente.primoshost.com.br/index.php?rp=/knowledgebase">Base de Conhecimento</a>
            </li>
          </ul>
        </div>

        <div className={styles.contactDiv}>
          <h6>Contato</h6>
          <ul className={styles.contactDivUl}>
            <li>
              <a href="https://twitter.com/primoshost" target="_blank">
                <RiTwitterXFill color="fff" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/primoshost/" target="_blank">
                <AiOutlineInstagram color="fff" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/profile.php?id=61552718750289" target="_blank">
                <CiFacebook color="fff" />
              </a>
            </li>
            <li>
              <a href="https://discord.gg/3Be4y9cYEA" target="_blank">
                <BiLogoDiscordAlt color="fff" />
              </a>
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
