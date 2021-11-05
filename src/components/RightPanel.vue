<template lang="pug">
.rightPanel
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
        li
          a.link(:class="{'active': activeLink === 'tasks'}" href="#" @click="activeLink = 'tasks'") Tasks
        li
          a.link(:class="{'active': activeLink === 'kanban'}" href="#" @click="activeLink = 'kanban'") Kanban
        li
          a.link(:class="{'active': activeLink === 'activity'}" href="#" @click="activeLink = 'activity'") Activity
        li
          a.link(:class="{'active': activeLink === 'calendar'}" href="#" @click="activeLink = 'calendar'") Calendar
        li
          a.link(:class="{'active': activeLink === 'files'}" href="#" @click="activeLink = 'files'") Files
  .frontSpase
    h4.today TODAY
    .message_0
      i
      p Darika Samak mark as done Listing on Product Hunt so that we can reach as many potential users
      p.time0 8:40 PM
    .message_1
      i
      p Emilee Simchenko commented on Account for teams and personal in bottom style
      p.time1 7:32 PM
    .message_2
      p During a project build, it is necessary to evaluate the product design
        and development against project requirements and outcomes
    .message_3
      i
      p Darika Samak uploaded 4 files on An option to search in current projects or in all projects
      p.time3 6:02 PM
    #imgs
      img(v-for="(img, i) in imgs" :key="i" :src="require('../assets/img/' + img)" :alt="'lada_' + i" @click="changeNotify(i)")
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'RightPanel',
  data () {
    return {
      activeLink: 'activity',
      imgs: ['Lada.jpg', 'cat.jpeg', '1.jpg', 'guss.jpg']
    }
  },
  methods: {
    changeNotify (index: number) {
      this.$emit('changeNotify', index)
    }
  }
})
</script>

<style scoped lang="scss">
  .rightPanel {
    //display: none;
    max-width: 1170px;
    background-color:#F7F6F3;

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

    .frontSpase {
      margin-top: 30px;
      margin-left: auto;
      margin-right: auto;

      width: 730px;
      height: 591px;
      background-color: white;

      border-radius: 8px;
      padding-left: 30px;

      @media screen and (max-width:700px) {
        width: auto;
      }

      h4 {
        opacity: 0.5;
        font-size: 14px;
        color: #131313;
        margin-left: 30px;
        padding-top: 35px
      }

      .time0, .time1, .time3{
        opacity: 0.7;
        font-size: 14px;
        color: #131313;
        text-align: right;
        line-height: 20px;
        margin-right: 30px;

        @media screen and (max-width:700px) {
          margin-left: 5px;
          margin-right: 5px;
        }
      }

      p{
        font-size: 16px;
        color: #131313;
        line-height: 20px;
        margin-right: auto;
      }

      .message_0, .message_1, .message_3{
        display: flex;

        p{
          max-width: 461px;
          max-height: 40px;
        }

        i{
          padding-top: 30px;
          margin-right: 20px;

          min-width: 40px;
          min-height: 40px;
          border-radius: 50%;
          position: relative;
          &::before{
            background-repeat: no-repeat;
            background-position: 14px center;
            background-size: 14px;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            content: '';
          }
        }
      }

      .message_0{
        padding-top: 30px;

        i{
          background-color: #CEF9C6;
          &::before{
            background-image: url("../assets/img/Icon@3x.svg");
          }
        }
      }

      .message_1{
        padding-top: 30px;
        padding-bottom: 20px;

        i{
          background-color: #FFF8DD;;
          &::before{
            background-image: url("../assets/img/message.png");
          }
        }
      }

      .message_2{
        display: flex;
        justify-content: center;

        padding-left: 30px;
        padding-right: 30px;

        width: 551px;
        height: 88px;
        margin-left: auto;
        margin-right: auto;
        background-color: #F7F6F3;
        border-radius: 10px;

        @media screen and (max-width:700px) {
          width: auto;
          margin-top: 5px;
          margin-bottom: 5px;
        }

        p{
          margin: auto;
        }
      }

      .message_3{
        padding-top: 30px;
        padding-bottom: 20px;

        @media screen and (max-width:700px) {
          padding-top: 5px;
          padding-bottom: 30px;
        }

        i{
          background-color: #E3EFFF;
          &::before{
            background-image: url("../assets/img/download.png");
          }
        }
      }

      #imgs{
        img{
          width: 100px;
          height: 100px;
          border-radius: 8px;
          margin-right: 10px;
          cursor: pointer;
          background-color: #ccc;

          &:first-child{
            margin-left: 90px;
          }
        }
      }
    }
  }
</style>
