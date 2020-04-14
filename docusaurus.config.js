/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

module.exports = {
	title: 'Testomato Help & Docs',
	tagline: 'The tagline of my site',
	url: 'https://help.testomato.com',
	baseUrl: '/',
	favicon: 'img/favicon.ico',
	organizationName: 'facebook', // Usually your GitHub org/user name.
	projectName: 'docusaurus', // Usually your repo name.
	themeConfig: {
		disableDarkMode: true,

		/*
		announcementBar: {
			id: 'support_us', // Any value that will identify this message
			content: 'We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
			backgroundColor: '#fafbfc', // Defaults to `#fff`
			textColor: '#091E42', // Defaults to `#000`
		},*/
		navbar: {
			title: 'Help Testomato',
			logo: {
				alt: 'Testomato logo',
				src: 'img/logo.svg',
			},
			links: [
				{
					to: 'docs/doc1',
					activeBasePath: 'docs',
					label: 'Docs',
					position: 'left',
				},
				{to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
			],
		},
		footer: {
			style: 'dark',
			links: [
				{
					title: 'Docs',
					items: [
						{
							label: 'Style Guide',
							to: 'docs/doc1',
						},
						{
							label: 'Second Doc',
							to: 'docs/doc2',
						},
					],
				},
				{
					title: 'Community',
					items: [
						{
							label: 'Stack Overflow',
							href: 'https://stackoverflow.com/questions/tagged/docusaurus',
						},
						{
							label: 'Discord',
							href: 'https://discordapp.com/invite/docusaurus',
						},
					],
				},
				{
					title: 'Social',
					items: [
						{
							label: 'Blog',
							to: 'blog',
						},
						{
							label: 'GitHub',
							href: 'https://github.com/facebook/docusaurus',
						},
						{
							label: 'Twitter',
							href: 'https://twitter.com/docusaurus',
						},
					],
				},
			],
			logo: {
				alt: 'Testomato logo',
				src: 'img/testomato-white.svg',
				href: 'https://www.testomato.com/',
			},
			copyright: `Copyright © ${new Date().getFullYear()} Testomato s.r.o.`,
		},
	},
	presets: [
		[
			'@docusaurus/preset-classic',
			{
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					editUrl:
						'https://github.com/facebook/docusaurus/edit/master/website/',
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			},
		],
	],
};
