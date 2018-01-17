<template>
  <div>
    <div class="goodswarp">
      <div class="goodsBanner"><img :src="goodsDetails.showImageUrl"/>
      </div>
      <div class="goodsPrices">
        <div class="left">
          <div>{{ goodsDetails.goodsName }}</div>
          <div>¥<span id="prices">{{ goodsDetails.price }}</span><span id="noPrices">¥{{ goodsDetails.discountPrice }}</span><span id="number">月销{{ salesCount }}笔</span></div>
        </div>
        <div class="right">
          <div>{{ count }}</div>
          <div>用户评价</div>
          <div>查看</div>
        </div>
      </div>
    </div>
    <div style="height: .08rem;background: #fafafa;clear: both"></div>
    <div class="goodsSelect" @click="toggle()">
      规格数量选择<img src="../../images/right.png">
    </div>
    <div class="goodsSelect1">
      用户评价（{{ count }}）
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
  </div>
</template>

<script type="text/javascript">
  import { Toast } from 'mint-ui'

  export default{
    data () {
      return {
        id: '',
        count: '',
        salesCount: '',
        goodsDetails: {},
        isShow: false
      }
    },
    methods: {
      toggle: function () {
        this.isShow = !this.isShow
      },
      queryGoodsDetails () {
        this.$http.post('/v1/shopGoodsInfo/queryGoodsDetails', {id: this.$route.params.id})
          .then(response => {
            if (response.data.return_code === '0000') {
              this.goodsDetails = response.data.goodsDetails
              this.count = response.data.count
              this.salesCount = response.data.salesCount
            } else if (response.data.return_code === '0001') {}
          })
          .catch(function () {
            Toast({message: '请求错误', duration: 2000})
          })
      }
    },
    created () {
      this.queryGoodsDetails() // 加载数据
    }
  }
</script>
