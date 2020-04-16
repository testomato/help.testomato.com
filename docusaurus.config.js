module.exports = {
	title: 'Testomato',
	tagline: 'Welcome to Testomato Help & Docs',
	favicon: 'img/favicon.ico',
	url: 'https://help.testomato.com/',
	cname : 'help.testomato.com',
	baseUrl: '/',
	organizationName: 'testomato', // Usually your GitHub org/user name.
	projectName: 'help.testomato.com', // Usually your repo name.
	themeConfig: {
		disableDarkMode: true,
		prism: {
			theme: require('prism-react-renderer/themes/github'),
			darkTheme: require('prism-react-renderer/themes/dracula'),
		},
		navbar: {
			title: 'Help & Docs',
			logo: {
				alt: 'Testomato Logo',
				src: 'img/logo.svg',
			},
			links: [
				{
					to: 'docs/index',
					activeBasePath: 'docs',
					label: 'Testomato',
					position: 'left',
				},
				{
					to: 'docs/api/introduction',
					activeBasePath: 'docs/api',
					label: 'REST API',
					position: 'left',
				},
				{
					href: 'https://github.com/testomato/help-and-docs',
					label: 'GitHub',
					position: 'right',
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
					sidebarPath: require.resolve('./sidebars.js'),
					editUrl: 'https://github.com/testomato/help-and-docs/edit/master/',
					docsSideNavCollapsible: true,
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
