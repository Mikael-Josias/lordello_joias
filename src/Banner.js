import React from 'react';
import styles from './Banner.module.css';
import ButtonCustom from './ButtonCustom';
import { Link } from 'react-scroll';

const Banner = () => {
  return (
    <section className={`${styles.banner} position-relative`}>
      <div className="container-xl h-100">
        <div
          className={`${styles.divMain} row flex-column-reverse flex-lg-row justify-content-between align-items-center`}
        >
          <div className="col-12 col-lg-5">
            <div className={styles.divText}>
              <h2>
                Transforme suas joias em <span>dinheiro.</span>
              </h2>
              <p>
                Venda ouro, joias, pedras preciosas e outros objetos de valor de
                forma segura e prática com a Lordello Joias, a empresa líder na
                compra de joias em ouro, platina, relógios e objetos em prata há
                mais de 30 anos.
              </p>
              <ButtonCustom icon={'whatsapp.svg'} color={'orange'} link="#">
                Fazer avaliação
              </ButtonCustom>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div>
              <div className="d-none d-lg-block">
                <img src="/imgs/banner_desktop.png" className="w-100" alt="" />
              </div>
              <div className="d-block d-lg-none">
                <img src="/imgs/banner_mobile.png" className="w-100" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div
        className={`d-block d-lg-none position-absolute bottom-0 start-0 d-flex flex-column justify-content-between align-items-center`}
      >
        <a href="#whatbuy" className={styles.btnScrollDown}>
          <img src="/imgs/scroll-down-icon.svg" alt="" />
          <span>Role para baixo</span>
        </a>
      </div> */}
      <div
        className={`position-absolute bottom-0 start-50 translate-middle-x d-flex flex-column justify-content-between align-items-center`}
      >
        <Link
          to="whatbuy"
          smooth={true}
          duration={500}
          offset={-70}
          className={styles.btnScrollDown}
        >
          <img src="/imgs/scroll-down-icon.svg" alt="" />
          <span>Role para baixo</span>
        </Link>
      </div>
    </section>
  );
};

export default Banner;
