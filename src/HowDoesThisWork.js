import React from 'react';
import styles from './HowDoesThisWork.module.css';
import StepCard from './StepCard';
import ButtonCustom from './ButtonCustom';

const HowDoesThisWork = () => {
  return (
    <section className={styles.divMain} id="howworks">
      <div className="container-xl">
        <h2>Como funciona a Avaliação?</h2>
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-md-4">
            <StepCard
              step="1"
              title={' Lorem ipsum dolor sit amet.'}
              img=""
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sint eaque porro nostrum sed repellendus obcaecati! Repellendus, ratione accusamus. Delectus?"
            />
          </div>
          <div className="col-12 col-md-4">
            <StepCard
              step="2"
              title={' Lorem ipsum dolor sit amet.'}
              img=""
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sint eaque porro nostrum sed repellendus obcaecati! Repellendus, ratione accusamus. Delectus?"
            />
          </div>
          <div className="col-12 col-md-4">
            <StepCard
              step="3"
              title={' Lorem ipsum dolor sit amet.'}
              img=""
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sint eaque porro nostrum sed repellendus obcaecati! Repellendus, ratione accusamus. Delectus?"
            />
          </div>
        </div>
        <div
          className={`${styles.divContact} d-flex flex-column justify-content-center align-items-center`}
        >
          <h2 className="mb-3">Se interessou?</h2>
          <p>Faça sua avaliação conosco</p>
          <ButtonCustom icon={'whatsapp.svg'} color="orange" link="#">
            Fazer avaliação
          </ButtonCustom>
        </div>
      </div>
    </section>
  );
};

export default HowDoesThisWork;
