<template lang="pug">
section
  h4.today TODAY
  .message-container(v-for="(group, index) in groups" :key="'group' + index")
    i(:class="group.icon")
    p {{group.text}}
    p.time {{group.date}}
    .comment(v-if="group.comment")
      p {{group.comment}}
    .imgs(v-if="group.imgs")
      img(v-for="(img, i) in group.imgs" :key="'img' + i" :src="require('../assets/img/' + img)" :alt="'img_' + i" @click="changeNotify(i)")
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Tasks',
  data () {
    return {
      groups: [
        {
          icon: 'check',
          text: 'Darika Samak mark as done Listing on Product Hunt so that we can reach as many potential users',
          date: '8:40 PM'
        },
        {
          icon: 'message',
          text: 'Emilee Simchenko commented on Account for teams and personal in bottom style',
          comment: 'During a project build, it is necessary to evaluate the product design and ' +
            'development against project requirements and outcomes',
          date: '7:32 PM'
        },
        {
          icon: 'download',
          text: 'Darika Samak uploaded 4 files on An option to search in current projects or in all projects',
          date: '6:02 PM',
          imgs: ['Lada.jpg', 'cat.jpeg', '1.jpg', 'guss.jpg']
        }
      ]
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
  section {
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

    .message-container {
      display: flex;
      flex-wrap: wrap;
      padding-top: 30px;

      i{
        padding-top: 30px;
        margin-right: 20px;

        min-width: 40px;
        min-height: 40px;
        border-radius: 50%;
        position: relative;

        &.check {
          background-color: #CEF9C6;

          &::before {
            background-image: url("../assets/img/Icon@3x.svg");
          }
        }

        &.message {
          background-color: #FFF8DD;;

          &::before {
            background-image: url("../assets/img/message.png");
          }
        }

        &.download {
          background-color: #E3EFFF;

          &::before {
            background-image: url("../assets/img/download.png");
          }
        }

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

      p{
        font-size: 16px;
        color: #131313;
        line-height: 20px;
        margin-right: auto;
        max-width: 461px;
        max-height: 40px;
      }

      .time {
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

      .comment{
        display: flex;
        justify-content: center;

        padding-left: 30px;
        padding-right: 30px;

        width: 551px;
        height: 88px;
        margin-top: 20px;
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
          max-width: unset;
          max-height: unset;
        }
      }

      .imgs{
        width: 100%;
        margin-top: 20px;
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
