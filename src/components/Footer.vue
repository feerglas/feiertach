<template>

  <footer class="footer">
    <div class="container">
      <div class="content is-small">

        <div class="block">
          <p>©2020 Yves Tscherry</p>
          <a
            href="https://github.com/feerglas/feiertach"
            target="_blank"
          >{{$t('footer.findOnGithub')}} <span class="tag">Version {{$data.version}}</span></a>
        </div>

        <div class="block social-links">
          <p>{{$t('footer.findOnSocial')}}</p>
          <SocialLinks />
        </div>

        <b-field class="lang-switch">
          <b-select
            icon="web"
            icon-pack="mdi"
            v-model="currentLocale"
            @change.native="localeChanged"
          >
            <option
              v-for="locale in availableLocales"
              :key="locale"
              :value="locale"
            >{{ locale }}</option>
          </b-select>
        </b-field>

      </div>
    </div>
  </footer>

</template>

<script>
import SocialLinks from './SocialLinks.vue';

export default {
  components: {
    SocialLinks
  },
  data() {
    return {
      availableLocales: this.$i18n.availableLocales,
      currentLocale: this.$i18n.locale.toString(),
      version: '0.0.0'
    };
  },
  methods: {
    localeChanged () {
      window.location.href = this.$tp(this.$route.path, this.currentLocale, true);
    }
  },
  async mounted() {
    let path = '/version.txt';

    if (process.env.NODE_ENV !== 'development') {
      path = `/feiertach${path}`;
    }

    const versionData = await fetch(path);

    if (!versionData.ok) {
      throw new Error('Version file not found');
    }

    this.version = await versionData.text();
  },
  name: 'Footer'
};

</script>

<style lang="scss" scoped>
@import "../styles/bulma.scss";

.footer.footer {
  padding-left: 0;
  padding-right: 0;
  text-align: center;
}

.container {
  @include until($desktop) {
    padding: 0 1rem;
  }

  @include from($desktop) {
    max-width: calc(960px - (2 * #{$gap}));
    padding: 0;
  }

  .social-links ul {
    list-style-type: none;
    margin-left: 0;
  }

  .lang-switch {
    display: inline-block;
  }
}

</style>
