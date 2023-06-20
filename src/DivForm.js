import React from 'react';
import styles from './DivForm.module.css';
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap';
import ButtonCustom from './ButtonCustom';

const DivForm = () => {
  const refName = React.useRef();
  const refEmail = React.useRef();
  const refComment = React.useRef();
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleSubmit(event) {
    event.preventDefault();
    handleShow();
  }

  return (
    <div
      className={`${styles.divMain} d-flex flex-column justify-content-center align-items-center`}
    >
      <>
        <Modal size="md" show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Formulário enviado</Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center">
            <img
              src="/imgs/check-circle-fill.svg"
              alt="Imagem correto"
              style={{ width: '42px', height: '42px' }}
            />
            <h3 className="fw-bold mt-3">Formulário enviado com sucesso!</h3>
            <p className="mb-5">
              Em breve entraremos em contato com você pelo o seu email!
            </p>
            <div className="text-start">
              <p className="fw-semibold">
                Caso queira, temos outras formas de contato:
              </p>
              <ul>
                <li>
                  Whatsapp:{' '}
                  <a
                    href="https://wa.me//5511978712340?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20a%20Lordello%20Joias."
                    target="_blanck"
                  >
                    (11) 97871-2340
                  </a>
                </li>
                <li className="mt-2">
                  Email:{' '}
                  <a href="mailto:Lordello.joias@gmail.com" target="_blanck">
                    Lordello.joias@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Fechar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
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
        <ButtonCustom bsClass="w-100 mt-3 text-uppercase" btn={true}>
          Enviar
        </ButtonCustom>
      </form>
    </div>
  );
};

export default DivForm;
