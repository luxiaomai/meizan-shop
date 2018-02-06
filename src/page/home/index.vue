<template>
  <div>
    <div class="indexSearch">
      <router-link to="/search"><img src="../../images/search.png">搜索商品</router-link>
    </div>

    <app-banner :AdList="AdList"></app-banner>

    <new-list :newList="newList"></new-list>
    <div class="indexNav">
      <ul>
        <li>
          <router-link to="/" class="Arouter-link">
            <i class="icon-one"></i>
            <span>热门产品</span>
          </router-link>
        </li>
        <li>
          <router-link to="/" class="Arouter-link">
            <i class="icon-two"></i>
            <span>特价促销</span>
          </router-link>
        </li>
        <li>
          <router-link to="/" class="Arouter-link">
            <i class="icon-three"></i>
            <span>新品上架</span>
          </router-link>
        </li>
        <li>
          <router-link to="/" class="Arouter-link">
            <i class="icon-four"></i>
            <span>我的订单</span>
          </router-link>
        </li>
      </ul>
    </div>

    <div class="goodsList">
      <div class="title">
        <div class="left"><i></i>热门产品</div>
        <div class="right">更多<img src="../../images/right.png"></div>
      </div>
      <div class="banner"></div>

      <router-link v-for="(TjList, index) in goodsTjList" :key="index" :to="'/good/details/'+TjList.ID" v-if="index < 4" class="indexMain">
        <ul>
          <li>
            <div><img :src="TjList.SHOW_IMAGE_URL"/></div>
            <div>{{ TjList.GOODS_NAME }}</div>
            <div>{{ TjList.GOODS_TITLE }}</div>
            <div>￥{{ TjList.PRICE }}</div>
          </li>
        </ul>
      </router-link>

    </div>

    <!--<router-link v-for="(shop, index) in shopGoodsInfoList" :key="index" :to="'/good/details/'+shop.ID" class="indexMain">
      <ul>
        <li>
          <div><img :src="shop.SHOW_IMAGE_URL"/></div>
          <div>{{ shop.GOODS_NAME }}</div>
          <div>{{ shop.GOODS_TITLE }}</div>
          <div>￥{{ shop.PRICE }}</div>
        </li>
      </ul>
    </router-link>-->
    <div style="height: .6rem;clear: both"></div>

    <footer-link></footer-link>
  </div>
</template>

<script>
  import Banner from '../template/Banner.vue'
  import Footer from '../template/Footer.vue'
  import NewList from '../template/IndexNew.vue'
  import { Toast } from 'mint-ui'

  export default{
    name: 'index',
    data () {
      return {
        ID: '',
        shopGoodsInfoList: [], // 初始化参数
        goodsTjList: [],
        goodsYhList: [],
        goodsXpList: [],
        goodsJfList: [],
        AdList: [],
        imageUrl: '',
        page: { // 分页数据
          page: 1 // 当前页
        },
        newList: [{
          title: '美赞包子铺深圳店隆重开张'
        }, {
          title: '美赞包子铺上海店隆重开张'
        }, {
          title: '美赞包子铺广州店隆重开张'
        }, {
          title: '美赞包子铺北京店隆重开张'
        }]
      }
    },
    components: {
      'app-banner': Banner,
      'footer-link': Footer,
      'new-list': NewList
    },
    methods: {
      goodsList () {
        this.$http.post('/shopGoodsInfo/queryList', this.page)
          .then(response => {
            if (response.data.return_code === '0000') {
              this.shopGoodsInfoList = response.data.shopGoodsInfoList // 赋值给数组
            } else if (response.data.return_code === '0001') {}
          })
          .catch(function () {
            Toast({message: '请求错误', duration: 2000})
          })
      },
      goodsInfoList () {
        this.$http.post('/shopGoodsInfo/queryGoodsInfoList')
          .then(response => {
            if (response.data.return_code === '0000') {
              this.goodsTjList = response.data.goodsTjList // 赋值给数组
              this.goodsTj = response.data.goodsTj
            } else if (response.data.return_code === '0001') {}
          })
          .catch(function () {
            Toast({message: '请求错误', duration: 2000})
          })
      },
      AdListImg () {
        this.$http.post('/bsAd/queryAdList')
          .then(response => {
            if (response.data.return_code === '0000') {
              this.AdList = response.data.adList // 赋值给数组
              this.imageUrl = response.data.imageUrl
              console.log(this.AdList)
            } else if (response.data.return_code === '0001') {}
          })
          .catch(function () {
            Toast({message: '请求错误', duration: 2000})
          })
      }
    },
    mounted () {
      this.goodsList() // 加载数据
      this.goodsInfoList()
      this.AdListImg()
    }
  }
</script>
