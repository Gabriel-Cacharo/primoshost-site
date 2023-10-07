import { Header } from '@/components/Header/Header';
import './responsive.module.css';
import styles from './page.module.css';
import Image from 'next/image';
import { SectionTitle } from '@/components/SectionTitle/SectionTitle';
import { MainProduct } from '@/components/MainProduct/MainProduct';

export default function Home() {
  return (
    <div className="page">
      <Header />

      <section className={styles.welcomeSection}>
        <div>
          <h1>Seja Bem Vindo(a) à</h1>
          <span>PrimosHost</span>
          <p>Construindo pontes digitais para o seu sucesso na web</p>
        </div>

        <div className={styles.renderRight}>
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
            <button>
              <Image src="/images/render.svg" alt="Render" height={80} width={45} /> Suporte
            </button>
            <button>
              <Image src="/images/render.svg" alt="Render" height={80} width={45} /> Suporte
            </button>
            <button>
              <Image src="/images/render.svg" alt="Render" height={80} width={45} /> Suporte
            </button>
            <button>
              <Image src="/images/render.svg" alt="Render" height={80} width={45} /> Suporte
            </button>
            <button>
              <Image src="/images/render.svg" alt="Render" height={80} width={45} /> Suporte
            </button>
            <button className={styles.benefitSelected}>
              <Image src="/images/render.svg" alt="Render" height={80} width={45} /> Suporte
            </button>
          </div>
          <div className={styles.benefitDetails}>
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

        <div>
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
    </div>
  );
}
