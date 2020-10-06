<template>
  <Layout>

    <!-- Current locale: {{ $context.locale }}
    Current locale: {{ $i18n.locale }} -->

    <p>{{ $t('level1.level2') }}</p>
    <p>{{ $t('level1.level2b.level3b') }}</p>
    <p>{{ $t('level1.level2c.level3c.level4c') }}</p>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />

    <h1>Hello, world!</h1>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores
    </p>

    <p class="home-links">
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
