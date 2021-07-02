import Image from 'next/image'
import logo from '../../../public/images/logo.svg'
import SignInButton from '../SignInButton'

import styles from './styles.module.scss'

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src={logo} alt="ig.news" />
        <nav>
          <a>Home</a>
          <a>Posts</a>
        </nav>

        <SignInButton />
      </div>
    </header>
  )
}