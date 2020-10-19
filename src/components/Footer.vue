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
            icon="globe"
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

const documentationPackageJson = require('../../package.json');

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
      const path = this.$tp(this.$route.path, this.currentLocale, true);

      this.$router.push({
        path
      });

    }
  },
  async mounted() {
    const versionData = await fetch('/version.txt');

    if (!versionData.ok) {
      throw new Error('Version file not found');
    }

    let versionNumber = await versionData.text();

    if (versionNumber.trim() === '0.0.0') {
      versionNumber = documentationPackageJson.version;
    }

    this.version = versionNumber;
  },
  name: 'Footer'
};

</script>

<style lang="scss">
@import "../styles/bulma.scss";

.footer.footer {
  padding-left: 0;
  padding-right: 0;
  text-align: center;
  border-top: 2px solid $grey-lightest;

  .container {
    @include until($desktop) {
      padding: 0 1rem;
    }

    @include from($desktop) {
      @include maxWidth;
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
}

</style>
