import { Logo } from "../Logo"

import styles from "../../styles/Header.module.css"

export const Header = () => {
  return (
    <header className={styles.container}>
      <h1 className={styles.title}>
        <Logo />
        <span className={styles.title__text}>React Piano</span>
      </h1>
    </header>
  )
}
