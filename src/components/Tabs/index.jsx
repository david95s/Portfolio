import React from 'react'; 
import { BodyTabs } from './BodyTabs';
import styles from './styles.module.scss';
import Image from 'next/image';


export const Tabs = ({ dataTabs }) => {


  const [dataNumTab, setDataNumTab] =  React.useState(null);

  function setTabs(idComponent){
    setDataNumTab(idComponent)
  }

  return ( 
    <div className={styles.containerTabs}>
      <header>
        {
          dataTabs.map(({ title, idComponent, hadleClickNavTabs }, index) => {
            return (
              <button 
              key={index + "x"} 
              className={`${idComponent === dataNumTab ? styles.btnActive : ""} btnHeaderDefaultTabs`}
              onClick={(e)=>{ 
                if(hadleClickNavTabs){ hadleClickNavTabs(e) }
                setTabs(idComponent)
              }}
              >
                <span className={`${styles.theCheck} ${idComponent === dataNumTab ? styles.checkedChek : ""}`}></span>
                {title}
              </button>
            )
          })
        }
      </header>
        
      <section>
        { 
          dataNumTab ? 
          dataTabs.map(({ component, idComponent }, index) => {
            return (
              <BodyTabs key={index + "x"} activeTabs={dataNumTab} myId={idComponent} className={styles.contentBody}>
                {component()}
              </BodyTabs>
            )
          })
          :
          <div className={`${styles.contentBody} ${styles.bodyWhileNoTabs}`}>
            <p style={{fontSize: '1.3rem'}}>🖖</p>
            <p>Find out more about</p>
            <p>My <span className={styles.pUniverse}>little</span> universe</p>
            <Image 
              src="/images/svgs/stars.svg"
              alt="David's universe"
              width={"240"}
              height={"240"}
              draggable={false}
            />
          </div>
        }
      </section>
    </div>
  )
}