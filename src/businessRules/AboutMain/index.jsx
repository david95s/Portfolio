import React from 'react';
import { AbstractAbout } from '../../components/AbstractAbout';
import { MoreAboutMe } from '../../components/MoreAboutMe';
import { OverlayChange } from '../../components/OverlayChange';

// import { MoreAboutMe } from './MoreAboutMe';

import styles from './styles.module.scss';


export const AboutMain = () => {


  const absTract = "ABSTRACT";
  const moreAbout = "MOREABOUT"

  const [ whichIsActive, setWhichIsActive ] = React.useState(null);
  const [ overlay, setOverlay] = React.useState(false);

  
  React.useEffect(() => {
    const contextAboutStorage = window.localStorage.getItem("contextAbout");
    if(contextAboutStorage){
      setWhichIsActive(contextAboutStorage)      
    }else{
      setWhichIsActive(absTract)      
    }
  },[]);

  function setContextAboutActive(context){
    window.localStorage.setItem("contextAbout", context);
    setWhichIsActive(context);
  }

  function openOverlay(){
    setOverlay(true)
  }

  function closeOverlay(){
    setOverlay(false)
  }
  
  if(whichIsActive === null) return null
  return (
    <main className={styles.ContainerAbout}>
      
      {
        whichIsActive === moreAbout ?
        <MoreAboutMe openOverlay={openOverlay} closeOverlay={closeOverlay} setContextAboutActive={setContextAboutActive}/>
        :
        <AbstractAbout  openOverlay={openOverlay} closeOverlay={closeOverlay} setContextAboutActive={setContextAboutActive}/>
      }
      
      {overlay && <OverlayChange/> }
      
    </main>
    
  )
}
