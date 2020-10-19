<template>
  <div class="layout-default">

    <Header />

    <div
      class="container"
      v-bind:class="{'no-padding': noPadding}"
    >

        <transition name="fade" appear>
          <main>
            <slot/>

          </main>
        </transition>
      </div>

    <Footer />

  </div>
</template>

<script>
import Footer from '../components/Footer.vue';
import Header from '../components/Header.vue';

export default {
  components: {
    Footer,
    Header
  },
  props: ['noPadding']
};
</script>

<style lang="scss">
@import "../styles/bulma.scss";

.layout-default {
  .title {
    display: flex;
    align-items: center;
  }

  .fade-enter-active {
    transition: opacity 300ms;
  }

  .fade-enter {
    opacity: 0;
  }

  .container:not(.no-padding) {
    @include defaultLayoutBleed();
  }

  .container.no-padding {
    max-width: 100%;
  }
}

</style>
