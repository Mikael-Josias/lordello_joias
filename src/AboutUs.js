import React from 'react';
import styles from './AboutUs.module.css';
import AboveImage from './AboveImage';

const AboutUs = () => {
  return (
    <section className="container-xl" id="aboutus">
      <div className={styles.divMain}>
        <h2>Sobre nós</h2>
        <AboveImage
          img=""
          side="left"
          title="Nossa história"
          texts={[
            `A Lordello Joias possui mais de 30 anos de tradição no mercado, sendo uma empresa com ampla experiência e especialização na compra de joias em ouro e platina, relógios e objetos em prata.`,
            `Contamos com uma equipe de especialistas preparados para oferecer uma avaliação justa e segura, ajudando você a transformar suas peças em dinheiro de forma rápida e eficiente.`,
            `Além disso, nosso compromisso com a transparência, lisura e segurança em nossas relações comerciais garante que cada cliente tenha uma experiência única e satisfatória conosco.`,
          ]}
        />
        <AboveImage
          img=""
          side="right"
          title="Nossa equipe"
          texts={[
            `A Lordello Joias possui mais de 30 anos de tradição no mercado, sendo uma empresa com ampla experiência e especialização na compra de joias em ouro e platina, relógios e objetos em prata.`,
            `Contamos com uma equipe de especialistas preparados para oferecer uma avaliação justa e segura, ajudando você a transformar suas peças em dinheiro de forma rápida e eficiente.`,
            `Além disso, nosso compromisso com a transparência, lisura e segurança em nossas relações comerciais garante que cada cliente tenha uma experiência única e satisfatória conosco.`,
          ]}
        />
      </div>
    </section>
  );
};

export default AboutUs;
