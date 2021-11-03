import React from 'react';
import styles from './styles.module.scss';
import { useRouter } from 'next/router';

import Link from 'next/link'

import { ButtonGit } from '../../components/ButtonGit';
import { MiniGit } from '../../components/MiniGit';

export const Header = () =>{

  const router = useRouter();

  const [isLinkActiv, setIsLinkActiv] = React.useState(()=>{
    switch (router.asPath) {
        case "/about":
          return("About");
        default:
        return("Home");
    }
  });
  const [isTherMiniGit, setIsThereMiniGit] = React.useState(false);


  function openMiniGit(){
    setIsThereMiniGit(true)
  }

  function closeMiniGit(){
    setIsThereMiniGit(false)
  }


  function handleLinkActive(linkActive){
    setIsLinkActiv(linkActive);
  }

  return (
    <header className={`${styles.headerMain} headerClassGlobal`}>
      <div className={styles.headerContent}>
        <h1>David95s</h1>

        <nav>
          <Link href="/" >
            <a 
            className={ isLinkActiv === "Home" ?  styles.active : ""} 
            onClick={() => handleLinkActive("Home")}
            >Home</a>
          </Link>
          
          <Link href="/about" >
            <a 
            className={ isLinkActiv === "About" ?  styles.active : ""}
            onClick={() => handleLinkActive("About")}
            >About</a>
          </Link>
        </nav>

        <div className={styles.theRight}>
          <ButtonGit onMouseOver={openMiniGit} onMouseLeave={closeMiniGit} /> 
          {
          isTherMiniGit &&
              <div className={styles.containerMiniGit}>
                <div className={styles.wrapperMiniGit}>
                  <MiniGit />
                </div>
            </div>
          }
        </div>
      </div>
    </header>
  )
}