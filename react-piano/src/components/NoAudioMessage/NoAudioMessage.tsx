import styles from "../../styles/NoAudioMessage.module.css"

export const NoAudioMessage = () => (
  <h1 className={styles.message}>
    <span className={styles.title}>
      It looks like your browser doesn't support <code>Audio API</code>
    </span>
    <span className={styles.subtitle}>
      You may want to try again using a different browser.
    </span>
  </h1>
)
