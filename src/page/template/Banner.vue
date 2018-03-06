<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="str in AdList" :style="{ backgroundImage: 'url(' + str.imageUrl + ')' }"></div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'

  export default {
    props: ['AdList'],
    mounted () {
      let swiper = new Swiper('.swiper-container', {
        loop: true,
        speed: 300,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        onTouchEnd: function () {
          swiper.startAutoplay()
        },
        observeParents: false, // 修改swiper的父元素时，自动初始化swiper
        observer: true // 修改swiper自己或子元素时，自动初始化swiper
      })
    }
  }
</script>
