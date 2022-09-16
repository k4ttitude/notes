import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import svg from '@poppanator/sveltekit-svg';

const config: UserConfig = {
	plugins: [
		sveltekit(),
		// @ts-ignore
		svg({
			includePaths: ['./src/lib/assets/icons'],
			svgoOptions: {
				multipass: true,
				plugins: ['preset-default']
			}
		})
	]
};

export default config;
