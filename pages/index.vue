<template>
  <div class="container">
    <Recomends/>
    <HotCasesSlider />
  </div>
</template>

<script>
import HotCasesSlider from '../components/HotCasesSlider.vue';
import Recomends from '../components/Recomends.vue';
export default { components: { HotCasesSlider, Recomends } };
</script>

<style scoped>
.container{
  display: flex;
  flex-direction: column;gap: 50px;
}
</style>