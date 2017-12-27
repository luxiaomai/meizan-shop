<template>
  <div class="indexNew">
    <span><img src="../../images/toutiao.png"></span>
    <div class="verticalLine"></div>
    <div class="swiper-container1">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in newList"><b></b>{{ item.title }}</div>
      </div>
      <span class="right"><img src="../../images/right.png"></span>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'

  export default {
    props: ['newList'],
    mounted () {
      var swiper = new Swiper('.swiper-container1', {
        direction: 'vertical',
        centeredSlides: true,
        autoplay: true,
        speed: 600,
        loop: true,
        onTouchEnd: function () {
          swiper.startAutoplay()
        }
      })
    }
  }
</script>
