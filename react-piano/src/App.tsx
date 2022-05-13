import { Footer, Header, Main } from "./components"

import styles from "./styles/App.module.css"

const App = () => (
  <div className={styles.app}>
    <Header />
    <Main />
    <Footer />
  </div>
)

export default App
