import * as styles from './appStyles.css'
import { Badge } from './components/Badge'
import { Button } from './components/Button'
import { Card } from './components/Card'
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

        <section className={styles.section} aria-labelledby="badges-heading">
          <h2 id="badges-heading" className={styles.sectionTitle}>
            Badge
          </h2>
          <p className={styles.sectionDescription}>
            Semantic variants composed with a shared base style.
          </p>

          <div className={styles.componentRow}>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="error">Error</Badge>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="cards-heading">
          <h2 id="cards-heading" className={styles.sectionTitle}>
            Card composition
          </h2>
          <p className={styles.sectionDescription}>
            Cards combine the reusable Button and Badge components.
          </p>

          <div className={styles.componentGrid}>
            <Card>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>Starter plan</h3>
                <Badge variant="success">Active</Badge>
              </div>
              <p className={styles.cardBody}>
                A compact option for small teams exploring the component
                library.
              </p>
              <div className={styles.cardFooter}>
                <Button variant="primary" size="small">
                  Choose plan
                </Button>
              </div>
            </Card>

            <Card>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>Team plan</h3>
                <Badge variant="warning">Popular</Badge>
              </div>
              <p className={styles.cardBody}>
                Shared workflows and scalable controls for growing product
                teams.
              </p>
              <div className={styles.cardFooter}>
                <Button variant="secondary" size="small">
                  View details
                </Button>
              </div>
            </Card>

            <Card>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>Legacy plan</h3>
                <Badge variant="error">Unavailable</Badge>
              </div>
              <p className={styles.cardBody}>
                This plan demonstrates how disabled component states remain
                consistent.
              </p>
              <div className={styles.cardFooter}>
                <Button variant="danger" size="small" disabled>
                  Unavailable
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </section>
    </main>
  )
}

export default App
