import React from 'react';
import styles from './ButtonCustom.module.css';

const ButtonCustom = ({ icon, color, link, children }) => {
  return (
    <a
      href={link}
      target="_blanck"
      className={`${color === 'orange' ? styles.btnOrange : ''} btn`}
    >
      <div className="d-flex justify-content-center align-item-center">
        {icon && (
          <img src={`/imgs/${icon}`} className="me-2" alt="Icone whatsapp" />
        )}
        {children}
      </div>
    </a>
  );
};

export default ButtonCustom;
