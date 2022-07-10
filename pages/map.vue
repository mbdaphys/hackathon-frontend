<template>
  <div class="maps">
    <Title> Карты горячих точек</Title>
    <div>
      <section class="wrapper-map">
        <yandex-maps
          :coords="coords"
          :placemarks="items"
          :zoom="zoom"
          :icon="markerIcon"
          @set-coords="coords = $event"
        ></yandex-maps>
      </section>
      <vsa-list>
        <vsa-item>
          <vsa-heading> Скоро будут </vsa-heading>
          <vsa-content>
            <div class="items">
              <div v-for="i in 6" class="item">
                <div class="item-cont">
                  <div>
                    <div class="item-time">Case 1: 1 млн ₽</div>
                  </div>
                </div>
                <div class="item-details">
                  <div class="item-name">Магазин {{ i++ }}</div>
                </div>
              </div>
            </div>
          </vsa-content>
        </vsa-item>
      </vsa-list>
    </div>
    <hr style="margin-top: 50px" />
    <div>
      <section class="wrapper-map-2">
        <yandex-maps
          :coords="coords"
          :placemarks="items"
          :zoom="zoom"
          :icon="markerIcon2"
          @set-coords="coords = $event"
        ></yandex-maps>
      </section>
      <vsa-list>
        <vsa-item>
          <vsa-heading> Готовые точки </vsa-heading>
          <vsa-content>
            <div class="items">
              <div v-for="(i, id) in 6" class="item">
                <div class="item-cont">
                  <div>
                    <div class="item-time">
                      Opened Case 1: {{ id + 2 }} млн ₽
                    </div>
                  </div>
                </div>
                <div class="item-details">
                  <div class="item-name">Магазин {{ id + 1 }}</div>
                </div>
              </div>
            </div>
          </vsa-content>
        </vsa-item>
      </vsa-list>
    </div>
  </div>
</template>

<script>
import Title from "../components/Title.vue";
import YandexMaps from "../components/YandexMaps";

export default {
  components: {
    YandexMaps,
    Title,
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
        imageHref: "https://image.flaticon.com/img/icons/png/512/33/33447.png",
        imageSize: [43, 43],
        imageOffset: [0, 0],
        content: "123 v12",
        contentOffset: [0, 15],
        contentLayout: '<img  width="20px" src="/img/icons/pointIcon.svg" />',
      },
      markerIcon2: {
        layout: "default#imageWithContent",
        imageHref: "https://image.flaticon.com/img/icons/png/512/33/33447.png",
        imageSize: [43, 43],
        imageOffset: [0, 0],
        content: "123 v12",
        contentOffset: [0, 15],
        contentLayout: '<img  width="20px" src="/img/icons/purchase.svg" />',
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

<style lang="css" scoped>
.wrapper-map {
  background-color: #ccc;
  height: 280px;
  width: 100%;
  position: relative;
  margin: 10px auto;
}
.wrapper-map-2 {
  background-color: #ccc;
  height: 580px;
  width: 100%;
  position: relative;
  margin-top: 50px;
  margin-bottom: 25px;
}
.maps {
  display: flex;
  flex-direction: column;
  gap: 50p;
}
.items {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.item {
  justify-content: space-between;
  padding: 5px;
  border: 1px solid;
  display: flex;
  border-radius: 10px;
}
</style>
