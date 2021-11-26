<template lang="pug">
.content
  router-view(@changeNotify="$emit('changeNotify', $event)")
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Content'
})
</script>

<style scoped lang="scss">
  .content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    margin-top: 30px;
  }
</style>
