import React from 'react';


const useStorageFinalResult = () => {
  
  const storageFinalReulst = React.useCallback( (typeContent) => {
    const resultsInStorage = JSON.parse(window.localStorage.getItem("resultAboutMe"));
    if(resultsInStorage){
      const indexResult = resultsInStorage.findIndex(item => item[typeContent]);
      return { 
        storageAreThere: true,
        indexInfact: indexResult,
        resultsInStorage: resultsInStorage,
        putLocaStorageResultAboutMe: (value) =>{
          window.localStorage.setItem('resultAboutMe', JSON.stringify(value));
        }
      }
    }else{
      return { 
        storageAreThere: false,
        putLocaStorageResultAboutMe: (value) =>{
          window.localStorage.setItem('resultAboutMe', JSON.stringify(value));
        }
      }
    }
  }, []);
  
  function puttingFinalResultInStorage(result, typeContent){
    const { storageAreThere, resultsInStorage, indexInfact, putLocaStorageResultAboutMe } = storageFinalReulst();

    const objtResultToStorage = { [typeContent] : result }

    if(storageAreThere){
      if(indexInfact != -1){
        const newRetuned = resultsInStorage.map( item => {
          return item[typeContent] ? objtResultToStorage : item
        })
        putLocaStorageResultAboutMe(newRetuned)
      }else{
        const concactArray = [...resultsInStorage, objtResultToStorage];
        putLocaStorageResultAboutMe(concactArray)
      }
    }else{
      putLocaStorageResultAboutMe([objtResultToStorage])
    }
  }

  return { storageFinalReulst, puttingFinalResultInStorage }
};

export default useStorageFinalResult;