import React from 'react';
import styles from './MoreContact.module.css';
import SmallContact from './SmallContact';

const MoreContact = () => {
  return (
    <div
      className={`${styles.divMain} d-flex flex-column justify-content-start align-items-center`}
    >
      <h3 className="visually-hidden">Outras formas de contato</h3>
      <div className={styles.divMap}>
        <iframe
          title="Mapa da loja"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0220594641355!2d-46.6635754!3d-23.5676512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59d08181bc4d%3A0x91a186ded1754035!2sR.%20Oscar%20Freire%2C%20144%20-%20Jardim%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001426-000!5e0!3m2!1spt-BR!2sbr!4v1684860729954!5m2!1spt-BR!2sbr"
          width="100%"
          height="100%"
          className="rounded"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
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
          text="Lordello.joias@gmail.com"
          link="mailto:Lordello.joias@gmail.com"
        />
      </div>
    </div>
  );
};

export default MoreContact;
