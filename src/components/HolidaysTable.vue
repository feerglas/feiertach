<template>
  <b-table
    :data="holidays"
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

    <b-table-column v-if="forCanton === 'false'" field="cantons.length" :label="$t('holidays.cantons')" v-slot="props" sortable>

      <b-tooltip
      multilined :label="cantonsForHoliday(props.row.cantons)" dashed type="is-black">
        <p>{{ props.row.cantons.length }}</p>
      </b-tooltip>

    </b-table-column>

    <b-table-column v-if="forCanton === 'true'" field="official" :label="$t('holiday.official')" centered sortable>
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

    <b-table-column v-if="forCanton === 'true'" field="allCanton" :label="$t('holiday.allCanton')" centered sortable>
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
          icon="plus"
        >
        </b-icon>
      </a>
    </b-table-column>

  </b-table>

</template>

<script>
import { addEventForHoliday } from '../helpers/calendar';
import dateHelper from '../helpers/date';

export default {
  data() {
    return {
      currentLocale: this.$i18n.locale,
      currentLocaleString: `${this.$i18n.locale}-${this.$i18n.locale.toUpperCase()}`
    };
  },
  methods: {
    addSingleEvent(holiday) {
      const canton = this.forCanton === 'true'
        ? this.$page.canton.key.toUpperCase()
        : false;

      addEventForHoliday(holiday, this.currentLocale, this.$t('holiday.copyright'), canton);
    },
    cantonsForHoliday(cantons) {
      const cantonsUpperCase = cantons.map((canton) => canton.toUpperCase());

      return cantonsUpperCase.join(', ');
    },
    formatDate(dateObject) {
      return dateHelper(dateObject, this.currentLocaleString);
    }
  },
  name: 'HolidaysTable',
  props: [
    'holidays',
    'forCanton'
  ]
};

</script>
