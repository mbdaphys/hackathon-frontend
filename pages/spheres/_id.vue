<template>
  <div>
    <Title>Все для ваших питомцев</Title>
    <div class="filter">
      <div @click="swToSecondProps()" v-show="filterProps === 0">
        Сортировать
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
          <img width="45px" src="/img/ava.svg" alt="" />
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
</template>

<script>
import axios from "axios";
import Title from "../../components/Title.vue";
import Maper from "../../components/Maper.vue";

export default {
  data() {
    return {
      response: [],
      id: "",
      filterProps: 0,
    };
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
      // for(let i in this.response){
      //   console.log(i.keys);
      // }
    } catch (error) {
      console.log(error);
    }
  },
  components: { Title, Maper },
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
</style>
