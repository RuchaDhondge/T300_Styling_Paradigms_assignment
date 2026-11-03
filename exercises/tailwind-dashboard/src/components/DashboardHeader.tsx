export function DashboardHeader() {
  return (
    <header className="flex flex-col gap-4 border-b border-border pb-6 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-sm font-medium text-primary">Product management</p>
        <h1 className="mt-1 text-3xl font-bold tracking-tight text-content">
          Products
        </h1>
        <p className="mt-2 text-sm text-content-muted">
          Review inventory, pricing, and availability from one dashboard.
        </p>
      </div>

      <button
        type="button"
        className="inline-flex items-center justify-center gap-2 self-start rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:self-auto"
      >
        <svg
          aria-hidden="true"
          className="size-4"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
        >
          <path strokeLinecap="round" d="M12 5v14M5 12h14" />
        </svg>
        Add product
      </button>
    </header>
  )
}
