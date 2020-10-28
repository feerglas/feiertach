<template>
  <div
    class="block suggestions"
    v-if="suggestions.length > 0"
  >
    <h2
      class="title is-4"
    >{{$t('plan.suggestions')}} ({{suggestions.length}})</h2>

    <b-button
      type="is-light"
      class="button toggle-past"
      @click="togglePastSuggestions"
    >
      {{pastSuggestionsVisible ? $t('plan.hidePastSuggestions') : $t('plan.showPastSuggestions')}}
    </b-button>

    <ul class="suggestions-list">
      <li
        class="suggestion-item"
        v-for="(suggestion, index) in suggestions"
        :key="index"
      >
        <div class="suggestion-header">
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

        <ul class="days-list">
          <li
            class="day-item"
            v-for="(day, index2) in suggestion.days"
            :key="index2"
          >

            <span
              class="day-title"
              v-bind:class="{
                'title-primary': day.takeFree,
                'title-secondary': day.free
              }"
            >
              <span v-if="day.takeFree">
                {{$t('plan.takeFree')}}
              </span>
              <span v-if="day.free">
                {{$t('plan.freeDay')}}
              </span>
              <span v-if="day.holiday">
                {{day.holiday.title[locale]}}
              </span>
            </span>

            <span class="day-info">
              {{formatDate(day.dateObject).weekday}} {{formatDate(day.dateObject).date}}
            </span>

          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import { addSuggestions } from '../helpers/calendar';
import { getFormattedDate } from '../helpers/date';

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
  name: 'PlanSuggestions',
  props: [
    'suggestions',
    'togglePastSuggestions',
    'pastSuggestionsVisible',
    'locale',
    'localeString'
  ]
};

</script>

<style lang="scss">
@import "../styles/styles.scss";

.block.suggestions {
  .suggestions {
    margin-top: 4rem;
  }

  .suggestions-list {
    margin-top: 2rem;
  }

  .suggestion-item {
    @include card;
    max-width: 40rem;
    padding: 0;
  }

  .suggestion-header {
    @include cardHeader;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;
    border-bottom: none;
  }

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

  .days-list {
    border-top: 1px solid $shadow-over-background;
    padding: 1rem;
    margin-top: 1rem;
  }

  .day-item {
    padding: .5rem 0 .5rem 3rem;
    position: relative;
  }

  .day-item:before {
    content: '';
    position: absolute;
    left: 1rem;
    top: 0;
    width: .2rem;
    height: 100%;
    background-color: $planer-results-dimmed-grey;
  }

  .day-item:first-child:before {
    top: 50%;
    height: 50%;
  }

  .day-item:last-child:before {
    bottom: 50%;
    height: 50%;
  }

  .day-item:first-child:after,
  .day-item:last-child:after {
    content: '';
    position: absolute;
    left: .6rem;
    width: 1rem;
    height: 1rem;
    background-color: $planer-results-dimmed-grey;
    border-radius: 60%;
  }

  .day-item:first-child:after {
    top: calc(50% - .5rem);
  }

  .day-item:last-child:after {
    bottom: calc(50% - .5rem);
  }

  .day-title {
    font-size: 1.3rem;
    display: block;
  }

  .day-title.title-primary {
    color: $planer-results-pearl-chain;
  }

  .day-title.title-secondary {
    color: $planer-results-dimmed-grey;
  }

  .day-info {
    color: $planer-results-dimmed-grey;
  }
}
</style>
