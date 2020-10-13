<template>
  <Layout
    :title="$page.canton.name[this.$i18n.locale]"
    :image="'/images/flags/' + $page.canton.flag"
    >
    <span>{{filteredHolidays.length}}</span>

    <div class="year-selection">

      <b-checkbox
        class="is-medium"
        v-for="(year, index) in $data.years"
        :key="index"
        :native-value="year"
        v-model="yearSelection"
      >
        {{year}}
      </b-checkbox>

    </div>

    <a
      @click="addAllEvents(filteredHolidays)"
    >{{$t('holiday.addAllToCalendar')}}</a>

    <b-table
      :data="filteredHolidays"
      :paginated="false"
      default-sort-direction="asc"
      sort-icon="arrow-up"
      sort-icon-size="is-medium"
      default-sort="sortDate"
    >

      <b-table-column field="date" :label="$t('holiday.date')" sortable numeric v-slot="props">
        {{ formatDate(props.row.dateObject) }}
      </b-table-column>

      <b-table-column field="title" :label="$t('holiday.holiday')" sortable v-slot="props">
        {{ props.row.title[$data.currentLocale] }}
        <p v-if="props.row.description">({{props.row.description[$data.currentLocale]}})</p>
      </b-table-column>

      <b-table-column field="link" label="Wikipedia" sortable v-slot="props">
        {{ props.row.link[$data.currentLocale] }}
      </b-table-column>

      <b-table-column field="official" :label="$t('holiday.official')" sortable v-slot="props">
        {{ props.row.official }}
      </b-table-column>

      <b-table-column field="allCanton" :label="$t('holiday.allCanton')" sortable v-slot="props">
        {{ props.row.allCanton }}
      </b-table-column>

      <b-table-column field="addToCalendar" :label="$t('holiday.addToCalendar')" sortable v-slot="props">
        <a
          @click="addSingleEvent(props.row)"
        >+</a>
      </b-table-column>

    </b-table>

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

const globalConfig = require('../config/global');

export default {
  computed: {
    filteredHolidays() {
      const filtered = this.$page.canton.holidays.filter((holiday) => this.yearSelection.indexOf(holiday.date.year) !== -1);

      return filtered;
    }
  },
  data() {
    return {
      currentLocale: this.$i18n.locale,
      currentLocaleString: `${this.$i18n.locale}-${this.$i18n.locale.toUpperCase()}`,
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
    addSingleEvent(holiday) {
      const copyright = this.$t('holiday.copyright');
      const canton = this.$page.canton.key.toUpperCase();
      const calendarEvent = getCalendarEventForHoliday(holiday, this.currentLocale, copyright, canton);

      addEvents([calendarEvent]);
    },
    formatDate(dateObject) {
      const date = new Date(dateObject);
      const dateOptions = {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric'
      };
      const weekdayOptions = {
        weekday: 'long'
      };
      const dateString = date.toLocaleDateString(this.currentLocaleString, dateOptions);
      const weekdayString = date.toLocaleDateString(this.currentLocaleString, weekdayOptions);

      return `${dateString} (${weekdayString})`;
    }
  }
};
</script>
