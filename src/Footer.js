import React from 'react';
import styles from './Footer.module.css';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className={styles.divMain}>
      <div className="container-xl">
        <div className="d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-center align-items-lg-start text-center text-lg-start">
          <div className={styles.divLogo}>
            <div></div>
            <p>
              A Lordello Joias possui mais de 30 anos de tradição no mercado,
            </p>
          </div>
          <div className={styles.contact}>
            <h2>Contato</h2>
            <ul>
              <li>
                <a
                  href="https://wa.me//5511978712340?text=Olá! Gostaria de falar com a Lordello Joias."
                  target="_blanck"
                >
                  Whatsapp: (11) 97871-2340
                </a>
              </li>
              <li>
                <a href="" target="_blanck">
                  Email: email@email.com
                </a>
              </li>
              <li>
                <a
                  href="https://goo.gl/maps/KBAcBqJVw9MWnobu9"
                  target="_blanck"
                >
                  Endereço: R. Oscar Freire, 144 - Jardim Paulista, SP,
                  01426-000
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.divSections}>
            <h2>Seções</h2>
            <ul>
              <li>
                <Link to="whatbuy" smooth={true} duration={500} offset={-70}>
                  O que Compramos?
                </Link>
              </li>
              <li>
                <Link to="howworks" smooth={true} duration={500} offset={-70}>
                  Como funciona?
                </Link>
              </li>
              <li>
                <Link to="aboutus" smooth={true} duration={500} offset={-70}>
                  Sobre nós
                </Link>
              </li>
              <li>
                <Link to="contact" smooth={true} duration={500} offset={-70}>
                  Contato
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.divSocial}>
            <h2>Redes sociais</h2>
            <ul>
              <li>
                <a
                  href="https://www.instagram.com/lordello.joias/"
                  target="_blanck"
                >
                  <img src="/imgs/instagram.svg" alt="instagram icone" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=100091541316392"
                  target="_blanck"
                >
                  <img src="/imgs/facebook.svg" alt="facebook icone" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
