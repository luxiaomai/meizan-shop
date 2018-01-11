<template>
  <div>
    <div class="registerInput">
      <input type="tel" class="enroll_input text1" placeholder="输入手机号码" maxlength="11" @focus="focusPhone()" @blur="blurPhone()" v-model="pForm.mobileNo">
      <div class="ico1"><img :src="require('../../images/enroll_ico' + phone + '.png')" style="width: .12rem;height: .16rem;"></div>
    </div>

    <div class="enroll">
      <input type="tel" pattern="[0-9]*" class="enroll_input1 text1" placeholder="请输入短信验证码" maxlength="6" @focus="focusCode()" @blur="blurCode()" v-model="pForm.smsCode">
      <span class="code1 f12" v-show="show" @click="sendSms()">获取验证码</span>
      <span class="code f12" v-show="!show" @click="count">{{count}} s</span>
      <div class="ico1"><img :src="require('../../images/enroll_ico' + code + '.png')" style="width: .12rem;height: .15rem;"></div>
    </div>

    <div class="registerInput">
      <input type="text" class="enroll_input text" placeholder="请输入15个字符以内昵称" maxlength="15" v-model="pForm.nickName" @focus="focusName()" @blur="blurName()">
      <div class="ico1"><img :src="require('../../images/enroll_ico' + name + '.png')" style="width: .16rem;height: .17rem;"></div>
    </div>

    <div class="registerInput">
      <input type="password" class="enroll_input text" placeholder="请输入6-20位数字或字母" maxlength="20" @focus="focusPassword()" @blur="blurPassword()" v-model="pForm.password">
      <div class="ico1"><img :src="require('../../images/enroll_ico' + password + '.png')" style="width: .16rem;height: .16rem;"></div>
    </div>

    <div class="agreement f12">
      <img :src="require('../../images/radio' + radio + '.png')" class="agreementActive" @click="radioHover()">
      <span class="c9">我已阅读并同意</span><span class="xieyi">《服务协议》</span><span class="yinsi">《隐私政策》</span>
    </div>

    <button type="button" class="loginBtn" @click="login()" :disabled="!pForm.mobileNo || !pForm.password || !pForm.smsCode || !pForm.nickName">完成注册并登录</button>
  </div>
</template>

<script type="text/javascript">
  import { Toast } from 'mint-ui'
  export default{
    data () {
      return {
        radio: '',
        name: '1',
        phone: '2',
        code: '3',
        password: '4',
        show: true,
        count: '',
        timer: null,
        pForm: {
          mobileNo: '',
          password: '',
          smsCode: '',
          nickName: '',
          device_type: 'pc',
          sendType: 'regSend'
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
      radioHover () {
        this.radio = '-1'
      },
      focusName: function () {
        this.name = '1-1'
      },
      blurName: function () {
        this.name = '1'
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
        } else if (this.radio === '') {
          Toast({message: '请勾选协议政策', duration: 2000})
        } else {
          this.$http.post('/v1/userInfo/userRegister', this.pForm)
            .then(response => {
              if (response.data.return_code === '0000') {
                Toast({message: response.data.return_msg, duration: 2000})
                this.$router.replace({path: '/login'})
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
        if (!(/^1[3|4|5|7|8]\d{9}$/.test(this.pForm.mobileNo))) {
          Toast({message: '手机号码有误', duration: 2000})
        } else {
          this.$http.post('/v1/userInfo/sendRegisterSms', this.pForm)
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
  }
</script>

<style>
  body {
    background: #fff;
  }
</style>
