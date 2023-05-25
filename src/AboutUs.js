import React from 'react';
import styles from './AboutUs.module.css';
import AboveImage from './AboveImage';

const AboutUs = () => {
  return (
    <section className="container-xl" id="aboutus">
      <div className={styles.divMain}>
        <h2>Sobre nós</h2>
        <AboveImage
          img="logo_lordello_joias.png"
          side="left"
          title="Nossa história"
          texts={[
            `Somos uma empresa que nasceu da paixão e tradição de uma família com mais de 30 anos de experiência no comércio de joias, relógios e objetos em prata. Além disso, desenvolvemos leilões e exposições de arte para trazer ainda mais exclusividade aos nossos clientes.`,
            `Nossa filosofia é baseada na transparência, lisura e segurança em todas as nossas relações comerciais. Buscamos sempre oferecer um atendimento personalizado e um serviço excepcional para satisfazer as necessidades dos nossos clientes.`,
            `Venha nos conhecer e descubra o encanto que as joias podem trazer para sua vida.`,
          ]}
        />
        {/* <AboveImage
          img=""
          side="right"
          title="Nossa equipe"
          texts={[
            `A Lordello Joias possui mais de 30 anos de tradição no mercado, sendo uma empresa com ampla experiência e especialização na compra de joias em ouro e platina, relógios e objetos em prata.`,
            `Contamos com uma equipe de especialistas preparados para oferecer uma avaliação justa e segura, ajudando você a transformar suas peças em dinheiro de forma rápida e eficiente.`,
            `Além disso, nosso compromisso com a transparência, lisura e segurança em nossas relações comerciais garante que cada cliente tenha uma experiência única e satisfatória conosco.`,
          ]}
        /> */}
      </div>
    </section>
  );
};

export default AboutUs;
