<template>
  <div>

    <Header />

    <div class="container">

        <transition name="fade" appear>
          <main>

            <h1 class="title is-1">
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
  border-radius: .5rem;
}

.fade-enter-active {
  transition: opacity 300ms;
}

.fade-enter {
  opacity: 0;
}

.container {

  @include until($tablet) {
    padding: 2rem;
  }

  @include from($tablet) {
    padding: 2.5rem;
  }

  @include from($desktop) {
    max-width: calc(960px - (2 * #{$gap}));
    padding: 3rem 0 4rem;
  }
}

</style>
