<template>
  <div id="app">
    <div id="header">
      <el-button type="text" id="logo" @click="toHome">掠影</el-button>
      <div id="login">
        <div>
          <el-input id="search" placeholder="请输入内容"><img slot="suffix" class="el-input__icon" src="./assets/search.svg"></el-input>
        </div>
        <div v-if="isLogin">
          <!--<el-button type="text" class="header-button" @click="login">登录</el-button>-->
          <el-button type="text" class="header-button" @click="loginDialogVisible = true">登录</el-button>
        </div>
        <div v-else>
          <el-dropdown style="margin-left: 10px" @command="handleCommand">
          <span class="el-dropdown-link">
            <img id="head-portrait" :src="headUrl"/>
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
      width="750px">
      <login v-on:signUpSuccess="loginSuccess"></login>
    </el-dialog>
  </div>
</template>

<script>
  import ElButton from './../node_modules/element-ui/packages/button/src/button'
  import ElDropdownItem from '../node_modules/element-ui/packages/dropdown/src/dropdown-item'
  import Login from './components/HomePage/logIn.vue'
  export default {
    components: {
      ElDropdownItem,
      ElButton,
      Login},
    name: 'app',
    created: function () {
      this.checkCookie()
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        value1: '',
        color: 'white',
        isLogin: true,
        loginDialogVisible: false,
        showClose: false,
        headUrl: ''
      }
    },
    methods: {
      toHome: function () {
        this.$router.push({name: 'Main'})
      },
      login: function () {
        this.isLogin = false
        this.$http({
          method: 'post',
          dataType: 'JSONP',
          url: '/login/signIn',
          data: {
            username: 'test',
            password: '123456'
          }
        }).then(function (res) {
        }).catch(function (err) {
          alert(err)
        })
      },
      handleCommand (command) {
        if (command === 'a') {
          this.$router.push({name: 'UserSetting', params: {userId: '0001'}})
        } else if (command === 'd') {
          var loginId = this.$cookie.get('loginId') + ''
          this.$router.push({name: 'UserCenter', params: {userId: loginId}})
        } else if (command === 'c') {
          this.isLogin = true
          this.$router.push({name: 'Main'})
          this.$cookie.delete('token')
          this.$cookie.delete('loginId')
        }
      },
      loginSuccess (token, state) {
        this.loginDialogVisible = false
        this.isLogin = false
        console.log(token)
        var self = this
        this.$http({
          method: 'post',
          dataType: 'JSONP',
          url: '/user/UserInfo',
          data: {
            token: token
          }
        }).then(function (res) {
          console.log(res)
          var data = res.data.data
          self.headUrl = data.headUrl
          self.$cookie.set('token', token)
          self.$cookie.set('loginId', data.id)
        }).catch(function (err) {
          alert(err)
        })
      },
      checkCookie () {
        var token = this.$cookie.get('token')
        if (token !== '' && token !== null) {
          var self = this
          this.$http({
            method: 'post',
            dataType: 'JSONP',
            url: '/user/UserInfo',
            data: {
              token: token
            }
          }).then(function (res) {
            var data = res.data.data
            self.headUrl = data.headUrl
            self.loginDialogVisible = false
            self.isLogin = false
          }).catch(function (err) {
            alert(err)
          })
        } else {
        }
      }
    }
  }
</script>

<style>
  body{
    margin: 0;
    background-color: #f3f3f3;
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
    font-size: large;
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
