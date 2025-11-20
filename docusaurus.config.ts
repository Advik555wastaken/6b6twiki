// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '6b6t Wiki',
  tagline: '6builders 6tools wiki',
  favicon: 'img/icons/favicon.ico',

  // Set the production url of your site here
  url: 'https://6b6t-wiki.vercel.app/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: '6b6t', // Usually your GitHub org/user name.
  projectName: '6b6t-wiki', // Usually your repo name.

  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  scripts: [
    {
      src: "https://cloud.umami.is/script.js",
      defer: true,
      "data-website-id": "eee3aa88-775d-4f0e-8b34-e9b43de8225e"
    }
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/', // Serve the docs at the site's root
          editUrl: ({ locale, docPath }) => {
            return `https://github.com/Advik555wastaken/6b6twiki/edit/main/docs/${docPath}`;
          },
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    // https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-ideal-image
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
      searchPagePath: "search", // Optional: path for search page that enabled by default (`false` to disable it)
      insights: true, // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
    },

    metadata: [
      { name: "google-site-verification", content: "zEcfz-ZXbEPKQObsyRa79zX2PJFDbBtPZetnpEc9NaU" }
    ],

    // Replace with your project's social card
    image: 'img/icons/logo.jpg',
    navbar: {
  title: 'The 6b6t wiki',
  logo: {
    alt: '6b6t wiki logo',
    src: 'img/icons/logo.jpg',
  },
  items: [
    // GitHub icon
    {
      href: 'https://github.com/Advik555wastaken/6b6twiki',
      position: 'right',
      className: 'navbar-icon',
      html: `
        <img src="/img/icons/github.svg" alt="GitHub" />
      `,
    },

    // Discord icon
    {
      href: 'https://discord.gg/gmaE2Bc7YU',
      position: 'right',
      className: 'navbar-icon',
      html: `
        <img src="/img/icons/discord.svg" alt="Discord" />
      `,
    },

    // Vercel icon
    {
      href: 'https://vercel.com/',
      position: 'right',
      className: 'navbar-icon',
      html: `
        <img src="/img/icons/vercel.svg" alt="Vercel" />
      `,
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
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/Em4AAcjXvD',
            }
          ],
        }
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
