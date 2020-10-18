<template>
  <component class="flag-icon" v-bind:is="name" />
</template>

<script>
/* eslint-disable camelcase */
import aargau from './icons/aargau.vue';
import appenzell_ausserrhoden from './icons/appenzell_ausserrhoden.vue';
import appenzell_innerrhoden from './icons/appenzell_innerrhoden.vue';
import basel from './icons/basel.vue';
import basel_land from './icons/basel_land.vue';
import bern from './icons/bern.vue';
import fribourg from './icons/fribourg.vue';
import geneva from './icons/geneva.vue';
import glarus from './icons/glarus.vue';
import graubuenden from './icons/graubuenden.vue';
import jura from './icons/jura.vue';
import lucerne from './icons/lucerne.vue';
import neuchatel from './icons/neuchatel.vue';
import nidwalden from './icons/nidwalden.vue';
import obwalden from './icons/obwalden.vue';
import sankt_gallen from './icons/sankt_gallen.vue';
import schaffhausen from './icons/schaffhausen.vue';
import schwyz from './icons/schwyz.vue';
import solothurn from './icons/solothurn.vue';
import tessin from './icons/tessin.vue';
import thurgau from './icons/thurgau.vue';
import uri from './icons/uri.vue';
import valais from './icons/valais.vue';
import vaud from './icons/vaud.vue';
import zuerich from './icons/zuerich.vue';
import zug from './icons/zug.vue';
/* eslint-enable camelcase */

export default {
  components: {
    aargau,
    appenzell_ausserrhoden,
    appenzell_innerrhoden,
    basel,
    basel_land,
    bern,
    fribourg,
    geneva,
    glarus,
    graubuenden,
    jura,
    lucerne,
    neuchatel,
    nidwalden,
    obwalden,
    sankt_gallen,
    schaffhausen,
    schwyz,
    solothurn,
    tessin,
    thurgau,
    uri,
    valais,
    vaud,
    zuerich,
    zug
  },
  props: ['name']
};
</script>

<style lang="scss" scoped>
@import "../../styles/bulma.scss";

.flag-icon {
  width: 3rem;
  flex-shrink: 0;
  flex-grow: 0;
  height: auto;
  border: 2px solid $grey;
  border-radius: .5rem;
}

</style>
