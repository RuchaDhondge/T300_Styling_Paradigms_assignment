# Responsive Product Dashboard

Exercise 1 demonstrates Tailwind CSS's utility-first composition, responsive
variants, state variants, and theme variables in a React product dashboard.

## Run locally

```bash
npm install
npm run dev
```

## Verify

```bash
npm run build
npm run lint
```

Resize the browser to verify one column below `768px`, two columns from `768px`,
and three columns from `1024px`. Test button hover, keyboard focus, and the
disabled out-of-stock action.

Theme values are defined in [`src/index.css`](./src/index.css). Product data and
reusable UI components are separated under `src/data`, `src/types`, and
`src/components`.
