import type { ProductStatus } from '../types/product'

const statusStyles: Record<ProductStatus, string> = {
  'In stock': 'bg-emerald-50 text-emerald-700 ring-emerald-600/20',
  'Low stock': 'bg-amber-50 text-amber-700 ring-amber-600/20',
  'Out of stock': 'bg-rose-50 text-rose-700 ring-rose-600/20',
}

export function StatusBadge({ status }: { status: ProductStatus }) {
  return (
    <span
      className={[
        'inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset',
        statusStyles[status],
      ].join(' ')}
    >
      {status}
    </span>
  )
}
