import React from 'react';
import styles from './DivForm.module.css';
import { FloatingLabel, Form } from 'react-bootstrap';

const DivForm = () => {
  const refName = React.useRef();
  const refEmail = React.useRef();
  const refComment = React.useRef();

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div
      className={`${styles.divMain} d-flex flex-column justify-content-center align-items-center`}
    >
      <h2 className="mb-3 align-self-start">Entre em contato conosco</h2>
      <p className="mb-4 align-self-start">
        Estamos aqui por você. Como podemos ajudá-lo(a)?
      </p>
      <form onSubmit={handleSubmit} className="w-100">
        <FloatingLabel
          controlId="floatingName"
          label="Nome completo"
          className="mb-3"
        >
          <Form.Control
            type="text"
            placeholder="Nome completo"
            minLength={3}
            maxLength={25}
            required
            ref={refName}
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingEmail" label="Email">
          <Form.Control
            type="email"
            placeholder="email@exemplo.com"
            required
            ref={refEmail}
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingTextarea2"
          label="Como pode ajudá-lo(a)?"
          className="mt-3"
        >
          <Form.Control
            as="textarea"
            placeholder="Deixe seu comentario aqui"
            style={{ height: '100px' }}
            required
            minLength={10}
            maxLength={300}
            ref={refComment}
          />
        </FloatingLabel>
        <button type="submit" className={`${styles.btn} btn`}>
          Enviar
        </button>
      </form>
    </div>
  );
};

export default DivForm;
