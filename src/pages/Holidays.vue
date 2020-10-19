<template>
  <Layout>

    <h1 class="title">{{$t('navigation.holidays')}}</h1>

    <span>{{$data.filteredHolidays.length}}</span>

    <YearsSelector
      :holidays="this.$page.allHoliday.edges[0].node.holidays"
      @filter="handleFilter"
    />

    <AddHolidays
      :holidays="$data.filteredHolidays"
      :canton="false"
    />

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
import AddHolidays from '../components/AddHolidays.vue';
import HolidaysTable from '../components/HolidaysTable.vue';
import YearsSelector from '../components/YearsSelector.vue';

export default {
  components: {
    AddHolidays,
    HolidaysTable,
    YearsSelector
  },
  data() {
    return {
      filteredHolidays: [],
      lastHolidayOfEachYear: {},
      nextHoliday: false
    };
  },
  methods: {
    handleFilter(holidays) {
      this.filteredHolidays = holidays;
      this.nextHoliday = getNextHolidayAfterDate(this.filteredHolidays);
      this.lastHolidayOfEachYear = getLastHolidayOfEachYear(this.filteredHolidays);
    }
  }
};
</script>
