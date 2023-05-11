import React from 'react';
import styles from './Header.module.css';
import ButtonCustom from './ButtonCustom';

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
          <div>
            <h1>LOGO</h1>
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
              <li className="nav-item">O que Compramos?</li>
              <li className="nav-item">Como funciona?</li>
              <li className="nav-item">Sobre nós</li>
              <li className="nav-item">Contato</li>
            </ul>
          </div>
          <div className={`${styles.divBtn} text-center mb-2 m-md-0`}>
            <ButtonCustom icon={'whatsapp.svg'} color="orange" link="#">
              Entrar em contato
            </ButtonCustom>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
