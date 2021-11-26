<template lang="pug">
.head
  .top
    i.headLogo
    h3 Website Redesign
    button.settings
    .users
      img(src="../assets/img/ilon.jpg" alt="pic1")
      img(src="../assets/img/pig.jpg" alt="pic2")
      img(src="../assets/img/Ze.jpg" alt="pic3")
    button.share Share
    button.chat Chat
  nav
    ul
      li(v-for="(link, index) in links" :key="'link'+index")
        router-link(:to="'/'+ link.pathName" :active-class="'active'") {{link.name}}
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Header',
  data () {
    return {
      links: [
        {
          pathName: 'tasks',
          name: 'Tasks'
        },
        {
          pathName: 'kanban',
          name: 'Kanban'
        },
        {
          pathName: 'activity',
          name: 'Activity'
        },
        {
          pathName: 'calendar',
          name: 'Calendar'
        },
        {
          pathName: 'files',
          name: 'Files'
        }
      ]
    }
  }
})
</script>

<style scoped lang="scss">
  .head {
    display: flex;
    flex-wrap: wrap;

    background-color: #FFFFFF;
    max-width: 100%;

    padding-left: 30px;
    padding-right: 30px;

    @media screen and (max-width:460px) {
      padding-left: 5px;
      padding-right: 5px;
    }

    .top {
      display: flex;
      align-items: center;

      width: 100%;
      height: 40px;

      margin-top: 40px;

      @media screen and (max-width:700px) {
        min-height: 150px;
        flex-wrap: wrap;
      }

      .headLogo{
        min-width: 40px;
        min-height: 40px;
        border-radius: 25%;
        background-color: gold;
        position: relative;
        margin-right: 15px;

        @media screen and (max-width:460px) {
          margin-left: 12px;
        }

        &::before{
          background-image: url("../assets/img/Shapes@2x.png");
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          content: '';
          background-size: 40px;
        }
      }

      h3 {
        font-size: 32px;
        color: #131313;
        white-space: nowrap;

        @media screen and (max-width: 700px) {
          width: auto;
        }

        @media screen and (max-width: 460px) {
          width: 75%
        }
      }

      .settings{
        position: relative;
        min-width: 30px;
        height: 30px;
        background: none;
        margin-left: 11px;
        &::before{
          background-image: url("../assets/img/setting.svg");
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          content: '';
        }
      }

      button {
        @media screen and (max-width: 700px) {
          margin-right: 10px;
        }
      }

      .users{
        display: flex;
        justify-content: right;
        width: 100%;

        @media screen and (max-width:700px) {
          justify-content: left;
          width: auto;
        }

        @media screen and (max-width: 460px) {
          justify-content: left;
          width: 80%;
          margin-left: 10px;
        }

        img{
          width: 30px;
          height: 30px;
          border-radius: 100%;
          margin-right: 11px;
        }
      }

      .share{
        min-width: 67px;
        height: 30px;
        border-radius: 15px;
        margin-left: 10px;
        font-size: 14px;

        background: #EAEAEA;
        color: #131313;
      }

      .chat{
        min-width: 81px;
        height: 30px;
        border-radius: 15px;
        margin-left: 15px;
        font-size: 14px;

        background: #FFF8DD;
        color: #FFC200;

        position: relative;
        padding-left: 20px;

        &::before{
          background-image: url("../assets/img/Combined_Shape@1x.svg");
          background-repeat: no-repeat;
          background-position: 15px center;
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          content: '';
        }
      }
    }

    nav{
      width: 100%;
      margin-top: 21px;
      margin-bottom: 14px;

      ul {
        list-style: none;

        li {
          float:left;
          margin-right:30px;

          @media screen and (max-width: 460px) {
            margin-right: 5px;
          }

          a {
            text-decoration: none;

            opacity: 0.7;
            font-size: 16px;
            color: #131313;

            &.active{
              position: relative;
              opacity: 1;

              &::before{
                width: 100%;
                height: 2px;
                background: #FFC200;
                position: absolute;
                content: '';
                bottom: -14px;
              }
            }
          }
        }

      }
    }
  }
</style>
