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
      filteredHolidays: []
    };
  },
  methods: {
    handleFilter(holidays) {
      this.filteredHolidays = holidays;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
