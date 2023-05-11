import React from 'react';
import styles from './WhatWeBuy.module.css';

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

  return (
    <div className="container-xl text-center">
      <div className={styles.divMain}>
        <h2>O que compramos?</h2>
        <p>
          Compramos joias em geral, sejam peças antigas, modernas e em todo
          estado de conservação
        </p>
        <div className="row justify-content-between align-items-center">
          <div className="col-12 col-lg-6"></div>
          <div className="col-12 col-lg-6"></div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeBuy;
