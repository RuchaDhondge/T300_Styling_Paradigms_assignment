# Styling Paradigms Assignment

This repository contains two independent React and TypeScript applications that
demonstrate utility-first and type-safe, build-time styling.

| Exercise | Styling approach | Application |
| --- | --- | --- |
| [`tailwind-dashboard`](./exercises/tailwind-dashboard) | Tailwind CSS v4 | Responsive product dashboard |
| [`vanilla-extract-library`](./exercises/vanilla-extract-library) | Vanilla Extract | Type-safe Button, Card, and Badge library |

Each exercise has its own dependencies, lockfile, and development commands.

## Run an exercise

```bash
cd exercises/tailwind-dashboard
npm install
npm run dev
```

```bash
cd exercises/vanilla-extract-library
npm install
npm run dev
```

Use `npm run build` and `npm run lint` inside each exercise to verify it
independently.

## Assignment verification

### Tailwind dashboard

- Product cards are rendered through reusable React components.
- The grid uses one column by default, two at `md`, and three at `lg`.
- The navigation changes from a mobile horizontal layout to a desktop sidebar.
- Hover, focus-visible, and disabled states use Tailwind variants.
- Theme values are defined with Tailwind v4's `@theme` directive.
- Responsive behavior is handled by utilities rather than JavaScript.

### Vanilla Extract library

- Button supports primary, secondary, and danger variants.
- Button supports small and large sizes plus hover, focus, active, and disabled states.
- Badge supports success, warning, and error variants.
- Card provides shared spacing, radius, background, border, and shadow styling.
- Components consume typed theme values shared through `createTheme`.
- `.css.ts` files are compiled into static CSS during the Vite build.

## Pull request checklist

1. Push the dedicated feature branch.
2. Open one pull request containing both exercises.
3. Attach a responsive Tailwind dashboard recording.
4. Attach a Vanilla Extract component showcase recording.
5. Include the branch name and pull request link in the submission.