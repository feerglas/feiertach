<template>
  <Layout :title="$t('navigation.holidays')">
    <span>{{filteredHolidays.length}}</span>
    <div class="year-selection">

      <b-checkbox
        class="is-medium"
        v-for="(year, index) in $data.years"
        :key="index"
        :native-value="year"
        v-model="yearSelection"
        @change.native="handleCheckboxChange(year)"
      >
        {{year}}
      </b-checkbox>

    </div>

    <a
      @click="addAllEvents(filteredHolidays)"
    >{{$t('holiday.addAllToCalendar')}}</a>

    <HolidaysTable
      :holidays="filteredHolidays"
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
import { addEventsForHolidays } from '../helpers/calendar';
import HolidaysTable from '../components/HolidaysTable.vue';

const globalConfig = require('../config/global');

export default {
  components: {
    HolidaysTable
  },
  computed: {
    filteredHolidays() {
      const filtered = this.$page.allHoliday.edges[0].node.holidays.filter((holiday) => this.yearSelection.indexOf(holiday.date.year) !== -1);

      return filtered;
    }
  },
  data() {
    return {
      currentLocale: this.$i18n.locale,
      years: globalConfig.years,
      yearSelection: [globalConfig.years[0]]
    };
  },
  methods: {
    addAllEvents(holidays) {
      addEventsForHolidays(holidays, this.currentLocale, this.$t('holiday.copyright'), false);
    },
    handleCheckboxChange(year) {
      // make sure that at least 1 year is selected
      if (this.yearSelection.length === 0) {
        this.yearSelection = [year];
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
