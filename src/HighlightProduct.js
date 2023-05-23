import React from 'react';
import styles from './HighlightProduct.module.css';
import AcceptLabel from './AcceptLabel';

const HighlightProduct = ({ product }) => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div
        className={styles.divImg}
        style={{ backgroundImage: `url(/imgs/${product.img})` }}
      ></div>
      <div className={styles.divText}>
        <h3>{product.title}</h3>
        <p>{product.p}</p>
        <div>
          <h4>Aceitamos</h4>
          <div className="row justify-content-between align-items-center">
            {product.accept.map((accept) => {
              return (
                <div
                  className="col flex-shrink"
                  key={product.name + accept.name}
                >
                  <AcceptLabel text={accept.name} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles.weAccept}></div>
    </div>
  );
};

export default HighlightProduct;
