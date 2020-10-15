<template>
  <Layout
    :title="$page.canton.name[this.$i18n.locale]"
    :image="$page.canton.flag"
    >
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
  addEvents,
  getCalendarEventForHoliday
} from '../helpers/calendar';
import HolidaysTable from '../components/HolidaysTable.vue';

const globalConfig = require('../config/global');

export default {
  components: {
    HolidaysTable
  },
  computed: {
    filteredHolidays() {
      const filtered = this.$page.canton.holidays.filter((holiday) => this.yearSelection.indexOf(holiday.date.year) !== -1);

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
      const events = [];
      const copyright = this.$t('holiday.copyright');
      const canton = this.$page.canton.key.toUpperCase();

      holidays.forEach((holiday) => {
        const event = getCalendarEventForHoliday(holiday, this.currentLocale, copyright, canton);

        events.push(event);
      });

      addEvents(events);
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
