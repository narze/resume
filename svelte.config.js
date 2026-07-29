import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [vitePreprocess({})],

	kit: {
		// The site is fully client-side, so it's prerendered to static files.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({ fallback: '404.html' })
	}
};

export default config;
