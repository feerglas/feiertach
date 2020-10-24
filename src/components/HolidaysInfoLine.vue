<template>
  <div class="comp-info-line">
    <span class="holidays-counter tag is-light">{{holidays.length}} {{$t('holidays.holidays')}}</span>

    <AddHolidays
      :holidays="holidays"
      :canton="canton"
      class="add-all-button"
    />

  </div>
</template>

<script>
import AddHolidays from './AddHolidays.vue';

export default {
  components: {
    AddHolidays
  },
  name: 'HolidaysInfoLine',
  props: [
    'canton',
    'holidays'
  ]
};

</script>

<style lang="scss">
.comp-info-line {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  .holidays-counter {
    margin-top: 1rem;
    margin-right: 1rem;
    margin-bottom: 1rem;
    font-size: 1rem;
  }

  .add-all-button {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }
}
</style>
