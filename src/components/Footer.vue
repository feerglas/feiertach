<template>

  <footer class="custom-footer">
    <div class="container">
      <div class="content is-small">

        <div class="block">
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

        <div class="block social-links">
          <p>©2020 Yves Tscherry</p>
          <p>{{$t('footer.findOnSocial')}}:</p>
          <SocialLinks />
        </div>

        <div class="block github">
          <a
            href="https://github.com/feerglas/feiertach"
            target="_blank"
          >{{$t('footer.findOnGithub')}} <span class="tag">Version {{$data.version}}</span></a>
        </div>

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
@import "../styles/styles.scss";

.custom-footer {
  padding-left: 0;
  padding-right: 0;
  text-align: center;
  border-top: 2px solid $footer-border;
  background-color: $footer-background;

  .container {
    .control.has-icons-left {
      clear: both;
      position: relative;

      .select {
        font-size: 1rem;

        select {
          padding-left: 40px;
        }
      }

      .icon.is-left {
        height: 1.3rem;
        width: 1.3rem;
        position: absolute;
        left: .6rem;
        top: .6rem;
        float: none;
        color: $select-icon-color;
        pointer-events: none;
      }
    }

    .social-links ul {
      list-style-type: none;
      margin-left: 0;
    }

    .lang-switch {
      display: inline-block;
      margin-bottom: 2rem;
    }

    .block.github {
      margin-top: 3rem;
    }
  }
}

</style>
