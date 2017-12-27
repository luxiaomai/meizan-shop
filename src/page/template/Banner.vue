<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="str in listImg" :style="{ backgroundImage: 'url(' + str.url + ')' }"></div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'

  export default {
    props: ['listImg'],
    mounted () {
      var swiper = new Swiper('.swiper-container', {
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
