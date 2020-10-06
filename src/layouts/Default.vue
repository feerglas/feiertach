<template>
  <div>

    <Header />

    <div class="columns is-desktop">
      <div class="column">
        <transition name="fade" appear>
          <main>
            <slot/>
          </main>
        </transition>
      </div>

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
  }
};
</script>

<style lang="scss" scoped>

.fade-enter-active {
  transition: opacity 300ms;
}

.fade-enter {
  opacity: 0;
}

.columns {
  margin: 0;
}

</style>
