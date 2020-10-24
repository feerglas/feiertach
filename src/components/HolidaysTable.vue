<template>

  <div class="comp-table">

    <!-- CUSTOM LAYOUT FOR MOBILE -->
    <div class="is-block-mobile is-hidden-tablet content">

      <ul class="mobile-list">
        <li
          class="mobile-list-item"
          v-for="(item, index) in holidays"
          :key="index"
          v-bind:class="{
            'mobile-list-item-next': areSameHolidays(item, nextHoliday),
            'mobile-list-item-last-of-year': isLastHolidayOfYear(item)
          }"
        >

          <div class="mobile-header">
            <span class="mobile-date">
              {{ formatDate(item.dateObject).date }}
            </span>

            <span class="mobile-title">
              {{ item.title[currentLocale] }}
            </span>

            <span class="mobile-weekday">
              {{ formatDate(item.dateObject).weekday }}
            </span>

          </div>

          <p
            v-if="item.description"
            class="description"
          >... {{item.description[currentLocale]}}</p>

          <b-tooltip
            v-if="forCanton === 'false'"
            multilined
            :label="cantonsForHoliday(item.cantons)"
            dashed
            type="is-black"
            position="is-right"
            size="is-small"
          >
            <p>{{ item.cantons.length }} {{$t('holidays.cantons')}}</p>
          </b-tooltip>

          <div class="mobile-info-line">
            <div v-if="forCanton === 'true'">
              <b-icon
                :icon="item.official ? 'check' : 'x'"
                size="is-small"
                :type="item.official ? 'is-success' : 'is-danger'"
              ></b-icon>
              <b-tooltip
                :label="$t('holiday.officialExplanation')"
                dashed
                type="is-black"
                position="is-right"
                size="is-small"
                multilined
              >
                <p class="mobile-info-item-text">{{ $t('holiday.official') }}</p>
              </b-tooltip>
            </div>

            <div v-if="forCanton === 'true'">
              <b-icon
                :icon="item.allCanton ? 'check' : 'x'"
                size="is-small"
                :type="item.allCanton ? 'is-success' : 'is-danger'"
              ></b-icon>
              <b-tooltip
                :label="$t('holiday.allCantonExplanation')"
                dashed
                type="is-black"
                position="is-left"
                size="is-small"
                multilined
              >
                <p class="mobile-info-item-text">{{ $t('holiday.allCanton') }}</p>
              </b-tooltip>
            </div>
          </div>

          <p v-if="item.memo">
            <span class="content-icon">
              <b-icon
                icon="alertTriangle"
                size="is-small"
              ></b-icon>
            </span>
            {{item.memo[currentLocale]}}
          </p>

          <div class="mobile-footer">
            <a
              class="mobile-link"
              :href="item.link[currentLocale]"
              target="_blank"
              rel="noreferrer"
            >
              <span class="content-icon">
                <b-icon
                  icon="info"
                  size="is-small"
                ></b-icon>
              </span>
              Wikipedia
            </a>

            <b-button
              class="button"
              type="is-primary is-light"
              @click="addSingleEvent(item)"
            >
              <span class="button-icon">
                <b-icon
                  icon="plus"
                  size="is-small"
                ></b-icon>
              </span>
              <span>{{$t('holiday.addToCalendar')}}</span>
            </b-button>
          </div>

          <div
            v-if="isLastHolidayOfYear(item)"
            class="mobile-year-separator"
          >
            {{parseInt(isLastHolidayOfYear(item), 10) + 1}}
          </div>

        </li>
      </ul>

    </div>

    <!-- TABLE FOR TABLET AND ABOVE -->

    <b-table
      :data="holidays"
      :paginated="false"
      default-sort-direction="asc"
      sort-icon="chevronUp"
      default-sort="sortDate"
      class="is-block-tablet is-hidden-mobile"
    >

      <b-table-column
        field="sortDate"
        :label="$t('holiday.date')"
        sortable
        v-slot="props"
      >
        <span v-bind:class="{'is-next': areSameHolidays(props.row, nextHoliday)}">
          {{ formatDate(props.row.dateObject).date }}
          <span class="weekday">{{ formatDate(props.row.dateObject).weekday }}</span>
        </span>
      </b-table-column>

      <b-table-column
        :field="`title.${currentLocale}`"
        :label="$t('holiday.holiday')"
        sortable
        v-slot="props"
      >
        <span v-bind:class="{'is-next': areSameHolidays(props.row, nextHoliday)}">
          {{ props.row.title[currentLocale] }}

          <p
            v-if="props.row.memo"
            class="description"
          >
            <span class="content-icon">
              <b-icon
                icon="alertTriangle"
                size="is-small"
              ></b-icon>
            </span>
            {{props.row.memo[currentLocale]}}
          </p>

          <p
            v-if="props.row.description"
            class="description"
          >({{props.row.description[currentLocale]}})</p>
        </span>

      </b-table-column>

      <b-table-column
        v-if="forCanton === 'false'"
        field="cantons.length"
        :label="$t('holidays.cantons')"
        v-slot="props"
        sortable
        centered
      >

        <b-tooltip
          multilined
          :label="cantonsForHoliday(props.row.cantons)"
          dashed
          type="is-black"
        >
          <p>{{ props.row.cantons.length }}</p>
        </b-tooltip>

      </b-table-column>

      <b-table-column
        v-if="forCanton === 'true'"
        field="official"
        :label="$t('holiday.official')"
        centered
        sortable
      >
        <template v-slot:header="{ column }">
          <b-tooltip
            :label="$t('holiday.officialExplanation')"
            dashed
            type="is-black"
          >
            <p>{{ column.label }}</p>
          </b-tooltip>
        </template>
        <template v-slot="props">
          <b-icon
            :icon="props.row.official ? 'check' : 'x'"
            size="is-small"
            :type="props.row.official ? 'is-success' : 'is-danger'"
            class="table-icon"
          ></b-icon>
        </template>
      </b-table-column>

      <b-table-column
        v-if="forCanton === 'true'"
        field="allCanton"
        :label="$t('holiday.allCanton')"
        centered
        sortable
      >
        <template v-slot:header="{ column }">
          <b-tooltip
            :label="$t('holiday.allCantonExplanation')"
            dashed
            type="is-black"
          >
            <p>{{ column.label }}</p>
          </b-tooltip>
        </template>
        <template v-slot="props">
          <b-icon
            :icon="props.row.allCanton ? 'check' : 'x'"
            size="is-small"
            :type="props.row.allCanton ? 'is-success' : 'is-danger'"
            class="table-icon"
          ></b-icon>
        </template>
      </b-table-column>

      <b-table-column
        field="link"
        :label="$t('holiday.infos')"
        v-slot="props"
        centered
      >
        <a
          :href="props.row.link[currentLocale]"
          target="_blank"
          rel="noreferrer"
        >Wikipedia</a>
      </b-table-column>

      <b-table-column
        field="addToCalendar"
        :label="$t('holiday.addToCalendar')"
        v-slot="props"
        centered
      >
        <a
          @click="addSingleEvent(props.row)"
        >
          <b-icon
            icon="plus"
            size="is-small"
            class="table-icon"
          >
          </b-icon>
        </a>
      </b-table-column>

    </b-table>
  </div>

</template>

<script>
import { addEventForHoliday } from '../helpers/calendar';
import { getFormattedDate } from '../helpers/date';

export default {
  computed: {
    currentLocale() {
      return this.$i18n.locale;
    },
    currentLocaleString() {
      return `${this.$i18n.locale}-${this.$i18n.locale.toUpperCase()}`;
    }
  },
  methods: {
    addSingleEvent(holiday) {
      const canton = this.forCanton === 'true'
        ? this.$page.canton.key.toUpperCase()
        : false;

      addEventForHoliday(holiday, this.currentLocale, this.$t('holiday.copyright'), canton);
    },
    areSameHolidays(holiday1, holiday2) {
      if (holiday1.date.year !== holiday2.date.year) {
        return false;
      }

      if (holiday1.date.month !== holiday2.date.month) {
        return false;
      }

      if (holiday1.date.day !== holiday2.date.day) {
        return false;
      }

      return true;
    },
    cantonsForHoliday(cantons) {
      const cantonsUpperCase = cantons.map((canton) => canton.toUpperCase());

      return cantonsUpperCase.join(', ');
    },
    formatDate(dateObject) {
      return getFormattedDate(dateObject, this.currentLocaleString);
    },
    isLastHolidayOfYear(holiday) {
      if (!Object.keys(this.lastHolidayForEachYear)
        .includes(holiday.date.year.toString())) {
        return false;
      }

      const lastHolidayDate = this.lastHolidayForEachYear[holiday.date.year];

      if (lastHolidayDate.date.month !== holiday.date.month) {
        return false;
      }

      if (lastHolidayDate.date.day !== holiday.date.day) {
        return false;
      }

      return holiday.date.year;
    }
  },
  name: 'HolidaysTable',
  props: [
    'holidays',
    'forCanton',
    'nextHoliday',
    'lastHolidayForEachYear'
  ]
};

</script>

<style lang="scss">
@import "../styles/styles.scss";
.comp-table {
  .b-table .table-wrapper {
    overflow: visible;
  }

  .table td {
    vertical-align: middle;
  }

  .icon.table-icon.is-small {
    float: none;
    margin: 0 auto;
  }

  .content-icon {
    padding-right: .5rem;
  }

  .button-icon {
    padding-right: .7rem;
  }

  .is-next {
    font-weight: bold;
  }

  .weekday {
    font-size: .8rem;
    display: block;
  }

  .description {
    font-size: .8rem;
  }

  .content.content {
    .mobile-list {
      list-style-type: none;
      margin: 2rem 0;
      padding: 0;
    }

    .mobile-list-item {
      @include card;
    }

    .mobile-list-item-next {
      border: 1px solid $black;
    }

    .mobile-list-item-last-of-year {
      position: relative;
      margin-bottom: 5rem;
    }

    .mobile-year-separator {
      position: absolute;
      bottom: -3.7rem;
      background-color: $grey;
      left: 0;
      right: 0;
      padding: .5rem;
      color: $white;
    }

    .mobile-header {
      @include cardHeader;
    }

    .mobile-date {
      flex-shrink: 0;
      flex-grow: 0;
      padding-left: 1rem;
      padding-right: 1rem;
      order: 2;

      @media (min-width: 420px) {
        order: 1;
      }
    }

    .mobile-title {
      font-weight: bold;
      padding-right: 1rem;
      padding-left: 1rem;
      flex-basis: 100%;
      order: 1;

      @media (min-width: 420px) {
        order: 2;
        flex-basis: auto;
      }
    }

    .mobile-weekday {
      flex-shrink: 0;
      flex-grow: 0;
      font-size: .8rem;
      padding-right: 1rem;
      padding-left: 1rem;
      order: 3;

      @media (min-width: 420px) {
        order: 3;
      }
    }

    .mobile-info-line {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 1rem;
    }

    .mobile-info-item-text {
      padding-left: .3rem;
    }

    .mobile-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .mobile-link {
      display: block;
    }
  }
}
</style>
