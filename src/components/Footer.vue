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
          <p>©2025 Yves Tscherry</p>
          <p class="list-description">{{$t('footer.findOnSocial')}}:</p>
          <SocialLinks />
        </div>

        <div class="block github">
          <a
            href="https://github.com/feerglas/feiertach"
            target="_blank"
            rel="noreferrer"
          >{{$t('footer.findOnGithub')}}</a>
        </div>

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
      currentLocale: this.$i18n.locale.toString()
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

    .list-description {
      margin: 0;
    }

    .social-links ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;

      li {
        margin: 0;
      }

      a {
        padding: .7rem .5rem;
        margin: 0 .2rem;
        display: block;
      }
    }

    .lang-switch {
      display: inline-block;
      margin-bottom: 2rem;

      .label {
        margin-bottom: .5rem;
        display: block;
      }
    }

    .block.github {
      margin-top: 3rem;

      .tag {
        margin-top: .3rem;
      }
    }
  }
}

</style>
