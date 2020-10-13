<template>
  <Layout title="feiertaCH">

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

/*
addEvents([
  event1,
  event2
]);
*/
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
};
</script>

<style lang="scss" scoped>
</style>
