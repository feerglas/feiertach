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

      <h1 class="title">{{$page.canton.name[this.$i18n.locale]}}</h1>
    </div>

    <span>{{$data.filteredHolidays.length}}</span>

    <YearsSelector
      :holidays="this.$page.canton.holidays"
      @filter="handleFilter"
    />

    <AddHolidays
      :holidays="$data.filteredHolidays"
      :canton="this.$page.canton.key.toUpperCase()"
    />

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
import AddHolidays from '../components/AddHolidays.vue';
import Flag from '../assets/flags/Index.vue';
import HolidaysTable from '../components/HolidaysTable.vue';
import YearsSelector from '../components/YearsSelector.vue';

export default {
  components: {
    AddHolidays,
    Flag,
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

<style lang="scss">
.page-canton {
  .header {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;

    .image {
      margin-right: 1rem;
      height: 3rem;
      width: 3rem;
    }

    .title {

    }
  }
}
</style>
