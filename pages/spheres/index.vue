<template>
  <div class="cont">
    <CityChoser />
    <div class="blocks">
      <Title>Категории компаний</Title>
      <div class="block">
        <img @click="pushToSphere('electronic')" src="/img/electroinc.svg" alt="" />
        <img @click="pushToSphere('zoo')" src="/img/zoo.svg" alt="" />
      </div>
      <div class="block">
        <img @click="pushToSphere('drugs')" src="/img/zoo.svg" alt="" />
        <img @click="pushToSphere('drugs')" src="/img/electroinc.svg" alt="" />
      </div>
      <div class="block">
        <img @click="pushToSphere('drugs')" src="/img/electroinc.svg" alt="" />
        <img @click="pushToSphere('drugs')" src="/img/zoo.svg" alt="" />
      </div>
      <div class="block">
        <img @click="pushToSphere('drugs')" src="/img/zoo.svg" alt="" />
        <img @click="pushToSphere('drugs')" src="/img/electroinc.svg" alt="" />
      </div>
    </div>
    <HotCasesSlider />
  </div>
</template>

<script>
import Title from "~/components/Title.vue";
import CityChoser from "../../components/CityChoser.vue";
import HotCasesSlider from "../../components/HotCasesSlider.vue";
export default {
  components: { Title, CityChoser, HotCasesSlider },
  data() {
    return {
      sphereName: "",
    };
  },
  methods: {
    async pushToSphere(sphereName) {
      // console.log(sphereName);
      await this.$router.push( 'spheres/' + sphereName);
    },
  },
};
</script>

<style scoped>
.cont {
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  gap: 20px;
}
.blocks {
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-top: 25px;
}
.block {
  /* border-radius: 8px; */
  display: flex;
  justify-content: space-between;
  /* gap: 8px; */
  width: 100%;
}
</style>
