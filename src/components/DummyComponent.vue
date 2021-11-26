<template lang="pug">
section
  h1 Coming soon…
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DummyComponent'
})
</script>

<style scoped lang="scss">
  section {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
      color: black;
      font-size: 46px;
    }
  }
</style>
