<template>

  <header>

    <nav
      class="navbar"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <g-link
          :to="$tp(`/${this.$i18n.locale}/`)"
          class="navbar-item"
        >
          Home
        </g-link>

        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          @click="toggleMenu"
          v-bind:class="{'is-active': menuOpen}"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>

      </div>

      <div
        class="navbar-menu"
        v-bind:class="{'is-active': menuOpen}"
      >
        <div class="navbar-start">
          <g-link
            class="navbar-item"
            v-for="(item, index) in $data.navItems"
            :key="index"
            :to="$tp(`/${item}/`)"
          >
            {{$t(`navigation.${item}`)}}
          </g-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import locales from '../locales/locales';

export default {
  data() {

    const navItems = Object.keys(locales.navigation);

    return {
      menuOpen: false,
      navItems
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    }
  },
  name: 'Header'
};

</script>

<style lang="scss" scoped>

</style>
