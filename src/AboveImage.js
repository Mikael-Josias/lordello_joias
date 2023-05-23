import React from 'react';
import styles from './AboveImage.module.css';

const AboveImage = ({ img, side, title, texts }) => {
  return (
    <div
      className={`d-flex flex-column flex-lg-row justify-content-${
        side === 'left' ? 'start' : 'end'
      } align-items-center mt-3`}
    >
      {side === 'left' && (
        <div
          className={`${styles.divImg} position-relative`}
          style={img ? { backgroundImage: `url(/imgs/${img})` } : {}}
        >
          <div
            className={`${styles.divText} d-none d-lg-flex flex-column justify-content-center aling-items-center position-absolute top-50 start-100`}
          >
            <h3>{title}</h3>
            {texts.map((text) => {
              return <p key={text}>{text}</p>;
            })}
          </div>
        </div>
      )}
      {side === 'right' && (
        <div
          className={`${styles.divImg} position-relative`}
          style={img ? { backgroundImage: `url(/imgs/${img})` } : {}}
        >
          <div
            className={`${styles.divText} ${styles.divTextLeft} d-none d-lg-flex flex-column justify-content-center aling-items-center position-absolute top-50 start-0 translate-middle`}
          >
            <h3>{title}</h3>
            {texts.map((text) => {
              return <p key={text}>{text}</p>;
            })}
          </div>
        </div>
      )}

      <div
        className={`${styles.divText} d-flex d-lg-none flex-column justify-content-center aling-items-center mt-3 mt-lg-0`}
      >
        <h3>{title}</h3>
        {texts.map((text) => {
          return <p key={text}>{text}</p>;
        })}
      </div>
    </div>
  );
};

export default AboveImage;
