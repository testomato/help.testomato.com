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
	organizationName: 'testomato', // Usually your GitHub org/user name.
	projectName: 'help-and-docs', // Usually your repo name.
	themeConfig: {
		disableDarkMode: true,
		prism: {
			theme: require('prism-react-renderer/themes/github'),
			darkTheme: require('prism-react-renderer/themes/dracula'),
		},
		navbar: {
			title: 'Help Testomato',
			logo: {
				alt: 'Testomato Logo',
				src: 'img/logo.svg',
			},
			links: [
				{
					to: 'docs/index',
					activeBasePath: 'docs',
					label: 'Docs',
					position: 'left',
				},
				{
					to: 'docs/api/introduction',
					activeBasePath: 'docs/api',
					label: 'API',
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
					title: 'Need help?',
					items: [
						{
							label: 'Contact us',
							href: 'https://testomato.com/contact',
						},
						{
							label: 'support@testomato.com',
							href: 'support@testomato.com',
						},
					],
				},
				{
					title: 'Social media',
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
