import * as styles from './appStyles.css'
import { Button } from './components/Button'
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

        <section className={styles.section} aria-labelledby="buttons-heading">
          <h2 id="buttons-heading" className={styles.sectionTitle}>
            Button
          </h2>
          <p className={styles.sectionDescription}>
            Composed variants, sizes, and interaction states.
          </p>

          <div className={styles.componentRow}>
            <Button variant="primary" size="large">
              Primary
            </Button>
            <Button variant="secondary" size="large">
              Secondary
            </Button>
            <Button variant="danger" size="large">
              Danger
            </Button>
            <Button variant="primary" size="small">
              Small
            </Button>
            <Button variant="primary" size="large" disabled>
              Disabled
            </Button>
          </div>
        </section>
      </section>
    </main>
  )
}

export default App
