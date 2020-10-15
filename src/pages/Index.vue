<template>
  <Layout title="feiertaCH">
    <div class="content is-medium">
      <p class="is-size-4">{{$t("home.lead")}}</p>

      <h2 class="title is-2">{{$t("home.title1")}}</h2>
      <p>{{$t("home.content1")}}</p>

      <ul>
        <li>
          <a
            href="https://twitter.com/feerglas"
            target="_blank"
          >
            Twitter
          </a>
        </li>

        <li>
          <a
            href="https://www.facebook.com/yves.tscherry"
            target="_blank"
          >
            Facbeook
          </a>
        </li>

        <li>
          <a
            href="https://www.instagram.com/feerglas"
            target="_blank"
          >
            Instagram
          </a>
        </li>
      </ul>

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
export default {
  metaInfo: {
    title: 'feiertaCH'
  }
};
</script>

<style lang="scss" scoped>
</style>
