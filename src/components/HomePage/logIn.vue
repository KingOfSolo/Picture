<template>
  <div>
    <div class="container">
      <div class="message signup" v-bind:class="{transformSignUp: showSign}">
        <div class="btn-wrapper">
          <button v-if="showSignButton" class="button" id="signup" @click="showSignUp">没有账号？赶紧注册加入</button>
          <button v-else class="button" id="login" @click="showLogin">已有账号？登录浏览美图</button>
        </div>
      </div>
      <div class="form form--signup">
        <div class="form--heading">欢迎加入掠影</div>
        <form autocomplete="off">
          <input type="text" placeholder="账号">
          <!--<input type="email" placeholder="Email">-->
          <input type="password" placeholder="密码">
          <button class="button">注册</button>
        </form>
      </div>
      <div class="form form--login">
        <div class="form--heading">欢迎来到掠影</div>
        <form autocomplete="off">
          <input type="text" placeholder="账号">
          <input type="password" placeholder="密码">
          <button class="button">登录</button>
        </form>
      </div>
    </div>
  </div>
</template>


<script>
  export default{
    data () {
      return {
        showSign: false,
        showSignButton: false
      }
    },
    methods: {
      showLogin () {
        this.showSign = true
        this.showSignButton = true
      },
      showSignUp () {
        this.showSign = false
        this.showSignButton = false
      },
      init () {
      }
    },
    mounted () {
      this.init()
    }
  }
</script>

<style>
  @import "../../style/scss/login.css";

  .transformSignUp{
    transform: translateX(0);
  }


</style>
