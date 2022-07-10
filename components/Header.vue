<template>
  <header>
    <div>
      <nuxt-link :to="'/'">
        <div class="logo">КЭШ-BACK</div>
      </nuxt-link>
      <!-- <p style="padding-bottom: 6px; font-weight: 400; color: #2f8883">
        Лучшие предложения по кешбеку
      </p> -->
    </div>
    <div class="header__right">
      <div>
        <!-- <p style="color: #225754; font-size: 14px; font-weight: bolds">
          Kashback до 50%
        </p> -->
        <p style="font-size: 16px; font-weight: bold; display: flex; align-items: center; gap: 3px;">
          {{ pointsAmount }}  <img width="20px" src="/img/icons/coins.svg" alt="">
        </p>
      </div>
      <nuxt-link :to="'/account'">
        <img src="/img/ava.svg" alt="" />
      </nuxt-link>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      pointsAmount : this.$store.state.points
    };
  },
};
</script>

<style scoped>
header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 28px 0px 30px;
  /* border-bottom: 1px solid #2f888380; */
}
.logo {
  font-size: 22px;
  font-weight: bold;
}
.header__right {
  display: flex;
  /* flex-direction: column-reverse; */
  gap: 5px;
  align-items: center;
  text-align: right;
}
</style>
