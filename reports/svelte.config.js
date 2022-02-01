import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		paths: {
			assets: 'http://localhost:3001'
			//base: '/dashboard'
		},

		vite: {
			server: {
				fs: {
					strict: false,
					allow: ['..']
				}
			}
		}
	}
};

export default config;
