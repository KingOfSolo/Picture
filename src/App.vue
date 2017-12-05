<template>
  <div id="app">
    <div id="header">
      <el-button type="text" id="logo">logo</el-button>
      <div id="login">
        <div>
          <el-input id="search" placeholder="请输入内容"><img slot="suffix" class="el-input__icon" src="./assets/search.svg"></el-input>
        </div>
        <div v-if="isLogin">
          <el-button type="text" class="header-button" @click="isLogin = false">登录</el-button>
          <el-button type="text" class="header-button" @click="loginDialogVisible = true">注册</el-button>
        </div>
        <div v-else>
          <el-dropdown style="margin-left: 10px" @command="handleCommand">
          <span class="el-dropdown-link">
            <img id="head-portrait" src="./assets/user.jpg"/>
          </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="d">我的掠影</el-dropdown-item>
              <el-dropdown-item command="a">账号设置</el-dropdown-item>
              <el-dropdown-item command="c">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>
    <div id="main">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>
    <el-dialog
      :visible.sync="loginDialogVisible"
      width="30%">
      <login></login>
    </el-dialog>
  </div>
</template>

<script>
  import ElButton from './../node_modules/element-ui/packages/button/src/button'
  import ElDropdownItem from '../node_modules/element-ui/packages/dropdown/src/dropdown-item'
  import Login from './components/logIn.vue'
  export default {
    components: {
      ElDropdownItem,
      ElButton,
      Login},
    name: 'app',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        value1: '',
        color: 'white',
        isLogin: true,
        loginDialogVisible: false,
        showClose: false
      }
    },
    methods: {
      handleCommand (command) {
        if (command === 'a') {
          this.$router.push({name: 'UserSetting', params: {userId: '0001'}})
        } else if (command === 'd') {
          this.$router.push({name: 'UserCenter', params: {userId: '0001'}})
        } else if (command === 'c') {
          this.isLogin = true
          this.$router.push({name: 'Main'})
        }
      }
    }
  }
</script>

<style>
  body{
    margin: 0;
  }


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
  background-color: #f3f3f3;
}
  #main{
    padding: 0;
    margin-top: 60px;
  }

  #logo{
    margin-left: 10%;
  }

  /*#search{*/
  /*margin-right: 10px;*/
  /*width: 250px !important;*/
  /*border-radius: 20px !important;*/
  /*border: 1px solid black !important;*/
  /*}*/

  #login .el-input{
    width: 250px;
    height: 33px;
  }

  #login .el-input__inner{
    width: 250px;
    height: 33px;
    font-size: 14px;
    /*border: 1px solid #e9e9e9;*/
    border-radius: 20px;
    background-color: #f7f8f9;
  }

  #login .el-input__icon{
    width: 15px;
    margin-right: 5px;
  }


  /*.el-input__suffix-inner{*/
  /*height: 33px;*/
  /*}*/

  #header{
    position: fixed;
    left:0;
    top: 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    background-color: white;
    /*padding: 0 100px 0 100px;*/
    height: 60px;
    box-shadow: 0 0 5px #d2d2d2;
    z-index: 100;
  }

  #login{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-grow: 1;
    margin-right: 10%;
  }

  .header-button{
    /*color: #020202;*/
    font-size: 18px;
    margin-left: 10px;

  }

  .header-button:hover{
    color: #10cf7d;
  }

  #head-portrait{
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
</style>
