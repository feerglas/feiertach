<template>

  <header class="comp-header">
    <nav
      class="navigation"
      role="navigation"
      aria-label="main navigation"
    >
      <g-link
        class="nav-item"
        v-bind:class="{'is-active': item.isActive}"
        v-for="(item, index) in navItems"
        :key="index"
        :to="item.path"
      >
        {{item.text}}
      </g-link>
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
@import "../styles/styles.scss";

.comp-header {
  background-color: $navigation-background;
  border: .3rem solid $navigation-background;

  .navigation {
    @include defaultLayoutHorizontal;
    display: flex;
    flex-wrap: wrap;
  }

  .nav-item {
    display: block;
    padding: .7rem;
    margin: 0 .2rem;
    color: $navigation-text;
    border: 1px solid $navigation-background;
    transition: border-color 150ms ease-in;
    border-radius: .5rem;
  }

  .nav-item:first-child {
    margin-left: 0;
  }

  .nav-item:hover:not(.is-active),
  .nav-item:focus:not(.is-active) {
    border: 1px solid $navigation-text;
    color: $navigation-text;
  }

  .nav-item.is-active {
    background-color: $navigation-background-active;
    color: $navigation-text-active;
  }
}
</style>
