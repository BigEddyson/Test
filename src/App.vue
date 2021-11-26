<template lang="pug">
Layout
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Layout from '@/views/Layout.vue'

export default defineComponent({
  name: 'App',
  components: {
    Layout
  }
})
</script>

<style lang="scss">
  @import 'assets/styles/reset.scss';
  @import 'assets/styles/fonts.scss';

  h1, h2, h3, h4, h5, h6, p, span, a, button {
    font-family: Helvetica;
  }
</style>
