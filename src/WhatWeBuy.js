import React from 'react';
import styles from './WhatWeBuy.module.css';
import MiniProduct from './MiniProduct';
import HighlightProduct from './HighlightProduct';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper';

const WhatWeBuy = () => {
  const products = [
    {
      img: 'product_1.png',
      title: 'Ouro',
      p: 'Compramos qualquer tipo de peça em ouro, desde anéis e correntes até pulseiras e brincos. Não importa o estado de conservação ou a idade da peça, valorizamos cada detalhe e oferecemos as melhores condições de pagamento.',
      accept: [
        { name: 'Alianças' },
        { name: 'Correntes' },
        { name: 'Brincos' },
        { name: 'Barras de ouro' },
        { name: 'Colares' },
      ],
    },
    {
      img: 'product_2.png',
      title: 'Ouro',
      p: 'Compramos qualquer tipo de peça em ouro, desde anéis e correntes até pulseiras e brincos. Não importa o estado de conservação ou a idade da peça, valorizamos cada detalhe e oferecemos as melhores condições de pagamento.',
      accept: [
        { name: 'Alianças' },
        { name: 'Correntes' },
        { name: 'Brincos' },
        { name: 'Barras de ouro' },
        { name: 'Colares' },
      ],
    },
    {
      img: 'product_3.png',
      title: 'Ouro',
      p: 'Compramos qualquer tipo de peça em ouro, desde anéis e correntes até pulseiras e brincos. Não importa o estado de conservação ou a idade da peça, valorizamos cada detalhe e oferecemos as melhores condições de pagamento.',
      accept: [
        { name: 'Alianças' },
        { name: 'Correntes' },
        { name: 'Brincos' },
        { name: 'Barras de ouro' },
        { name: 'Colares' },
      ],
    },
    {
      img: 'product_4.png',
      title: 'Ouro',
      p: 'Compramos qualquer tipo de peça em ouro, desde anéis e correntes até pulseiras e brincos. Não importa o estado de conservação ou a idade da peça, valorizamos cada detalhe e oferecemos as melhores condições de pagamento.',
      accept: [
        { name: 'Alianças' },
        { name: 'Correntes' },
        { name: 'Brincos' },
        { name: 'Barras de ouro' },
        { name: 'Colares' },
      ],
    },
    {
      img: 'product_5.png',
      title: 'Ouro',
      p: 'Compramos qualquer tipo de peça em ouro, desde anéis e correntes até pulseiras e brincos. Não importa o estado de conservação ou a idade da peça, valorizamos cada detalhe e oferecemos as melhores condições de pagamento.',
      accept: [
        { name: 'Alianças' },
        { name: 'Correntes' },
        { name: 'Brincos' },
        { name: 'Barras de ouro' },
        { name: 'Colares' },
      ],
    },
    {
      img: 'product_6.png',
      title: 'Ouro',
      p: 'Compramos qualquer tipo de peça em ouro, desde anéis e correntes até pulseiras e brincos. Não importa o estado de conservação ou a idade da peça, valorizamos cada detalhe e oferecemos as melhores condições de pagamento.',
      accept: [
        { name: 'Alianças' },
        { name: 'Correntes' },
        { name: 'Brincos' },
        { name: 'Barras de ouro' },
        { name: 'Colares' },
      ],
    },
  ];
  const [showProduct, setShowProduct] = React.useState(products[0]);

  return (
    <section className="container-xl text-center" id="whatbuy">
      <div className={styles.divMain}>
        <h2>O que compramos?</h2>
        <p>
          Compramos joias em geral, sejam peças antigas, modernas e em todo
          estado de conservação
        </p>
        <div className="row justify-content-between align-items-center">
          <div className="col-12 col-lg-6">
            <Swiper
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                400: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                576: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                992: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
              modules={[Navigation]}
              className="mySwiper row justify-content-between align-items-center d-flex d-lg-none px-5"
            >
              {products.map((product, index) => {
                return (
                  <SwiperSlide>
                    <MiniProduct
                      active={showProduct.img}
                      product={product}
                      index={index}
                      onClick={() => {
                        setShowProduct(product);
                      }}
                      type={'mobile'}
                      key={`${product.title}${index}`}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <div className="d-none d-lg-flex row justify-content-between align-items-center">
              {products.map((product, index) => {
                return (
                  <MiniProduct
                    active={showProduct.img}
                    product={product}
                    index={index}
                    onClick={() => {
                      setShowProduct(product);
                    }}
                    key={`${product.title}${index}`}
                  />
                );
              })}
            </div>
          </div>
          <div className="col-12 col-lg-6 mt-3 mt-lg-0">
            <HighlightProduct product={showProduct} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeBuy;
