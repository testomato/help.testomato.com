const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;


const config = {
  title: 'Testomato',
  tagline: 'Welcome to Testomato Help & Docs',
  favicon: 'img/favicon.ico',
  url: 'https://help.testomato.com/',
  baseUrl: '/',
  organizationName: 'testomato',
  projectName: 'help.testomato.com',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  trailingSlash: false,
  plugins: [
    "@docusaurus/plugin-ideal-image",
    'docusaurus-lunr-search',
    [
      // @see https://github.com/PaloAltoNetworks/docusaurus-openapi-docs
      'docusaurus-plugin-openapi-docs',
      {
        id: 'api',
        docsPluginId: 'classic',
        config: {
          testomato: {
            specPath: 'api/testomato.yaml',
            outputDir: 'docs/api',
            sidebarOptions: {
              groupPathsBy: 'tag',
              categoryLinkSource: 'tag',
            },
          },
        },
      },
    ],
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/testomato/help.testomato.com/edit/master/',
          docRootComponent: "@theme/DocRoot",
          docItemComponent: '@theme/DocItem',
          showLastUpdateTime: true,
        },
        // docs only https://docusaurus.io/docs/docs-introduction
        blog: false,
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'GTM-MPZ59VM',
          anonymizeIP: true,
        },
      },
    ],
  ],
  themes: ['docusaurus-theme-openapi-docs'],
  themeConfig: {

    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
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

    // TODO - add language tabs
    // languageTabs: [
    //   {
    //     highlight: 'bash',
    //     language: 'curl',
    //     logoClass: 'bash',
    //   },
    //   {
    //     highlight: 'javascript',
    //     language: 'nodejs',
    //     logoClass: 'nodejs',
    //   },
    //   {
    //     highlight: 'php',
    //     language: 'php',
    //     logoClass: 'php',
    //   },
    //   {
    //     highlight: 'python',
    //     language: 'python',
    //     logoClass: 'python',
    //   },
    // ],
  },


};

module.exports = config;