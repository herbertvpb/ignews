import { FaGithub as GithubIcon } from 'react-icons/fa';
import { FiX as CloseIcon } from 'react-icons/fi';

import styles from './styles.module.scss'


export default function SignInButton() {
  const isLoggedIn = true;

  return isLoggedIn ? (
    <button
      type="button"
      className={styles.signInButton}
    >
      <GithubIcon color="#04d361" />
      Herbert Vieira
      <CloseIcon color="#737380" className={styles.closeIcon} />
    </button>
  ) :  (
    <button
      type="button"
      className={styles.signInButton}
    >
      <GithubIcon color="#eba417" />
      Sign in with Github
    </button>
  )
}