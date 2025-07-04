import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Documentaion for vnali plugins",
  description: "Documentaion for vnali plugins",
  vite: {
    server: {
      host: true,
      allowedHosts: ['plugins.vnali.ddev.site'],
    },
    // ... other vite config options
  },
  head: [
    ['meta', { name: 'robots', content: 'noindex, nofollow' }]
  ],

  lastUpdated: true,
  cleanUrls: true,
  themeConfig: {
    siteTitle: '',
    //logo: '/counter-logo.svg',
    outline: [2, 3],
    search: {
      provider: 'local'
    },
    /*
    editLink: {
      pattern: 'https://github.com/vnali/plugin-docs/edit/main/docs/:path'
    },
    */
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Plugins', link: '/' },
    ],

    sidebar: {
      '/counter' : [
        { text: 'Home', link: '/counter/'},
        {
          text: 'Introduction',
          items: [
            { text: 'About Counter Plugin', link: '/counter/introduction' },
            { text: 'How to Count', link: '/counter/how-to-count' },
            { text: 'Showcase', link: '/counter/showcase' },
          ]
        }, {
          text: 'Widgets',
          items: [
            { text: 'List of Widgets', link: '/counter/widgets' },
          ]
        }, {
          text: 'Statistics',
          items: [
            { text: 'How it Works', link: '/counter/statistics/' },
            { text: 'Site Visits', link: '/counter/statistics/site-visits' },
            { text: 'Site Visitors', link: '/counter/statistics/site-visitors' },
            { text: 'Site Average Visitors', link: '/counter/statistics/site-average-visitors' },
            { text: 'Site Online Visitors', link: '/counter/statistics/online-visitors' },
            { text: 'Site Maximum Online Visitors', link: '/counter/statistics/maximum-online-visitors' },
            { text: 'Page Visits', link: '/counter/statistics/page-visits' },
            { text: 'Top Pages', link: '/counter/statistics/top-pages' },
            { text: 'Trending Pages', link: '/counter/statistics/trending-pages' },
            { text: 'More Examples', link: '/counter/statistics/more-examples' },
          ]
        }, {
          text: 'Permissions', link: '/counter/permissions',
        }, {
          text: 'Events', link: '/counter/events',
        }, {
          text: 'Caching', link: '/counter/caching',
        }, {
          text: 'Settings', link: '/counter/settings',
        }
      ],
      '/telegram-bridge' : [
        {
          text: 'Introduction',
          items: [
            { text: 'What is Telegram Bridge', link: '/telegram-bridge/' },
          ]
        },
        {
          text: 'Notify Users',
          //collapsed: false,
          items: [
            { text: 'Notify by events', link: '/telegram-bridge/notify' },
          ]
        },
        {
          text: 'Bots',
          //collapsed: false,
          items: [
            { text: 'Setup', link: '/telegram-bridge/bots' },
            { text: 'Bot tools', link: '/telegram-bridge/bot-tools' },
            { text: 'Execute GraphQL queries', link: '/telegram-bridge/bot-graphql' },
          ]
        },
        { text: 'Plugin pages', link: '/telegram-bridge/plugin-pages' },
        { text: 'Settings', link: '/telegram-bridge/settings' },
      ],
      '/plugins': [
        {
          text: 'Plugins',
          items: [
            { text: 'Counter', link: '/counter/' },
            { text: 'Telegram Bridge', link: '/telegram-bridge/' },
            { text: 'Studio', link: '/studio/indexs' },
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vnali' }
    ]
  }
})
