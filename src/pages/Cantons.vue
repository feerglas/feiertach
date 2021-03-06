<template>
  <Layout class="page-cantons">

    <h1 class="title">{{$t('navigation.cantons')}}</h1>

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

    <h1 class="title">{{$t('cantons.allSwitzerland')}}</h1>

    <ul class="list">
      <li
        class="list-item"
      >
        <g-link
          class="link"
          :to="$tp('holidays')"
        >
          <Flags name="switzerland" />
          <span class="name-wrapper">
            <span class="name">
              {{$t('cantons.switzerland')}}
            </span>
            <span class="tag is-light">
              {{swissHolidaysCount}}
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
    allHoliday {
      edges {
        node {
          holidays {
            date {
              year
            }
          }
        }
      }
    }
  }
</page-query>

<script>
import Flags from '../assets/flags/Index.vue';
import getMetaInfo from '../helpers/meta';
import globalConfig from '../config/global';
import sortCantons from '../helpers/sort';

export default {
  components: {
    Flags
  },
  computed: {
    currentLocale() {
      return this.$i18n.locale;
    },
    sortedCantons() {
      return sortCantons(this.$page.allCanton.edges, this.$i18n.locale);
    },
    swissHolidaysCount() {
      const year = globalConfig.years[0];
      const allHolidays = this.$page.allHoliday.edges[0].node.holidays;
      const filtered = allHolidays.filter((holiday) => holiday.date.year === year);

      return filtered.length;
    }
  },
  metaInfo() {
    const lang = this.$i18n.locale;
    const route = this.$route.fullPath;
    const description = this.$t('seo.description.cantons');

    return getMetaInfo({
      description,
      lang,
      route
    });
  }
};

</script>

<style lang="scss">
@import "../styles/styles.scss";

.page-cantons {
  .title:not(:nth-child(1)) {
    margin-top: 3rem;
  }

  .list {
    margin-top: -1.3rem;
  }

  .list-item {
    border-bottom: 1px solid $shadow-over-background;
  }

  .list-item:last-child {
    border-bottom: none;
  }

  .link:hover,
  .link:focus {
    background-color: $list-item-background-hover;
  }

  .link {
    display: flex;
    align-items: center;
    padding: 1.3rem;
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
