// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}

	interface Window {
		kofiWidgetOverlay: {
			draw: (name: string, options: Record<string, string>, id: string) => void;
		};
	}
}

export {};
