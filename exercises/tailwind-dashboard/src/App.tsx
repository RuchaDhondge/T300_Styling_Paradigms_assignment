import { DashboardHeader } from './components/DashboardHeader'
import { Sidebar } from './components/Sidebar'

function App() {
  return (
    <div className="min-h-screen bg-canvas font-sans text-content md:grid md:grid-cols-[16rem_1fr]">
      <Sidebar />

      <main className="min-w-0 p-page sm:p-8">
        <div className="mx-auto max-w-7xl">
          <DashboardHeader />

          <section
            id="products"
            aria-label="Product list"
            className="mt-8 rounded-card border border-dashed border-border bg-surface p-8 text-center shadow-card"
          >
            <p className="font-medium text-content">Product grid coming next</p>
            <p className="mt-1 text-sm text-content-muted">
              Reusable product cards will be rendered in this area.
            </p>
          </section>
        </div>
      </main>
    </div>
  )
}

export default App
