'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

import { FiArrowDown } from 'react-icons/fi';
import { BiSupport } from 'react-icons/bi';
import { PiPlugsConnectedDuotone } from 'react-icons/pi';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { TbCloudDataConnection } from 'react-icons/tb';
import { AiOutlineWifi } from 'react-icons/ai';
import { MdShield } from 'react-icons/md';

import { SectionTitle } from '@/components/SectionTitle/SectionTitle';
import { MainProduct } from '@/components/MainProduct/MainProduct';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import { PromotionHeader } from '@/components/PromotionHeader/PromotionHeader';

import RenderPersonWithCrate from '../../public/images/renderPersonWithCrate.png';
import Render from '../../public/images/render.svg';
import ServerRender from '../../public/images/serverRender.svg';

import { benefitsArray } from './benefits';

import styles from './page.module.css';

interface IBenefitSelected {
  label: string;
  text: string;
}

export default function Home() {
  const [openFrequentlyAskedQuestion, setOpenFrequentlyAskedQuestion] = useState<number | null>(null);
  const [benefitSelected, setBenefitSelected] = useState<IBenefitSelected | null>(benefitsArray[0]);

  useEffect(() => {
    let timeout = setTimeout(() => {
      const newValue = benefitsArray.findIndex((item) => item.label === benefitSelected?.label) + 1;

      if (newValue !== -1 && newValue < benefitsArray.length) {
        setBenefitSelected(benefitsArray[newValue]);
      } else {
        setBenefitSelected(benefitsArray[0]);
      }
    }, 1000 * 10);

    return () => clearTimeout(timeout);
  }, [benefitSelected]);

  return (
    <div className="page">
      {/* <PromotionHeader /> */}
      <Header />

      <section className={styles.welcomeSection}>
        <div data-aos="zoom-in">
          <h1>Seja Bem Vindo(a) à</h1>
          <span>PrimosHost</span>
          <p>Construindo pontes digitais para o seu sucesso na web</p>
        </div>

        <div className={styles.renderRight} data-aos="zoom-in-left">
          <Image src={RenderPersonWithCrate} alt="Minecraft figure with chest" fill />
        </div>
      </section>

      <section className={styles.ourBenefitsSection}>
        <SectionTitle
          title="Nossos Benefícios"
          subtitle="Veja um poucos dos benefícios que você leva comprando conosco"
        />

        <div className={styles.ourBenefitsSectionContent}>
          <div className={styles.benefits} data-aos="zoom-in">
            {benefitsArray.map((benefit, index) => (
              <button
                key={index}
                onClick={() => setBenefitSelected(benefit)}
                className={benefitSelected?.label === benefit.label ? styles.benefitSelected : ''}
              >
                {benefit.label.includes('24/7') ? (
                  <BiSupport size={30} style={{ marginBottom: '10px' }} />
                ) : benefit.label.includes('99.99%') ? (
                  <PiPlugsConnectedDuotone size={30} style={{ marginBottom: '10px' }} />
                ) : benefit.label.includes('Reembolso') ? (
                  <RiMoneyDollarCircleLine size={30} style={{ marginBottom: '10px' }} />
                ) : benefit.label.includes('AntiDDOS') ? (
                  <TbCloudDataConnection size={30} style={{ marginBottom: '10px' }} />
                ) : benefit.label.includes('Ilimitado') ? (
                  <AiOutlineWifi size={30} style={{ marginBottom: '10px' }} />
                ) : (
                  <MdShield size={30} style={{ marginBottom: '10px' }} />
                )}
                {/* alt="Render"
                  height={80}
                  width={45} */}{' '}
                {benefit.label}
              </button>
            ))}
          </div>
          <div className={styles.benefitDetails} data-aos="flip-right">
            {benefitSelected?.label.includes('24/7') ? (
              <BiSupport size={75} style={{ marginBottom: '10px' }} />
            ) : benefitSelected?.label.includes('99.99%') ? (
              <PiPlugsConnectedDuotone size={75} style={{ marginBottom: '10px' }} />
            ) : benefitSelected?.label.includes('Reembolso') ? (
              <RiMoneyDollarCircleLine size={75} style={{ marginBottom: '10px' }} />
            ) : benefitSelected?.label.includes('AntiDDOS') ? (
              <TbCloudDataConnection size={75} style={{ marginBottom: '10px' }} />
            ) : benefitSelected?.label.includes('Ilimitado') ? (
              <AiOutlineWifi size={75} style={{ marginBottom: '10px' }} />
            ) : (
              <MdShield size={75} style={{ marginBottom: '10px' }} />
            )}
            <h4>{benefitSelected?.label}</h4>
            <p>{benefitSelected?.text}</p>
          </div>
        </div>
      </section>

      <section className={styles.putYourProjectOnline}>
        <Image src={ServerRender} alt="Server Image" width={255} height={178} />

        <div data-aos="fade-down">
          <h4>Deixe o seu projeto online agora mesmo</h4>
          <p>
            Com uma infraestrutura de ponta, pensamos ao máximo em sua experiência como cliente. Além de contar com
            processadores de ponta, antiDDos para deixar seu servidor online 100% do tempo, contamos com um suporte que
            estará sempre com você, evitando dores de cabeça!
          </p>
        </div>
      </section>

      <section className={styles.mainProducts}>
        <SectionTitle title="Principais Produtos" subtitle="Conheça um pouco dos nossos principais produtos" />

        <div className={styles.mainProductsContent}>
          <MainProduct
            title="Minecraft"
            description="Hospedagem para o seu servidor de Minecraft ficar online 100% do tempo."
            price="19,99"
            link="/minecraft"
            imageUrl="/images/minecraftProducts/esmeralda.png"
          />
        </div>
      </section>

      <section className={styles.frequentlyAskedQuestionsSection}>
        <div className={styles.frequentlyAskedQuestionImageLeft} data-aos="zoom-in-right">
          <Image src={Render} alt="Render" fill />
        </div>

        <div className={styles.frequentlyAskedQuestionsContent}>
          <h4>Dúvidas frequentes</h4>

          <div data-aos="zoom-in">
            <h6
              onClick={
                openFrequentlyAskedQuestion === 1
                  ? () => setOpenFrequentlyAskedQuestion(null)
                  : () => setOpenFrequentlyAskedQuestion(1)
              }
            >
              Qual o prazo de ativação dos serviços? <FiArrowDown />
            </h6>
            <p style={openFrequentlyAskedQuestion === 1 ? { display: 'block' } : { display: 'none' }}>
              Se o pagamento for feito via pix, o prazo de ativação é de <b>até 2 horas</b>. Caso o pagamento seja feito
              em outro método, pode levar <b>até 2 dias úteis</b>.
            </p>
          </div>

          <div data-aos="zoom-in">
            <h6
              onClick={
                openFrequentlyAskedQuestion === 2
                  ? () => setOpenFrequentlyAskedQuestion(null)
                  : () => setOpenFrequentlyAskedQuestion(2)
              }
            >
              Todos os planos possuem antiDDos? <FiArrowDown />
            </h6>
            <p style={openFrequentlyAskedQuestion === 2 ? { display: 'block' } : { display: 'none' }}>
              Sim! <b>Todos</b> os nossos planos contam com potentes antiDDos garantindo que sua aplicação fique sempre
              online!
            </p>
          </div>

          <div data-aos="zoom-in">
            <h6
              onClick={
                openFrequentlyAskedQuestion === 3
                  ? () => setOpenFrequentlyAskedQuestion(null)
                  : () => setOpenFrequentlyAskedQuestion(3)
              }
            >
              Como posso entrar em contato com o suporte? <FiArrowDown />
            </h6>
            <p style={openFrequentlyAskedQuestion === 3 ? { display: 'block' } : { display: 'none' }}>
              Possuímos diversas formas de você entrar em contato conosco. Você pode abrir um ticket em nosso{' '}
              <b>Discord</b>, abrir um ticket em nossa <b>Área do Cliente</b>, enviar-nos um email ou até mesmo entrar
              em contato aqui no <b>Chat do Site</b> ( localizado na parte inferior direita ).
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
