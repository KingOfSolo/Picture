<template>
  <div class="album-item" v-on:click="test">
    <div class="album-item-main">
      <div class="album-item-img1">
        <img :src="imgUrlList[0]"/>
      </div>
      <div class="album-item-aside">
        <div class="album-item-img2">
          <img v-if=" photoNum >= 2 " :src="imgUrlList[1]"/>
        </div>
        <div class="album-item-img3">
          <img v-if=" photoNum >= 3 " :src="imgUrlList[2]"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    props: ['userHead', 'username', 'albumName', 'photoNum', 'imgUrlList'],
    data () {
      return {
        photoNumber: this.photoNum
      }
    },
    methods: {
      test: function () {
        alert(this.photoNum)
      }
    },
    computed: {
//      showImage2: function () {
//        if (this.photoNumber >= 2) {
//          return true
//        }
//        return false
//      },
//      showImage3: function () {
//        if (this.photoNumber >= 3) {
//          return true
//        }
//        return false
//      }
    }
  }
</script>

<style>
  .album-item img{
    object-fit: cover;
  }

  .album-item-main{
    display: flex;
    flex-grow: 1;
    border-radius: 6px;
    overflow: hidden;
    height: 300px;
    cursor: pointer;
    transition: all 0.2s;
  }

  .album-item-main:hover{
    opacity: 0.9;
  }

  .album-item-img1{
    width: 70%;
    position: relative;
  }

  .album-item-img1 img{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    overflow: hidden;
  }

  .album-item-aside{
    flex-direction: column;
    width: 30%;
    margin-left: 2px;
    display: flex;
  }

  .album-item-img2{
    flex-grow: 1;
    margin-bottom: 2px;
    background-color: #f5f5f5;
    position: relative;
  }

  .album-item-img2 img{
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
  }

  .album-item-img3{
    flex-grow: 1;
    background-color: #f5f5f5;
    position: relative;
  }

  .album-item-img3 img{
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
  }
</style>
