const WorkerPlugin = require('worker-plugin');

module.exports = {
  chainWebpack(config) {

    const svgRule = config.module.rule('svg');

    svgRule
      .uses
      .clear();

    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader');

    config
      .plugin('WorkerPlugin')
      .use(WorkerPlugin);
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
        cachedFileTypes: 'js,css,png,jpg,jpeg,svg,gif',
        categories: [
          'lifestyle',
          'productivity',
          'utilities'
        ],
        description: 'Schweizerische Feiertage',
        dir: 'auto',
        disableServiceWorker: false,
        disableTemplatedUrls: true,
        display: 'standalone',
        icon: 'src/favicon.png',
        lang: 'de-DE',
        manifestPath: 'manifest.json',
        maskableIcon: true,
        msTileColor: '#fdfdfc',
        serviceWorkerPath: 'service-worker.js',
        shortName: 'feiertaCH',
        startUrl: '/',
        statusBarStyle: 'default',
        themeColor: '#e85a4f',
        title: 'feiertaCH'
      },
      use: 'gridsome-plugin-pwa'
    }
  ],
  siteName: 'feiertaCH',
  siteUrl: 'https://feiertach.ch',
  templates: {
    Canton: '/cantons/:id'
  }
};
