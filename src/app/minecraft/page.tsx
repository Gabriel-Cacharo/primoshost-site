'use client';

import { useState } from 'react';
import Image from 'next/image';

import { BiRightArrowAlt, BiTimer } from 'react-icons/bi';
import { BsCartCheck } from 'react-icons/bs';

import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';

import Brazil from '../../../public/images/brazil.png';
import Pedra from '../../../public/images/minecraftProducts/pedra.png';
import Carvao from '../../../public/images/minecraftProducts/carvao.png';
import Ferro from '../../../public/images/minecraftProducts/ferro.png';
import Ouro from '../../../public/images/minecraftProducts/ouro.png';
import Diamante from '../../../public/images/minecraftProducts/diamante.png';
import Esmeralda from '../../../public/images/minecraftProducts/esmeralda.png';
import PteroImage from '../../../public/images/pterodactylImage.jpg';

import styles from './styles.module.css';

export default function Minecraft() {
  const [timeSelected, setTimeSelected] = useState<number>(1);

  return (
    <div className={styles.minecraftProductsPage}>
      <Header />

      <header className={styles.minecraftProductsPageHeader}>
        <div data-aos="zoom-in">
          <h2>Hospedagem Minecraft</h2>
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
              Garanta <span>10%</span> de desconto
            </p>
          </button>
          <button
            className={timeSelected == 3 ? styles.active : ''}
            onClick={timeSelected == 3 ? () => setTimeSelected(1) : () => setTimeSelected(3)}
          >
            Anual
            <p>
              Garanta <span>20%</span> de desconto
            </p>
          </button>
        </div>
      </div>

      <section className={styles.productsContainer}>
        <div className={styles.productContainer} data-aos="flip-right">
          <Image src={Pedra} alt="Pedra" width={260} height={140} />
          <h5>Pedra</h5>

          <ul>
            <li>
              <BiRightArrowAlt color="6a3cbc" /> Opção 1
            </li>
            <li>
              <BiRightArrowAlt color="6a3cbc" /> Opção 1
            </li>
            <li>
              <BiRightArrowAlt color="6a3cbc" /> Opção 1
            </li>
            <li>
              <BiRightArrowAlt color="6a3cbc" /> Opção 1
            </li>
          </ul>

          <div className={styles.priceContainer}>
            <p>R$45,00</p>
            <h6>
              <span>R$</span> 20,00
            </h6>
          </div>

          <button>
            Comprar <BsCartCheck color="8253d7" />
          </button>
        </div>

        <div className={styles.productContainer} data-aos="flip-right">
          <Image src={Carvao} alt="Pedra" width={260} height={140} />
          <h5>Carvão</h5>

          <ul>
            <li>
              <BiRightArrowAlt color="6a3cbc" /> 4GB de Ram
            </li>
            <li>
              <BiRightArrowAlt color="6a3cbc" /> 50GB SSD
            </li>
            <li>
              <BiRightArrowAlt color="6a3cbc" /> Slots ilimitados
            </li>
            <li>
              <BiRightArrowAlt color="6a3cbc" /> Anti DDos
            </li>
          </ul>

          <div className={styles.priceContainer}>
            <p>R$45,00</p>
            <h6>
              <span>R$</span> 20,00
            </h6>
          </div>

          <button>
            Comprar <BsCartCheck color="8253d7" />
          </button>
        </div>

        <div className={styles.productContainer} data-aos="flip-right">
          <Image src={Ferro} alt="Pedra" width={260} height={140} />
          <h5>Ferro</h5>

          <ul>
            <li>
              <BiRightArrowAlt color="6a3cbc" /> Opção 1
            </li>
            <li>
              <BiRightArrowAlt color="6a3cbc" /> Opção 1
            </li>
            <li>
              <BiRightArrowAlt color="6a3cbc" /> Opção 1
            </li>
            <li>
              <BiRightArrowAlt color="6a3cbc" /> Opção 1
            </li>
          </ul>

          <div className={styles.priceContainer}>
            <p>R$45,00</p>
            <h6>
              <span>R$</span> 20,00
            </h6>
          </div>

          <button>
            Comprar <BsCartCheck color="8253d7" />
          </button>
        </div>

        <div className={styles.productContainer} data-aos="flip-right">
          <Image src={Ouro} alt="Pedra" width={260} height={140} />
          <h5>Ouro</h5>

          <ul>
            <li>
              <BiRightArrowAlt color="6a3cbc" /> Opção 1
            </li>
            <li>
              <BiRightArrowAlt color="6a3cbc" /> Opção 1
            </li>
            <li>
              <BiRightArrowAlt color="6a3cbc" /> Opção 1
            </li>
            <li>
              <BiRightArrowAlt color="6a3cbc" /> Opção 1
            </li>
          </ul>

          <div className={styles.priceContainer}>
            <p>R$45,00</p>
            <h6>
              <span>R$</span> 20,00
            </h6>
          </div>

          <button>
            Comprar <BsCartCheck color="8253d7" />
          </button>
        </div>

        <div className={styles.productContainer} data-aos="flip-right">
          <Image src={Diamante} alt="Pedra" width={260} height={140} />
          <h5>Diamante</h5>

          <ul>
            <li>
              <BiRightArrowAlt color="6a3cbc" /> Opção 1
            </li>
            <li>
              <BiRightArrowAlt color="6a3cbc" /> Opção 1
            </li>
            <li>
              <BiRightArrowAlt color="6a3cbc" /> Opção 1
            </li>
            <li>
              <BiRightArrowAlt color="6a3cbc" /> Opção 1
            </li>
          </ul>

          <div className={styles.priceContainer}>
            <p>R$45,00</p>
            <h6>
              <span>R$</span> 20,00
            </h6>
          </div>

          <button>
            Comprar <BsCartCheck color="8253d7" />
          </button>
        </div>

        <div className={styles.productContainer} data-aos="flip-right">
          <Image src={Esmeralda} alt="Pedra" width={260} height={140} />
          <h5>Esmeralda</h5>

          <ul>
            <li>
              <BiRightArrowAlt color="6a3cbc" /> Opção 1
            </li>
            <li>
              <BiRightArrowAlt color="6a3cbc" /> Opção 1
            </li>
            <li>
              <BiRightArrowAlt color="6a3cbc" /> Opção 1
            </li>
            <li>
              <BiRightArrowAlt color="6a3cbc" /> Opção 1
            </li>
          </ul>

          <div className={styles.priceContainer}>
            <p>R$45,00</p>
            <h6>
              <span>R$</span> 20,00
            </h6>
          </div>

          <button>
            Comprar <BsCartCheck color="8253d7" />
          </button>
        </div>
      </section>

      <div className={styles.benefitsContainer}>
        <div data-aos="fade-down">
          <BiTimer color="f78f1e" size={40} />

          <h5>Uptime 99.99%</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut magna in sem facilisis accumsan id quis
            lacus. Suspendisse vel nunc mauris. In hac habitasse platea dictumst. Sed feugiat tellus sapien, consectetur
            facilisis sem facilisis et. Sed ac placerat massa. Aenean facilisis mi eu magna scelerisque, vel varius
            nulla sagittis.{' '}
          </p>
        </div>

        <div data-aos="fade-down">
          <BiTimer color="f78f1e" size={40} />

          <h5>Uptime 99.99%</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut magna in sem facilisis accumsan id quis
            lacus. Suspendisse vel nunc mauris. In hac habitasse platea dictumst. Sed feugiat tellus sapien, consectetur
            facilisis sem facilisis et. Sed ac placerat massa. Aenean facilisis mi eu magna scelerisque, vel varius
            nulla sagittis.{' '}
          </p>
        </div>

        <div data-aos="fade-down">
          <BiTimer color="f78f1e" size={40} />

          <h5>Uptime 99.99%</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut magna in sem facilisis accumsan id quis
            lacus. Suspendisse vel nunc mauris. In hac habitasse platea dictumst. Sed feugiat tellus sapien, consectetur
            facilisis sem facilisis et. Sed ac placerat massa. Aenean facilisis mi eu magna scelerisque, vel varius
            nulla sagittis.{' '}
          </p>
        </div>
      </div>

      <section className={styles.pterodactylPanelSection}>
        <div className={styles.pterodactylImageContainer}>
          <Image src={PteroImage} alt="Painel Pterodactyl" fill data-aos="fade-right" />

          <div className={styles.pterodactylImageRender}>
            <Image src={Esmeralda} alt="Painel Pterodactyl" fill data-aos="zoom-in" />
          </div>
        </div>

        <div className={styles.pterodactylPanelTexts} data-aos="fade-left">
          <h5>PAINEL FÁCIL DE MANUSEAR</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut magna in sem facilisis accumsan id quis
            lacus. Suspendisse vel nunc mauris. In hac habitasse platea dictumst. Sed feugiat tellus sapien, consectetur
            facilisis sem facilisis et. Sed ac placerat massa. Aenean facilisis mi eu magna scelerisque, vel varius
            nulla sagittis.{' '}
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
