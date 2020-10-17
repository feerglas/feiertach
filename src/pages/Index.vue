<template>
  <Layout title="feiertaCH">
    <div class="content is-medium">
      <p class="is-size-4">{{$t("home.lead")}}</p>

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
  </Layout>
</template>

<script>
import SocialLinks from '../components/SocialLinks.vue';

export default {
  components: {
    SocialLinks
  }
  metaInfo: {
    title: 'feiertaCH'
  }
};
</script>

<style lang="scss" scoped>
</style>
