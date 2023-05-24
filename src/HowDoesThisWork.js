import React from 'react';
import styles from './HowDoesThisWork.module.css';
import StepCard from './StepCard';
import ButtonCustom from './ButtonCustom';

const HowDoesThisWork = () => {
  /* 
    Com base no texto que me foi enviado para a seção "Como funciona a avaliação?"
    
    Será colocado os seguintes textos:
  
    Passo 1 (Agendamento): Este passo é simples. Basta entrar em contato conosco para agendar a avaliação da sua joia. Nossa equipe estará pronta para atendê-lo e marcar um dia conveniente para que você possa trazer sua peça.

    Passo 2 (Avaliação): No segundo passo, nossos profissionais altamente qualificados em joalheria entrarão em ação. Eles usarão técnicas e métodos precisos, confiáveis e seguros para examinar cuidadosamente sua joia. Independentemente de ser uma peça usada, antiga ou moderna, nossa equipe fará uma análise minuciosa para verificar sua autenticidade e determinar seu valor real.

    Passo 3 (Compra justa): Quando sua joia for aprovada em nossa avaliação, estaremos prontos para comprá-la de você. Valorizamos cada peça e garantimos que você receberá um valor justo por ela. Nossa intenção é proporcionar uma transação segura, transparente e confiável.
  */
  // texto abaixo do titulo: Sua joia passa por verificação pelos nossos profissionais. Veja o processo que é feito:
  // Step 1: Você entra em contato coscono e combinamos o dia para avaliação de sua joia
  // Step 2: Nossos profisionais experrientes em joalheria, Utilizam tecnicas e metodos precisos e seguros/confiaveis para verificarmos a autencidade de sua joia. Sendo ela usada, antiga ou mordena.
  // Step 3: Ao a joia ser aprovada, compramos ela de você e você recebe o valor justo por ela.
  return (
    <section className={styles.divMain} id="howworks">
      <div className="container-xl">
        <h2>Como funciona a Avaliação?</h2>
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-md-4 align-self-stretch">
            <StepCard
              step="Passo 1 (Agendamento)"
              title={' Lorem ipsum dolor sit amet.'}
              img=""
              texts={[
                'Este passo é simples. Basta entrar em contato conosco para agendar a avaliação da sua joia.',
                'Nossa equipe estará pronta para atendê-lo e marcar um dia conveniente para que você possa trazer sua peça.',
              ]}
            />
          </div>
          <div className="col-12 col-md-4 align-self-stretch">
            <StepCard
              step="Passo 2 (Avaliação)"
              title={' Lorem ipsum dolor sit amet.'}
              img=""
              texts={[
                'No segundo passo, nossos profissionais altamente qualificados em joalheria entrarão em ação.',
                'Eles usarão técnicas e métodos precisos, confiáveis e seguros para examinar cuidadosamente sua joia.',
                'Independentemente de ser uma peça usada, antiga ou moderna, nossa equipe fará uma análise minuciosa para verificar sua autenticidade e determinar seu valor real.',
              ]}
            />
          </div>
          <div className="col-12 col-md-4 align-self-stretch">
            <StepCard
              step="Passo 3 (Compra justa)"
              title={' Lorem ipsum dolor sit amet.'}
              img=""
              texts={[
                'Quando sua joia for aprovada em nossa avaliação, estaremos prontos para comprá-la de você.',
                'Valorizamos cada peça e garantimos que você receberá um valor justo por ela.',
                'Nossa intenção é proporcionar uma transação segura, transparente e confiável',
              ]}
            />
          </div>
        </div>
        <div
          className={`${styles.divContact} d-flex flex-column justify-content-center align-items-center`}
        >
          <h2 className="mb-3">Se interessou?</h2>
          <p>Faça sua avaliação conosco</p>
          <ButtonCustom
            icon={'whatsapp.svg'}
            link="https://wa.me//5511978712340?text=Olá! Gostaria de falar com a Lordello Joias."
          >
            Fazer avaliação
          </ButtonCustom>
        </div>
      </div>
    </section>
  );
};

export default HowDoesThisWork;
