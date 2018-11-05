<template>
  <ul class="list">
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
  </ul>
</template>
<script>
export default {
  name: 'CityAlphabet'
}
</script>
<style scoped>
  .list{overflow: hidden; position: absolute; top: 1.62rem;  right: 0; bottom: 0; width: 0.4rem;  text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .item{
    text-align: center;
    line-height: 0.4rem;
    color: #00bcd4;
  }
</style>
