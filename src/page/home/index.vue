<template>
  <div>
    <div class="indexSearch">
      <router-link to="/"><img src="../../images/search.png">搜索商品</router-link>
    </div>
    <app-banner :listImg="listImg"></app-banner>
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
    <router-link to="/good/details" class="indexMain">
      <ul>
        <li v-for="shop in shopGoodsInfoList">
          <div><img :src="shop.SHOW_IMAGE_URL"/></div>
          <div>{{ shop.GOODS_NAME }}</div>
          <div>{{ shop.GOODS_TITLE }}</div>
          <div>￥{{ shop.PRICE }}</div>
        </li>
      </ul>
    </router-link>
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
        shopGoodsInfoList: [], // 初始化参数
        page: { // 分页数据
          page: 1 // 当前页
        },
        listImg: [{
          url: 'https://img1.360buyimg.com/da/jfs/t15847/334/613979012/180567/6cd6603d/5a37317dNafea8b1f.jpg'
        }, {
          url: 'https://img1.360buyimg.com/da/jfs/t12571/57/2316760604/100605/d08e0f0d/5a3a32a5N77d9abf8.jpg'
        }, {
          url: 'https://m.360buyimg.com/mobilecms/s1125x549_jfs/t14686/47/751063528/192742/56a05122/5a3767eeN02e870ee.jpg!q70.jpg'
        }],
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
        this.$http.post('/v1/shopGoodsInfo/queryList', this.page)
          .then(response => {
            if (response.data.return_code === '0000') {
              this.shopGoodsInfoList = response.data.shopGoodsInfoList // 赋值给数组
            } else if (response.data.return_code === '0001') {}
          })
          .catch(function () {
            Toast({message: '请求错误', duration: 2000})
          })
      }
    },
    created () {
      this.goodsList() // 加载数据
    }
  }
</script>
