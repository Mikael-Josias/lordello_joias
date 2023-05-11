import React from 'react';
import styles from './AcceptLabel.module.css';

const AcceptLabel = ({ text }) => {
  return (
    <div className={`${styles.divMain} mt-2`}>
      <span>
        <img
          src="/imgs/check.svg"
          className="me-2"
          style={{ height: '12px' }}
          alt=""
        />
      </span>
      {text}
    </div>
  );
};

export default AcceptLabel;
