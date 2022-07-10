<template>
  <section class="wrapper-map">
    <yandex-maps
      :coords="coords"
      :placemarks="items"
      :zoom="zoom"
      :icon="markerIcon"
      @set-coords="coords = $event"
    ></yandex-maps>
  </section>
</template>

<script>
import YandexMaps from "../components/YandexMaps";

export default {
  components: {
    YandexMaps,
  },
  data() {
    return {
      zoom: 13,
      items: [
        [45.035726, 38.97764],
        [45.037834, 38.967992],
        [45.061169, 38.927609],
        [45.021624, 38.964799],
        [45.060484, 39.01644],
        [45.049502, 38.972038],
      ],
      coords: [45.03547, 38.975313],
      markerIcon: {
        layout: "default#imageWithContent",
        imageHref: "https://image.flaticon.com/icons/png/512/33/33447.png",
        imageSize: [43, 43],
        imageOffset: [0, 0],
        content: "123 v12",
        contentOffset: [0, 15],
        contentLayout:
          '<img  width="20px" src="/icons/pointIcon.svg" />',
      },
    };
  },
  created() {
    this.$bus.$on("get-data-point", (coords) => {
      console.log(coords);
      // this.queryToGetData(
      //   this.loadMore,
      //   this.currentTab,
      //   START_PAGE,
      //   this.specField.id,
      //   this.searchField,
      //   coords)
    });
  },
  beforeDestroy() {
    this.$bus.$off("get-data-point");
  },
};
</script>

<style lang="css">
.wrapper-map {
  background-color: #ccc;
  height: 280px;
  width: 80%;
  position: relative;
  margin: 50px auto;
}
</style>
