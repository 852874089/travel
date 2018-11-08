<template>
  <div class="city-list wrapper" ref="wrapper" >
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">广州</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hot" :key="item.id">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div
        class="area"
        v-for="(item , key) of cities"
        :key="key"
        :ref="key"
      >
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom"
               v-for="innerItem of item" :key="innerItem.id"
          >{{innerItem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    // 接收父组件传过来的参数
    hot: Array,
    cities: Object,
    letter: String
  },
  mounted () {
    // 当 DOM 结构发送变化的时候并没有重新计算 better-scroll
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {})
    })
  },
  // 侦听letter的变化
  watch: {
    // letter发生改变就执行代码
    // better-scroll 提供方法 滚动区域自动滚动到指定区域
    letter () {
      // 如果letter不为空时
      if (this.letter) {
        // 通过$ref获取对应的dom v-for循环输出的是一个数组，应该获取当前dom元素 后面加[0]
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
        // console.log(element)
      }
    }
  }
}
</script>

<style scoped>
  .border-topbottom:before,.border-topbottom:after{border-color: #cccccc;}
  .border-bottom:before{border-color: #cccccc;}
  .city-list{overflow: hidden; position: absolute; top: 1.62rem; left: 0; right: 0; bottom: 0; }
  .city-list .title{height: 0.48rem; line-height: 0.48rem; padding-left: 0.2rem; background-color: #eeeeee; color: #666666; font-size: 0.28rem;}
  .button-list{overflow: hidden; padding: 0.1rem 0.6rem 0.1rem 0.1rem; }
  .button-wrapper{float: left; width: 33.3%;}
  .button-wrapper .button{text-align: center; margin: 0.1rem; padding: 0.1rem 0; border: 0.02rem solid #cccccc; border-radius: 0.06rem;}

  .item-list .item{line-height:  0.72rem; padding-left: 0.2rem;}
</style>
