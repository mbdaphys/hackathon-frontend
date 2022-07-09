<template>
  <div class="cont">
    <Title>Рекомендованые компании </Title>
    <div class="blocks">
      <div class="block">
        <div><img src="/img/pandm.svg" alt="" /></div>
        <div><img src="/img/pandm.svg" alt="" /></div>
      </div>
      <div class="block">
        <div><img src="/img/pandm.svg" alt="" /></div>
        <div><img src="/img/pandm.svg" alt="" /></div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "~/components/Title.vue";
export default {
  components: { Title },
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
</style>
