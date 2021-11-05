<template lang="pug">
.page
  LeftPanel(:notifiCounter="notifications")
  RightPanel(@changeNotify="notifications = $event")
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LeftPanel from '@/components/LeftPanel.vue'
import RightPanel from '@/components/RightPanel.vue'

export default defineComponent({
  name: 'Home',
  components: {
    LeftPanel,
    RightPanel
  },
  data () {
    return {
      notifications: 3
    }
  }
})
</script>

<style scoped lang="scss">
  .page {
    display: flex;
    justify-content: center;
    //max-width: 1440px;
    height: 100vh;
    margin: auto;
    background-color: rgb(34, 34, 34);

    @media screen and (max-width:950px){
      display: inline;
    }

    h1{
      font-family: Helvetica;
      font-size: 32px;
      color: #131313;
    }
    h2{
      font-family: Helvetica;
      font-size: 20px;
      color: #FFFFFF;
    }
    h3{
      font-family: Helvetica;
      font-size: 16px;
      color: #FFFFFF;
      line-height: 24px;
    }
    h4{
      font-family: Helvetica;
      font-size: 14px;
      color: #FFFFFF;
    }
    h5{
      font-family: Helvetica;
      font-size: 12px;
      color: #9B9B9B;
    }
  }
</style>
