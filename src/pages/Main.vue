<template>
  <div>
    <div class="banner">
        <div id="banner-title">
          掠影
        </div>
        <input id="banner-input"/>
    </div>
    <div style="text-align: center">
      <picture-display></picture-display>
    </div>
  </div>

</template>

<script>
  import pictureDisplay from '../components/pictureDisplay.vue'
  export default {
    components: {
      pictureDisplay
    },
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

  #background-image{
    width: 100%;
  }

  .banner{
    text-align: center;
    height: 500px;
    background-color: #10cf7d;
  }

  #banner-title{
    font-family: "helvetica neue",arial,sans-serif;
    color: white;
    font-size: 40px;
    padding-top: 150px;
  }

  #banner-input{
    outline: none;
    height: 35px;
    font-size: 20px;
    width: 400px;
    background-color: #E7FAF2;
    border-width: 0;
    padding: 2px 10px;
    margin-top: 20px;
    border-radius: 10px;
  }

</style>
