import React from 'react';
import styles from './AboutUs.module.css';
import AboveImage from './AboveImage';

const AboutUs = () => {
  return (
    <section className="container-xl" id="aboutus">
      <div className={styles.divMain}>
        <h2>Sobre nós</h2>
        <AboveImage
          img="ouro_corrente.jpg"
          side="left"
          title="Nossa história"
          texts={[
            `Somos uma empresa que nasceu da paixão e tradição de uma família com mais de 30 anos de experiência no comércio de joias, relógios e objetos em prata. Além disso, desenvolvemos leilões e exposições de arte para trazer ainda mais exclusividade aos nossos clientes.`,
            `Nossa filosofia é baseada na transparência, lisura e segurança em todas as nossas relações comerciais. Buscamos sempre oferecer um atendimento personalizado e um serviço excepcional para satisfazer as necessidades dos nossos clientes.`,
            `Venha nos conhecer e descubra o encanto que as joias podem trazer para sua vida.`,
          ]}
        />
        <AboveImage
          img="ouro_acessorios.png"
          side="right"
          title="Nossa equipe"
          texts={[
            `Bem-vindo ao mundo da Lordello Joias!`,
            `Somos uma empresa que nasceu da paixão e tradição de uma família com mais de 30 anos de experiência no comércio de joias, relógios e prataria. Além disso, desenvolvemos leilões e exposições de arte para trazer ainda mais exclusividade aos nossos clientes.`,
            `Nossa filosofia é baseada na transparência, lisura e segurança em todas as nossas relações comerciais.`,
            `Buscamos sempre oferecer um atendimento personalizado e um serviço excepcional para satisfazer as necessidades dos nossos clientes. Venha nos conhecer e descubra o encanto que as joias podem trazer para sua vida.`,
          ]}
        />
      </div>
    </section>
  );
};

export default AboutUs;
