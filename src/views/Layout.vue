<template lang="pug">
.page
  SideBar(:notifiCounter="notifications")
  .rightPanel
    Header
    Content(@changeNotify="notifications = $event")
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SideBar from '@/components/SideBar.vue'
import Header from '@/components/Header.vue'
import Content from '@/components/Content.vue'

export default defineComponent({
  name: 'Layout',
  components: {
    SideBar,
    Header,
    Content
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

    @media screen and (max-width: 950px) {
      display: inline;
    }

    h1 {
      font-family: Helvetica;
      font-size: 32px;
      color: #131313;
    }

    h2 {
      font-family: Helvetica;
      font-size: 20px;
      color: #FFFFFF;
    }

    h3 {
      font-family: Helvetica;
      font-size: 16px;
      color: #FFFFFF;
      line-height: 24px;
    }

    h4 {
      font-family: Helvetica;
      font-size: 14px;
      color: #FFFFFF;
    }

    h5 {
      font-family: Helvetica;
      font-size: 12px;
      color: #9B9B9B;
    }

    .rightPanel {
      max-width: 1170px;
      background-color: #F7F6F3;
    }
  }

</style>
