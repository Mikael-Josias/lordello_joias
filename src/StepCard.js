import React from 'react';
import styles from './StepCard.module.css';

const StepCard = ({ step, title, img, text }) => {
  return <div className={`${styles.divMain} mt-3 mt-md-0`}>
    <h3>Passo {step}</h3>
    <div className={styles.divText}>
    <div></div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nisi sed ligula mollis, eu elementum risus molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nisi sed ligula mollis, eu elementum risus molestie.</p>
    </div>
  </div>;
};

export default StepCard;
