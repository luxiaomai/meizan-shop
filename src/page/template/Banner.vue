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
        speed: 600,
        autoplay: true,
        onTouchEnd: function () {
          swiper.startAutoplay()
        }
      })
    }
  }
</script>
