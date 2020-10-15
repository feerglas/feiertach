<template>

  <header>

    <nav
      class="navigation"
      role="navigation"
      aria-label="main navigation"
    >
      <g-link
        class="nav-item"
        v-for="(item, index) in $data.navItems"
        :key="index"
        :to="item === 'home' ? $tp(`/${$data.currentLocale}/`) : $tp(`/${item}/`)"
        exact-active-class="is-active"
      >
        {{$t(`navigation.${item}`)}}
      </g-link>
    </nav>
  </header>
</template>

<script>
import locales from '../locales/locales';

export default {
  data() {

    const navItems = Object.keys(locales.navigation);

    return {
      currentLocale: this.$i18n.locale,
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
@import "../styles/bulma.scss";

.navigation {
  display: flex;
  flex-wrap: wrap;
  background-color: $primary;
  border: .3rem solid $primary;
}

.nav-item {
  display: block;
  padding: .7rem;
  margin: 0 .2rem;
  color: white;
  border: 1px solid $primary;
  transition: border-color 150ms ease-in;
}

.nav-item:hover:not(.is-active) {
  border: 1px solid $grey-lightest;
  color: white;
}

.nav-item.is-active {
  background-color: white;
  color: $primary;
}
</style>
