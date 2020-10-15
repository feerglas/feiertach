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

    <b-table
      :data="filteredHolidays"
      :paginated="false"
      default-sort-direction="asc"
      sort-icon="chevron-up"
      default-sort="sortDate"
    >

      <b-table-column field="sortDate" :label="$t('holiday.date')" sortable v-slot="props">
        {{ formatDate(props.row.dateObject) }}
      </b-table-column>

      <b-table-column :field="`title.${$data.currentLocale}`" :label="$t('holiday.holiday')" sortable v-slot="props">
        {{ props.row.title[$data.currentLocale] }}
        <p v-if="props.row.description">({{props.row.description[$data.currentLocale]}})</p>
      </b-table-column>

      <b-table-column field="cantons.length" :label="$t('holidays.cantons')" v-slot="props" sortable>

        <b-tooltip
        multilined :label="cantonsForHoliday(props.row.cantons)" dashed type="is-black">
          <p>{{ props.row.cantons.length }}</p>
        </b-tooltip>

      </b-table-column>

      <b-table-column field="link" :label="$t('holiday.infos')" v-slot="props">
        <a
          :href="props.row.link[$data.currentLocale]"
          target="_blank"
        >Wikipedia</a>
      </b-table-column>

      <b-table-column field="addToCalendar" :label="$t('holiday.addToCalendar')" v-slot="props">
        <a
          @click="addSingleEvent(props.row)"
        >
          <b-icon
            icon="plus"
          >
          </b-icon>
        </a>
      </b-table-column>

    </b-table>
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
  addEvents,
  getCalendarEventForHoliday
} from '../helpers/calendar';
import dateHelper from '../helpers/date';

const globalConfig = require('../config/global');

export default {
  computed: {
    filteredHolidays() {
      const filtered = this.$page.allHoliday.edges[0].node.holidays.filter((holiday) => this.yearSelection.indexOf(holiday.date.year) !== -1);

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

      holidays.forEach((holiday) => {
        const event = getCalendarEventForHoliday(holiday, this.currentLocale, copyright);

        events.push(event);
      });

      addEvents(events);
    },
    addSingleEvent(holiday) {
      const copyright = this.$t('holiday.copyright');
      const calendarEvent = getCalendarEventForHoliday(holiday, this.currentLocale, copyright);

      addEvents([calendarEvent]);
    },
    cantonsForHoliday(cantons) {
      const cantonsUpperCase = cantons.map((canton) => canton.toUpperCase());

      return cantonsUpperCase.join(', ');
    },
    formatDate(dateObject) {
      return dateHelper(dateObject, this.currentLocaleString);
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
