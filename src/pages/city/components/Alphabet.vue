<template>
  <ul class="list">
    <li class="item"
        v-for="(item , key) of cities"
        :key="key"
        @click="handelLetterClick"
    >
      {{key}}
    </li>
  </ul>
</template>
<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  methods: {
    // 实现点击右侧字母的时候，展示当前字母的城市  即非父子组件传值
    // 利用总线，alphabet组件先将数据传递给city.vue，，city.vue组件再转发给list.vue
    handelLetterClick (e) {
      // 向外触发事件 父组件city监听change事件
      this.$emit('change', e.target.innerText)
    }
  }
}
</script>
<style scoped>
  .list{
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: 1.7rem;
    right: 0;
    bottom: 0;
    width: .4rem;
  }
  .item{
    text-align: center;
    line-height: 0.4rem;
    color: #00bcd4;
  }
</style>
