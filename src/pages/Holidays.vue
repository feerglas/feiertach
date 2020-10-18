<template>
  <Layout :title="$t('navigation.holidays')">

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
      for-canton="false"
      :next-holiday="$data.nextHoliday"
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
import AddHolidays from '../components/AddHolidays.vue';
import { getNextHolidayAfterDate } from '../helpers/date';
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
      nextHoliday: false
    };
  },
  methods: {
    handleFilter(holidays) {
      this.filteredHolidays = holidays;
      this.nextHoliday = getNextHolidayAfterDate(this.filteredHolidays);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
