import './globals.css';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

import { AOSInit } from './aos';
import Script from 'next/script';

const montSerrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://primoshost.com.br'),
  title: 'PrimosHost',
  description:
    'PrimosHost, levando a web além. Contamos com máquinas de qualidade, suporte especializado 24/7 e antiDDoS de última geração para deixar sua aplicação sempre online. Venha deixar seu projeto online conosco agora mesmo!',
  openGraph: {
    title: 'PrimosHost',
    description:
      'PrimosHost, levando a web além. Contamos com máquinas de qualidade, suporte especializado 24/7 e antiDDos de última geração para deixar sua aplicação sempre online. Venha deixar seu projeto online conosco agora mesmo!',
    images: [
      'https://media.discordapp.net/attachments/1156692662796161165/1161730464759959662/Com_Efeito_com_Slogan.png?ex=6542974e&is=6530224e&hm=bf0f6aa391558d9bf7ff834c07d15c0cd8bc1c861914c91f8f64ea394f224840&=&width=671&height=671',
    ],
    emails: 'contato@primoshost.com.br',
    url: 'https://primoshost.com.br',
  },
  applicationName: 'PrimosHost',
  generator: 'hospedagem minecraft, host mine, servidor minecraft',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Script
        async
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=G-H4ZP0SJ6F5"
        id="gtag"
      ></Script>

      <Script id="gtag2" strategy="lazyOnload">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-H4ZP0SJ6F5');`}
      </Script>

      <Script
        async
        strategy="lazyOnload"
        id="gtag3"
        src="https://www.googletagmanager.com/gtag/js?id=G-H4ZP0SJ6F5"
      ></Script>

      <Script id="gtag4" strategy="lazyOnload">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-H4ZP0SJ6F5');`}
      </Script>

      <Script id="gtag5" strategy="lazyOnload" src="https://www.googletagmanager.com/gtag/js?id=G-H4ZP0SJ6F5" async />

      <Script id="gtag6" strategy="lazyOnload">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-H4ZP0SJ6F5');`}
      </Script>

      <Script id="inline-script" strategy="lazyOnload">
        {`var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
        (function(){
        var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
        s1.async=true;
        s1.src='https://embed.tawk.to/652ec1f3f2439e1631e564f9/1hcvab8km';
        s1.charset='UTF-8';
        s1.setAttribute('crossorigin','*');
        s0.parentNode.insertBefore(s1,s0);
        })();`}
      </Script>

      <AOSInit />

      <body className={montSerrat.className}>{children}</body>
    </html>
  );
}
