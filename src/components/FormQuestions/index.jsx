import React from 'react';
import styles from './styles.module.scss';
import useStorageFinalResult from '../../Hooks/useStorageFinalResult';
import { RadiosButtonMoreAbout } from '../RadiosButtonMoreAbout';
import { ResultMoreAbout } from '../ResultMoreAbout/Result';


export const FormQuestions = ({ whichIsObjtAcitve, typeContent, loading, getQuestions }) =>{


  const [respostas, setRespostas] = React.useState({ p1: '', p2: '', p3: '', p4: '', });
  const [slide, setSlide] = React.useState(0);
  const [empty, setEmpty] = React.useState(null);
  const { storageFinalReulst, puttingFinalResultInStorage } = useStorageFinalResult()

  const [finalResult, setFinalResult] = React.useState(() =>{
    const { storageAreThere, resultsInStorage, indexInfact} = storageFinalReulst(typeContent);
    if(storageAreThere){
      if(indexInfact != -1){
        return resultsInStorage[indexInfact][typeContent];
      }else{
        return {}
      }
    }else{
      return {}
    }
  });

  async function resetSlideAndResultFinal(){
    const { resultsInStorage, indexInfact, putLocaStorageResultAboutMe } = storageFinalReulst(typeContent);
    const unicsToSetStorage = resultsInStorage.filter((item, index) => index != indexInfact );
    putLocaStorageResultAboutMe(unicsToSetStorage);
    setSlide(0);
    setFinalResult({});
    setRespostas({ p1: '', p2: '', p3: '', p4: '', });
    getQuestions(typeContent)
  }


  function nextQuestion({ currentTarget }){    
    const max = (whichIsObjtAcitve.length - 1);
    if(slide < max){
      const checked = checkAnswer(respostas, currentTarget.id);
      theNext(checked);
    }else{
      const checked = checkAnswer(respostas, currentTarget.id)
      theNext(checked, true)
    }
  }

  function theNext(checked, toEnd){
    if(checked){
      setSlide(slide + 1);
      setEmpty(null);
      toEnd && resultadoFinal();
    }else{
      setEmpty("Wow! It's necessary to check one of the options")
    }
  }

  function checkAnswer(answerObjt, myId){
    if(answerObjt[myId]){ return true  }
    return false;
  }

  function resultadoFinal() {
    const corretas = whichIsObjtAcitve.filter( (item) => {
      return respostas[item.id] === item.resposta;
    });
    
    const result = {
      totalQuestion: whichIsObjtAcitve.length,
      totalRight: corretas.length,
      arrayRight: corretas.map(item => item.resposta)
    }
    setFinalResult(result)
    puttingFinalResultInStorage(result, typeContent);
  }


  function handleChange({ target }) {
    setRespostas({ ...respostas, [target.id]: target.value });
  }

  if(loading) return (
    <fieldset className={styles.containerSkeletonLoading}>
    <legend>Loading...</legend>
    <div className={`skeletonGlobal ${styles.askingSkeleton}`}></div>
    <div className={`skeletonGlobal ${styles.askingSkeleton}`}></div>
    <div className={`skeletonGlobal ${styles.askingSkeleton}`}></div>
    <div className={`skeletonGlobal ${styles.buttonSkeleton}`}></div>
  </fieldset>
  )
  
  
  if( (Object.keys(whichIsObjtAcitve).length === 0) && (Object.keys(finalResult).length === 0) ) return null
  return (
    <div className={styles.containerFormQuestion}>
      {
        Object.keys(finalResult).length > 0 
        ?
        <ResultMoreAbout finalResult={finalResult} resetSlideAndResultFinal={resetSlideAndResultFinal} typeContent={typeContent}/>
        :
        <form onSubmit={(event) => event.preventDefault()}>
          { 
            whichIsObjtAcitve.map((item, index) =>{
              return  <div  key={item.id}>
                <RadiosButtonMoreAbout
                  active={slide === index}
                  value={respostas[item.id]}
                  onChange={handleChange}
                  nextQuestion={nextQuestion}
                  {...item}
                />
              </div>
            })
          }
          <div>
            { empty && <span style={{color: "tomato"}}>{empty}</span> }
          </div>
        </form>
      }
    </div>

  )
}