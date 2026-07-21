# Agent Instructions

## Commands

- Install the locked dependencies with `npm ci`.
- Start development with `npm run dev` and preview the production build with `npm run preview`.
- Run `npm run build` for the main validation; it runs `astro check` before `astro build`.
- Use `npm run check:astro` for a focused Astro/type check and `npm run check:design` after UI changes.
- Format with `npm run format`; it runs Prettier with `prettier-plugin-astro` across the repository.
- There is no test script or CI workflow; do not assume a test suite exists beyond the Astro build/check commands.

## App Structure

- This is a single Astro static site. `src/pages/index.astro` is the home page, and `src/pages/viaggio/[slug].astro` statically generates destination pages.
- `src/data/destinations.ts` is the source for destination cards, choice buttons, and destination-page content. Keep its `Destination.slug` union and `destinations` array in sync when changing cities.
- Shared page metadata, Astro `ClientRouter`, global styles, and the client script are wired in `src/layouts/BaseLayout.astro`; reusable presentation belongs in `src/components/`.
- Client behavior is in `src/scripts/experience.ts`. Astro navigation fires `astro:page-load`, so new initialization must be safe on repeated page loads rather than relying only on a full reload.
- Use the aliases defined in `tsconfig.json` (`@components`, `@data`, `@layouts`, `@scripts`, `@styles`, `@utils`) instead of deep relative imports.

## Deployment And Content

- `astro.config.mjs` sets the GitHub Pages base path to `/si-parte-ma-dove` only when `GITHUB_PAGES=true`; use `withBase()` from `src/utils/paths.ts` for internal links.
- Images are remote Unsplash URLs built in `src/data/destinations.ts`; the site does not currently use local image assets under `public/`.
- Preserve the Italian, personal voice and the mobile-first visual constraints in `PRODUCT.md` and `DESIGN.md` when changing visible copy or UI.
- `dist/` and `.astro/` are generated build output and are gitignored; edit `src/`, `public/`, and config/data sources instead of generated files.
- `.impeccable/` contains a bundled upstream skill repository; its nested `AGENTS.md` applies to that subtree, not to this Astro app.
