import styles from './styles.module.scss';

export const ResultMoreAbout = ({ finalResult, resetSlideAndResultFinal, typeContent }) =>{

  const { totalQuestion, totalRight, arrayRight } = finalResult;
  
  function handleTryAgain(){
    resetSlideAndResultFinal()
  }

  //A verificação do State já está sendo feita do lado de fora. 
  return (
    <div className={styles.resultQuestion}>
      <h1 style={{textTransform: 'capitalize'}}>
        {typeContent}
      </h1>
      <p className={styles.totalQuestion}>
        {totalQuestion}
      </p>
      <p className={styles.totalRight}>
        { totalRight }
      </p>
      
      {`That's all you know about me so far.`}
      <br />
      <br />

      {
        arrayRight.map((item, index)=>{
          return <div key={index + "x"}>{item}</div>
        })
      }
      
      <br />
      <br />
      <button onClick={handleTryAgain}>Try It again ??</button>
    </div>
  )
}