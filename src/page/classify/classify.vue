<template>
  <div>
    <div class="indexSearch1">
      <router-link to="/search"><img src="../../images/search.png">搜索商品</router-link>
    </div>
    <div>
      <div class="classifyNav">
        <ul>
          <li class="indexNavOneActive" v-for="list in shopCategoryInfoList">
            {{ list.categoryName }}
            <span></span>
          </li>
        </ul>
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
        pForm: {
          page: 1,
          limit: 10,
          parentId: 0
        }
      }
    },
    methods: {
      queryShopCategoryInfoList () {
        this.$http.post('/v1/shopCategoryInfo/queryShopCategoryInfoList', this.pForm)
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
      }
    },
    created () {
      this.queryShopCategoryInfoList()
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
