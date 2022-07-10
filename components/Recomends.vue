<template>
  <div class="cont">
    <Title>Рекомендованые компании </Title>
    <!-- <img :src="`/img/brands/apteka.ru.svg`" alt="" /> -->
    <!-- <img :src="`/img/brands/${i.name}.svg`" alt="" />
    <img :src="`/img/brands/${i.name}.svg`" alt="" /> -->
    <div class="logo-block">
      <div v-for="(i, id) in response" :key="id">
        <img width="144px" height="78px" :src="`/img/brands/${i}.svg`" alt="" />
        <!-- {{ i }} -->
      </div>
    </div>
  </div>
</template>

<script>
import Title from "~/components/Title.vue";
import axios from "axios";
export default {
  components: { Title },
  data() {
    return {
      response: {},
    };
  },
  async mounted() {
    try {
      let result = await axios.get(
        "http://5.23.55.230:8080/get_rand_shops?count=4"
      );
      let copy = { ...result.data.result };
      // this.response = copy;
      this.response = JSON.parse(JSON.stringify(copy));
      // for (let i in parsedobj) {
      //   let arr = [];
      //   // if(a === i){
      //   //   arr.push
      //   // }
      // }
      // console.log(parsedobj);
      console.log(this.response);
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style scoped>
.cont {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.blocks {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.block {
  gap: 10px;
  display: flex;
  justify-content: center;
}
.logo-block {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto;
  gap: 10px;
}
img {
  border-radius: 10px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}
</style>
