<template>
  <div>
    <div class="classifyHeader">
      <div class="indexSearch1">
        <router-link to="/search"><img src="../../images/search.png">搜索商品</router-link>
      </div>
    </div>
    <div>
      <div class="classifyNav">
        <ul>
<!--          <li class="indexNavOneActive" v-for="list in shopCategoryInfoList" @click="chartClassify()">
            {{ list.categoryName }}
            <span></span>
          </li>-->
          <li v-for="list in shopCategoryInfoList" @click="chartClassify()">
            {{ list.categoryName }}
          </li>
        </ul>
      </div>
      <div class="classifyMain">
<!--        <router-link v-for="(shop, index) in shopGoodsInfoList" :key="index" :to="'/good/details/'+shop.ID" class="indexMain">
          <ul>
            <li>
              <div><img :src="shop.SHOW_IMAGE_URL"/></div>
              <div>{{ shop.GOODS_NAME }}</div>
              <div>{{ shop.GOODS_TITLE }}</div>
              <div>￥{{ shop.PRICE }}</div>
            </li>
          </ul>
        </router-link>-->
        <div class="classifyList">
          <router-link v-for="(shop, index) in shopGoodsInfoList" :key="index" :to="'/good/details/'+shop.ID" class="indexMain">
            <div class="classifyListMain">
              <div><img :src="shop.SHOW_IMAGE_URL"/></div>
              <div class="classifyList-text">
                <p>{{ shop.GOODS_NAME }}</p>
                <p>{{ shop.GOODS_TITLE }}</p>
                <p>￥{{ shop.PRICE }}</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <footer-link></footer-link>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui'
  import Footer from '../template/Footer.vue'
  export default{
    name: 'classify',
    data () {
      return {
        shopCategoryInfoList: {},
        shopGoodsInfoList: [],
        pForm: {
          page: 1,
          limit: 10,
          parentId: 0
        },
        page: { // 分页数据
          page: 1 // 当前页
        },
      }
    },
    methods: {
      queryShopCategoryInfoList () {
        this.$http.post('/shopCategoryInfo/queryShopCategoryInfoList', this.pForm)
          .then(response => {
            if (response.data.return_code === '0000') {
              this.shopCategoryInfoList = response.data.shopCategoryInfoList // 赋值给数组
            } else {
              Toast({message: response.data.return_msg, duration: 2000})
            }
          })
          .catch(function () {
            Toast({message: '请求错误', duration: 2000})
          })
      },
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
    },
    created () {
      this.queryShopCategoryInfoList()
      this.goodsList()
    },
    components: {
      'footer-link': Footer
    }
  }
</script>

<style>
  body{
    background: #fff;
  }
</style>
