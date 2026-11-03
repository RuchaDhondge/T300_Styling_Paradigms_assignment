# Type-Safe Component Library

Exercise 2 demonstrates typed styles, shared design tokens, reusable variants,
style composition, and static CSS generation with Vanilla Extract.

## Run locally

```bash
npm install
npm run dev
```

## Verify build-time CSS

```bash
npm run build
ls -lh dist/assets/*.css
npm run lint
```

The component library includes:

- `Button`: primary, secondary, and danger variants; small and large sizes.
- `Card`: consistent spacing, radius, background, border, and shadow.
- `Badge`: success, warning, and error variants.

Shared tokens are defined in
[`src/theme/theme.css.ts`](./src/theme/theme.css.ts). Component styles are kept
in colocated `.css.ts` files and compiled into static CSS by Vite.
