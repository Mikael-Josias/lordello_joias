import React from 'react';
import styles from './Header.module.css';
import ButtonCustom from './ButtonCustom';
import { Link, animateScroll as scroll } from 'react-scroll';

const Header = () => {
  const [isTop, setIsTop] = React.useState(true);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsTop(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`${styles.divMain} ${
        isTop ? styles.scroll : ''
      } position-fixed top-0 start-50 translate-middle-x w-100`}
    >
      <nav className="navbar navbar-expand-md">
        <div className="container-xl justify-content-between align-items-center">
          <div className={styles.brand}>
            <h1 className="visually-hidden">LOGO</h1>
            <img src="/imgs/logo_small_lordello_joias.svg" alt="" />
          </div>
          <button
            className="navbar-toggler text-white bg-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={` collapse navbar-collapse justify-content-center`}
            id="navbarSupportedContent"
          >
            <ul
              className={`${styles.nav} navbar-nav mb-3 mb-md-0 my-4 my-md-0 d-flex justify-content-between align-items-center gap-3`}
            >
              <li className="nav-item">
                <Link
                  to="whatbuy"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  spy={true}
                  exact="true"
                  activeClass="active"
                >
                  O que Compramos?
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="howworks"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  spy={true}
                  exact="true"
                  activeClass="active"
                >
                  Como funciona?
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="aboutus"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  spy={true}
                  exact="true"
                  activeClass="active"
                >
                  Sobre nós
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  spy={true}
                  exact="true"
                  activeClass="active"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>
          <div className={`${styles.divBtn} text-center mb-2 m-md-0`}>
            <ButtonCustom
              icon={isTop ? 'whatsapp_green.svg' : 'whatsapp.svg'}
              isTop={isTop}
              color="orange"
              link="https://wa.me//5511978712340?text=Olá! Gostaria de falar com a Lordello Joias."
            >
              Entrar em contato
            </ButtonCustom>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
