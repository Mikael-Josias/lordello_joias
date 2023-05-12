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
                <a href="">Whatsapp: (XX) XXXXX-XXXX</a>
              </li>
              <li>
                <a href="">Email: email@email.com</a>
              </li>
              <li>
                <a href="">Endereço: Rua Oscar Freire, XX</a>
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
                <a href="">
                  <img src="/imgs/instagram.svg" alt="instagram icone" />
                </a>
              </li>
              <li>
                <a href="">
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
