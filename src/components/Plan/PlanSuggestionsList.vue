<template>
  <ul class="component-suggestions">
    <li
      class="suggestion-item"
      v-for="(suggestion, index) in suggestions"
      :key="index"
    >
      <PlanSuggestionHeader
        :suggestion="suggestion"
        :locale="locale"
        :localeString="localeString"
      />

      <PlanSuggestionDays
        :days="suggestion.days"
        :locale="locale"
        :localeString="localeString"
      />
    </li>
  </ul>
</template>

<script>
import PlanSuggestionDays from './PlanSuggestionDays.vue';
import PlanSuggestionHeader from './PlanSuggestionHeader.vue';

export default {
  components: {
    PlanSuggestionDays,
    PlanSuggestionHeader
  },
  name: 'PlanSuggestionsList',
  props: [
    'suggestions',
    'locale',
    'localeString'
  ]
};

</script>

<style lang="scss">
@import "../../styles/styles.scss";

.component-suggestions {
  margin-top: 2rem;

  .suggestion-item {
    @include card;
    max-width: 40rem;
    padding: 0;
  }

}
</style>
