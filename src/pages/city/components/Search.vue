<template>
  <div class="travel-title city-search">
    <input class="search-input" placeholder="输入城市名称或者拼音" />
  </div>
</template>
<script>
export default {
  name: 'CitySearch'
}
</script>

<style scoped>
  .city-search{height: 0.75rem; padding: 0 0.1rem; line-height: 0.75rem;}
  .search-input{height: 0.62rem; line-height: 0.62rem; width: 100%; box-sizing: border-box; padding: 0 0.1rem; color: #666666; border-radius: 0.06rem;}
</style>
