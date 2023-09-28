import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "Sorber™ Consulting",
	description: "Sorber Consulting and research site.",
	head: [["link", { rel: "icon", href: "/favicon.ico" }]],
	appearance: "force-dark",
	lastUpdated: true,

	//base: "/jsorb84-consulting/",
	themeConfig: {
		i18nRouting: true,
		// https://vitepress.dev/reference/default-theme-config
		logo: "https://avatars.githubusercontent.com/u/105475254?v=4",

		nav: [
			{ text: "Home", link: "/" },
			{ text: "Notes", link: "/notes" },
			{ text: "Contact", link: "/contact" },
		],

		sidebar: [
			{
				text: "Personal Research Notes",
				link: "/notes",
				items: [
					{
						text: "Svelte Research & Notes",
						link: "/svelte/index",
						items: [
							{ text: "Svelte I - Basics", link: "/svelte/basicsvelte" },
							{ text: "Svelte II - Advanced", link: "/svelte/advancedsvelte" },
						],
					},
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
