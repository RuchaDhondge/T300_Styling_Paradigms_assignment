import type { Product } from '../types/product'
import { ProductCard } from './ProductCard'

export function ProductGrid({ products }: { products: Product[] }) {
  return (
    <section
      id="products"
      aria-labelledby="products-heading"
      className="mt-8"
    >
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <h2 id="products-heading" className="text-xl font-bold text-content">
            All products
          </h2>
          <p className="mt-1 text-sm text-content-muted">
            {products.length} products in your catalogue
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
