<template>
  <Layout
    class="page-home"
    :no-padding="true"
  >
    <div class="content is-medium">

      <div class="hero">
        <g-image
          class="image"
          src="~/favicon.png"
        />
        <h1 class="title is-1">feiertaCH</h1>
        <p class="lead is-size-4">{{$t("home.lead")}}</p>
      </div>

      <div class="custom-container">
        <h2 class="title is-2">{{$t("home.title1")}}</h2>
        <p>{{$t("home.content1")}}</p>
        <SocialLinks />

        <h2 class="title is-2">{{$t("home.title2")}}</h2>
        <p>{{$t("home.content2")}}</p>
        <ul>
          <li><g-link to="/cantons/">{{$t("navigation.cantons")}}</g-link></li>
          <li><g-link to="/holidays/">{{$t("navigation.holidays")}}</g-link></li>
        </ul>
      </div>
    </div>
  </Layout>
</template>

<script>
import SocialLinks from '../components/SocialLinks.vue';

export default {
  components: {
    SocialLinks
  },
  metaInfo: {
    title: 'feiertaCH'
  }
};
</script>

<style lang="scss">
@import "../styles/styles.scss";

.page-home {
  .hero {
    text-align: center;
    background-color: $white-bis;
    padding: 4rem 3rem;
    border-bottom: 2px solid $grey-lightest;

    @include until($tablet) {
      padding: 2rem;
    }

    @include from($tablet) {
      padding: 4rem 3rem;
    }

    @include from($desktop) {
      padding: 4rem 0;
    }
  }

  .image {
    border-radius: 1rem;
    width: 6rem;
    margin: 0 auto;
    box-shadow: 0px 0px 3rem $grey-light;
  }

  .title {
    display: block;
  }

  .lead {
    display: block;
    max-width: 500px;
    margin: 0 auto;
  }

  .custom-container {
    @include defaultLayout;
  }
}
</style>
