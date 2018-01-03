<template>
  <div>
    <div class="goodsBanner"><img src="http://www.meizan999.com/uploadfiles/pictures/product/20170415215242_5312.jpg">
    </div>
    <div class="goodsPrices">
      <div class="left">
        <div>窝窝遇上馍 粗粮包点 碳烧鱿鱼包</div>
        <div>¥<span id="prices">12.9</span><span id="noPrices">¥100.00</span><span id="number">月销999笔</span></div>
      </div>
      <div class="right">
        <div>999+</div>
        <div>用户评价</div>
        <div>查看</div>
      </div>
    </div>
    <div style="height: .08rem;background: #fafafa;clear: both"></div>
    <div class="goodsSelect">
      规格数量选择<img src="../../images/right.png">
    </div>
    <div class="goodsSelect1">
      用户评价（999+）
      <img src="../../images/right.png">
      <span>98.7%好评</span>
    </div>
    <input type="button" value="toggle" @click="toggle()"> <br/>
    <div v-show="isShow" style="width: 100px;height: 100px;background: red"></div>
  </div>
</template>

<script type="text/javascript">
  export default{
    data () {
      return {
        isShow: false
      }
    },
    methods: {
      toggle: function () { this.isShow = !this.isShow }}
  }
</script>
