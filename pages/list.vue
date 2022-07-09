<template>
  <div>
    <div v-for="(items, id) in listItems" :key="id"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listItems: [],
    };
  },
};
</script>

<style></style>
