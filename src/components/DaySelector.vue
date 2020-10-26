<template>
  <div class="day-selector">
    <b-field :label="$t('plan.chooseFreeDays')">
      <b-checkbox
        class="is-medium"
        v-for="(day, index) in days"
        :key="index"
        :native-value="day.index"
        v-model="daySelection"
        @change.native="handleCheckboxChange(day.index)"
        :disabled="disableUi"
      >
        {{day.name}}
      </b-checkbox>
    </b-field>

    <p
      class="error"
      v-if="$data.showError"
    >
      {{$t('plan.errorTooManyDays', {maxDays: this.maxDays})}}
    </p>

  </div>
</template>

<script>
import globalConfig from '../config/global';

export default {
  computed: {
    days() {
      return [
        {
          index: 1,
          name: this.$t('plan.days.monday')
        },
        {
          index: 2,
          name: this.$t('plan.days.tuesday')
        },
        {
          index: 3,
          name: this.$t('plan.days.wednesday')
        },
        {
          index: 4,
          name: this.$t('plan.days.thursday')
        },
        {
          index: 5,
          name: this.$t('plan.days.friday')
        },
        {
          index: 6,
          name: this.$t('plan.days.saturday')
        },
        {
          index: 0,
          name: this.$t('plan.days.sunday')
        }
      ];
    }
  },
  data() {
    return {
      daySelection: [
        6,
        0
      ],
      maxDays: globalConfig.planerMaxFreeDays,
      showError: false
    };
  },
  methods: {
    handleCheckboxChange(day) {
      // make sure that at least 1 day is selected
      if (this.daySelection.length === 0) {
        this.daySelection = [day];
      }

      if (this.daySelection.length > globalConfig.planerMaxFreeDays) {
        this.showError = true;
      } else {
        this.showError = false;
      }

      this.$emit('filter', this.daySelection);
    }
  },
  mounted() {
    this.$emit('filter', this.daySelection);
  },
  name: 'DaySelector',
  props: ['disableUi']
};

</script>

<style lang="scss">
.day-selector {

}
</style>
