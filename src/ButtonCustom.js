import React from 'react';
import styles from './ButtonCustom.module.css';

const ButtonCustom = ({
  icon,
  color,
  link,
  children,
  bsClass,
  isTop = false,
  btn = false,
}) => {
  if (btn)
    return (
      <button type="submit" className={`${styles.btn} ${bsClass} btn`}>
        <div className="d-flex justify-content-center align-item-center">
          {icon && (
            <img src={`/imgs/${icon}`} className="me-2" alt="Icone whatsapp" />
          )}
          {children}
        </div>
      </button>
    );
  else
    return (
      <a
        href={link}
        target="_blanck"
        className={`${color === 'orange' ? styles.btnOrange : ''} ${
          styles.btn
        } ${isTop ? styles.scroll : ''} ${bsClass} btn`}
      >
        <div className="d-flex justify-content-center align-item-center">
          {icon && (
            <img src={`/imgs/${icon}`} className="me-2 btnIcon" alt="Icone whatsapp" />
          )}
          {children}
        </div>
      </a>
    );
};

export default ButtonCustom;
