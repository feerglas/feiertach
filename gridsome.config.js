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
  // pathPrefix: '/feiertach',
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
    }
  ],
  siteDescription: 'List holidays from Switzerland',
  siteName: 'Swiss Holidays'
  // siteUrl: 'https://feerglas.github.io'
};
