import * as styles from './appStyles.css'
import { themeClass } from './theme/theme.css'

function App() {
  return (
    <main className={`${themeClass} ${styles.page}`}>
      <section className={styles.panel}>
        <p className={styles.eyebrow}>Exercise 2</p>
        <h1 className={styles.title}>Type-safe component library</h1>
        <p className={styles.description}>
          Vanilla Extract is configured and generating static CSS at build time.
        </p>
      </section>
    </main>
  )
}

export default App
