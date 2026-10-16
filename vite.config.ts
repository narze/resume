import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import tailwindcss from '@tailwindcss/vite';
import { searchForWorkspaceRoot } from 'vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit({
			// Consult https://svelte.dev/docs/kit/integrations
			// for more information about preprocessors
			preprocess: [vitePreprocess()],

			// The site is fully client-side, so it's prerendered to static files.
			// See https://svelte.dev/docs/kit/adapters for more information about adapters.
			adapter: adapter({ fallback: '404.html' }),

			prerender: {
				// Profile data is fetched client-side, so links rendered from empty
				// placeholder props (e.g. `https://`) are invalid until hydration.
				handleInvalidUrl: 'warn'
			}
		})
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	server: {
		fs: {
			allow: [searchForWorkspaceRoot(process.cwd())]
		}
	}
});
