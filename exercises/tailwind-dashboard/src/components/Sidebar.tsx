const navigationItems = [
  { label: 'Overview', icon: 'overview', current: false },
  { label: 'Products', icon: 'products', current: true },
  { label: 'Orders', icon: 'orders', current: false },
  { label: 'Customers', icon: 'customers', current: false },
] as const

type IconName = (typeof navigationItems)[number]['icon']

function NavigationIcon({ name }: { name: IconName }) {
  if (name === 'products') {
    return (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m21 8-9-5-9 5 9 5 9-5Zm-18 4 9 5 9-5M3 16l9 5 9-5"
      />
    )
  }

  if (name === 'orders') {
    return (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 3h12l1 18H5L6 3Zm3 4a3 3 0 0 0 6 0"
      />
    )
  }

  if (name === 'customers') {
    return (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2m7-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm13 10v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
      />
    )
  }

  return (
    <>
      <rect width="7" height="7" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="3" y="14" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
    </>
  )
}

function NavigationLinks({ mobile = false }: { mobile?: boolean }) {
  return (
    <nav
      aria-label="Dashboard navigation"
      className={mobile ? 'flex gap-2 overflow-x-auto px-4 pb-3' : 'space-y-1'}
    >
      {navigationItems.map((item) => (
        <a
          key={item.label}
          href={`#${item.label.toLowerCase()}`}
          aria-current={item.current ? 'page' : undefined}
          className={[
            'flex shrink-0 items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
            item.current
              ? 'bg-primary text-white'
              : 'text-content-muted hover:bg-canvas hover:text-content',
          ].join(' ')}
        >
          <svg
            aria-hidden="true"
            className="size-5"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.8"
            stroke="currentColor"
          >
            <NavigationIcon name={item.icon} />
          </svg>
          {item.label}
        </a>
      ))}
    </nav>
  )
}

function Brand() {
  return (
    <a
      href="#products"
      className="flex items-center gap-3 font-bold tracking-tight text-content"
    >
      <span className="grid size-9 place-items-center rounded-lg bg-primary text-white">
        S
      </span>
      Storefront
    </a>
  )
}

export function Sidebar() {
  return (
    <>
      <aside className="hidden min-h-screen border-r border-border bg-surface p-page md:flex md:flex-col">
        <Brand />
        <div className="mt-8">
          <NavigationLinks />
        </div>
        <p className="mt-auto text-xs leading-5 text-content-muted">
          Styling Paradigms
          <br />
          Tailwind CSS exercise
        </p>
      </aside>

      <div className="border-b border-border bg-surface md:hidden">
        <div className="p-4">
          <Brand />
        </div>
        <NavigationLinks mobile />
      </div>
    </>
  )
}
