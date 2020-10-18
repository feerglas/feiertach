<template>
  <div>

    <Header />

    <div
      class="container"
      v-bind:class="{'no-padding': noPadding}"
    >

        <transition name="fade" appear>
          <main>

            <h1
              v-if="title"
              class="title is-1"
            >
              {{title}}
              <Flag
                :name="image"
                v-if="image"
                class="image"
              />
            </h1>

            <slot/>

          </main>
        </transition>
      </div>

    <Footer />

  </div>
</template>

<script>
import Flag from '../assets/flags/Index.vue';
import Footer from '../components/Footer.vue';
import Header from '../components/Header.vue';

export default {
  components: {
    Flag,
    Footer,
    Header
  },
  props: [
    'title',
    'image',
    'noPadding'
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
  margin-left: 1rem;
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

</style>
