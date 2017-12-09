<template>
  <div id="user-center-follow">
    <div class="waterfall">
      <div class="item" v-for="item in followList">
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
        followList: [
          {
            userHead: 'https://picsum.photos/100/100',
            username: '浅安时光',
            followNum: 0,
            fansNum: 0
          },
          {
            userHead: 'https://picsum.photos/150/150',
            username: '浅安时光',
            followNum: 0,
            fansNum: 0
          },
          {
            userHead: 'https://picsum.photos/120/120',
            username: '浅安时光',
            followNum: 0,
            fansNum: 0
          },
          {
            userHead: 'https://picsum.photos/130/130',
            username: '浅安时光',
            followNum: 0,
            fansNum: 0
          },
          {
            userHead: 'https://picsum.photos/125/125',
            username: '浅安时光',
            followNum: 0,
            fansNum: 0
          },
          {
            userHead: 'https://picsum.photos/164/164',
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
            userHead: 'https://picsum.photos/167/167',
            username: '浅安时光',
            followNum: 0,
            fansNum: 0
          },
          {
            userHead: 'https://picsum.photos/168/168',
            username: '浅安时光',
            followNum: 0,
            fansNum: 0
          },
          {
            userHead: 'https://picsum.photos/169/169',
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
