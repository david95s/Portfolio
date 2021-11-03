import React from 'react';
import styles from './styles.module.scss'

export const RadiosButtonMoreAbout = ({ question, options, onChange, value, id, active, nextQuestion }) => {

  if (active === false) return null
  return (
    <fieldset className={styles.containerFieldSet}>
      <legend >{question}</legend>
      {options.map((option) => (
        <label key={option} className={styles.myLabel}>
          <input
            type="radio"
            id={id}
            checked={value === option}
            value={option}
            onChange={onChange}
          />
          {option}
        </label>
      ))}
      <button  type="button" id={id} onClick={nextQuestion}> Next </button>
    </fieldset>
  );
}
