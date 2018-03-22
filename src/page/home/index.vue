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
      <div class="banner"><img :src="goodsTj.imageUrl"></div>
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
      <div style="clear: both"></div>
    </div>

    <div class="goodsList">
      <div class="title">
        <div class="left"><i></i>特价促销</div>
        <div class="right">更多<img src="../../images/right.png"></div>
      </div>
      <div class="banner"><img :src="goodsYh.imageUrl"></div>
      <router-link v-for="(YhList, index) in goodsYhList" :key="index" :to="'/good/details/'+YhList.ID" v-if="index < 4" class="indexMain">
        <ul>
          <li>
            <div><img :src="YhList.SHOW_IMAGE_URL"/></div>
            <div>{{ YhList.GOODS_NAME }}</div>
            <div>{{ YhList.GOODS_TITLE }}</div>
            <div>￥{{ YhList.PRICE }}</div>
          </li>
        </ul>
      </router-link>
      <div style="clear: both"></div>
    </div>

    <div class="goodsList">
      <div class="title">
        <div class="left"><i></i>新品上架</div>
        <div class="right">更多<img src="../../images/right.png"></div>
      </div>
      <div class="banner"><img :src="goodsXp.imageUrl"></div>
      <router-link v-for="(XpList, index) in goodsXpList" :key="index" :to="'/good/details/'+XpList.ID" v-if="index < 4" class="indexMain">
        <ul>
          <li>
            <div><img :src="XpList.SHOW_IMAGE_URL"/></div>
            <div>{{ XpList.GOODS_NAME }}</div>
            <div>{{ XpList.GOODS_TITLE }}</div>
            <div>￥{{ XpList.PRICE }}</div>
          </li>
        </ul>
      </router-link>
      <div style="clear: both"></div>
    </div>

    <div class="goodsList">
      <div class="title">
        <div class="left"><i></i>积分兑换</div>
        <div class="right">更多<img src="../../images/right.png"></div>
      </div>
      <div class="banner"><img :src="goodsJf.imageUrl"></div>
      <router-link v-for="(JfList, index) in goodsJfList" :key="index" :to="'/good/details/'+JfList.ID" v-if="index < 4" class="indexMain">
        <ul>
          <li>
            <div><img :src="JfList.SHOW_IMAGE_URL"/></div>
            <div>{{ JfList.GOODS_NAME }}</div>
            <div>{{ JfList.GOODS_TITLE }}</div>
            <div>￥{{ JfList.PRICE }} + {{ JfList.POINT }}积分</div>
          </li>
        </ul>
      </router-link>
      <div style="clear: both"></div>
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

  export default {
    name: 'index',
    data () {
      return {
        ID: '',
        shopGoodsInfoList: [], // 初始化参数
        goodsTjList: [],
        goodsYhList: [],
        goodsXpList: [],
        goodsJfList: [],
        goodsTj: {},
        goodsYh: {},
        goodsXp: {},
        goodsJf: {},
        AdList: [],
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
              this.goodsYhList = response.data.goodsYhList
              this.goodsXpList = response.data.goodsXpList
              this.goodsJfList = response.data.goodsJfList
              this.goodsTj = response.data.goodsTj
              this.goodsYh = response.data.goodsYh
              this.goodsXp = response.data.goodsXp
              this.goodsJf = response.data.goodsJf
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
              this.AdList = response.data.adList
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
206> 211.5> 210> 205.5> 207>
51.5> 双
全场：单
