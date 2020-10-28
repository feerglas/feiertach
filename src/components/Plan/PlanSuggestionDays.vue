<template>
  <ul class="component-days-list">
    <li
      class="day-item"
      v-for="(day, index2) in days"
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
</template>

<script>
import { getFormattedDate } from '../../helpers/date';

export default {
  methods: {
    formatDate(dateObject) {
      return getFormattedDate(dateObject, this.localeString);
    }
  },
  name: 'PlanSuggestionDays',
  props: [
    'days',
    'locale',
    'localeString'
  ]
};

</script>

<style lang="scss">
@import "../../styles/styles.scss";

.component-days-list {
  border-top: 1px solid $shadow-over-background;
  padding: 1rem;
  margin-top: 1rem;

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
