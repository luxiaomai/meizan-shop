<template>
  <div>
    <div class="loginTab">
      <div class="left" @click="status=1" :class="status==1 ? 'loginTabActive' : ''">账号登录<span
        :class="status==1 ? 'loginBlock' : ''"></span></div>
      <div class="right" @click="status=2" :class="status==2 ? 'loginTabActive' : ''">短信验证码登录<span
        :class="status==2 ? 'loginBlock' : ''"></span></div>
    </div>

    <div class="nameBox" :class="status==1 ? 'loginBlock' : ''">

      <div class="registerInput">
        <input type="tel" id="phone" class="enroll_input" placeholder="输入手机号码" maxlength="11">
        <span class="clear"><img src="../../images/x.png"></span>
        <div class="ico1 hover"><img src="../../images/enroll_ico2.png" style="width: .12rem;height: .16rem;"></div>
      </div>

      <div class="registerInput">
        <input type="password" id="password" class="enroll_input text" placeholder="请输入登录密码">
        <span class="clear1"><img src="../../images/x.png"></span>
        <div class="ico1 hover1"><img src="../../images/enroll_ico4.png" style="width: .16rem;height: .16rem;"></div>
        <div class="ico2 ico-class1"></div>
      </div>

      <div class="forget" style="margin-right: .15rem;"><a href="smsCode.html" style="color: #999;">忘记密码</a></div>
      <div style="clear: both"></div>
      <button type="button" class="loginBtn" disabled>登录</button>

      <div class="wxLogin">
        <div class="wxLoginText">其他登录方式</div>
        <div class="wxLoginImg"><img src="../../images/wx.png"></div>
        <p class="f12 c6">微信登录</p>
      </div>
    </div>
    <div class="codeBox" :class="status==2 ? 'loginBlock' : ''">
      <div class="registerInput">
        <input type="tel" id="newphone" class="enroll_input text1" placeholder="输入手机号码" maxlength="11">
        <span class="clear2"><img src="../../images/x.png"></span>
        <div class="ico1 hover"><img src="../../images/enroll_ico2.png" style="width: .12rem;height: .16rem;"></div>
      </div>

      <div class="enroll">
        <input type="number" pattern="[0-9]*" id="code" class="enroll_input1 text1" placeholder="请输入短信验证码" maxlength="6"
               style="width: 50%;">
        <span class="code1 f12" v-show="show" @click="getCode">获取验证码</span>
        <span class="code1 f12" v-show="!show" @click="count">{{count}} s</span>
        <div class="ico1 hover1"><img src="../../images/enroll_ico3.png" style="width: .12rem;height: .15rem;"></div>
      </div>

      <button type="button" class="loginBtn1" disabled>登录</button>
    </div>
    <div class="wxEnroll">手机快速注册</div>
  </div>
</template>

<script type="text/javascript">
  export default{
    data () {
      return {
        status: 1,
        show: true,
        count: '',
        timer: null
      }
    },
    methods: {
      getCode () {
        const TIME_COUNT = 60
        if (!this.timer) {
          this.count = TIME_COUNT
          this.show = false
          this.timer = setInterval(() => {
            if (this.count > 0 && this.count <= TIME_COUNT) { this.count-- } else {
              this.show = true
              clearInterval(this.timer)
              this.timer = null
            }
          }, 1000)
        }
      }
    }
  }
</script>
