<template lang="pug">
section
  h1 Page Not found
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NotFound'
})
</script>

<style scoped lang="scss">
  section {
    width: 600px;
    height: 400px;
    background: white;
    border-radius: 20px;
    padding: 30px;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
      font-size: 36px;
    }
  }
</style>
