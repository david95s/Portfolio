import Image from 'next/image';
import styles from './styles.module.scss';
import { ContainerFlex } from '../../components/ContainerFlex';


export const HomeMain = () => {

  return (      
    <ContainerFlex className={styles.containerHome}>
      <div className={`${styles.sidesHome} ${styles.leftContainer}`}>
        <Image 
            src="/images/svgs/man-universe.svg"
            alt="Man universe"
            width={"630"}
            height={"630"}
            draggable={false}
          />
      </div>
      
      <div className={`${styles.sidesHome}  ${styles.rightContainer}`}>
        <section className={styles.containerChamada}>
          <span> 👏 Hey, welcome!</span>
          <h1>Enthusiast of the best <span>Front-end</span> development technologies.</h1>
          <p>
            <span>import</span>
            <span className={styles.chaves}>{` { `}</span> 
            <span className={styles.theJs}>JS</span>  
            <span className={styles.chaves}>{` } `}</span> 
            <span>from</span>
            <span className={styles.pathJs}>{`'@life/core'`}</span> 
          </p>  
        </section>
      </div>
    </ContainerFlex>
  )
}