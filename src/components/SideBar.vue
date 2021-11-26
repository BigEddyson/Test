<template lang="pug">
.sidebar
  .leftPanelTop
    i.logo
    h1 PROJECTUS
    i.search
  .leftPanelInfo
    img(src='../assets/img/test.png' alt="avatar")
    p#name
      | Dmytro Gordon
      br
      span#who Porno star
    button
  .leftTask
    p.compTaskEvent#completedTask(@click="openPopup()") {{completedTask}}
    p#openTask(@click="openTasks()") {{openTask}}
    p.compTaskEvent#completed(@click="openPopup()") Completed Task
    p#open(@click="openTasks()") Open Task
  .nawBar
    h2 MENU
    ul
      li
        a(href="#") Home
      li
        a(href="#") My Tasks
      li
        a(href="#") Notifications
          span#notifiCounter {{notifiCounter}}
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SideBar',
  props: {
    notifiCounter: {
      type: Number,
      default: 3
    }
  },
  data () {
    return {
      completedTask: 372,
      openTask: 11
    }
  },
  methods: {
    openPopup () {
      if (confirm('Did you really complete the task?')) {
        if (this.openTask > 0) {
          this.completedTask = this.completedTask + 1
          this.openTask = this.openTask - 1
        }
      }
    },
    openTasks () {
      if (this.openTask > 0) {
        this.$router.push({ path: '/tasks' })
      }
    }
  }
})
</script>

<style scoped lang="scss">
  .sidebar{
    display: flex;
    flex-direction: column;
    background-color: black;
    min-width: 270px;

    .leftPanelTop {
      display: flex;
      align-items:center;
      min-height: 84px;

      .logo{
        width: 21.6px;
        height: 20px;
        margin-left: 30.4px;
        margin-right: 13px;
        position: relative;
        &::before{
          background-image: url("../assets/img/Logo@3x.svg");
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          content: '';
        }
      }

      h1{
        font-size: 16px;
        color: #FFFFFF;
        line-height: 24px
      }

      .search{
        position: relative;
        width: 16px;
        height: 16px;
        margin-left: auto;
        margin-right: 25.1px;

        &::before{
          background-image: url("../assets/img/Search@3x.svg");
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          content: '';
        }
      }
    }

    .leftPanelInfo {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items:center;
      background: #202020;
      width: 100%;
      min-height: 80px;
      line-height: 20px;

      img{
        margin-left: 30px;
        margin-right: 15px;
        width: 48px;
        height: 48px;
        border-radius: 48px;
      }

      #name{
        font-size: 14px;
        color: #FFFFFF;
      }

      #who{
        font-size: 12px;
        color: #9B9B9B;
      }

      button{
        position: relative;
        margin-left: auto;
        margin-right: 20px;
        width: 4px;
        height: 4px;
        border-radius: 50px;
        background: #D8D8D8;
        &::before, &::after{
          position: absolute;
          top: 0;
          width: 4px;
          height: 4px;
          border-radius: 50px;
          background: #D8D8D8;
          content:'';
        }
        &::before{
          left: 6px;
        }
        &::after{
          right: 6px;
        }
      }
    }

    .leftTask {
      display: flex;
      flex-wrap: wrap;
      padding-left: 30px;
      margin-top: 20px;
      line-height: 25px;

      #completedTask, #openTask{
        font-size: 20px;
        color: #FFFFFF;
        width: 50%;
      }
      #completed, #open{
        opacity: 0.5;
        font-size: 12px;
        color: #FFFFFF;
        width: 50%;
      }
      #completed{
        cursor: pointer;
      }
    }

    .nawBar{
      margin-left: 30px;
      margin-top: 31px;

      h2{
        font-size: 12px;
        color: #878787;
        line-height: 18px;
        margin-bottom: 19px
      }

      ul {
        list-style: none;

        li {
          margin-right:5px;
          margin-bottom: 16px;

          a {
            text-decoration: none;
            font-size: 14px;
            color: #FFFFFF;
            line-height: 22px;
            display: flex;

            span{
              display: flex;
              font-size: 13px;
              color: #131313;
              background: #FFC200;
              width: 20px;
              height: 20px;
              border-radius: 100%;
              justify-content: center;
              margin-left: 10px;
            }
          }
        }
      }
    }
  }
</style>
