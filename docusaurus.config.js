module.exports = {
	title: 'Testomato',
	tagline: 'Welcome to Testomato Help & Docs',
	favicon: 'img/favicon.ico',
	url: 'https://help.testomato.com/',
	baseUrl: '/',
	organizationName: 'testomato', // Usually your GitHub org/user name.
	projectName: 'help.testomato.com', // Usually your repo name.
	themeConfig: {
		prism: {
			theme: require('prism-react-renderer/themes/github'),
			darkTheme: require('prism-react-renderer/themes/dracula'),
		},
		colorMode: {
			defaultMode: 'light',
			disableSwitch: true,
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
					to: '/api/introduction',
					activeBasePath: 'docs/api',
					label: 'REST API',
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
							label: "Facebook",
							href: "https://www.facebook.com/testomato"
						},
						{
							label: 'Twitter',
							href: 'https://twitter.com/testomatocom',
						},
					],
				},
			],
		},
	},
	presets: [
		[
			'@docusaurus/preset-classic',
			{
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
				docs: {
					// docs only https://v2.docusaurus.io/docs/docs/#docs-only-mode
					routeBasePath: '/',
					sidebarPath: require.resolve('./sidebars.js'),
					editUrl: 'https://github.com/testomato/help.testomato.com/edit/master/',
					showLastUpdateTime: true,
				},
				sitemap: {
					cacheTime: 600 * 1000, // 600 sec - cache purge period
					changefreq: 'weekly',
					priority: 0.5,
				},

			},
		],
	],
};
