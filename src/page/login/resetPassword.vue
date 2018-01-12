<template>
  <div>
    <div class="registerInput">
      <input type="password" class="enroll_input text" placeholder="请输入6-20位数字或字母" maxlength="20" @focus="focusPassword()" @blur="blurPassword()" v-model="pForm.newPassword">
      <div class="ico1"><img :src="require('../../images/enroll_ico' + password + '.png')" style="width: .16rem;height: .16rem;"></div>
    </div>

    <button type="button" class="loginBtn" @click="reset()" :disabled="!pForm.newPassword">完成</button>

    <div style="font-size: .12rem;color: #999;text-align: center;margin-top: .2rem;">密码格式应为8-16位数字，字符或符号，不允许有空格</div>
  </div>
</template>

<script type="text/javascript">
  import { Toast } from 'mint-ui'
  export default{
    data () {
      return {
        phone: '2',
        password: '4',
        pForm: {
          mobileNo: '', // 设置空参数名用于接收
          newPassword: ''
        }
      }
    },
    methods: {
      focusPassword: function () {
        this.password = '4-1'
      },
      blurPassword: function () {
        this.password = '4'
      },
      reset () {
        if (!(/^[0-9a-zA-Z_!@#$%^&*]{8,16}$/.test(this.pForm.newPassword))) {
          Toast({message: '密码格式有误', duration: 2000})
        } else {
          this.pForm.mobileNo = this.$route.query.mobileNo  // 接收从上个页面传过来的参数
          this.$http.post('/v1/userInfo/resetPassword', this.pForm)
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
      }
    }
  }
</script>

<style>
  body {
    background: #fff;
  }
</style>
