import type { Config } from '@docusaurus/types';
import type * as Preset from "@docusaurus/preset-classic";
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";

import { themes } from "prism-react-renderer";

const lightTheme = themes.github;
const darkTheme = themes.dracula;

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
			'classic',
			{
				docs: {
					// docs only https://v2.docusaurus.io/docs/docs/#docs-only-mode
					routeBasePath: '/',
					sidebarPath: './sidebars.ts',
					editUrl: 'https://github.com/testomato/help.testomato.com/edit/master/',
					docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi
					showLastUpdateTime: true,
				},
				sitemap: {
					lastmod: 'date',
					changefreq: 'weekly',
					priority: 0.5,
				},
				theme: {
					customCss: './src/css/custom.css',
				},
				gtag: {
					trackingID: 'GTM-MPZ59VM',
				},
			} satisfies Preset.Options,
		],
	],
	themeConfig: {
		prism: {
			lightTheme, darkTheme
		},

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
							label: 'GitHub',
							href: 'https://github.com/testomato',
						},
						{
							label: 'Facebook',
							href: 'https://www.facebook.com/testomato',
						},
						{
							label: 'Twitter',
							href: 'https://x.com/testomatocom',
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
					} satisfies OpenApiPlugin.Options,
				},
			},
		],
	],
	themes: ['docusaurus-theme-openapi-docs'],
} satisfies Config;
