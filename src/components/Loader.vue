<template>

  <div class="custom-loader">Loading...</div>

</template>

<script>
export default {
  name: 'Loader'
};
</script>

<style lang="scss">
@import "../styles/styles.scss";

.custom-loader,
.custom-loader:after {
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
}
.custom-loader {
  margin: 0 auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: .3rem solid $primary;
  border-right: .3rem solid $primary;
  border-bottom: .3rem solid $primary;
  border-left: .3rem solid $background;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: circleAnimation 1.1s infinite linear;
  animation: circleAnimation 1.1s infinite linear;
}

@-webkit-keyframes circleAnimation {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes circleAnimation {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
