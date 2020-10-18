<template>
  <Layout :title="$t('navigation.cantons')">
    <ul class="list">
      <li
        class="list-item"
        v-for="(item, index) in sortedCantons"
        :key="index"
      >
        <g-link
          class="link"
          :to="`${currentLocale}/cantons/${item.node.id}`"
        >
          <Flags
            v-if="item.node.flag"
            class="image"
            :name="item.node.flag"
          />
          <span class="name">{{item.node.name[currentLocale]}} ({{item.node.holidaysCount}})</span>
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
          holidaysCount
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
import Flags from '../assets/flags/Index.vue';

export default {
  components: {
    Flags
  },
  computed: {
    currentLocale() {
      return this.$i18n.locale;
    },
    sortedCantons() {
      const cantons = this.$page.allCanton.edges;

      cantons.sort((a, b) => {
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

      return cantons;
    }
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
    height: auto;
    border: 1px solid black;
    border-radius: .5rem;
  }

  .name {
    padding-left: 1rem;
  }

</style>
