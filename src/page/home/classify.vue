<template>
  <div>
    <router-link></router-link>
  </div>
</template>

<script>
  import Footer from '../template/Footer.vue'
  export default{
    name: 'classify',
    components: {
      'router-link': Footer
    }
  }
</script>
