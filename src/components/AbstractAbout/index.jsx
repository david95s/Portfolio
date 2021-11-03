import React from 'react';
import Image from 'next/image';

import { ContainerFlex } from '../ContainerFlex';
import { ButtonAboutMe } from '../ButtonAboutMe'
import styles from './styles.module.scss';



export const AbstractAbout = ({ openOverlay, closeOverlay, setContextAboutActive }) => {

  const [ isChanging, setIsChanging] = React.useState(false)


  function changeToMoreAboutMe(){
    openOverlay();
    setTimeout(()=>{
      setContextAboutActive("MOREABOUT")
    }, 1400);
    setTimeout(()=>{
      closeOverlay();
    }, 2500);
    setIsChanging(true);
  }



  return (
      <ContainerFlex className={styles.containerAbstract}>
      <section className={`${styles.sidesHome} ${styles.leftContainer}`}>
          <div className={styles.containImport}>
            <span>import</span>
            <span className={styles.chaves}>{` { `}</span> 
            <span className={styles.theJs}>David</span>  
            <span className={styles.chaves}>{` } `}</span> 
            <span>from</span>
            <span className={styles.pathJs}>{`'@life/core'`}</span> 
          </div>
      
          <div className={styles.myDescription}>
            Developer focused on technology for troubleshooting! 
            Programming enthusiast and passionate about sharing knowledge.
            Always using several <span className={styles.frontEnfase}>front-end</span> tools applying clean code 
            methodology and responsive design.
          </div>
      
          <div className={styles.stickAround}>
            <p>Why {`don't`} you stick around and find out more about me? <span>😊</span></p>
            { 
              !isChanging ?
              <ButtonAboutMe onClick={changeToMoreAboutMe}>More about me</ButtonAboutMe>
              :
              <ButtonAboutMe disabled={true}>More about me</ButtonAboutMe>
            }
          </div>
      </section>
      
      <section className={`${styles.sidesHome} ${styles.rightContainer}`}>
        <Image 
          src="/images/svgs/man-chore.svg"
          alt="Man Chore"
          width={"630"}
          height={"630"}
          draggable={false}
        />
        <div className={styles.circleInsideRight}></div>
      </section>
      </ContainerFlex>
  )
}

