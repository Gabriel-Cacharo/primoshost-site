'use client';

import { useState } from 'react';
import Image from 'next/image';

import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import { vpsGamingBrazilProducts } from '../products';

import { FaLongArrowAltRight } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';

import ServerRender from '../../../public/images/serverImage.png';
import Brazil from '../../../public/images/brazil.png';
import RyzenRender from '../../../public/images/ryzenImage.png';

import styles from './styles.module.css';
import { SectionTitle } from '@/components/SectionTitle/SectionTitle';

import { MdWifiTethering } from 'react-icons/md';
import { BsFillDeviceSsdFill } from 'react-icons/bs';
import { MdOutlineSupportAgent } from 'react-icons/md';

import { IoMdArrowDown, IoMdArrowUp } from 'react-icons/io';
import { BiWifi2 } from 'react-icons/bi';

export default function VpsGaming() {
  const [timeSelected, setTimeSelected] = useState<number>(1);

  const [question1Opened, setQuestion1Opened] = useState(false);
  const [question2Opened, setQuestion2Opened] = useState(false);
  const [question3Opened, setQuestion3Opened] = useState(false);

  return (
    <div className={styles.vpsGamingProductsPage}>
      <Header />

      <header className={styles.vpsGamingProductsPageHeader}>
        <div data-aos="zoom-in" className={styles.vpsGamingProductsPageHeaderText}>
          <h2>Servidores VPS Gaming</h2>

          <ul>
            <li>
              <FaLongArrowAltRight /> Processadores de última geração
            </li>
            <li>
              <FaLongArrowAltRight /> Disco NVME
            </li>
            <li>
              <FaLongArrowAltRight /> Suporte especializado
            </li>
            <li>
              <FaLongArrowAltRight /> AntiDDOS Gamer
            </li>
            <li>
              <FaLongArrowAltRight /> Ping Brasileiro
            </li>
          </ul>
        </div>

        <div className={styles.vpsGamingProductPageRender} data-aos="zoom-in-left">
          <Image src={ServerRender} fill alt="Render Palworld" />
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

      <div className={styles.plansContainer}>
        <table data-aos="fade-in">
          <thead>
            <tr>
              <th>Processador</th>
              <th>RAM</th>
              <th>Armazenamento</th>
              <th>Preço</th>
              <th></th>
            </tr>
          </thead>
          {vpsGamingBrazilProducts.map((product, index) => (
            <tr key={index}>
              <td data-title="Processador">
                <p>{product.processor}</p>
                <small>{product.cores}</small>
              </td>
              <td data-title="RAM">
                <b>{product.ram}</b>
              </td>
              <td data-title="Armazenamento">{product.disk}</td>
              <td data-title="Preço" className={styles.priceContainer}>
                <div>
                  {timeSelected === 2 ? (
                    <small className={styles.lineThrough}>R${(product.montlyPrice * 3).toFixed(2)}</small>
                  ) : timeSelected === 3 ? (
                    <small className={styles.lineThrough}>R${(product.montlyPrice * 12).toFixed(2)}</small>
                  ) : null}
                </div>
                <div>
                  {timeSelected === 2
                    ? `R$${product.quarterly.toFixed(2)}`
                    : timeSelected === 3
                    ? `R$${product.yearly.toFixed(2)}`
                    : `R$${product.montlyPrice}`}
                </div>
              </td>
              <td>
                <a href={product.link}>
                  <FaCartShopping /> Adquirir
                </a>
              </td>
            </tr>
          ))}
        </table>
      </div>

      <div className={styles.processorContainer}>
        <div className={styles.processorImage} data-aos="fade-down">
          <Image alt="Ryzen 9 Image" src={RyzenRender} />
        </div>

        <div className={styles.processorTexts} data-aos="fade-up">
          <h5>Processador de última geração</h5>
          <p>
            Na PrimosHost, oferecemos a solução definitiva para suas necessidades de hospedagem VPS Gaming, destacando o
            excepcional processador Ryzen 9 5950X. Com um clock máximo impressionante de 4.9 GHz, este processador é uma
            potência em desempenho, garantindo que seu servidor esteja pronto para os desafios mais avançados. A
            arquitetura Zen 3 da AMD proporciona eficiência e velocidade, otimizando núcleos e aumentando a taxa de
            instruções por clock (IPC). Com 16 núcleos e 32 threads, o Ryzen 9 5950X oferece multitarefa sem esforço,
            permitindo a execução simultânea de servidores de jogos, aplicativos de voz, servidores backend e muito
            mais.
          </p>
        </div>
      </div>

      <div className={styles.informationsSectionContainer}>
        <SectionTitle title="Compre com quem entende" subtitle="Compre com quem te oferece os melhores benefícios 🧡" />

        <div className={styles.informationsContainer}>
          <div>
            <div className={styles.information} data-aos="zoom-in">
              <MdWifiTethering />
              <h6>AntiDDos Gamer</h6>
              <p>Deixe sua aplicação sempre protegida com nosso poderoso AntiDDos</p>
            </div>
            <div className={styles.information} data-aos="zoom-in">
              <BsFillDeviceSsdFill />
              <h6>SSD NVME</h6>
              <p>As máquinas contam com SSD NVME para uma maior rapidez e eficiência nos processos</p>
            </div>
          </div>
          <div>
            <div className={styles.information} data-aos="zoom-in">
              <MdOutlineSupportAgent />
              <h6>Suporte Especializado</h6>
              <p>Contamos com suporte especializado 24/7 sempre pronto para te ajudar</p>
            </div>
            <div className={styles.information} data-aos="zoom-in">
              <BiWifi2 />
              <h6>Baixa Latência</h6>
              <p>Nossos servidores se localizam em São Paulo contando assim com pings baixíssimos</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.asksSectionContainer}>
        <SectionTitle
          title="Ainda possui dúvidas?"
          subtitle="Veja um pouco das nossas dúvidas frequentes que já foram respondidas"
        />

        <div className={styles.asksAndImageContainer}>
          <span data-aos="zoom-in">?</span>

          <div className={styles.asksContainer} data-aos="fade-down">
            <div className={styles.ask}>
              <h6 onClick={question1Opened ? () => setQuestion1Opened(false) : () => setQuestion1Opened(true)}>
                Quanto tempo demora para a liberação da VPS?
                {question1Opened ? <IoMdArrowUp /> : <IoMdArrowDown />}
              </h6>
              <p style={question1Opened ? { display: 'block' } : { display: 'none' }}>
                A liberação/criação da sua VPS é de forma automática e instantânea. Sendo que, caso você pague no
                boleto, pode demorar até 3 dias úteis.
              </p>
            </div>
            <div className={styles.ask}>
              <h6 onClick={question2Opened ? () => setQuestion2Opened(false) : () => setQuestion2Opened(true)}>
                Possuo direito a reembolso?
                {question2Opened ? <IoMdArrowUp /> : <IoMdArrowDown />}
              </h6>
              <p style={question2Opened ? { display: 'block' } : { display: 'none' }}>
                Sim! Nós garantimos o reembolso total do valor do produto dentro de 7 dias corridos, como prescrito no
                artigo 49 do Código de Defesa do Consumidor.
              </p>
            </div>
            <div className={styles.ask}>
              <h6 onClick={question3Opened ? () => setQuestion3Opened(false) : () => setQuestion3Opened(true)}>
                A VPS possui um painel?
                {question3Opened ? <IoMdArrowUp /> : <IoMdArrowDown />}
              </h6>
              <p style={question3Opened ? { display: 'block' } : { display: 'none' }}>
                Sim! Você terá acesso a um painel exclusivo para sua VPS.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.askToOurTeamContainer} data-aos="zoom-in">
        <h5>Não encontrou o plano que queria?</h5>
        <a href="https://cliente.primoshost.com.br/contact.php" target="_blank">
          Entre em contato com a nossa equipe
        </a>
      </div>

      <Footer />
    </div>
  );
}
