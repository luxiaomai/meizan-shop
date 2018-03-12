<template>
  <div>
    <div class="personal-header">
      <div class="personal-header-main">
          <div class="name">
              <div class="left"><img src="../../images/headerImg.png"></div>
              <div class="right">
                <p>鹿鹿鹿先森的店</p>
                <p>高级会员</p>
              </div>
          </div>
          <div class="points">11111积分</div>
      </div>
      <div class="personal-pay">
        <div class="left">
          <p>账户余额（元）</p>
          <p>8888.88</p>
        </div>
        <div class="right">充值</div>
      </div>
    </div>
<div style="clear: both"></div>
    <div class="personal-nav">
      <ul>
        <li>
          <a href="#">
            <img src="../../images/personalNav.png">
            <span>待付款</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="../../images/personalNav1.png">
            <span>待审核</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="../../images/personalNav2.png">
            <span>待发货</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="../../images/personalNav3.png">
            <span>待评价</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="../../images/personalNav4.png">
            <span>待收货</span>
          </a>
        </li>
      </ul>
    </div>

    <div class="personal-list">
      <div class="left">
        <img src="../../images/liushui.png">
        <span>交易流水</span>
      </div>
      <div class="right"><img src="../../images/right.png"></div>
    </div>

    <div class="personal-list">
      <div class="left">
        <img src="../../images/yongjin.png">
        <span>我的佣金</span>
      </div>
      <div class="right"><img src="../../images/right.png"></div>
    </div>

    <div class="personal-list">
      <div class="left">
        <img src="../../images/renzheng.png">
        <span>店铺认证</span>
      </div>
      <div class="right"><img src="../../images/right.png"></div>
    </div>

    <div class="personal-list">
      <div class="left">
        <img src="../../images/daili.png">
        <span>代理商</span>
      </div>
      <div class="right"><img src="../../images/right.png"></div>
    </div>

    <div class="personal-list">
      <div class="left">
        <img src="../../images/shezhi.png">
        <span>账户设置</span>
      </div>
      <div class="right"><img src="../../images/right.png"></div>
    </div>

    <div class="personal-list">
      <div class="left">
        <img src="../../images/kefu.png">
        <span>客服电话</span>
      </div>
      <div class="right"><img src="../../images/right.png"></div>
    </div>

    <div class="personal-list">
      <div class="left">
        <img src="../../images/fankui.png">
        <span>反馈意见</span>
      </div>
      <div class="right"><img src="../../images/right.png"></div>
    </div>

    <footer-link></footer-link>
  </div>
</template>


<script>
  import Footer from '../template/Footer.vue'

  export default {
    data () {
      return {
      }
    },
    components: {
      'footer-link': Footer
    }
  }
</script>

<style>
  body{
    background: #fff;
    padding-bottom: .8rem;
  }
</style>
