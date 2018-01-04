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
    <div class="goodsSelect" @click="toggle()">
      规格数量选择<img src="../../images/right.png">
    </div>
    <div class="goodsSelect1">
      用户评价（999+）
      <img src="../../images/right.png">
      <span>98.7%好评</span>
    </div>
    <div class="goodsAssess">
      <div class="header">
        <span><img src="http://www.meizan999.com/uploadfiles/pictures/product/20170415215242_5312.jpg"></span>
        <span>巴豆妖**哟</span>
        <span>
          <img src="../../images/assess.png">
          <img src="../../images/assess.png">
          <img src="../../images/assess.png">
          <img src="../../images/assess.png">
          <img src="../../images/assess.png">
      </span>
      </div>
      <div class="data">
        <span>2017.10.12 13:40</span>
        <span>中号</span>
      </div>
      <div class="test">
        夭修，超级好用捏，炒鸡推荐的诶～不买就是你会很亏的捏。
      </div>

      <div class="img">
        <ul>
          <li>
            <div><img src="http://www.meizan999.com/uploadfiles/pictures/product/20170415215242_5312.jpg"></div>
          </li>
          <li>
            <div><img src="http://www.meizan999.com/uploadfiles/pictures/product/20170415215242_5312.jpg"></div>
          </li>
          <li>
            <div><img src="http://www.meizan999.com/uploadfiles/pictures/product/20170415215242_5312.jpg"></div>
          </li>
        </ul>
      </div>
      <div style="clear: both"></div>
      <div class="more">查看更多</div>
    </div>

    <div class="goodsMain">
      <div class="title">上拉查看更多详情</div>
      <div class="main">
        <img src="http://www.meizan999.com/uploadfiles/pictures/product/20170415215242_5312.jpg">
        <img src="http://www.meizan999.com/uploadfiles/pictures/product/20170415215242_5312.jpg">
        <img src="http://www.meizan999.com/uploadfiles/pictures/product/20170415215242_5312.jpg">
      </div>
    </div>
    <div v-show="isShow" style="width: 100px;height: 100px;background: red"></div>
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
      toggle: function () {
        this.isShow = !this.isShow
      }
    }
  }
</script>
