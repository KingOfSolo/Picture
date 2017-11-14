<template>
  <div style="text-align: center">
    <picture-display></picture-display>
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
  #main{
    height: 1000px;
  }

  #background-image{
    width: 100%;
  }
</style>
