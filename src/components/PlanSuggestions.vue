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

    <PlanSuggestionsList
      :suggestions="suggestions"
      :locale="locale"
      :localeString="localeString"
    />
  </div>
</template>

<script>
import PlanSuggestionsList from './PlanSuggestionsList.vue';

export default {
  components: {
    PlanSuggestionsList
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
