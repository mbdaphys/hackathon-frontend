<template>
  <footer>
    <div class="footer">
      <div class="container">
        <nuxt-link :to="'/'">
          <img src="/icons/home.svg" width="35px" height="35px" alt="" />
          <!-- <p>Главная</p> -->
        </nuxt-link>
      </div>
      <div class="container">
        <!-- <p>Категории</p> -->

        <nuxt-link :to="'/spheres'">
          <img src="/icons/sphere.svg" width="35px" height="35px" alt="" />
        </nuxt-link>
      </div>
      <div class="container">
        <nuxt-link :to="'/best'">
          <img src="/icons/star.svg" width="35px" height="35px" alt="" />
          <!-- <p>Избраное</p> -->
        </nuxt-link>
      </div>
      <div class="container">
        <nuxt-link :to="'/search'">
          <img src="/icons/search.svg" width="35px" height="35px" alt="" />
        </nuxt-link>
        <!-- <p>Избраное</p> -->
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
footer {
  background: #6572e1;
  padding: 8px 30px 12px;
  margin-top: 15px;
}
.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
