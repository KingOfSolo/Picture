<template>
  <div>
    <div id="header">
      <el-button type="text" id="logo">logo</el-button>

      <div id="login">
        <el-input id="search" placeholder="请输入内容"></el-input>
        <el-button type="text" class="header-button">登录</el-button>
        <el-button type="text" class="header-button">注册</el-button>
      </div>

    </div>
    <div id="main">
      <img src="../assets/logo.png"/>
    </div>
  </div>
</template>

<script>
  import ElButton from '../../node_modules/element-ui/packages/button/src/button'
  export default {
    components: {ElButton},
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        value1: '',
        color: 'white'
      }
    },
    methods: {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  #main{
    padding: 0;
    height: 1000px;
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

  .el-input{
    width: 250px;
    height: 33px;
  }

  .el-input__inner{
    width: 250px;
    height: 33px;
    font-size: 13px;
    border: 1px solid #e9e9e9;
    border-radius: 20px;
  }

  #header{
    position: fixed;
    left:0;
    top: 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    background-color: #f2f2f2;
    /*padding: 0 100px 0 100px;*/
    height: 60px;
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

  }

  .header-button:hover{
    color: #10cf7d;
  }
</style>
