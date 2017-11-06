<template>
  <el-container class="hello">
    <el-header id="header">
      <el-button type="text" class="header-button">登录</el-button>
      <el-button type="text" class="header-button">注册</el-button>
    </el-header>
    <el-main id="main">
      <!--<img src="../assets/background.jpg">-->
    </el-main>
  </el-container>
</template>

<script>
  export default {
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
<style scoped>
  #main{
    padding: 0;
    margin: -60px;
  }

  #header{
    background-color: #81eec1;
    padding: 0 10% 0 10%;
    opacity: 0.5;
  }

  .header-button{
    color: white;
    font-size: 18px;
  }

  .header-button:hover{
    color: #10e08a;
  }
</style>
