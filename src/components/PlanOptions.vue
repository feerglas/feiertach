<template>

  <b-field
    class="block plan-options"
    :label="$t('plan.options')"
  >
    <b-checkbox
      class="is-medium"
      v-model="onlyOfficialSelection"
      @change.native="optionsChange"
      :disabled="disabled"
    >
      {{$t('plan.onlyOfficial')}}
    </b-checkbox>

    <b-checkbox
      class="is-medium"
      v-model="onlyAllCantonSelection"
      @change.native="optionsChange"
      :disabled="disabled"
    >
      {{$t('plan.onlyAllCanton')}}
    </b-checkbox>
  </b-field>

</template>

<script>

export default {
  data() {
    return {
      onlyAllCantonSelection: false,
      onlyOfficialSelection: false
    };
  },
  methods: {
    optionsChange() {
      this.$emit('changed', {
        onlyAllCantonSelection: this.onlyAllCantonSelection,
        onlyOfficialSelection: this.onlyOfficialSelection
      });
    }
  },
  name: 'PlanOptions',
  props: [
    'disabled',
    'cantons',
    'locale'
  ]
};

</script>

<style lang="scss">

.block.plan-options .field.has-addons {
  display: block;
}

.block.plan-options label.b-checkbox {
  width: 100%;
}

</style>
