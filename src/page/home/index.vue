<template>
  <div>
    <app-banner :listImg="listImg"></app-banner>
    <router-link></router-link>
  </div>
</template>

<script>
  import Banner from '../template/Banner.vue'
  import Footer from '../template/Footer.vue'
  export default{
    name: 'index',
    data () {
      return {
        listImg: [{
          url: 'https://img1.360buyimg.com/da/jfs/t15847/334/613979012/180567/6cd6603d/5a37317dNafea8b1f.jpg'
        }, {
          url: 'https://img1.360buyimg.com/da/jfs/t12571/57/2316760604/100605/d08e0f0d/5a3a32a5N77d9abf8.jpg'
        }, {
          url: 'https://m.360buyimg.com/mobilecms/s1125x549_jfs/t14686/47/751063528/192742/56a05122/5a3767eeN02e870ee.jpg!q70.jpg'
        }]
      }
    },
    components: {
      'app-banner': Banner,
      'router-link': Footer
    }
  }
</script>
