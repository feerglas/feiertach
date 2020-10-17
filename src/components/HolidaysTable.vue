<template>

  <div>

    <!-- CUSTOM LAYOUT FOR MOBILE -->
    <div class="is-block-mobile is-hidden-tablet content">

      <ul class="mobile-list">
        <li
          class="mobile-list-item"
          v-for="(item, index) in holidays"
          :key="index"
        >

          <div class="mobile-header">
            <p class="mobile-title">{{ item.title[currentLocale] }}</p>
            <div class="mobile-date">
              {{ formatDate(item.dateObject).date }}
              <span class="mobile-weekday">{{ formatDate(item.dateObject).weekday }}</span>
            </div>
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
                :icon="item.official ? 'check' : 'close'"
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
                :icon="item.allCanton ? 'check' : 'close'"
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

          <div class="mobile-footer">
            <a
              class="mobile-link"
              :href="item.link[currentLocale]"
              target="_blank"
            >
              <span class="icon">
                <i class="mdi mdi-information-outline"></i>
              </span>
              Wikipedia
            </a>

            <button
              class="button"
              @click="addSingleEvent(item)"
            >
              <span class="icon">
                <i class="mdi mdi-plus"></i>
              </span>
              <span>{{$t('holiday.addToCalendar')}}</span>
            </button>
          </div>

        </li>
      </ul>

    </div>

    <!-- TABLE FOR TABLET AND ABOVE -->

    <b-table
      :data="holidays"
      :paginated="false"
      default-sort-direction="asc"
      sort-icon="chevron-up"
      default-sort="sortDate"
      class="is-block-tablet is-hidden-mobile"
    >

      <b-table-column
        field="sortDate"
        :label="$t('holiday.date')"
        sortable
        v-slot="props"
      >
        {{ formatDate(props.row.dateObject).date }}
        <span class="weekday">{{ formatDate(props.row.dateObject).weekday }}</span>
      </b-table-column>

      <b-table-column
        :field="`title.${currentLocale}`"
        :label="$t('holiday.holiday')"
        sortable
        v-slot="props"
      >
        {{ props.row.title[currentLocale] }}
        <p
          v-if="props.row.description"
          class="description"
        >({{props.row.description[currentLocale]}})</p>
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
            :icon="props.row.official ? 'check' : 'close'"
            size="is-small"
            :type="props.row.official ? 'is-success' : 'is-danger'"
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
            :icon="props.row.allCanton ? 'check' : 'close'"
            size="is-small"
            :type="props.row.allCanton ? 'is-success' : 'is-danger'"
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
          >
          </b-icon>
        </a>
      </b-table-column>

    </b-table>
  </div>

</template>

<script>
import { addEventForHoliday } from '../helpers/calendar';
import dateHelper from '../helpers/date';

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
    cantonsForHoliday(cantons) {
      const cantonsUpperCase = cantons.map((canton) => canton.toUpperCase());

      return cantonsUpperCase.join(', ');
    },
    formatDate(dateObject) {
      return dateHelper(dateObject, this.currentLocaleString);
    }
  },
  name: 'HolidaysTable',
  props: [
    'holidays',
    'forCanton'
  ]
};

</script>

<style lang="scss">
@import "../styles/bulma.scss";

.b-table .table-wrapper {
  overflow: visible;
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
    border-radius: .3rem;
    margin-bottom: 2rem;
    padding: .7rem;
    box-shadow: 0px 0px 10px $grey-lighter;
  }

  .mobile-header {
    border-bottom: 1px solid $grey-lighter;
    padding-bottom: .6rem;
    margin-bottom: .6rem;
  }

  .mobile-title {
    font-weight: bold;
    margin-bottom: .3rem;

  }

  .mobile-date {
    display: flex;
    align-items: baseline;
    flex-wrap: wrap;
  }

  .mobile-weekday {
    padding-left: 1rem;
    font-size: .8rem;
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

</style>
