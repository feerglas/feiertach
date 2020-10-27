<template>
  <Holidays
    :data="this.$page"
    :for-canton="false"
  />
</template>

<page-query>
  query {
    allHoliday (
      sortBy: "sortDate"
      order: ASC
    ) {
      edges {
        node {
          holidays {
            cantons
            sortDate
            dateObject
            date {
              day
              month
              year
            }
            description {
              de
              fr
              it
              en
            }
            link {
              de
              fr
              it
              en
            }
            title {
              de
              fr
              it
              en
            }
          }
        }
      }
    }
  }
</page-query>

<script>
import getMetaInfo from '../helpers/meta';
import Holidays from '../components/Holidays.vue';

export default {
  components: {
    Holidays
  },
  metaInfo() {
    const lang = this.$i18n.locale;
    const route = this.$route.fullPath;
    const description = this.$t('seo.description.holidays');

    return getMetaInfo({
      description,
      lang,
      route
    });
  }
};
</script>
