<template>
  <Layout class="page-plan">
    <h1 class="title">{{$t('navigation.plan')}}</h1>
    <p>{{$t('plan.description')}}</p>

    <CantonSelector
      :disabled="this.$data.isCalculating"
      :cantons="this.$page.allCanton.edges"
      :locale="currentLocale"
      @changed="cantonChanged"
    />

    <DaySelector
      class="block"
      @filter="handleFilter"
      :disable-ui="this.$data.isCalculating"
    />

    <PlanOptions
      @changed="optionsChange"
      :disabled="this.$data.isCalculating"
    />

    <Loader
      class="circle-loader"
      v-if="this.$data.isCalculating"
    />

    <div
      class="no-suggestions"
      v-if="noResults"
    >
      {{$t('plan.noSuggestions')}}
    </div>

    <PlanSuggestions
      :suggestions="suggestions"
      :togglePastSuggestions="togglePastSuggestions"
      :pastSuggestionsVisible="pastSuggestionsVisible"
      :locale="currentLocale"
      :localeString="currentLocaleString"
    />

  </Layout>
</template>

<page-query>
  query {
    allCanton {
      edges {
        node {
          id
          name {
            de
            en
            it
            fr
          }
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
            memo {
              en
              it
              de
              fr
            }
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
    }
  }
</page-query>

<script>
import CantonSelector from '../components/CantonSelector.vue';
import DaySelector from '../components/DaySelector.vue';
import getMetaInfo from '../helpers/meta';
import globalConfig from '../config/global';
import Loader from '../components/Loader.vue';
import PlanOptions from '../components/Plan/PlanOptions.vue';
import PlanSuggestions from '../components/Plan/PlanSuggestions.vue';

export default {
  components: {
    CantonSelector,
    DaySelector,
    Loader,
    PlanOptions,
    PlanSuggestions
  },
  computed: {
    currentLocale() {
      return this.$i18n.locale;
    },
    currentLocaleString() {
      return `${this.$i18n.locale}-${this.$i18n.locale.toUpperCase()}`;
    },
    noResults() {
      return this.suggestions.length < 1 && this.currentCanton && this.currentDays.length <= globalConfig.planerMaxFreeDays && !this.isCalculating;
    }
  },
  data() {
    return {
      allSuggestions: [],
      currentCanton: undefined,
      currentDays: [],
      isCalculating: false,
      onlyAllCantonSelection: false,
      onlyOfficialSelection: false,
      pastSuggestionsVisible: false,
      suggestions: [],
      upcomingSuggestions: []
    };
  },
  metaInfo() {
    const lang = this.$i18n.locale;
    const route = this.$route.fullPath;
    const description = this.$t('seo.description.plan');

    return getMetaInfo({
      description,
      lang,
      route
    });
  },
  methods: {
    calculate() {
      if (this.currentCanton === undefined) {
        return;
      }

      if (this.currentDays.length > globalConfig.planerMaxFreeDays) {
        return;
      }

      this.allSuggestions = [];
      this.upcomingSuggestions = [];
      this.pastSuggestions = [];
      this.suggestions = [];

      this.isCalculating = true;

      const mainWorker = new Worker('../helpers/plan/main.worker.js', {
        type: 'module'
      });

      mainWorker.postMessage({
        canton: this.currentCanton,
        freeDays: this.currentDays,
        onlyAllCanton: this.onlyAllCantonSelection,
        onlyOfficial: this.onlyOfficialSelection
      });

      mainWorker.onmessage = (evt) => {
        const {
          all,
          onlyUpcoming
        } = evt.data;

        this.allSuggestions = all;
        this.upcomingSuggestions = onlyUpcoming;
        this.setSuggestions();

        this.isCalculating = false;
      };

    },
    cantonChanged(canton) {
      this.currentCanton = canton;
      this.calculate();
    },
    handleFilter(days) {
      this.currentDays = days;

      this.calculate();
    },
    optionsChange(values) {
      this.onlyAllCantonSelection = values.onlyAllCantonSelection;
      this.onlyOfficialSelection = values.onlyOfficialSelection;

      this.calculate();
    },
    setSuggestions() {
      this.suggestions = this.pastSuggestionsVisible
        ? this.allSuggestions
        : this.upcomingSuggestions;
    },
    togglePastSuggestions() {
      this.pastSuggestionsVisible = !this.pastSuggestionsVisible;

      this.setSuggestions();
    }
  }
};

</script>

<style lang="scss">
@import "../styles/styles.scss";

.page-plan {
  .no-suggestions {
    @include card;
    margin: 2rem 0;
  }

  .circle-loader {
    margin-top: 3rem;
  }

  .block {
    margin-top: 2.5rem;
  }

  .block.suggestions {
    margin-top: 4rem;
  }
}

</style>
