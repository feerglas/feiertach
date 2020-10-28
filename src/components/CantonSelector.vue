<template>

  <b-field
    class="block"
    :label="$t('plan.canton')"
  >
    <b-select
      :placeholder="$t('plan.chooseCanton')"
      v-model="currentValue"
      @change.native="selectChanged"
      :disabled="disabled"
    >
      <option
        v-for="(canton, index) in sortedCantons"
        :value="canton.node"
        :key="index"
      >
        {{ canton.node.name[locale] }}
      </option>
    </b-select>
  </b-field>

</template>

<script>
import sortCantons from '../helpers/sort';

export default {
  computed: {
    sortedCantons() {
      return sortCantons(this.cantons, this.locale);
    }
  },
  data() {
    return {
      currentValue: undefined
    };
  },
  methods: {
    selectChanged() {
      this.$emit('changed', this.currentValue);
    }
  },
  name: 'CantonSelector',
  props: [
    'disabled',
    'cantons',
    'locale'
  ]
};

</script>
