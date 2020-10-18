<template>
  <Layout
    :title="$page.canton.name[this.$i18n.locale]"
    :image="$page.canton.flag"
    >
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
