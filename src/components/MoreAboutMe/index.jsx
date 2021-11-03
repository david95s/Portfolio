import React from 'react';
import { ContainerFlex } from '../ContainerFlex';
import { Tabs } from '../../components/Tabs';

import { AiOutlineClose } from "react-icons/ai";


import styles from './styles.module.scss';
import { FormQuestions } from '../FormQuestions';
import useFetch from '../../Hooks/useFetch';
import useStorageFinalResult from '../../Hooks/useStorageFinalResult';



export const MoreAboutMe = ({ openOverlay, closeOverlay, setContextAboutActive  }) => {

  function changeToAbstract(){
    openOverlay();
    setTimeout(()=>{
      setContextAboutActive("ABSTRACT");
    }, 1200);
    setTimeout(()=>{
      closeOverlay();
    },3000);
  }

  const [whichIsObjtAcitve, setWhichIsObjtAcitve] = React.useState({});
  
  const {error, loading, request } = useFetch();
  const { storageFinalReulst } = useStorageFinalResult()

  async function handleQuestion(typeQuestion, e){
      const { storageAreThere, indexInfact } = storageFinalReulst(typeQuestion);
      if(storageAreThere){
        if(indexInfact === -1){
          await getQuestions(typeQuestion)
        }
      }else{
        await getQuestions(typeQuestion)
      }   
  }

  async function getQuestions(typeQuestion){
    const allBtns  = document.querySelectorAll(".btnHeaderDefaultTabs");
    allBtns.forEach((item) => item.setAttribute("disabled", true));
    setWhichIsObjtAcitve({});
    const url = `api/questions/${typeQuestion}`;
    const {json} = await request(url);
    setWhichIsObjtAcitve(json);
    allBtns.forEach((item) => item.removeAttribute("disabled"));
  }


  const objtoDataTabs = [
    {
      title: "Academic",
      idComponent: "academic",
      hadleClickNavTabs: (e)=>{
        handleQuestion("academic", e)
      }, 
      component: ()=>{
        return <FormQuestions whichIsObjtAcitve={whichIsObjtAcitve} typeContent="academic" loading={loading} getQuestions={getQuestions} />
      }
    },
    {
      title: "Personal",
      idComponent: "Personal",
      hadleClickNavTabs: (e)=>{
        handleQuestion("personal", e)
      }, 
      component: ()=>{
        return <FormQuestions whichIsObjtAcitve={whichIsObjtAcitve} typeContent="personal" loading={loading} getQuestions={getQuestions} />
      }
    }
  ]

  return (
    <section className={styles.containerMoreAbout}>      
      <ContainerFlex className={styles.headerMoreAbout}>
        <h3>Select one of the following options bellow.</h3>
        <button onClick={changeToAbstract}>
          <AiOutlineClose/>
        </button>
      </ContainerFlex>
      <Tabs dataTabs={objtoDataTabs}/>
    </section>
  )
}