<template>
  <Layout :title="$t('navigation.cantons')">
    <ul class="list">
      <li
        class="list-item"
        v-for="(item, index) in $page.allCanton.edges"
        :key="index"
      >
        <g-link
          class="link"
          :to="`${$data.currentLocale}/cantons/${item.node.id}`"
        >
          <g-image
            class="image"
            :src="item.node.flag"
          />
          <span class="name">{{item.node.name[$data.currentLocale]}}</span>
        </g-link>
      </li>
    </ul>
  </Layout>
</template>

<page-query>
  query {
    allCanton {
      edges{
        node{
          id
          flag
          name {
            de
            en
            it
            fr
          }
        }
      }
    }
  }
</page-query>

<script>
export default {
  data() {
    return {
      currentLocale: this.$i18n.locale
    };
  },
  mounted() {
    this.$page.allCanton.edges.sort((a, b) => {
      const aUpper = a.node.name[this.$i18n.locale].toUpperCase();
      const bUpper = b.node.name[this.$i18n.locale].toUpperCase();

      if (aUpper < bUpper) {
        return -1;
      }
      if (aUpper > bUpper) {
        return 1;
      }

      return 0;
    });
  }
};

</script>

<style lang="scss" scoped>
  .list {

  }

  .list-item {
    margin-bottom: 1rem;
  }

  .link {
    display: flex;
    align-items: center;
  }

  .image {
    width: 3rem;
    border: 1px solid black;
    border-radius: .5rem;
  }

  .name {
    padding-left: 1rem;
  }

</style>
