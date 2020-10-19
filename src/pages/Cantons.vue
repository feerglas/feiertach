<template>
  <Layout class="page-cantons">

    <h1 class="title">{{$t('navigation.cantons')}}</h1>

    <ul>
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

<style lang="scss">
@import "../styles/bulma.scss";

.page-cantons {
  .list-item {
    margin-bottom: 1rem;
  }

  .link {
    display: flex;
    align-items: center;
  }

  .name {
    padding-left: 1rem;
  }
}

</style>
