<template>
  <Layout class="page-canton">

    <div class="header">
      <span v-if="forCanton" class="image">
        <Flag
          :name="data.canton.flag"
          v-if="data.canton.flag"
        />
      </span>

      <h1 class="title">
        <span v-if="forCanton">
          {{data.canton.name[this.$i18n.locale]}}
        </span>

        <span v-if="!forCanton">
          {{$t('cantons.allSwitzerland')}}
        </span>
      </h1>
    </div>

    <YearsSelector
      :holidays="forCanton ? data.canton.holidays : data.allHoliday.edges[0].node.holidays"
      @filter="handleFilter"
    />

    <HolidaysInfoLine
      :holidays="$data.filteredHolidays"
      :canton="forCanton ? data.canton.key.toUpperCase() : false"
    />

    <b-button
      type="is-light"
      class="button"
      @click="togglePastHolidays"
    >
      {{$data.pastHolidaysVisible ? $t('holidays.hidePastSuggestions') : $t('holidays.showPastSuggestions')}}
    </b-button>

    <HolidaysTable
      :holidays="$data.filteredHolidays"
      :next-holiday="$data.nextHoliday"
      :last-holiday-for-each-year="$data.lastHolidayOfEachYear"
      :for-canton="forCanton"
    />

  </Layout>
</template>

<script>
import {
  getLastHolidayOfEachYear,
  getNextHolidayAfterDate
} from '../helpers/date';
import filterPast from '../helpers/holidaysFilterPast';
import Flag from '../assets/flags/Index.vue';
import HolidaysInfoLine from './HolidaysInfoLine.vue';
import HolidaysTable from './HolidaysTable.vue';
import YearsSelector from './YearsSelector.vue';

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
  },
  name: 'Holidays',
  props: [
    'data',
    'forCanton'
  ]
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
