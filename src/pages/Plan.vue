<template>
  <Layout class="page-plan">
    <h1 class="title">{{$t('navigation.plan')}}</h1>
    <p>{{$t('plan.description')}}</p>

    <b-field
      class="block"
      :label="$t('plan.canton')"
    >
      <b-select
        :placeholder="$t('plan.chooseCanton')"
        v-model="currentCanton"
        @change.native="cantonChanged"
      >
        <option
          v-for="(canton, index) in sortedCantons"
          :value="canton.node"
          :key="index"
        >
          {{ canton.node.name[currentLocale] }}
        </option>
      </b-select>
    </b-field>

    <DaySelector
      class="block"
      @filter="handleFilter"
    />

    <b-field
      class="block options"
      :label="$t('plan.options')"
    >
      <b-checkbox
        class="is-medium"
        v-model="onlyOfficialSelection"
        @change.native="optionsChange"
      >
        {{$t('plan.onlyOfficial')}}
      </b-checkbox>

      <b-checkbox
        class="is-medium"
        v-model="onlyAllCantonSelection"
        @change.native="optionsChange"
      >
        {{$t('plan.onlyAllCanton')}}
      </b-checkbox>
    </b-field>

    <div
      class="results block"
      v-if="suggestions.length > 0"
    >
      <h2
        class="title is-4"
      >{{$t('plan.suggestions')}}</h2>

      <ul class="suggestions-list">
        <li
          class="suggestion-item"
          v-for="(suggestion, index) in suggestions"
          :key="index"
        >
          <div class="suggestion-header">
            <div class="suggestion-range">
              {{ formatDate(suggestion.days[0].dateObject).date }} - {{ formatDate(suggestion.days[suggestion.days.length - 1].dateObject).date }}
            </div>

            <div class="suggestion-total-free-info">
              {{$t('plan.freeDays', {days: suggestion.totalFree})}}
            </div>

            <div class="suggestion-take-free-info">
              <span v-if="suggestion.takeFree === 1">
                {{$t('plan.takeFreeSingular', {days: suggestion.takeFree})}}
              </span>
              <span v-if="suggestion.takeFree > 1">
                {{$t('plan.takeFreePluar', {days: suggestion.takeFree})}}
              </span>
            </div>

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
                  {{day.holiday.title[currentLocale]}}
                </span>
              </span>

              <span class="day-info">

                <span class="day-weekday">
                  {{formatDate(day.dateObject).weekday}}
                </span>

                <span class="day-date">
                  {{formatDate(day.dateObject).date}}
                </span>

              </span>

            </li>
          </ul>
        </li>
      </ul>
    </div>

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
import DaySelector from '../components/DaySelector.vue';
import { getFormattedDate } from '../helpers/date';
import getMetaInfo from '../helpers/meta';
import globalConfig from '../config/global';
import planHelper from '../helpers/plan/index';
import sortCantons from '../helpers/sort';

export default {
  components: {
    DaySelector
  },
  computed: {
    currentLocale() {
      return this.$i18n.locale;
    },
    currentLocaleString() {
      return `${this.$i18n.locale}-${this.$i18n.locale.toUpperCase()}`;
    },
    sortedCantons() {
      return sortCantons(this.$page.allCanton.edges, this.$i18n.locale);
    }
  },
  data() {
    return {
      currentCanton: undefined,
      currentDays: [],
      onlyAllCantonSelection: false,
      onlyOfficialSelection: false,
      suggestions: []
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

      this.suggestions = planHelper({
        canton: this.currentCanton,
        freeDays: this.currentDays,
        onlyAllCanton: this.onlyAllCantonSelection,
        onlyOfficial: this.onlyOfficialSelection
      });

    },
    cantonChanged() {
      this.calculate();
    },
    formatDate(dateObject) {
      return getFormattedDate(dateObject, this.currentLocaleString);
    },
    handleFilter(days) {
      this.currentDays = days;

      this.calculate();
    },
    optionsChange() {
      this.calculate();
    }
  },
  mounted() {

    // TODO: remove for PROD
    this.currentCanton = this.$page.allCanton.edges[0].node;
    this.cantonChanged();
  }
};

</script>

<style lang="scss">
@import "../styles/styles.scss";

.page-plan {
  .block {
    margin-top: 3rem;
  }

  .block.options .field.has-addons {
    display: block;
  }

  .block.options label.b-checkbox {
    width: 100%;
  }

  .results {

  }

  .suggestions-list {

  }

  .suggestion-item {
    @include card;
    max-width: 30rem;
  }

  .suggestion-header {
    @include cardHeader;
    justify-content: flex-start;
    padding: 0 1rem 1rem;
  }

  .suggestion-range {
    font-weight: bold;
    flex-basis: 100%;
  }

  .suggestion-total-free-info {
    padding-right: 1rem;
  }

  .suggestion-take-free-info {

  }

  .days-list {

  }

  .day-item {

  }

  .day-title {

  }

  .day-title.title-primary {

  }

  .day-title.title-secondary {

  }

  .day-info {

  }

  .day-weekday {

  }

  .day-date {

  }
}

</style>
