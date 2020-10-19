<template>
  <button
    class="button"
    @click="addAllEvents(holidays, canton)"
  >
    <span class="button-icon">
      <b-icon
        icon="plus"
        size="is-small"
      ></b-icon>
    </span>
    <span>{{$t('holiday.addAllToCalendar')}}</span>
  </button>
</template>

<script>
import { addEventsForHolidays } from '../helpers/calendar';

export default {
  computed: {
    currentLocale() {
      return this.$i18n.locale;
    }
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

<style lang="scss">
.button-icon {
  padding-right: .7rem;
}
</style>
