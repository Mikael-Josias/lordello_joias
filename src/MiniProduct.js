import React from 'react';
import styles from './MiniProduct.module.css';

const MiniProduct = ({ active, product, index, onClick, type }) => {
  return (
    <div
      className={type === 'mobile' ? '' : 'col-12 col-lg-6'}
      onClick={onClick}
    >
      <div
        className={`${active === product.imgBig ? styles.active : ''} ${
          styles.divMain
        } ${index > 1 ? 'mt-0 mt-lg-3' : ''}`}
        style={{ backgroundImage: `url(/imgs/${product.imgBig})` }}
      ></div>
    </div>
  );
};

export default MiniProduct;
