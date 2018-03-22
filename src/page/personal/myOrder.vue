<template>
  <div>
    <ul class="order-tabs">
     <li class="tabs-list" v-for="(item,index) in tabs" @click="toggleTabs(index)" :class="{tabsActive:index==nowIndex}" >{{ item }}</li>
    </ul>
    <div class="divTab" v-show="nowIndex===0">我是tab1</div>
    <div class="divTab" v-show="nowIndex===1">我是tab2</div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        tabs: ['全部', '待付款', '待审核', '待发货', '待评价', '待收货'],
        nowIndex: 0
      }
    },
    methods: {
      toggleTabs: function (index) {
        this.nowIndex = index
      }
    }
  }
</script>
