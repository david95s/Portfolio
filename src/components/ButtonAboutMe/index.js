import styles from './styles.module.scss'


export const ButtonAboutMe = ({children, ...rest}) =>{

  return (
      <button {...rest} className={styles.btnAboutMe}>
        { children }
      </button>
    )
}