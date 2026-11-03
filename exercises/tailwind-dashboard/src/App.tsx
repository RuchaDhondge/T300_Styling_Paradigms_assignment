import { DashboardHeader } from './components/DashboardHeader'
import { ProductGrid } from './components/ProductGrid'
import { Sidebar } from './components/Sidebar'
import { products } from './data/products'

function App() {
  return (
    <div className="min-h-screen bg-canvas font-sans text-content md:grid md:grid-cols-[16rem_1fr]">
      <Sidebar />

      <main className="min-w-0 p-page sm:p-8">
        <div className="mx-auto max-w-7xl">
          <DashboardHeader />
          <ProductGrid products={products} />
        </div>
      </main>
    </div>
  )
}

export default App
