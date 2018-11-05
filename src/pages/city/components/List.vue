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
          <div class="button-wrapper">
            <div class="button">广州</div>
          </div>
          <div class="button-wrapper">
            <div class="button">广州</div>
          </div>
          <div class="button-wrapper">
            <div class="button">广州</div>
          </div>
          <div class="button-wrapper">
            <div class="button">广州</div>
          </div>
          <div class="button-wrapper">
            <div class="button">广州</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">阿凡达</div>
          <div class="item border-bottom">阿凡达</div>
          <div class="item border-bottom">阿凡达</div>
          <div class="item border-bottom">阿凡达</div>
          <div class="item border-bottom">阿凡达</div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">阿凡达</div>
          <div class="item border-bottom">阿凡达</div>
          <div class="item border-bottom">阿凡达</div>
          <div class="item border-bottom">阿凡达</div>
          <div class="item border-bottom">阿凡达</div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">阿凡达</div>
          <div class="item border-bottom">阿凡达</div>
          <div class="item border-bottom">阿凡达</div>
          <div class="item border-bottom">阿凡达</div>
          <div class="item border-bottom">阿凡达</div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">阿凡达</div>
          <div class="item border-bottom">阿凡达</div>
          <div class="item border-bottom">阿凡达</div>
          <div class="item border-bottom">阿凡达</div>
          <div class="item border-bottom">阿凡达</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name: 'CityList',
  mounted () {
    // this.scroll = this.BScroll(this.$refs.wrapper)
    const wrapper = document.querySelector('.wrapper')
    const scroll = new BScroll(wrapper)
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
