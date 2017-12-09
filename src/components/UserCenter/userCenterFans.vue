<template>
  <div id="user-center-fans">
    <div class="waterfall">
      <div class="item" v-for="item in fansList">
        <follow-item :user-head="item.userHead" :username="item.username" :fans-num="item.fansNum" :follow-num="item.followNum"></follow-item>
      </div>
    </div>
  </div>
</template>

<script>
  import FollowItem from './followItem.vue'
  export default{
    components: {
      FollowItem
    },
    data () {
      return {
        fansList: [
          {
            userHead: 'https://picsum.photos/101/101',
            username: '浅安时光',
            followNum: 0,
            fansNum: 0
          },
          {
            userHead: 'https://picsum.photos/151/151',
            username: '浅安时光',
            followNum: 0,
            fansNum: 0
          },
          {
            userHead: 'https://picsum.photos/121/121',
            username: '浅安时光',
            followNum: 0,
            fansNum: 0
          },
          {
            userHead: 'https://picsum.photos/131/131',
            username: '浅安时光',
            followNum: 0,
            fansNum: 0
          },
          {
            userHead: 'https://picsum.photos/126/126',
            username: '浅安时光',
            followNum: 0,
            fansNum: 0
          },
          {
            userHead: 'https://picsum.photos/165/165',
            username: '浅安时光',
            followNum: 0,
            fansNum: 0
          },
          {
            userHead: 'https://picsum.photos/166/166',
            username: '浅安时光',
            followNum: 0,
            fansNum: 0
          },
          {
            userHead: 'https://picsum.photos/167/167',
            username: '浅安时光',
            followNum: 0,
            fansNum: 0
          },
          {
            userHead: 'https://picsum.photos/169/169',
            username: '浅安时光',
            followNum: 0,
            fansNum: 0
          },
          {
            userHead: 'https://picsum.photos/170/170',
            username: '浅安时光',
            followNum: 0,
            fansNum: 0
          },
          {
            userHead: 'https://picsum.photos/171/171',
            username: '浅安时光',
            followNum: 0,
            fansNum: 0
          }
        ]
      }
    }
  }
</script>

<style>
  @import "../../style/scss/userCenterFollow.css";
</style>
