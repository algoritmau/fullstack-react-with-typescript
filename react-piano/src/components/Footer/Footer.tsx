import styles from "../../styles/Footer.module.css"

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.container}>
      <p className={styles.credits}>
        &copy; {currentYear}{" "}
        <a href="https://patternina.co">Mauricio Paternina</a>.
      </p>
    </footer>
  )
}
