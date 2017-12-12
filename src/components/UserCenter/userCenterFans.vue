<template>
  <div id="user-center-fans">
    <div class="waterfall">
      <div class="item" v-for="item in fansList">
        <follow-item :user-head="item.headUrl" :username="item.nickName" :fans-num="item.fans" :follow-num="item.follows" :user-id="item.id"></follow-item>
      </div>
    </div>
  </div>
</template>

<script>
  import FollowItem from './followItem.vue'
  export default{
    props: ['fansList'],
    components: {
      FollowItem
    },
    data () {
      return {
      }
    },
    mounted () {
    }
  }
</script>

<style>
  @import "../../style/scss/userCenterFollow.css";
</style>
