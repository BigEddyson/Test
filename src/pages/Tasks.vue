<template lang="pug">
section
  .task(v-for="(task, index) in list" :key="'task'+ index")
    p {{task.name}}
    p {{task.description}}
    p {{task.date}}
</template>

<script lang="ts">
import { defineComponent } from 'vue'

interface TasksInterface {
  name: string;
  description: string;
  date: string;
}

export default defineComponent({
  name: 'Tasks',
  data () {
    return {
      list: [
        {
          name: 'Task 1',
          description: 'Darika Samak mark as done Listing on',
          date: '2021/11/11'
        }, {
          name: 'Task 2',
          description: 'Darika Samak mark as done Listing on',
          date: '2021/11/11'
        }, {
          name: 'Task 3',
          description: 'Darika Samak mark as done Listing on',
          date: '2021/11/11'
        }
      ] as Array<TasksInterface>
    }
  }
})
</script>

<style scoped lang="scss">
  section {
    width: 600px;
    height: 400px;
    background: white;
    border-radius: 20px;
    padding: 30px;

    .task {
      display: flex;
      justify-content: space-between;

      p{
        font-size: 14px;
        font-weight: bold;
      }
    }
  }
</style>
