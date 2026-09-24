// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://persona-ai.local',
	integrations: [
		starlight({
			title: 'Persona AI',
			description: 'Minimalist Digital Playbook for Consistent AI Characters & Influencers',
			customCss: ['./src/styles/apple-glass.css'],
			social: [
				{
					icon: 'telegram',
					label: 'Telegram Community',
					href: 'https://t.me/+1NpdH0Kfjo44Mjc1',
				},
			],
			sidebar: [
				{
					label: 'Mulai Dari Sini',
					items: [
						{ label: 'Overview & Panduan Awal', link: '/' },
						{ label: 'Analisis & Strategi Workflow', link: '/overview/00-analisis-dan-strategi/' },
					],
				},
				{
					label: 'Bab 1: Fundamental',
					items: [
						{ label: '01. Cara Pandang AI', link: '/bab-1-fundamental/01-cara-pandang-ai/' },
						{ label: '02. Mental Creator AI', link: '/bab-1-fundamental/02-mental-creator-ai/' },
						{ label: '03. Anatomi & Prinsip Prompt', link: '/bab-1-fundamental/03-apa-itu-prompt/' },
					],
				},
				{
					label: 'Bab 2: Character Consistency',
					items: [
						{ label: '01. Membuat Character Sheet (3×3)', link: '/bab-2-character-ai/01-membuat-character-sheet/' },
						{ label: '02. Ubah Outfit Character', link: '/bab-2-character-ai/02-ubah-outfit-character/' },
						{ label: '↳ Template Prompt Ganti Outfit', link: '/bab-2-character-ai/02-sub-prompt-ganti-outfit/' },
						{ label: '03. Transfer DNA Karakter (Scene Swap)', link: '/bab-2-character-ai/03-ganti-dna-foto-lain/' },
					],
				},
				{
					label: 'Bab 3: Real Video Production',
					items: [
						{ label: '01. Tips Motion Control Video', link: '/bab-3-real-project/01-tips-motion-control/' },
						{ label: '02. Workflow Produksi Project', link: '/bab-3-real-project/02-workflow-project/' },
						{ label: '03. Talking Head Master & Editing', link: '/bab-3-real-project/03-talking-head-master-dan-editing/' },
						{ label: '↳ Template Prompt Multi-Angle', link: '/bab-3-real-project/03-sub-prompt-multi-angle/' },
						{ label: '04. Membuat Video Podcast AI', link: '/bab-3-real-project/04-membuat-podcast-ai/' },
						{ label: '↳ Template Prompt Studio Podcast', link: '/bab-3-real-project/04-sub-prompt-set-podcast/' },
					],
				},
				{
					label: 'Bab 4: Bonus Tools & Prompts',
					items: [
						{ label: 'Custom GPT (Exclusive)', link: '/bab-4-bonus-tools/01-gpt-custom/' },
						{ label: 'Gemini GEMs (Exclusive)', link: '/bab-4-bonus-tools/02-gemini-tools/' },
						{ label: 'Google Flow Tools (Exclusive)', link: '/bab-4-bonus-tools/03-flow-tools/' },
						{ label: 'Master Prompt Template Gallery', link: '/bab-4-bonus-tools/04-master-prompt-template/' },
					],
				},
				{
					label: 'Rekomendasi Platform AI',
					items: [
						{ label: 'Higgsfield AI (Camera Control)', link: '/rekomendasi-platform/01-higgsfield/' },
						{ label: 'Kling AI (Video Motion)', link: '/rekomendasi-platform/02-kling-ai/' },
						{ label: 'Leonardo AI (Image Generation)', link: '/rekomendasi-platform/03-leonardo-ai/' },
						{ label: 'Qreed AI (Lokal Terjangkau)', link: '/rekomendasi-platform/04-qreed-ai/' },
						{ label: 'Viostudio (Lokal Alternatif)', link: '/rekomendasi-platform/05-viostudio/' },
						{ label: 'Google Flow (NanoBanana & Omni)', link: '/rekomendasi-platform/06-flow-ai/' },
					],
				},
			],
		}),
	],
});
