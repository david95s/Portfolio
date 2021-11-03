import React from 'react';
import styles from './styles.module.scss';

import { GoLocation } from "react-icons/go";
import { AiOutlineMail } from "react-icons/ai";

import Image from 'next/image'


export const MiniGit = ({...rest}) =>{


  const [skeleton, setSkeleton] = React.useState(true);


  function loadedImg(){
    if(skeleton){
      setSkeleton(false);
    }
  }

  return (
          <section className={styles.containerGit} {...rest}>
            <div className={styles.theLine}></div>

            <div className={styles.contentWithoutLine}>
              {
                skeleton &&
                <div className={styles.containerSkeletonImgGit}>
                  <div className={styles.wrapperSkeletonImgGit}>
                    <div className={styles.skeletonImgGit}></div>
                  </div>
                </div>
              }

              <div className={styles.wrapperProfile} >
                <div className={styles.wrapperGitProfile}>
                  <Image 
                      src="/images/jpg_png/davidgit.jpeg"
                      width={71}
                      height={71}
                      onLoad={loadedImg} 
                      className={styles.imgGit} 
                      alt="Profile Github"
                    />
                </div>
                  
                  <div className={styles.contentImgMini}>
                    <div className={styles.wrapperImgMini}>
                      <Image 
                        src="/images/jpg_png/catgit.png"
                        alt="logo brand github"
                        width={15}
                        height={15}
                        className={styles.imgMini} 
                      />
                    </div>
                  </div>
              </div>

              <div className={styles.contetTitleAndSubtitle}>
                <p className={styles.title}>David Linconl</p>
                <p className={styles.subTitle}> david95s</p>
                
                <div className={styles.wrapperJustText}>
                  <span><GoLocation/></span>
                  <span>Brazil</span>
                </div>
                <div className={styles.wrapperJustText}>
                  <span><AiOutlineMail/></span>
                  <span className={styles.theLastSpan}>davidlinconl1@hotmail.com</span>
                </div>
              
              </div>
              
            
            </div>      
            
          </section>
        )
}