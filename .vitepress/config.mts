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
				text: "🛠️ Personal Projects",
				link: "/projects/",
				items: [
					{
						text: "<b style='color: orange;'>Svelte</b> / <b style='color: orange;'>SvelteKit</b>",
						items: [
							{
								text: "🃏 Card Minigame",
								link: "/projects/card-game/",
								items: [
									{
										text: "👷‍♂️ <b style='color: sandybrown;'>I</b> - Card Component",
										link: "/projects/card-game/phase-one/",
										items: [
											{
												text: "📚 Type Definitions",
												link: "/projects/card-game/phase-one/types",
											},
										],
									},
									{
										text: "⚙️ <b style='color: slateblue;'>II</b> - Card Store",
										link: "/projects/card-game/phase-two/",
									},
									{
										text: "⌛ <b style='color: deepskyblue;'>III</b> - Game Timer",
									},
									{
										text: "🎰 <b style='color: aqua;'>IV</b> - Matching Game",
										link: "/projects/card-game/phase-four/",
									},
								],
							},
						],
					},
				],
			},
			{
				text: "📝 Personal Research Notes",
				link: "/notes/",
				items: [
					{
						text: "<b style='color: orange;'>Svelte</b> Research & Notes",
						link: "/notes/svelte/",

						items: [
							{
								text: "<b style='color: orange;'>Svelte</b> I - Basics",
								link: "/notes/svelte/basics",
							},
							{
								text: "<b style='color: orange;'>Svelte</b> II - Advanced",
								link: "/notes/svelte/advanced",
							},
							{
								text: "<b style='color: orange;'>Svelte</b> III - Motion",
								link: "/notes/svelte/motion",
							},
						],
					},
					{
						text: "<b style='color: teal;'>Docker</b> Notes",
						link: "/notes/docker/",
					},
				],
			},
			{
				text: "🔎 Resources",
				items: [
					{
						text: "Custom Components",
						items: [
							{
								text: "<b style='color: orange;'>Svelte</b> Components",
								items: [
									{
										text: "✅ Confirmation",
										link: "/notes/components/svelte/confirmation",
									},
								],
							},
						],
					},
					{
						text: "<b style='color: purple;'>VSCode</b> Extensions & Guides",
						items: [
							{
								text: "✂️ NextJS Snippets",
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
