import React from 'react';
import styles from './StepCard.module.css';

const StepCard = ({ step, title, img, texts }) => {
  return (
    <div className={`${styles.divMain} mt-3 mt-md-0`}>
      <h3>{step}</h3>
      <div className={styles.divText}>
        <div></div>
        {texts.map((text) => {
          return <p key={text}>{text}</p>;
        })}
      </div>
    </div>
  );
};

export default StepCard;
