import './styles/bulma.scss';
import Buefy from 'buefy';
import DefaultLayout from './layouts/Default.vue';
import extractLocale from './locales/extractLocale';
import locales from './locales/locales';
import VueFeatherIconPack from './components/VueFeatherIconPack.vue';


export default (Vue, {
  head,
  appOptions
}) => {
  Vue.component('vue-feather-icon-pack', VueFeatherIconPack);

  // add <html> attributes
  /* eslint-disable no-param-reassign */
  head.htmlAttrs = {
    lang: 'en'
  };
  /* eslint-enable no-param-reassign */

  // define layout component
  Vue.component('Layout', DefaultLayout);

  head.meta.push({
    content: 'viewport',
    name: 'width=device-width, initial-scale=1'
  });

  // Register Bulma
  Vue.use(Buefy, {
    customIconPacks: {
      ft: {
        iconPrefix: '',
        sizes: {
          default: '1.5x',
          'is-small': '1x',
          'is-medium': '2x',
          'is-large': '3x'
        }
      }
    },
    defaultIconComponent: 'vue-feather-icon-pack',
    defaultIconPack: 'ft'
  });

  // Set Locales Messages
  appOptions.i18n.setLocaleMessage('de', extractLocale('de', locales));
  appOptions.i18n.setLocaleMessage('en', extractLocale('en', locales));
  appOptions.i18n.setLocaleMessage('it', extractLocale('it', locales));
  appOptions.i18n.setLocaleMessage('fr', extractLocale('fr', locales));
};
