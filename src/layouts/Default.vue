<template>
  <div>

    <Header />

    <div class="container is-max-desktop">

        <transition name="fade" appear>
          <main>
            <h1 class="title">{{title}}</h1>
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
  props: ['title']
};
</script>

<style lang="scss" scoped>
@import "../styles/bulma.scss";

.fade-enter-active {
  transition: opacity 300ms;
}

.fade-enter {
  opacity: 0;
}

@include until($desktop) {
  .container.is-max-desktop {
    padding: 1rem;
  }
}

</style>
