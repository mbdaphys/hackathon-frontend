<template>
  <div class="cont">
    <Title>Горячие предложения</Title>
    <VueTinySlider id="slider" v-bind="sliderProps">
      <div><img src="/img/drugs.svg" alt="" /></div>
      <div><img src="/img/drugs.svg" alt="" /></div>
      <div><img src="/img/drugs.svg" alt="" /></div>
      <div><img src="/img/drugs.svg" alt="" /></div>
      <div><img src="/img/drugs.svg" alt="" /></div>
      <div><img src="/img/drugs.svg" alt="" /></div>
      <div><img src="/img/drugs.svg" alt="" /></div>
      <div><img src="/img/drugs.svg" alt="" /></div>
      <div><img src="/img/drugs.svg" alt="" /></div>
    </VueTinySlider>
  </div>
</template>

<script>
import Title from "./Title.vue";
export default {
  head() {
    return {
      link: [
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.1/tiny-slider.css",
        },
      ],
    };
  },
  data() {
    return {
      sliderProps: {
        mouseDrag: true,
        loop: false,
        items: 3,
        controls: false,
        swipeAngle: 45,
      },
    };
  },
  components: { Title },
};
</script>

<style lang="css" scoped>
.cont {
  display: flex;
  flex-direction: column;
  /* gap: 25px; */
}
#slider {
  display: flex;
  /* max-width: fit-content; */
}
::v-deep .tns-nav {
  display: none;
}
</style>
