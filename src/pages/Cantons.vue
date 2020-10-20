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
          <span class="name-wrapper">
            <span class="name">
              {{item.node.name[currentLocale]}}
            </span>
            <span class="tag is-light">
              {{item.node.holidaysCount}}
            </span>
          </span>
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
@import "../styles/styles.scss";

.page-cantons {
  .list-item:not(:last-child) {
    margin-bottom: 1.3rem;
    padding-bottom: 1.3rem;
    border-bottom: 1px solid $shadow-over-background;
  }

  .link {
    display: flex;
    align-items: center;
  }

  .flag-icon {
    width: 2rem;
  }

  .name-wrapper {
    padding-left: 1rem;
    width: 100%;

    @include until($tablet) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
    }
  }

  .name-wrapper .name {
    @include until($tablet) {
      display: block;
    }
  }

  .name-wrapper .tag.is-light {
    @include from($tablet) {
      margin-left: 1rem;
    }
  }
}

</style>
