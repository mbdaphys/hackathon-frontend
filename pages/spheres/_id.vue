<template>
  <div>
    <div class="switcher">
      <div
        style="border-radius: 30px 0px 0px 30px"
        class="switcher__elem"
        :class="switcher == 1 ? 'active-sw' : ''"
        @click="switcher = 1"
      >
        <h1 class="switcher_text">Список</h1>
      </div>
      <div
        style="border-radius: 0px 30px 30px 0px"
        class="switcher__elem"
        :class="switcher == 2 ? 'active-sw' : ''"
        @click="switcher = 2"
      >
        <h1 class="switcher_text">Карта</h1>
      </div>
    </div>
    <div v-if="switcher === 1">
      <!-- <Title>Все для ваших питомцев</Title> -->
      <div class="filter">
        <div
          class="filter-cont"
          @click="swToSecondProps()"
          v-show="filterProps === 0"
        >
          Сортировать
          <img width="14px" src="/icons/filter.svg" alt="" />
        </div>
        <div
          @click="swToThirdProps()"
          class="filter-cont"
          v-show="filterProps === 1"
        >
          По возрастанию <img src="/icons/toTop.svg" alt="" />
        </div>
        <div
          @click="rebootProps()"
          class="filter-cont"
          v-show="filterProps === 2"
        >
          По убыванию <img src="/icons/toDown.svg" alt="" />
        </div>
      </div>
      <div class="containers">
        <div class="container" v-for="(res, idx) in response" :key="idx">
          <div class="container-main">
            <img width="35px" src="/icons/purchase.svg" alt="" />
            <p style="font-size: 12px">
              {{ res.name }}
            </p>
          </div>
          <div class="container-price">
            <p class="container-realprice">
              {{ res.cost }}
            </p>
            <div class="container-back">
              <img src="/icons/arrow.svg" alt="" />
              <p>299.95 Р (5%)</p>
            </div>
          </div>
        </div>
        <Maper />
      </div>
    </div>
    <div v-else-if="switcher === 2">
      <section class="wrapper-map">
        <yandex-maps
          :coords="coords"
          :placemarks="items"
          :zoom="zoom"
          @set-coords="coords = $event"
        ></yandex-maps>
        <!-- style="border-radius: 15px;" -->
      </section>
      <div class="containers-map">
        <div class="containers-item-map" v-for="i in 5">
          <div class="left">
            <p>Ветклиника “Космос”</p>
            <p>г. Краснодар, Московская, 67</p>
          </div>
          <div class="right">
            <p style="font-size: 14px">Kashback</p>
            <p style="font-size: 30px">10%</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import YandexMaps from "../../components/YandexMaps";
import axios from "axios";
import Title from "../../components/Title.vue";
import Maper from "../../components/Maper.vue";

export default {
  components: { YandexMaps, Title, Maper },
  data() {
    return {
      response: [],
      id: "",
      filterProps: 0,
      switcher: 1,
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
  async asyncData({ params }) {
    const id = params.id;
    return { id };
  },
  methods: {
    async swToSecondProps() {
      let result = await axios.get(
        `http://5.23.55.230:8080/sphere?name=${this.id}&offset=0&sort=1`
      );
      let copy = { ...result.data.result };
      this.response = copy;
      console.log(copy);
      console.log(this.response);
      this.filterProps = 1;
    },
    async swToThirdProps() {
      let result = await axios.get(
        `http://5.23.55.230:8080/sphere?name=${this.id}&offset=0&sort=-1`
      );
      let copy = { ...result.data.result };
      this.response = copy;
      console.log(copy);
      console.log(this.response);
      this.filterProps = 2;
    },
    async rebootProps() {
      let result = await axios.get(
        `http://5.23.55.230:8080/sphere?name=${this.id}&offset=0&sort=0`
      );
      let copy = { ...result.data.result };
      this.response = copy;
      console.log(copy);
      console.log(this.response);
      this.filterProps = 0;
    },
  },
  async mounted() {
    try {
      if (this.filterProps === 0) {
        let result = await axios.get(
          `http://5.23.55.230:8080/sphere?name=${this.id}&offset=0&sort=0`
        );
        let copy = { ...result.data.result };
        this.response = copy;
        console.log(copy);
        console.log(this.response);
      }
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style scoped>
.containers {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.container {
  display: flex;
  justify-content: space-between;
  padding: 10px 12px;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  background: white;
}
.container-main {
  display: flex;
  align-items: center;
  gap: 8px;
}
.container-price {
  display: flex;
  flex-direction: column;
  text-align: right;
}
.container-back {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 10px;
}
.container-realprice {
  font-size: 14px;
}
.filter {
  padding: 3px 12px 3px 12px;
  background: #6572e1;
  max-width: fit-content;
  width: 100%;
  color: white;
  border-radius: 20px;
  font-size: 14px;
  margin-bottom: 10px;
}
.filter-cont {
  display: flex;
  align-items: center;
  gap: 10px;
}
/* Cwitcher */
.switcher {
  display: flex;
  margin-bottom: 20px;
  justify-content: center;
}
.switcher__elem {
  padding-top: 8px;
  padding-bottom: 8px;
  border: 1px solid #2d5bff;
  max-width: 200px;
  width: 100%;
  color: #6572e1;
  cursor: pointer;
  text-align: center;
}
.switcher_text {
  font-size: 14px;
}
.active-sw {
  background: #6572e1;
  color: white;
  transition: 0.5s ease;
}
/* Cwitcher */
.wrapper-map {
  background-color: #ccc;
  height: 180px;
  width: 100%;
  position: relative;
  border-radius: 15px;
  margin: 25px auto;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}
.containers-map {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.containers-item-map {
  display: flex;
  color: white;
  flex-direction: row;
  padding: 15px 10px;
  background: #6572e1;
  border-radius: 10px;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.25);
}
.left {
  display: flex;
  flex-direction: column;
  font-size: 12px;
}
.right {
  display: flex;
  align-items: baseline;
  font-weight: bold;
  gap: 2px;
}
</style>
