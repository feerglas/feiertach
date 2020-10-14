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

      <b-table-column field="official" :label="$t('holiday.official')" centered sortable>
        <template v-slot:header="{ column }">
          <b-tooltip :label="$t('holiday.officialExplanation')" dashed type="is-black">
            <p>{{ column.label }}</p>
          </b-tooltip>
        </template>
        <template v-slot="props">
          <b-icon
            :icon="props.row.official ? 'check' : 'close'"
            size="is-small"
            :type="props.row.official ? 'is-success' : 'is-danger'"
          ></b-icon>
        </template>
      </b-table-column>

      <b-table-column field="allCanton" :label="$t('holiday.allCanton')" centered sortable>
        <template v-slot:header="{ column }">
          <b-tooltip :label="$t('holiday.allCantonExplanation')" dashed type="is-black">
            <p>{{ column.label }}</p>
          </b-tooltip>
        </template>
        <template v-slot="props">
          <b-icon
            :icon="props.row.allCanton ? 'check' : 'close'"
            size="is-small"
            :type="props.row.allCanton ? 'is-success' : 'is-danger'"
          ></b-icon>
        </template>
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
            v-if="props.row.official"
            icon="plus"
          >
          </b-icon>
        </a>
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
