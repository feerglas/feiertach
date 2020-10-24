<template>
  <Layout
    :image="$page.canton.flag"
    class="page-canton"
  >

    <div class="header">
      <Flag
        :name="$page.canton.flag"
        v-if="$page.canton.flag"
        class="image"
        />

      <h1 class="title">
        {{$page.canton.name[this.$i18n.locale]}}
      </h1>
    </div>

    <YearsSelector
      :holidays="this.$page.canton.holidays"
      @filter="handleFilter"
    />

    <HolidaysInfoLine
      :holidays="$data.filteredHolidays"
      :canton="this.$page.canton.key.toUpperCase()"
    />

    <b-button
      type="is-light"
      class="button"
      @click="togglePastHolidays"
    >
      {{this.$data.pastHolidaysVisible ? $t('holidays.hidePastSuggestions') : $t('holidays.showPastSuggestions')}}
    </b-button>

    <HolidaysTable
      :holidays="$data.filteredHolidays"
      :next-holiday="$data.nextHoliday"
      :last-holiday-for-each-year="$data.lastHolidayOfEachYear"
      for-canton="true"
    />

  </Layout>
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
import {
  getLastHolidayOfEachYear,
  getNextHolidayAfterDate
} from '../helpers/date';
import filterPast from '../helpers/holidaysFilterPast';
import Flag from '../assets/flags/Index.vue';
import getMetaInfo from '../helpers/meta';
import HolidaysInfoLine from '../components/HolidaysInfoLine.vue';
import HolidaysTable from '../components/HolidaysTable.vue';
import YearsSelector from '../components/YearsSelector.vue';

export default {
  components: {
    Flag,
    HolidaysInfoLine,
    HolidaysTable,
    YearsSelector
  },
  data() {
    return {
      allHolidays: [],
      filteredHolidays: [],
      lastHolidayOfEachYear: {},
      nextHoliday: false,
      pastHolidaysVisible: false,
      upcomingHolidays: []
    };
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
  },
  methods: {
    handleFilter(holidays) {
      this.allHolidays = holidays;
      this.upcomingHolidays = filterPast(holidays);
      this.nextHoliday = getNextHolidayAfterDate(holidays);
      this.lastHolidayOfEachYear = getLastHolidayOfEachYear(holidays);

      this.setHolidays();
    },
    setHolidays() {
      this.filteredHolidays = this.pastHolidaysVisible
        ? this.allHolidays
        : this.upcomingHolidays;
    },
    togglePastHolidays() {
      this.pastHolidaysVisible = !this.pastHolidaysVisible;

      this.setHolidays();
    }
  }
};
</script>

<style lang="scss">
.page-canton {
  .header {
    display: flex;
    align-items: center;
    margin-bottom: 3rem;

    .image {
      margin-right: 1rem;
      height: 3rem;
      width: 3rem;
    }

    .title {
      margin-bottom: 0;
    }
  }
}
</style>
