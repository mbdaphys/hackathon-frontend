<template>
  <footer>
    <div class="footer">
      <div class="container">
        <nuxt-link :to="'/'">
          <img src="/img/icons/home.svg" width="20px" height="20px" alt="" />
          <p>Главная</p>
        </nuxt-link>
      </div>
      <div class="container">
        <nuxt-link :to="'/search'">
          <img src="/img/icons/search.svg" width="20px" height="20px" alt="" />
          <p>Поиск</p>
        </nuxt-link>
      </div>
      <div class="container">
        <nuxt-link :to="'/spheres'">
          <img src="/img/icons/sphere.svg" width="20px" height="20px" alt="" />
          <p>Категории</p>
        </nuxt-link>
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
  padding: 12px 30px 12px;
  margin-top: 15px;
}
.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 280px;
  width: 100%;
  margin: 0 auto;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 8px;
}
p {
  color: white;
}
</style>
