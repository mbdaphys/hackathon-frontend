<template>
  <div class="bigTitle">
    <slot />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.bigTitle{
    font-size: 20px;
    color: white; 
    background: #6572E1;
    max-width: fit-content;
    border-radius: 20px;
    padding: 5px 10px;
    font-weight: bold;
    margin-bottom: 15px;
}
</style>
