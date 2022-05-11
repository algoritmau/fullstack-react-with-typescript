import styles from "./styles/App.module.css"
import { Footer, Header } from "./components"

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.content} />
      <Footer />
    </div>
  )
}

export default App
