<template>
  <div>

    <Header />

    <div class="container is-max-desktop">

        <transition name="fade" appear>
          <main>

            <h1 class="title">
              <g-image
                v-if="image"
                class="image"
                :src="image"
              />
              {{title}}
            </h1>

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
  props: [
    'title',
    'image'
  ]
};
</script>

<style lang="scss" scoped>
@import "../styles/bulma.scss";

.title {
  display: flex;
  align-items: center;
}

.image {
  height: 3rem;
  border: 1px solid black;
  margin-right: 1rem;
}

.fade-enter-active {
  transition: opacity 300ms;
}

.fade-enter {
  opacity: 0;
}

.container.is-max-desktop {
  @include until($desktop) {
    padding: 1rem;
  }
}

</style>
