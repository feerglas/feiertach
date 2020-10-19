<template>
  <component class="custom-feather-icon" :is="iconComponent"/>
</template>

<script>
import {
  AlertTriangleIcon,
  CheckIcon,
  ChevronUpIcon,
  GlobeIcon,
  InfoIcon,
  PlusIcon,
  XIcon
} from 'vue-feather-icons';

export default {
  components: {
    AlertTriangleIcon,
    CheckIcon,
    ChevronUpIcon,
    GlobeIcon,
    InfoIcon,
    PlusIcon,
    XIcon
  },
  computed: {
    iconComponent() {
      return `${this.icon[1]}Icon`;
    }
  },
  props: [
    'icon',
    'size',
    'customClass'
  ]
};
</script>

<style  lang="scss">
.icon .custom-feather-icon {
  fill: none;
  stroke: currentColor;
  stroke-width: 2px;
}
</style>
