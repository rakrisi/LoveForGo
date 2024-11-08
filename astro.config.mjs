import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'LoveForGo',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Getting Started',
					autogenerate: { directory: 'getting_started' },
				},
				{
					label: 'Data Structure',
					autogenerate: { directory: 'data_structure' },
				},
			],
		}),
	],
});
