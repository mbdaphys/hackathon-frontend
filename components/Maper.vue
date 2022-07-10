<template>
  <div>
    <div class="mapper">
      <div class="mapper-alert">
        <div class="mapper-bigalert">
          <p>12 компаний рядом с вами</p>
        </div>
        <div>
          <p>Экономь время на поиск товара</p>
        </div>
        <img src="/img/icons/map.svg" alt="" />
      </div>
      <div class="mapper-map">
        <img style="filter: blur(1px)" src="/img/map.svg" alt="" />
        <nuxt-link :to="'/'">
          <div class="mapper-button">Смотреть</div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.mapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-bottom: 25px;
}
.mapper-alert {
  display: flex;
  align-items: center;
  background: #6572e1;
  border-radius: 20px;
  color: white;
  z-index: 2;
  padding: 5px 20px;
}
.mapper-map {
  position: absolute;
  z-index: 1;
  top: 40px;
}
.mapper-button {
  padding: 4px 35px;
  text-align: center;
  background: #10e365;
  max-width: fit-content;
  position: absolute;
  right: 10px;
  top: 29px;
  font-size: 10px;
  color: white;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  /* top: 10px; */
  border-radius: 10px;
}
</style>
