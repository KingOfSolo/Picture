<template>
  <div id="header">
    <el-button type="text" id="logo">logo</el-button>

    <!--<el-input id="search"-->
              <!--placeholder="请输入内容"-->
              <!--prefix-icon="el-icon-search">-->
    <!--</el-input>-->

    <div id="login">
      <el-button type="text" class="header-button">登录</el-button>
      <el-button type="text" class="header-button">注册</el-button>
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
<style scoped>
  #main{
    padding: 0;
    margin-top: -60px;
  }

  #logo{
  }

  #search{
    margin-right: 10px;
    width: 250px;
  }

  #header{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 0 10% 0 10%;
    height: 60px;
  }

  #login{
    display: flex;
    justify-content: flex-end;
    flex-grow: 1;
  }

  .header-button{
    /*color: white;*/
    font-size: 18px;

  }

  .header-button:hover{
    color: #10cf7d;
  }
</style>
