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
        <img src="/icons/map.svg" alt="" />
      </div>
      <div class="mapper-map">
        
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
}
.mapper-alert {
  display: flex;
  align-items: center;
  background: #6572e1;
  border-radius: 20px;
  color: white;
  padding: 5px 20px;
}
</style>
