<template>
  <div class="component-suggestion-header">
    <div class="header-infos">
      <div class="suggestion-range">
        {{ formatDate(suggestion.days[0].dateObject).date }} - {{ formatDate(suggestion.days[suggestion.days.length - 1].dateObject).date }}
      </div>

      <div class="suggestion-free-info-wrapper">
        <div class="suggestion-total-free-info">
          {{$t('plan.freeDays', {days: suggestion.totalFree})}}
        </div>

        <div>
          <span v-if="suggestion.takeFree === 1">
            {{$t('plan.takeFreeSingular', {days: suggestion.takeFree})}}
          </span>
          <span v-if="suggestion.takeFree > 1">
            {{$t('plan.takeFreePlural', {days: suggestion.takeFree})}}
          </span>
        </div>
      </div>
    </div>

    <b-button
      class="button add-calendar"
      type="is-primary is-light"
      @click="handleAddSuggestion(suggestion)"
    >
      <span class="button-icon">
        <b-icon
          icon="plus"
          size="is-small"
        ></b-icon>
      </span>
      <span>{{$t('plan.addToCalendar')}}</span>
    </b-button>

  </div>
</template>

<script>
import { addSuggestions } from '../../helpers/calendar';
import { getFormattedDate } from '../../helpers/date';

export default {
  methods: {
    formatDate(dateObject) {
      return getFormattedDate(dateObject, this.localeString);
    },
    handleAddSuggestion(suggestion) {
      const takeFreeString = suggestion.takeFree > 1
        ? this.$t('plan.takeFreePlural', {
          days: suggestion.takeFree
        })
        : this.$t('plan.takeFreeSingular');

      const strings = {
        copyright: this.$t('holiday.copyright'),
        holidays: this.$t('holidays.holidays'),
        takeFree: takeFreeString,
        takeFreeTitle: this.$t('plan.takeFree'),
        totalFree: this.$t('plan.freeDays', {
          days: suggestion.totalFree
        })
      };

      addSuggestions(suggestion, strings, this.locale, this.localeString);
    }
  },
  name: 'PlanSuggestionHeader',
  props: [
    'suggestion',
    'locale',
    'localeString'
  ]
};

</script>

<style lang="scss">
@import "../../styles/styles.scss";

.component-suggestion-header {
  @include cardHeader;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  border-bottom: none;

  .header-infos {
    flex: 1;
    min-width: 16rem;
    padding: 1rem 1rem 0;
  }

  .button.add-calendar {
    flex-shrink: 0;
    flex-grow: 0;
    margin: 1rem 1rem 0 1rem;
  }

  .button-icon {
    padding-right: .7rem;
  }

  .suggestion-range {
    font-weight: bold;
  }

  .suggestion-free-info-wrapper {
    display: flex;
    flex-wrap: wrap;
  }

  .suggestion-total-free-info {
    padding-right: 1rem;
  }

}
</style>
