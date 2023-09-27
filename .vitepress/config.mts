import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "Sorber™ Consulting",
	description: "A VitePress Site",

	base: "/jsorb84-consulting/",
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		logo: "https://avatars.githubusercontent.com/u/105475254?v=4",

		nav: [
			{ text: "Home", link: "/" },
			{ text: "Contact", link: "/contact" },
		],

		sidebar: [
			{
				text: "Personal Research Notes",
				link: "/svelte/index",
				items: [
					{ text: "Svelte I", link: "/svelte/basicsvelte" },
					{ text: "Svelte II - Advanced", link: "/svelte/advancedsvelte" },
				],
			},
		],

		socialLinks: [
			{ icon: "github", link: "https://github.com/jsorb84" },
			{
				icon: "discord",
				link: "https://discordapp.com/users/theofficialurban",
			},
		],
	},
});
