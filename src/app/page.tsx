'use client';

import { Header } from '@/components/Header/Header';
import './responsive.module.css';
import styles from './page.module.css';
import Image from 'next/image';
import { SectionTitle } from '@/components/SectionTitle/SectionTitle';
import { MainProduct } from '@/components/MainProduct/MainProduct';
import { FiArrowDown } from 'react-icons/fi';
import { useState } from 'react';
import { RiTwitterXFill } from 'react-icons/ri';
import { AiOutlineInstagram, AiOutlineMail } from 'react-icons/ai';
import { CiFacebook } from 'react-icons/ci';
import { BiLogoDiscordAlt } from 'react-icons/bi';

export default function Home() {
  const [openFrequentlyAskedQuestion, setOpenFrequentlyAskedQuestion] = useState<number | null>(null);

  return (
    <div className="page">
      <Header />

      <section className={styles.welcomeSection}>
        <div data-aos="zoom-in">
          <h1>Seja Bem Vindo(a) à</h1>
          <span>PrimosHost</span>
          <p>Construindo pontes digitais para o seu sucesso na web</p>
        </div>

        <div className={styles.renderRight} data-aos="zoom-in-left">
          <Image src="/images/renderPersonWithCrate.png" alt="Minecraft figure with chest" fill />
        </div>
      </section>

      <section className={styles.ourBenefitsSection}>
        <SectionTitle
          title="Nossos Benefícios"
          subtitle="Veja um poucos dos benefícios que você leva comprando conosco"
        />

        <div className={styles.ourBenefitsSectionContent}>
          <div className={styles.benefits}>
            <button data-aos="flip-left">
              <Image src="/images/render.svg" alt="Render" height={80} width={45} /> Suporte
            </button>
            <button data-aos="flip-left">
              <Image src="/images/render.svg" alt="Render" height={80} width={45} /> Suporte
            </button>
            <button data-aos="flip-left">
              <Image src="/images/render.svg" alt="Render" height={80} width={45} /> Suporte
            </button>
            <button data-aos="flip-left">
              <Image src="/images/render.svg" alt="Render" height={80} width={45} /> Suporte
            </button>
            <button data-aos="flip-left">
              <Image src="/images/render.svg" alt="Render" height={80} width={45} /> Suporte
            </button>
            <button className={styles.benefitSelected} data-aos="flip-left">
              <Image src="/images/render.svg" alt="Render" height={80} width={45} /> Suporte
            </button>
          </div>
          <div className={styles.benefitDetails} data-aos="flip-right">
            <Image src="/images/render.svg" alt="Render" height={174} width={92} />
            <h4>Suporte 24/7</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id varius libero. Aliquam consequat sagittis
              quam, quis efficitur risus convallis ac. Nullam eu efficitur mauris, vel rhoncus erat
            </p>
          </div>
        </div>
      </section>

      <section className={styles.putYourProjectOnline}>
        <Image src="/images/serverRender.svg" alt="Server Image" width={255} height={178} />

        <div data-aos="fade-down">
          <h4>Deixe o seu projeto online agora mesmo</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut magna in sem facilisis accumsan id quis
            lacus. Suspendisse vel nunc mauris. In hac habitasse platea dictumst. Sed feugiat tellus sapien, consectetur
            facilisis sem facilisis et. Sed ac placerat massa. Aenean facilisis mi eu magna scelerisque, vel varius
            nulla sagittis.{' '}
          </p>
        </div>
      </section>

      <section className={styles.mainProducts}>
        <SectionTitle title="Principais Produtos" subtitle="Conheça um pouco dos nossos principais produtos" />

        <div className={styles.mainProductsContent}>
          <MainProduct
            title="Minecraft"
            description="Hospedagem para o seu servidor de Minecraft ficar online 100% do tempo."
            price="28,99"
            link="/minecraft"
            imageUrl="/images/render.svg"
          />
        </div>
      </section>

      <section className={styles.frequentlyAskedQuestionsSection}>
        <div className={styles.frequentlyAskedQuestionImageLeft} data-aos="zoom-in-right">
          <Image src="/images/render.svg" alt="Render" fill />
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut magna in sem facilisis accumsan id quis
              lacus. Suspendisse vel nunc mauris. In hac habitasse platea dictumst. Sed feugiat tellus sapien,
              consectetur facilisis sem facilisis et. Sed ac placerat massa. Aenean facilisis mi eu magna scelerisque,
              vel varius nulla sagittis.{' '}
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
              Qual o prazo de ativação dos serviços? <FiArrowDown />
            </h6>
            <p style={openFrequentlyAskedQuestion === 2 ? { display: 'block' } : { display: 'none' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut magna in sem facilisis accumsan id quis
              lacus. Suspendisse vel nunc mauris. In hac habitasse platea dictumst. Sed feugiat tellus sapien,
              consectetur facilisis sem facilisis et. Sed ac placerat massa. Aenean facilisis mi eu magna scelerisque,
              vel varius nulla sagittis.{' '}
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
              Qual o prazo de ativação dos serviços? <FiArrowDown />
            </h6>
            <p style={openFrequentlyAskedQuestion === 3 ? { display: 'block' } : { display: 'none' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut magna in sem facilisis accumsan id quis
              lacus. Suspendisse vel nunc mauris. In hac habitasse platea dictumst. Sed feugiat tellus sapien,
              consectetur facilisis sem facilisis et. Sed ac placerat massa. Aenean facilisis mi eu magna scelerisque,
              vel varius nulla sagittis.{' '}
            </p>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.firstFooterContent}>
          <Image src="/images/logoWithSloganVertical.png" height={169} width={175} alt="PrimosHost Logo" />

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
    </div>
  );
}
