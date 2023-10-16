import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "Sorber™ Consulting",
	description: "Sorber Consulting and research site.",
	head: [
		["link", { rel: "icon", href: "/favicon.ico" }],
		[
			"script",
			{
				src: "https://kit.fontawesome.com/3d45354905.js",
				crossorigin: "anonymous",
			},
		],
		[
			"script",
			{
				async: "",
				src: "https://www.googletagmanager.com/gtag/js?id=G-F3M4DFJLK1",
			},
		],
		[
			"script",
			{},
			`
	window.dataLayer = window.dataLayer || [];
	function gtag(){dataLayer.push(arguments);}
	gtag('js', new Date());
  
	gtag('config', 'G-F3M4DFJLK1');
	`,
		],
	],
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
				text: "<span style='font-size: 16px;'>🛠️ Personal Projects</span>",
				link: "/projects/",
				collapsed: true,
				items: [
					{
						text: `<span style='font-size: 14px;'><i class="fa-brands fa-js fa-lg" style="color: #ffae00;"></i>  JavaScript Projects</span>`,
						items: [
							{
								text: "🃏 Card Minigame",
								collapsed: true,
								link: "/projects/card-game/",
								items: [
									{
										text: "👷‍♂️ <b style='color: sandybrown;'>I</b> - Card Component",
										link: "/projects/card-game/phase-one/",
										collapsed: true,
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
				text: "<span style='font-size: 16px'>📝 Research Notes</span>",
				link: "/notes/",

				items: [
					{
						text: `JS Planned Research`,
						link: "/notes/javascript/design-patterns/",
						collapsed: true,
						items: [
							{
								text: "JavaScript Garden",
								collapsed: true,
								items: [
									{
										text: "Intro",
										link: "/notes/javascript/js-garden/intro/",
										collapsed: true,
									},
									{
										text: "Objects",
										collapsed: true,
										items: [
											{
												text: "General",
												link: "/notes/javascript/js-garden/object/general",
											},
											{
												text: "Prototype",
												link: "/notes/javascript/js-garden/object/prototype",
											},
											{
												text: "Has Own Property",
												link: "/notes/javascript/js-garden/object/hasownproperty",
											},
											{
												text: "For-In-Loop",
												link: "/notes/javascript/js-garden/object/forinloop",
											},
										],
									},
									{
										text: "Functions",
										collapsed: true,
										items: [
											{
												text: "General",
												link: "/notes/javascript/js-garden/function/general",
											},
											{
												text: "This",
												link: "/notes/javascript/js-garden/function/this",
											},
											{
												text: "Closures",
												link: "/notes/javascript/js-garden/function/closures",
											},
											{
												text: "Arguments",
												link: "/notes/javascript/js-garden/function/arguments",
											},
											{
												text: "Constructors",
												link: "/notes/javascript/js-garden/function/constructors",
											},
											{
												text: "Scopes",
												link: "/notes/javascript/js-garden/function/scopes",
											},
										],
									},
								],
							},
							{
								text: "How the Web Works",
								link: "https://web.dev/articles/howbrowserswork",
							},
							{
								text: "<b style='color: violet;'>Rx</b>JS Docs",
								link: "https://rxjs.dev/",
							},
						],
					},
					{
						text: "<b style='color: orange;'>Svelte</b> Research & Notes",
						link: "/notes/svelte/",
						collapsed: true,
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
						text: `<i class="fa-brands fa-docker" style="color: #005eff;"> Docker Notes</i>`,
						link: "/notes/docker/",
					},
				],
			},
			{
				text: "<span style='font-size: 20px'>🔎 Resources</span>",
				collapsed: true,
				items: [
					{
						text: "Custom Components",
						collapsed: true,
						items: [
							{
								text: "<b style='color: orange;'>Svelte</b> Components",
								collapsed: true,
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
						collapsed: true,
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
