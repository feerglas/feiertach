<template>
  <Holidays
    :data="this.$page"
    :for-canton="true"
  />
</template>

<page-query>
query ($id: ID!) {
  canton(id: $id) {
    flag
    name {
      en
      de
      it
      fr
    }
    key
    holidays {
      date {
        year
        month
        day
      }
      official
      allCanton
      half
      sortDate
      dateObject
      isFix
      memo {
        en
        it
        de
        fr
      }
      title {
        en
        it
        de
        fr
      }
      description {
        en
        it
        de
        fr
      }
      link {
        en
        it
        de
        fr
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
    const description = this.$t('seo.description.canton', {
      canton: this.$page.canton.name[this.$i18n.locale]
    });

    return getMetaInfo({
      description,
      lang,
      route
    });
  }
};
</script>
