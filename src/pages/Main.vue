<template>
  <div>
    <img src="../assets/background.jpg" id="background-image"/>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
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

  #background-image{
    width: 100%;
  }
</style>
