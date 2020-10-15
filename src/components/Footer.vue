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
      version: '0.0.0'
    };
  },
  async mounted() {
    const versionData = await fetch('/version.txt');

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
}

</style>
