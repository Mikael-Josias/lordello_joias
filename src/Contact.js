import React from 'react';
import styles from './Contact.module.css';
import DivForm from './DivForm';
import MoreContact from './MoreContact';

const Contact = () => {
  return (
    <section className={styles.divMain} id="contact">
      <div className="container-xl">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-lg-6">
            <DivForm />
          </div>
          <div className="col-12 col-lg-6">
            <MoreContact />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
