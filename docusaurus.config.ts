// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '6b6t Wiki',
  tagline: '6builders 6tools wiki',
  favicon: 'img/icons/favicon.ico',

  url: 'https://6b6t-wiki.vercel.app/',
  baseUrl: '/',

  organizationName: '6b6t',
  projectName: '6b6t-wiki',

  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  scripts: [
    {
      src: "https://cloud.umami.is/script.js",
      defer: true,
      "data-website-id": "eee3aa88-775d-4f0e-8b34-e9b43de8225e",
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
  sidebarPath: './sidebars.js',
  routeBasePath: '/',
  editUrl: "https://github.com/Advik555wastaken/6b6twiki/edit/main/",
  showLastUpdateAuthor: true,
  showLastUpdateTime: true,
  editCurrentVersion: true,
},

        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 80,
        max: 1030,
        min: 640,
        steps: 2,
        disableInDev: false,
      },
    ],
  ],

  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  themeConfig: {
    algolia: {
      appId: "GH0QQ503MS",
      apiKey: "baad2528139732bf5c214ebece5028c1",
      indexName: "6b6t-wiki",
      contextualSearch: true,
      searchPagePath: "search",
      insights: true,
    },

    metadata: [
      { name: "google-site-verification", content: "zEcfz-ZXbEPKQObsyRa79zX2PJFDbBtPZetnpEc9NaU" },
    ],

    image: 'img/icons/logo.jpg',

    navbar: {
      title: 'The 6b6t wiki',
      logo: {
        alt: '6b6t wiki logo',
        src: 'img/icons/logo.jpg',
      },
      items: [
        {
          href: 'https://github.com/Advik555wastaken/6b6twiki/edit/main/docs/',
          html: '<span class="navbar-edit-link">✏️ Edit this page</span>',
          position: 'right',
        },
        {
          href: 'https://github.com/Advik555wastaken/6b6twiki',
          position: 'right',
          className: 'navbar-icon',
          html: `<img src="/img/icons/github.svg" alt="GitHub" />`,
        },
        {
          href: 'https://discord.gg/gmaE2Bc7YU',
          position: 'right',
          className: 'navbar-icon',
          html: `<img src="/img/icons/discord.svg" alt="Discord" />`,
        },
        {
          href: 'https://vercel.com/advik555wastaken-projects/6b6t-wiki/deployments',
          position: 'right',
          className: 'navbar-icon',
          html: `<img src="/img/icons/vercel.svg" alt="Vercel" />`,
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Useful links',
          items: [
            {
              label: 'Official 6b6t.org Website',
              to: 'https://www.6b6t.org/',
            },
            {
              label: 'Credits',
              to: 'https://github.com/Advik555wastaken/6b6twiki/graphs/contributors',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/Em4AAcjXvD',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 6b6t wiki and contributors`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
