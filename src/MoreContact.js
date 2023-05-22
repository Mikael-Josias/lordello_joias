import React from 'react';
import styles from './MoreContact.module.css';
import SmallContact from './SmallContact';

const MoreContact = () => {
  return (
    <div
      className={`${styles.divMain} d-flex flex-column justify-content-start align-items-center`}
    >
      <h3 className="visually-hidden">Outras formas de contato</h3>
      <div className={styles.divMap}></div>
      <p className="align-self-lg-start mt-2 mb-4">
        <small>
          Nosso atendimento está disponível de segunda a sábado, das 08h às 19h.
        </small>
      </p>

      <div className="d-flex flex-column gap-4 gap-lg-0 align-self-lg-start">
        <SmallContact
          icon={'whatsapp.svg'}
          text="(11) 97871-2340"
          link="https://wa.me//5511978712340?text=Olá! Gostaria de falar com a Lordello Joias."
        />
        <SmallContact
          icon={'location.svg'}
          text="R. Oscar Freire, 144 - Jardim Paulista, São Paulo - SP, 01426-000"
          link="https://goo.gl/maps/KBAcBqJVw9MWnobu9"
        />
        <SmallContact
          icon={'email.svg'}
          text="email@email.com"
          link="mailto:email@email.com"
        />
      </div>
    </div>
  );
};

export default MoreContact;
