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

import addEvents from '../helpers/calendar';

const event1 = {
  description: 'Desc',
  end: [
    2020,
    10,
    7
  ],
  start: [
    2020,
    10,
    7
  ],
  title: 'Title'
};

const event2 = {
  description: 'Desc 2',
  end: [
    2020,
    10,
    8
  ],
  start: [
    2020,
    10,
    8
  ],
  title: 'Title 2'
};

addEvents([
  event1,
  event2
]);

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
