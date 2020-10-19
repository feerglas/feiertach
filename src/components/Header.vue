<template>

  <header class="comp-header">
    <nav
      class="navigation"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navigation-inner">
        <g-link
          class="nav-item"
          v-bind:class="{'is-active': item.isActive}"
          v-for="(item, index) in navItems"
          :key="index"
          :to="item.path"
        >
          {{item.text}}
        </g-link>
      </div>
    </nav>
  </header>
</template>

<script>
import locales from '../locales/locales';

export default {
  computed: {
    navItems() {
      const _navItems = Object.keys(locales.navigation);
      const currentRoute = this.$route.path;
      const homeRoute = `/${this.$i18n.locale}/`;
      const isHomeRoute = currentRoute === homeRoute;
      const navItems = _navItems.map((item) => {
        const navItem = {
          isActive: false,
          path: this.$tp(`/${item}/`),
          text: this.$t(`navigation.${item}`)
        };

        if (item === 'home') {
          navItem.path = this.$tp(homeRoute);

          if (isHomeRoute) {
            navItem.isActive = true;
          }
        } else {
          if (currentRoute.indexOf(`/${item}/`) !== -1) {
            navItem.isActive = true;
          }
        }

        return navItem;
      });

      return navItems;
    }
  },
  data() {

    return {
      menuOpen: false
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

<style lang="scss">
@import "../styles/bulma.scss";
.comp-header {
  .navigation {
    background-color: $primary;
    border: .3rem solid $primary;
  }

  .navigation-inner {
    display: flex;
    flex-wrap: wrap;
    max-width: calc(960px - (2 * #{$gap}));
    margin: 0 auto;
  }

  .nav-item {
    display: block;
    padding: .7rem;
    margin: 0 .2rem;
    color: white;
    border: 1px solid $primary;
    transition: border-color 150ms ease-in;
    border-radius: .5rem;
  }

  .nav-item:hover:not(.is-active) {
    border: 1px solid $grey-lightest;
    color: white;
  }

  .nav-item.is-active {
    background-color: white;
    color: $primary;
  }
}
</style>
