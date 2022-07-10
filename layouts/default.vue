<template>
  <div>
    <main class="main">
      <Header />
      <section style="height: 100%">
        <nuxt />
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
import "~/style/global.css";
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
export default {
  components: { Header, Footer },
};
</script>

<style scoped>
.main {
  padding: 0 22px;
  min-height: calc(100vh - 69.4px);
}
</style>
