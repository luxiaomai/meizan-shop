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

    <button type="button" class="loginBtn" @click="forget()" :disabled="!pForm.mobileNo || !pForm.smsCode">下一步</button>
  </div>
</template>

<script type="text/javascript">
  import { Toast } from 'mint-ui'
  export default{
    data () {
      return {
        phone: '2',
        code: '3',
        show: true,
        count: '',
        timer: null,
        pForm: {
          mobileNo: '',
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
      focusCode: function () {
        this.code = '3-1'
      },
      blurCode: function () {
        this.code = '3'
      },
      forget () {
        if (!(/^1[3|4|5|7|8]\d{9}$/.test(this.pForm.mobileNo))) {
          Toast({message: '手机号码有误', duration: 2000})
        } else {
          this.$http.post('/v1/userInfo/verifySms', this.pForm)
            .then(response => {
              if (response.data.return_code === '0000') {
                Toast({message: response.data.return_msg, duration: 2000})
                this.$router.replace({path: '/resetPassword', query: { mobileNo: this.pForm.mobileNo }})  // query用于传递参数
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
  }
</script>

<style>
  body {
    background: #fff;
  }
</style>
