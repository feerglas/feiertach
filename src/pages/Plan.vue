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
      class="block"
      v-if="suggestions.length > 0"
    >
      <h2
        class="title is-4"
      >{{$t('plan.suggestions')}}</h2>

      <ul>
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
                    {{$t('plan.takeFreePluar', {days: suggestion.takeFree})}}
                  </span>
                </div>
              </div>
            </div>

            <button
              class="button"
            >
              <span class="button-icon">
                <b-icon
                  icon="plus"
                  size="is-small"
                ></b-icon>
              </span>
              <span>{{$t('plan.addToCalendar')}}</span>
            </button>

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
                {{formatDate(day.dateObject).weekday}} {{formatDate(day.dateObject).date}}
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
    margin-top: 2.5rem;
  }

  .block.options .field.has-addons {
    display: block;
  }

  .day-selector.block .field.has-addons {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: -1rem;

    label.b-checkbox  {
      margin-bottom: 1rem;
    }
  }

  .block.options label.b-checkbox {
    width: 100%;
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

  .button {
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
