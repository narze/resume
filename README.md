# Résumé

A modern, interactive resume website built with TypeScript, SvelteKit, and Vite.

Interactive & printable resume with tailored skills fitted in single letter page.

## Features

- Plain and clean, no rainbow colors, no pictures, no anything.
- Allow you to add your profile details to your heart's content, with `Edit Mode` you can hide some of the sections to make your resume fit in single A4/Letter page.

## Tech Stack

- **TypeScript** - Type-safe JavaScript
- **SvelteKit** - Full-stack web framework built on Svelte
- **Vite** - Fast build tool and dev server
- **HTML/CSS** - Core web technologies

## Prerequisites

Before running this project, make sure you have the following installed:

- [pnpm](https://pnpm.io/installation)

## How to use

1. Click `Use this template` on Github, or fork this project
2. Install dependencies:

   ```bash
   pnpm install
   ```

  > [!warning]
  > If you found the warning, "Ignore build scripts: ...", let's approve by:
  >
  > ```bash
  > pnpm approve-builds
  > ```

3. Edit your data in [`static/data/profile.json`](./static/data/profile.json)
4. Run with:
   ```bash
   pnpm dev
   ```

5. Deploy with `Vercel` or `Netlify` to show resume online

## Building & Preview

### Building

Create a production build:

```bash
pnpm build
```

The built files will be in the `.svelte-kit/output` directory.

### Preview

Preview the production build locally:

```bash
pnpm preview
```

The site will be available at `http://localhost:4173` (or the port shown in your terminal).

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.


## Development

Start the development server:

```bash
pnpm dev
```

The site will be available at `http://localhost:5173` (or the port shown in your terminal).

## License

This project is licensed under the MIT License.
