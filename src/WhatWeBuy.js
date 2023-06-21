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
  // Ouro (Peças em geral), Platina (Peças em geral), Prata (Peças em geral), Colares (Perolas/Pingentes/Correntes), Anéis/Alianças e Materias Brutos (Ouro/Platina/Prata)

  /* 
    Na resposta anterior, não foi enviado os textos necessarios para a seção "O que compramos?"

    No entanto, foi elaborado topicos e textos que o cliente compra com base em outras coisas que me enviaram.

    Será colocado os seguintes topicos com seus textos:

    Ouro: Compramos qualquer tipo de peça em ouro, desde anéis e correntes até pulseiras e brincos. Valorizamos cada detalhe, independentemente do estado de conservação ou idade da peça. Nossos profissionais experientes avaliarão minuciosamente suas joias, considerando peso, pureza do metal e design. Garantimos que você receberá o valor justo por suas joias, com transparência e honestidade em nossas negociações.

    Platina: Compramos joias em platina de qualquer tipo ou estilo. Nossa equipe especializada avaliará cuidadosamente cada peça, considerando qualidade, peso e características únicas. Oferecemos um serviço profissional e justo, garantindo que você receba o valor adequado pelas suas joias em platina. Valorizamos a transparência e proporcionamos uma transação segura e satisfatória.

    Prata: Compramos joias em prata, incluindo anéis, pulseiras, correntes e outros tipos de peças. Valorizamos cada detalhe, desde a qualidade da prata até o design da joia. Nossos profissionais experientes avaliarão minuciosamente suas peças, considerando peso, autenticidade e estado de conservação. Nosso objetivo é garantir que você receba um valor justo pelas suas joias em prata, com as melhores condições de pagamento.

    Colares: Compramos colares de diversos tipos, incluindo colares de pérolas, pingentes e correntes. Valorizamos a beleza e singularidade de cada peça, independentemente do estilo ou material. Nossos especialistas em joias avaliarão minuciosamente cada colar, considerando a autenticidade das pérolas, a qualidade dos pingentes e a condição geral do item. Garantimos um valor justo com base nessa avaliação e oferecemos as melhores condições de pagamento. Nosso objetivo é proporcionar uma experiência confiável e satisfatória aos nossos clientes.

    Anéis/Alianças: Compramos anéis e alianças de todos os tipos, desde modelos simples até peças mais elaboradas. Valorizamos a qualidade dos materiais, o design e a autenticidade das gemas, se houver. Nossos profissionais especializados avaliarão cuidadosamente suas peças, considerando seu valor intrínseco. Garantimos um valor justo e oferecemos uma negociação transparente e confiável.

    Materiais Brutos (Ouro/Platina/Prata): Além de peças de joias prontas, também compramos materiais brutos de ouro, platina e prata. Se você possui lingotes, barras, folhas, fios ou qualquer outro tipo de material bruto, podemos avaliá-lo e oferecer um valor justo com base no peso e no valor do metal. Nossos especialistas em avaliação de materiais brutos estão familiarizados com as especificidades desses metais preciosos e oferecerão uma avaliação precisa e honesta. Garantimos a transparência em nossas negociações e buscamos fornecer as melhores condições de pagamento aos nossos clientes.
  */
  const products = [
    {
      imgBig: 'ouro_big.jpg',
      title: 'Ouro',
      p: 'Compramos qualquer tipo de peça em ouro, desde anéis e correntes até pulseiras e brincos. Valorizamos cada detalhe, independentemente do estado de conservação ou idade da peça. Nossos profissionais experientes avaliarão minuciosamente suas joias, considerando peso, pureza do metal e design. Garantimos que você receberá o valor justo por suas joias, com transparência e honestidade em nossas negociações.',
      accept: [
        { name: 'Anéis' },
        { name: 'Alianças' },
        { name: 'Correntes' },
        { name: 'Pulseiras' },
        { name: 'Brincos' },
        { name: 'Pingentes' },
        { name: 'Colares' },
      ],
    },
    {
      imgBig: 'platina__big.jpg',
      title: 'Brilhantes',
      p: 'Compramos brilhantes separados, como diamantes, safiras, rubis e esmeraldas, em diferentes cortes e tamanhos. Além disso, adquirimos joias com brilhantes, como anéis, colares, pulseiras e brincos.',
      accept: [
        { name: 'Diamante' },
        { name: 'Rubi' },
        { name: 'Safira' },
        { name: 'Esmeraldas' },
        { name: 'Anéis' },
        { name: 'Alianças' },
        { name: 'Correntes' },
        { name: 'Pulseiras' },
        { name: 'Brincos' },
        { name: 'Pingentes' },
        { name: 'Colares' },
      ],
    },
    {
      imgBig: 'prataria.jpeg',
      title: 'Prata',
      p: 'Compramos produtos em prata, como jogos de chá, pratarias e outras peças em geral. Valorizamos cada detalhe, desde a qualidade da prata até o design e a autenticidade dos itens.',
      accept: [
        { name: 'Anéis' },
        { name: 'Alianças' },
        { name: 'Faqueiros' },
        { name: 'Castiçais' },
        { name: 'Jogo de chá' },
        { name: 'Correntes' },
        { name: 'Pulseiras' },
        { name: 'Brincos' },
        { name: 'Pingentes' },
        { name: 'Colares' },
      ],
    },
    {
      imgBig: 'colares_big.jpg',
      title: 'Relógios',
      p: 'Compramos relógios de todos os tipos e materiais. Valorizamos relógios de luxo, relógios vintage, relógios esportivos e relógios de moda. Seja em ouro, prata, aço inoxidável, titânio ou qualquer outro material, estamos interessados em avaliar e adquirir sua peça.',
      accept: [
        { name: 'Relógios de ouro' },
        { name: 'Relógios de prata' },
        { name: 'Relógios em geral' },
      ],
    },
    {
      imgBig: 'aneis_big.jpg',
      title: 'Anéis/Alianças',
      p: 'Compramos anéis e alianças de todos os tipos, desde modelos simples até peças mais elaboradas. Valorizamos a qualidade dos materiais, o design e a autenticidade das gemas, se houver.',
      accept: [{ name: 'Anéis' }, { name: 'Alianças' }],
    },
    {
      imgBig: 'materias_bruto_big.jpg',
      title: 'Materiais Brutos (Ouro/Platina/Prata)',
      p: 'Além de peças de joias prontas, também compramos materiais brutos de ouro, platina e prata. Se você possui lingotes, barras, folhas, fios ou qualquer outro tipo de material bruto, podemos avaliá-lo e oferecer um valor justo com base no peso e no valor do metal. Nossos especialistas em avaliação de materiais brutos estão familiarizados com as especificidades desses metais preciosos e oferecerão uma avaliação precisa e honesta. Garantimos a transparência em nossas negociações e buscamos fornecer as melhores condições de pagamento aos nossos clientes.',
      accept: [
        { name: 'Ouro' },
        { name: 'Platina' },
        { name: 'Prata' },
        { name: 'Barras' },
        { name: 'Material Bruto' },
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
        <div className="row justify-content-between align-items-start">
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
                  <SwiperSlide key={`${product.title}${index}`}>
                    <MiniProduct
                      active={showProduct.imgBig}
                      product={product}
                      index={index}
                      onClick={() => {
                        setShowProduct(product);
                      }}
                      type={'mobile'}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <div className="d-none d-lg-flex row justify-content-between align-items-center">
              {products.map((product, index) => {
                return (
                  <MiniProduct
                    active={showProduct.imgBig}
                    product={product}
                    index={index}
                    onClick={() => {
                      setShowProduct(product);
                    }}
                    key={`${product.img}${index}`}
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
