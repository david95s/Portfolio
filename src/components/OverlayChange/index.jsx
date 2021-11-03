import React from 'react';
import styles from './styles.module.scss';

export const OverlayChange = () => {

  return (
    <>
      {/*
        protectedAll qnd ao mudar de estado 
        vai bloquear mudar de tela, criando overlay por cima de toda tela
        Para esperar o carregamento do TIMEOUTE 
      */}
      <div className={styles.protectedAll}></div>
      <section className={styles.Overlay}>
        <div className={styles.wrapperAnimate}>
          <div className={`${styles.jqueryAnimate} ${styles.defaultAnime}`}><p>JQuery</p></div>
          <div className={`${styles.reactAnimate} ${styles.defaultAnime}`}>React</div>
          <div className={`${styles.reduxtAnimate} ${styles.defaultAnime}`}>Redux</div>
          <div className={`${styles.nextAnimate} ${styles.defaultAnime}`}>Next</div>
          <div className={styles.jsCenter}>{/*<p>JavaScript</p>*/}</div>
          <div className={styles.bellowJsCenter}>JavaScript</div>
        </div>
      </section>
    </>
  )
}