<template>
  <div>
    <div class="recharge-main">
      ￥<input type="tel" class="recharge-input" placeholder="请输入充值金额" maxlength="11" v-model="mobileNo">
    </div>
    <div class="recharge-title">选择支付方式</div>
    <div class="recharge-alipay">
      <div class="left">
        <img src="../../images/alipay.png">
        <span>支付宝支付</span>
      </div>
      <div class="right"><img src="../../images/radio.png"></div>
    </div>
    <div class="recharge-wx">
      <div class="left">
        <img src="../../images/wx1.png">
        <span>微信支付</span>
      </div>
      <div class="right"><img src="../../images/radio.png"></div>
    </div>

    <button type="button" class="loginBtn1" :disabled="!mobileNo">确定支付</button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        mobileNo: ''
      }
    }
  }
</script>
<style>
  body{
    background: #fafafa;
  }
</style>
