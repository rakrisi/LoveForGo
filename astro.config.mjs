import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'http://rakrisi.com/loveforgo/',
	base: '/loveforgo/loveforgo/dist',
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
