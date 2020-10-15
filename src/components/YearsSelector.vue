<template>
  <div>
    <b-checkbox
      class="is-medium"
      v-for="(year, index) in $data.years"
      :key="index"
      :native-value="year"
      v-model="yearSelection"
      @change.native="handleCheckboxChange(year)"
    >
      {{year}}
    </b-checkbox>
  </div>
</template>

<script>
const globalConfig = require('../config/global');

export default {
  computed: {
    filteredHolidays() {
      const filtered = this.holidays.filter((holiday) => this.yearSelection.indexOf(holiday.date.year) !== -1);

      return filtered;
    }
  },
  data() {
    return {
      years: globalConfig.years,
      yearSelection: [globalConfig.years[0]]
    };
  },
  methods: {
    handleCheckboxChange(year) {
      // make sure that at least 1 year is selected
      if (this.yearSelection.length === 0) {
        this.yearSelection = [year];
      }

      this.$emit('filter', this.filteredHolidays);
    }
  },
  mounted() {
    this.$emit('filter', this.filteredHolidays);
  },
  name: 'YearsSelector',
  props: ['holidays']
};

</script>
