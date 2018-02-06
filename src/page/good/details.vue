<template>
  <div>
    <div class="goodswarp">
      <div class="goodsBanner"><img :src="goodsDetails.showImageUrl"/>
      </div>
      <div class="goodsPrices">
        <div class="left">
          <div>{{ goodsDetails.goodsName }}</div>
          <div>¥<span id="prices">{{ goodsDetails.price }}</span><span
            id="noPrices">¥{{ goodsDetails.discountPrice }}</span><span id="number">月销{{ salesCount }}笔</span></div>
        </div>
        <div class="right">
          <div>{{ count }}</div>
          <div>用户评价</div>
          <div>查看</div>
        </div>
      </div>
    </div>
    <div style="height: .08rem;background: #fafafa;clear: both"></div>
    <div class="goodsSelect" @click="show()">
      规格数量选择<img src="../../images/right.png">
    </div>
    <div class="goodsSelect1">
      用户评价（{{ count }}）
      <img src="../../images/right.png">
    </div>
    <div class="goodsAssess">
      <div class="header">
        <span><img :src="goodsAppraises.PHOTO_URL"></span>
        <span>{{ goodsAppraises.NICK_NAME }}</span>
        <span v-if="goodsAppraises.GOODS_SCORE === 1">
          <img src="../../images/assess.png">
        </span>
        <span v-else-if="goodsAppraises.GOODS_SCORE === 2">
          <img src="../../images/assess.png">
          <img src="../../images/assess.png">
        </span>
        <span v-else-if="goodsAppraises.GOODS_SCORE === 3">
           <img src="../../images/assess.png">
          <img src="../../images/assess.png">
          <img src="../../images/assess.png">
        </span>
        <span v-else-if="goodsAppraises.GOODS_SCORE === 4">
          <img src="../../images/assess.png">
          <img src="../../images/assess.png">
          <img src="../../images/assess.png">
          <img src="../../images/assess.png">
        </span>
        <span v-else>
          <img src="../../images/assess.png">
          <img src="../../images/assess.png">
          <img src="../../images/assess.png">
          <img src="../../images/assess.png">
          <img src="../../images/assess.png">
        </span>

      </div>
      <div class="data">
        <span>{{ goodsAppraises.CREATE_TIME }}</span>
        <span>{{ goodsAppraises.SPECS_INFO }}</span>
      </div>
      <div class="test">{{ goodsAppraises.CONTENT }}</div>

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
      <div class="title">查看图文详情</div>
      <div class="main">{{ goodsDetails.content }}</div>
    </div>

    <div class="goodsSpec" v-show="isShow">
           <span style="position: relative">
               <img src="../../images/assess.png">
               <span class="one">价格：¥69</span>
               <span class="two">已选择：</span>
               <span class="three">请选择规格属性</span>
           </span>
      <div style="clear: both"></div>
      <div v-for="sku in sku1">
        <div class="goodsSpecTitle">{{ sku.SPECS_TITLE }}</div>
        <div class="goodsSpecNav">
          <div :class="{ screenNavActive: isActive }" @click="selectGoodsSkuGet(sku.SPECS_ID)">{{ sku.SPECS_NAME }}
          </div>
        </div>
      </div>
      <div style="clear: both"></div>
      <div class="goodsSpecTitle">数量</div>
      <div class="coutter-wrapper">
        <button type="button" @click="minus" class="jian">-</button>
        <button type="button" class="num">{{ result }}</button>
        <button type="button" @click="plus" class="add">+</button>
      </div>
      <div class="goodsSpecBtn f16" @click="hide()">确定</div>
    </div>

    <div class="withdrawCash_bg" v-show="isShow"></div>
  </div>
</template>

<script type="text/javascript">
  import { Toast } from 'mint-ui'

  export default {
    data () {
      return {
        id: '',
        specsId: '',
        goodsId: '',
        count: '',
        result: 0,
        salesCount: '',
        goodsDetails: {},
        goodsAppraises: {},
        buy_num: '',
        cart_list: [],
        sku1: [],
        isShow: false,
        isActive: false
      }
    },
    methods: {
      show: function () {
        this.isShow = true
      },
      hide: function () {
        this.isShow = false
      },
      queryGoodsDetails () {
        this.$http.post('/shopGoodsInfo/queryGoodsDetails', {id: this.$route.params.id})
          .then(response => {
            if (response.data.return_code === '0000') {
              this.goodsDetails = response.data.goodsDetails
              this.goodsAppraises = response.data.goodsAppraises
              this.count = response.data.count
              this.salesCount = response.data.salesCount
              this.sku1 = response.data.sku1
            } else {
              Toast({message: response.data.return_msg, duration: 2000})
            }
          })
          .catch(function () {
            Toast({message: '请求错误', duration: 2000})
          })
      },
      selectGoodsSkuGet (Skuid) {
        this.isActive = true
        this.$http.post('/shopGoodsInfo/selectGoodsSkuGet', {specsId: Skuid, goodsId: this.$route.params.id})
          .then(response => {
            if (response.data.return_code === '0000') { // 查询规格需要验证登录状态
              console.log('查询成功')
            } else {
              Toast({message: response.data.return_msg, duration: 2000})
            }
          })
          .catch(function () {
            Toast({message: '请求错误', duration: 2000})
          })
      },
      minus () {
        this.result--
        this.$emit('input', {res: this.result, other: '--'})
      },
      plus () {
        this.result++
        this.$emit('input', {res: this.result, other: '++'})
      }
    },
    created () {
      this.queryGoodsDetails() // 加载数据
    }
  }
</script>

<style>
  .coutter-wrapper {
    border: 1px solid #dbdbdb;
    line-height: .28rem;
    overflow: hidden;
    margin: .1rem .14rem .8rem .14rem;
    float: left;
    background: #fff;
  }

  .jian, .add {
    display: block;
    height: .28rem;
    width: .42rem;
    float: left;
    color: #7A7979;
    border-right: 1px solid #dbdbdb;
    text-align: center;
    background: none;
    border-left: none;
    border-top: none;
    border-bottom: none;
    font-size: .14rem;
  }

  .num {
    display: block;
    float: left;
    text-align: center;
    width: .52rem;
    font-style: normal;
    font-size: .14rem;
    line-height: .28rem;
    border: 0;
    background: #fff;
  }

  .add {
    float: right;
    border-right: 0;
    border-left: 1px solid #dbdbdb;
  }
</style>
