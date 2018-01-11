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
        <input type="tel" class="enroll_input" placeholder="输入手机号码" maxlength="11" @focus="focusPhone()"
               @blur="blurPhone()" v-model="pForm.mobileNo">
        <!--<span class="clear" v-show="isShow"><img src="../../images/x.png"></span>-->
        <div class="ico1"><img :src="require('../../images/enroll_ico' + phone + '.png')"
                                     style="width: .12rem;height: .16rem;"></div>
      </div>

      <div class="registerInput">
        <input type="password" class="enroll_input text" placeholder="请输入登录密码" @focus="focusPassword()"
               @blur="blurPassword()" v-model="pForm.password">
       <!-- <span class="clear1"><img src="../../images/x.png"></span>-->
        <div class="ico1"><img :src="require('../../images/enroll_ico' + password + '.png')"
                                      style="width: .16rem;height: .16rem;"></div>
        <div class="ico2 ico-class1"></div>
      </div>

      <div class="forget">忘记密码</div>
      <div style="clear: both"></div>
      <button type="button" class="loginBtn" @click="login()" :disabled="!pForm.mobileNo || !pForm.password">登录</button>

      <div class="wxLogin">
        <div class="wxLoginText">其他登录方式</div>
        <div class="wxLoginImg"><img src="../../images/wx.png"></div>
        <p class="f12 c6">微信登录</p>
      </div>
    </div>
    <div class="codeBox" :class="status==2 ? 'loginBlock' : ''">
      <div class="registerInput">
        <input type="tel" class="enroll_input text1" placeholder="输入手机号码" maxlength="11" @focus="focusPhone()"
               @blur="blurPhone()"
               v-model="pForm.mobileNo">
       <!-- <span class="clear2"><img src="../../images/x.png"></span>-->
        <div class="ico1"><img :src="require('../../images/enroll_ico' + phone + '.png')"
                                     style="width: .12rem;height: .16rem;"></div>
      </div>

      <div class="enroll">
        <input type="tel" pattern="[0-9]*" id="code" class="enroll_input1 text1" placeholder="请输入短信验证码" maxlength="6"
               @focus="focusCode()" @blur="blurCode()" v-model="pForm.smsCode">
        <span class="code1 f12" v-show="show" @click="sendSms()">获取验证码</span>
        <span class="code f12" v-show="!show" @click="count">{{count}} s</span>
        <div class="ico1"><img :src="require('../../images/enroll_ico' + code + '.png')"
                                      style="width: .12rem;height: .15rem;"></div>
      </div>

      <button type="button" class="loginBtn1" @click="codeLogin()" :disabled="!pForm.mobileNo || !pForm.smsCode">登录
      </button>
    </div>
    <router-link to="/register" class="wxEnroll">手机快速注册</router-link>
  </div>
</template>

<script type="text/javascript">
  import { Toast } from 'mint-ui'
  export default{
    data () {
      return {
        status: 1,
        phone: '2',
        code: '3',
        password: '4',
        show: true,
        count: '',
        timer: null,
        isShow: false,
        a: true,
        pForm: {
          mobileNo: '',
          password: '',
          smsCode: ''
        }
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
      },
      focusPhone: function () {
        this.phone = '2-1'
      },
      blurPhone: function () {
        this.phone = '2'
      },
      focusPassword: function () {
        this.password = '4-1'
      },
      blurPassword: function () {
        this.password = '4'
      },
      focusCode: function () {
        this.code = '3-1'
      },
      blurCode: function () {
        this.code = '3'
      },
      login () {
        if (!(/^1[3|4|5|7|8]\d{9}$/.test(this.pForm.mobileNo))) {
          Toast({message: '手机号码有误', duration: 2000})
        } else if (!(/^[0-9a-zA-Z_!@#$%^&*]{8,16}$/.test(this.pForm.password))) {
          Toast({message: '密码格式有误', duration: 2000})
        } else {
          this.$http.post('/v1/userInfo/login', this.pForm)
            .then(response => {
              if (response.data.return_code === '0000') {
                Toast({message: response.data.return_msg, duration: 2000})
                this.$router.replace({path: '/index'})
              } else if (response.data.return_code === '0001') {
                Toast({message: response.data.return_msg, duration: 2000})
              }
            })
            .catch(function () {
              Toast({message: '请求错误', duration: 2000})
            })
        }
      },
      codeLogin () {
        if (!(/^1[3|4|5|7|8]\d{9}$/.test(this.pForm.mobileNo))) {
          console.log('请填写正确的手机号码')
        } else {
          this.$http.post('/v1/userInfo/smsLogin', this.pForm)
            .then(response => {
              if (response.data.return_code === '0000') {
                Toast({message: response.data.return_msg, duration: 2000})
                this.$router.replace({path: '/index'})
              } else if (response.data.return_code === '0001') {
                Toast({message: response.data.return_msg, duration: 2000})
              }
            })
            .catch(function () {
              Toast({message: '请求错误', duration: 2000})
            })
        }
      },
      sendSms () {
        this.$http.post('/v1/userInfo/sendLoginSms', this.pForm)
          .then(response => {
            if (response.data.return_code === '0000') {
              Toast({message: response.data.return_msg, duration: 2000})
              this.getCode()
            } else {
              Toast({message: response.data.return_msg, duration: 2000})
            }
          })
      }
    }
  }
</script>

<style>
  body {
    background: #fff;
  }
</style>
