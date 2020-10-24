import {
  Button,
  Checkbox,
  Field,
  Icon,
  Select,
  Table,
  Tooltip
} from 'buefy/src/components';
import config from 'buefy/src/utils/config';
import VueFeatherIconPack from './components/VueFeatherIconPack.vue';

const MyBuefy = {
  install(Vue) {
    Vue.component('vue-feather-icon-pack', VueFeatherIconPack);

    config.customIconPacks = {
      ft: {
        iconPrefix: '',
        sizes: {
          'default': '1.5x',
          'is-large': '3x',
          'is-medium': '2x',
          'is-small': '1x'
        }
      }
    };

    config.defaultIconComponent = 'vue-feather-icon-pack';
    config.defaultIconPack = 'ft';

    Vue.use(Button);
    Vue.use(Checkbox);
    Vue.use(Field);
    Vue.use(Icon);
    Vue.use(Select);
    Vue.use(Table);
    Vue.use(Tooltip);
  }
};

export default MyBuefy;
