<template>
  <a @click="addAllEvents(holidays, canton)">{{$t('holiday.addAllToCalendar')}}</a>
</template>

<script>
import { addEventsForHolidays } from '../helpers/calendar';

export default {
  data() {
    return {
      currentLocale: this.$i18n.locale
    };
  },
  methods: {
    addAllEvents(holidays, canton) {
      addEventsForHolidays(holidays, this.currentLocale, this.$t('holiday.copyright'), canton);
    }
  },
  name: 'AddHolidays',
  props: [
    'holidays',
    'canton'
  ]
};

</script>
