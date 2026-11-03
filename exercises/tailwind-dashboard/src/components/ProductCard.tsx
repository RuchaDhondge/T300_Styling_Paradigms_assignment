import type { Product } from '../types/product'
import { StatusBadge } from './StatusBadge'

const priceFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
})

export function ProductCard({ product }: { product: Product }) {
  const isUnavailable = product.status === 'Out of stock'

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-card border border-border bg-surface shadow-card transition duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className="aspect-[4/3] overflow-hidden bg-slate-100">
        <img
          src={product.imageUrl}
          alt={product.name}
          width="900"
          height="675"
          loading="lazy"
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-content-muted">
              {product.category}
            </p>
            <h2 className="mt-1 text-lg font-bold text-content">
              {product.name}
            </h2>
          </div>
          <StatusBadge status={product.status} />
        </div>

        <div className="mt-auto flex items-end justify-between gap-4 pt-6">
          <div>
            <p className="text-xs text-content-muted">Price</p>
            <p className="text-xl font-bold text-content">
              {priceFormatter.format(product.price)}
            </p>
          </div>

          <button
            type="button"
            disabled={isUnavailable}
            className="rounded-lg border border-border bg-surface px-3.5 py-2 text-sm font-semibold text-content shadow-sm transition-colors hover:border-primary hover:bg-primary hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-not-allowed disabled:border-border disabled:bg-slate-100 disabled:text-content-muted disabled:opacity-60"
          >
            {isUnavailable ? 'Unavailable' : 'View product'}
          </button>
        </div>
      </div>
    </article>
  )
}
