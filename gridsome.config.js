module.exports = {
  chainWebpack(config) {

    const svgRule = config.module.rule('svg');

    svgRule
      .uses
      .clear();

    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader');
  },
  plugins: [
    {
      options: {
        defaultLocale: 'de',
        enablePathRewrite: true,
        fallbackLocale: 'de',
        locales: [
          'de',
          'en',
          'fr',
          'it'
        ],
        messages: {},
        pathAliases: {
          de: 'de',
          en: 'en',
          fr: 'fr',
          it: 'it'
        },
        rewriteDefaultLanguage: true
      },
      use: 'gridsome-plugin-i18n'
    },
    {
      options: {
        appleMaskIconColor: '#fdfdfc',
        backgroundColor: '#fdfdfc',
        cachedFileTypes: 'js,json,css,html,png,jpg,jpeg,svg,gif',
        categories: [
          'lifestyle',
          'productivity',
          'utilities'
        ],
        description: 'Schweizerische Feiertage',
        dir: 'auto',
        disableServiceWorker: false,
        disableTemplatedUrls: false,
        display: 'standalone',
        icon: 'src/favicon.png',
        lang: 'de-DE',
        manifestPath: 'manifest.json',
        maskableIcon: true,
        msTileColor: '#fdfdfc',
        screenshots: [
          {
            sizes: '1280x720',
            src: 'screenshots/screenshot1.png',
            type: 'image/png'
          },
          {
            sizes: '1280x720',
            src: 'screenshots/screenshot2.png',
            type: 'image/png'
          }
        ],
        serviceWorkerPath: 'service-worker.js',
        shortName: 'feiertaCH',
        startUrl: '/',
        statusBarStyle: 'default',
        themeColor: '#e85a4f',
        title: 'feiertaCh'
      },
      use: 'gridsome-plugin-pwa'
    }
  ],
  siteDescription: 'List holidays from Switzerland',
  siteName: 'Swiss Holidays',
  siteUrl: 'https://feiertach.ch',
  templates: {
    Canton: '/cantons/:id'
  }
};
