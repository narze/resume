import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [vitePreprocess()],

	kit: {
		// The site is fully client-side, so it's prerendered to static files.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter({ fallback: '404.html' }),

		prerender: {
			// Profile data is fetched client-side, so links rendered from empty
			// placeholder props (e.g. `https://`) are invalid until hydration.
			handleInvalidUrl: 'warn'
		}
	}
};

export default config;
