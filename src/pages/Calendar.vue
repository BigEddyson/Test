<template lang="pug">
DummyComponent
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DummyComponent from '../components/DummyComponent.vue'

export default defineComponent({
  name: 'Calendar',
  components: {
    DummyComponent
  }
})
</script>
