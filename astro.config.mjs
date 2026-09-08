import starlight from '@astrojs/starlight';
import {defineConfig} from 'astro/config';
import {satteri} from '@astrojs/markdown-satteri';
import starlightOpenAPI, {openAPISidebarGroups} from 'starlight-openapi';

import links from './src/markdown/links';
import youtube from './src/markdown/youtube';

// Every URL Docusaurus used to serve that starlight-openapi or Starlight now
// places elsewhere. starlight-openapi keeps the operationId-derived slug, so the
// API pages only gain the /operations/ segment.
const apiOperations = [
  'add-user-to-project',
  'get-api-token',
  'get-project',
  'get-test',
  'new-project',
  'project-delete',
  'project-groups',
  'project-notifications',
  'project-permissions',
  'project-results',
  'project-roles',
  'project-status',
  'project-update',
  'project-users',
  'response-times',
  'simplified-project-status',
  'start-project-group',
  'starting-project',
  'update-notifications',
  'uptime',
  'verify-api-token',
];

// GitHub Pages 301s /page to /page/ whenever the output is a directory index,
// so 'never' would leave every canonical tag disagreeing with the URL the host
// actually serves. Astro pairs directory output with 'always' for that reason,
// and it matches what testomato.com already does. The old slash-less URLs pick
// up one 301 hop, which the host would add regardless.
export default defineConfig({
  site: 'https://help.testomato.com',
  trailingSlash: 'always',
  // Astro 7's default Markdown processor. `remarkPlugins`/`rehypePlugins` would
  // silently swap it for the legacy unified pipeline, so the two plugins below
  // are written against Sätteri's own visitor contract instead.
  markdown: {
    processor: satteri({
      // Astro turns ' into ’ and " into “ ” by default; Docusaurus did not,
      // and the docs were written with straight quotes.
      features: {smartPunctuation: false},
      mdastPlugins: [youtube()],
      hastPlugins: [links()],
    }),
  },
  redirects: {
    // Destinations are emitted verbatim, so they carry the trailing slash the
    // host would otherwise add with a second 301.
    // The OpenAPI info page is now the schema Overview.
    '/api/testomato-api': '/api/',
    // preset-classic shipped an empty blog listing nobody asked for; the real
    // blog lives on the marketing site.
    '/blog': 'https://testomato.com/blog/',
    ...Object.fromEntries(
      apiOperations.map((op) => [`/api/${op}`, `/api/operations/${op}/`]),
    ),
  },
  integrations: [
    starlight({
      title: 'Help & Docs',
      description: 'Welcome to Testomato Help & Docs',
      components: {Head: './src/components/Head.astro'},
      customCss: ['./src/styles/testomato.css'],
      favicon: '/img/favicon.ico',
      logo: {src: './public/img/logo.svg', alt: 'Testomato'},
      editLink: {
        baseUrl: 'https://github.com/testomato/help.testomato.com/edit/master/',
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/testomato/help.testomato.com',
        },
      ],
      head: [
        // Ported verbatim from the Docusaurus gtag preset option.
        {
          tag: 'script',
          attrs: {
            async: true,
            src: 'https://www.googletagmanager.com/gtag/js?id=GTM-MPZ59VM',
          },
        },
        {
          tag: 'script',
          content:
            "window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','GTM-MPZ59VM');",
        },
      ],
      plugins: [
        starlightOpenAPI([
          {
            base: 'api',
            schema: './api/testomato.yaml',
            sidebar: {label: 'API Reference'},
          },
        ]),
      ],
      sidebar: [
        {slug: 'introduction'},
        {slug: 'dashboard'},
        {slug: 'account'},
        {
          label: 'Billing & Payment',
          items: [{autogenerate: {directory: 'payment'}}],
        },
        {
          label: 'Monitoring',
          items: [{autogenerate: {directory: 'monitoring'}}],
        },
        {label: 'TestomatoBot', items: [{autogenerate: {directory: 'bot'}}]},
        {label: 'Checks', items: [{autogenerate: {directory: 'checks'}}]},
        {slug: 'wordpress'},
        {slug: 'glossary'},
        ...openAPISidebarGroups,
        {slug: 'support'},
      ],
    }),
  ],
});
