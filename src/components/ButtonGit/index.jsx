import { FaGithub } from 'react-icons/fa';
import styles from './styles.module.scss';


export const ButtonGit = ({...rest}) =>{

  return (
    <a {...rest} 
      className={styles.btnGit} 
      href="https://github.com/david95s" 
      target="_blank" 
      rel="noreferrer"
    >
      <FaGithub color="#04d361"/>
      Come visit me
    </a>
  )
}