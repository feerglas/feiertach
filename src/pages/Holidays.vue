<template>
  <Layout>

    <h1 class="title">{{$t('cantons.allSwitzerland')}}</h1>

    <YearsSelector
      :holidays="this.$page.allHoliday.edges[0].node.holidays"
      @filter="handleFilter"
    />

    <HolidaysInfoLine
      :holidays="$data.filteredHolidays"
      :canton="false"
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
      :last-holiday-for-each-year="$data.lastHolidayOfEachYear"
      :next-holiday="$data.nextHoliday"
      for-canton="false"
    />

  </Layout>
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
import {
  getLastHolidayOfEachYear,
  getNextHolidayAfterDate
} from '../helpers/date';
import filterPast from '../helpers/holidaysFilterPast';
import getMetaInfo from '../helpers/meta';
import HolidaysInfoLine from '../components/HolidaysInfoLine.vue';
import HolidaysTable from '../components/HolidaysTable.vue';
import YearsSelector from '../components/YearsSelector.vue';

export default {
  components: {
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
    const description = this.$t('seo.description.holidays');

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
