const theme = require('prism-react-renderer/themes/github');
const darkTheme = require('prism-react-renderer/themes/dracula');

module.exports = {
	title: 'Testomato',
	tagline: 'Welcome to Testomato Help & Docs',
	favicon: 'img/favicon.ico',
	url: 'https://help.testomato.com/',
	baseUrl: '/',
	organizationName: 'testomato',
	projectName: 'help.testomato.com',
	onBrokenLinks: 'warn',
	onBrokenMarkdownLinks: 'warn',
	trailingSlash: false,
	presets: [
		[
			'@docusaurus/preset-classic',
			{
				docs: {
					// docs only https://v2.docusaurus.io/docs/docs/#docs-only-mode
					routeBasePath: '/',
					sidebarPath: require.resolve('./sidebars.js'),
					editUrl: 'https://github.com/testomato/help.testomato.com/edit/master/',
					// API Docs config
					docLayoutComponent: '@theme/DocPage',
					docItemComponent: '@theme/ApiItem',
					showLastUpdateTime: true,
				},
				sitemap: {
					changefreq: 'weekly',
					priority: 0.5,
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
				gtag: {
					trackingID: 'GTM-MPZ59VM',
				},
			},
		],
	],
	themeConfig: {
		prism: {theme, darkTheme},
		languageTabs: [
			{
				highlight: 'bash',
				language: 'curl',
				logoClass: 'bash',
			},
			{
				highlight: 'javascript',
				language: 'nodejs',
				logoClass: 'nodejs',
			},
			{
				highlight: 'php',
				language: 'php',
				logoClass: 'php',
			},
			{
				highlight: 'python',
				language: 'python',
				logoClass: 'python',
			},
		],
		colorMode: {
			defaultMode: 'light',
			disableSwitch: false,
		},
		navbar: {
			title: 'Help & Docs',
			logo: {
				alt: 'Testomato Logo',
				src: 'img/logo.svg',
			},
			items: [
				{
					to: '/introduction',
					activeBasePath: 'docs',
					label: 'Testomato',
					position: 'left',
				},
				{
					to: '/api/testomato-api',
					activeBasePath: 'api',
					label: 'API',
					position: 'left',
				},
				{
					href: 'https://github.com/testomato/help.testomato.com',
					position: 'right',
					className: 'header-github-link',
					'aria-label': 'GitHub repository',
				},
			],
		},

		footer: {
			style: 'dark',
			links: [
				{
					title: 'Testomato',
					items: [
						{
							label: 'Contact us',
							href: 'https://testomato.com/contact',
						},
						{
							label: 'Testomato Team',
							href: 'https://www.testomato.com/team',
						},
						{
							label: 'About Testomato',
							href: 'https://www.testomato.com/about',
						},
					],
				},
				{
					title: 'Social networks',
					items: [
						{
							label: 'Blog',
							href: 'https://blog.testomato.com',
						},
						{
							label: 'GitHub',
							href: 'https://github.com/testomato',
						},
						{
							label: 'Facebook',
							href: 'https://www.facebook.com/testomato',
						},
						{
							label: 'Twitter',
							href: 'https://twitter.com/testomatocom',
						},
					],
				},
			],
			copyright: `Copyright © ${new Date().getFullYear()} Testomato s.r.o.`,
		},
	},
	plugins: [
		'docusaurus-lunr-search',
		[
			// @see https://github.com/PaloAltoNetworks/docusaurus-openapi-docs
			'docusaurus-plugin-openapi-docs',
			{
				id: 'openapi',
				docsPluginId: 'classic',
				config: {
					'testomato': {
						specPath: 'api/testomato.yaml',
						outputDir: 'docs/api',
						//baseUrl: '/api',
						sidebarOptions: {
							groupPathsBy: 'tag',
							categoryLinkSource: 'tag',
						},
					},
				},
			},
		],
	],
	themes: ['docusaurus-theme-openapi-docs'],
};
