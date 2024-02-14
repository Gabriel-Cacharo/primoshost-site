'use client';

import { useState } from 'react';
import Image from 'next/image';

import { BiRightArrowAlt, BiSupport } from 'react-icons/bi';
import { BsCartCheck, BsRocketTakeoffFill } from 'react-icons/bs';
import { PiPlugsConnectedBold, PiUserCirclePlusFill } from 'react-icons/pi';
import { AiOutlineWifi } from 'react-icons/ai';
import { MdSdStorage, MdArrowCircleRight } from 'react-icons/md';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { CiClock1 } from "react-icons/ci";

import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
// import { PromotionHeader } from '@/components/PromotionHeader/PromotionHeader';

import Brazil from '../../../public/images/brazil.png';
import Inicial from '../../../public/images/palworldProducts/palworld1.png';
import Intermediario from '../../../public/images/palworldProducts/palworld2.png';
import Avancado from '../../../public/images/palworldProducts/palworld3.png';
import PteroImage from '../../../public/images/pterodactylImagePalworld.png';
import CoinImage from '../../../public/images/3dCoin.png';
import RenderPalworldProductsPage from '../../../public/images/palworld.png';

import styles from './styles.module.css';

import { minecraftBrazilProducts, palworldBrazilProducts } from '../products';

export default function Minecraft() {
  const [timeSelected, setTimeSelected] = useState<number>(1);

  return (
    <div className={styles.minecraftProductsPage}>
      {/* <PromotionHeader /> */}
      <Header />

      <header className={styles.minecraftProductsPageHeader}>
        <div data-aos="zoom-in" className={styles.minecraftProductsPageHeaderText}>
          <h2>Hospedagem Palworld</h2>

          <ul>
            <li>
              <FaLongArrowAltRight /> Seu servidor online 24 horas
            </li>
            <li>
              <FaLongArrowAltRight /> Disco NVME
            </li>
            <li>
              <FaLongArrowAltRight /> Suporte 24/7
            </li>
            <li>
              <FaLongArrowAltRight /> AntiDDOS Gamer
            </li>
            <li>
              <FaLongArrowAltRight /> Ping Brasileiro
            </li>
          </ul>
        </div>

        <div className={styles.minecraftProductPageRender} data-aos="zoom-in-left">
          <Image src={RenderPalworldProductsPage} fill alt="Render Palworld" />
        </div>
      </header>

      <div className={styles.localeContainer}>
        <h4 data-aos="fade-left">Localização</h4>
        <p data-aos="fade-left">Escolha a melhor localização para o seu servidor</p>
        <button data-aos="fade-right">
          <Image src={Brazil} alt="Brasil" width={48} height={48} />

          <div>
            <h6>Brasil</h6>
            <p>ping ~5-20</p>
          </div>
        </button>
      </div>

      {/* <div className={styles.planContainer}>
        <h4>Escolha a melhor gama de planos</h4>
        <p>Escolha as configurações que o seu servidor precisa!</p>
        <button>Basic</button>
      </div> */}

      <div className={styles.howDoYouWantToPayContainer}>
        <h4 data-aos="fade-left">Escolha como deseja pagar</h4>
        <p data-aos="fade-left">Garanta descontos ficando conosco por mais tempo</p>
        <div data-aos="fade-right">
          <button
            className={timeSelected == 1 ? styles.active : ''}
            onClick={timeSelected == 1 ? () => setTimeSelected(1) : () => setTimeSelected(1)}
          >
            Mensal
          </button>
          <button
            className={timeSelected == 2 ? styles.active : ''}
            onClick={timeSelected == 2 ? () => setTimeSelected(1) : () => setTimeSelected(2)}
          >
            Trimestral
            <p>
              Garanta <span>4%</span> de desconto
            </p>
          </button>
          <button
            className={timeSelected == 3 ? styles.active : ''}
            onClick={timeSelected == 3 ? () => setTimeSelected(1) : () => setTimeSelected(3)}
          >
            Anual
            <p>
              Garanta <span>9%</span> de desconto
            </p>
          </button>
        </div>
      </div>

      <section className={styles.productsContainer}>
        {palworldBrazilProducts.map((product, index) => (
          <div className={styles.productContainer} data-aos="flip-right" key={index}>
            <Image
              src={
                product.name === 'Inicial'
                  ? Inicial
                  : product.name === 'Intermediário'
                  ? Intermediario
                  : Avancado
              }
              alt="Pedra"
              width={260}
              height={140}
              className={styles.productImage}
            />
            <h5>{product.name}</h5>

            <ul>
              {product.description.map((description, index) => (
                <li key={index}>
                  <BiRightArrowAlt color="f78f1e" /> {description.includes('RAM') ? <b>{description}</b> : description}
                </li>
              ))}
            </ul>

            <div className={styles.priceContainer}>
              {timeSelected === 2 ? (
                <p>R${(product.montlyPrice * 3).toFixed(2)}</p>
              ) : timeSelected === 3 ? (
                <p>R${(product.montlyPrice * 12).toFixed(2)}</p>
              ) : null}
              <h6>
                <span>R$</span>{' '}
                {timeSelected === 1
                  ? product.montlyPrice.toFixed(2)
                  : timeSelected === 2
                  ? product.quarterly.toFixed(2)
                  : product.yearly.toFixed(2)}
              </h6>
            </div>

            <a href={product.link}>
              Comprar <BsCartCheck color="f78f1e" />
            </a>
          </div>
        ))}
      </section>

      <div className={styles.benefitsContainer}>
        <div data-aos="fade-down">
          <PiPlugsConnectedBold color="f78f1e" size={40} />

          <h5>Uptime 99.99%</h5>
          <p>Garanta 99.99% de Uptime para seu servidor e deixe-o sempre online para seus jogadores.</p>
        </div>

        <div data-aos="fade-down">
          <AiOutlineWifi color="f78f1e" size={40} />

          <h5>Proteção AntiDDOs</h5>
          <p>
            Possuímos uma grande infraestrutura de proteção, priorizando sempre o seu servidor online, sem quedas ou
            lags!
          </p>
        </div>

        <div data-aos="fade-down">
          <CiClock1 color="f78f1e" size={40} />

          <h5>Ativação Imediata</h5>
          <p>A ativação do seu plano é imediata, levando apenas até 5 minutos para a instalação do mesmo.</p>
        </div>
      </div>

      <section className={styles.pterodactylPanelSection}>
        <div className={styles.pterodactylImageContainer}>
          <Image src={PteroImage} alt="Painel Pterodactyl" fill data-aos="fade-right" />
        </div>

        <div className={styles.pterodactylPanelTexts} data-aos="fade-left">
          <h5>PAINEL FÁCIL DE MANUSEAR</h5>
          <p>
            Nosso painel pterodactyl conta com um tema totalmente intuitivo e fácil de manusear. Ligue seu servidor e o reinicie a qualquer momento!
          </p>

          <ul>
            {/* <li>
              <HiCursorClick />
              Mude de versão em apenas um clique
            </li> */}
            <li>
              <MdSdStorage />
              Faça backups do seu servidor em 1 minuto
            </li>
            <li>
              <PiUserCirclePlusFill />
              Adicione subusuários ao painel de maneira simples
            </li>
            <li>
              <BsRocketTakeoffFill />
              Faça tudo de uma maneira simples e em poucos cliques!
            </li>
          </ul>
        </div>
      </section>

      <section className={styles.guaranteedRefundSection}>
        <div className={styles.guaranteedRefundContainer}>
          <Image src={CoinImage} alt="Coin Image" width={250} height={250} data-aos="zoom-in" />

          <div data-aos="fade-down">
            <h5>GARANTIA DE REEMBOLSO</h5>
            <p>
              Nosso compromisso é assegurar que cumprimos integralmente nossas promessas. Se, porventura, não
              conseguirmos atender às suas expectativas, tenha a certeza de que sua proteção é nossa prioridade
              absoluta. Aqui na PrimosHost o seu reembolso é garantido, proporcionando a você a garantia de uma
              experiência livre de qualquer risco.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
