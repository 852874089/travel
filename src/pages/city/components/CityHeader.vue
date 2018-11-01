<template>
  <div class="travel-title city-title">
      城市选择
    <router-link to="/">
      <div class="iconfont header-back">&#xe624;</div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'CityHeader'
}
</script>

<style scoped>
  .city-title{text-align: center; font-size: 0.32rem;}
</style>
