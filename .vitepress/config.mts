import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "Sorber™ Consulting",
	description: "Sorber Consulting and research site.",
	head: [["link", { rel: "icon", href: "/favicon.ico" }]],
	appearance: "force-dark",
	lastUpdated: true,

	srcDir: "src",
	sitemap: {
		hostname: "https://sorber.xyz",
	},
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		logo: "/logo.png",
		nav: [
			{ text: "Home", link: "/" },
			{ text: "Resources", link: "/notes/" },
			{ text: "Contact", link: "/contact" },
		],

		sidebar: [
			{
				text: "Personal Research Notes",
				link: "/notes/",
				items: [
					{
						text: "Svelte Research & Notes",
						link: "/notes/svelte/",

						items: [
							{ text: "Svelte I - Basics", link: "/notes/svelte/basics" },
							{ text: "Svelte II - Advanced", link: "/notes/svelte/advanced" },
						],
					},
					{
						text: "Docker Notes",
						link: "/notes/docker/",
					},
				],
			},
			{
				text: "Resources",
				items: [
					{
						text: "VSCode Extensions & Guides",
						items: [
							{
								text: "NextJS Snippets",
								link: "/resources/vscode/snippets/next",
							},
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
