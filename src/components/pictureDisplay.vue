<template>
  <div id="picture-display">
    <div class="post-item">
      <div class="post-body">
        <img src="../assets/picture.jpg" class="image"/>
        <div class="image-mask" @click="showDialog">
        </div>
      </div>
    </div>
    <div>
      <div id="picture-display-bottom">
        <img src="../assets/user.jpg"/>
        <span style="cursor: pointer">只为红颜</span>
        <div id="picture-display-button">
          <span class="picture-icon" style="padding-right: 10px" v-bind:class="{redColor: isHeart}" @click="heartClick">
            <i class="fa fa-heart"></i><span class="picture-icon-num">{{ heartNum }}</span></span>
          <span class="picture-icon"><i class="fa fa-comments"></i><span class="picture-icon-num">0</span></span>
        </div>
      </div>
    </div>
    <el-dialog :visible.sync="dialogVisible" class="image-dialog" fullscreen>
      <div class="picture-main">
        <div class="swiper-container gallery-top">
          <div class="swiper-wrapper">
            <div class="swiper-slide" style="background-image:url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1510851908612&di=4f6802ca072e04fc08d442c97fdc7f39&imgtype=0&src=http%3A%2F%2Fimg.juimg.com%2Ftuku%2Fyulantu%2F140313%2F330457-14031320362254.jpg"></div>
            <div class="swiper-slide" style="background-image:url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1510851972954&di=7b4dbe74de1d4ffe1e1f18fbabafe28b&imgtype=0&src=http%3A%2F%2Fimg15.3lian.com%2F2015%2Fa1%2F14%2Fd%2F23.jpg)"></div>
          </div>
          <!-- Add Arrows -->
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>

        <div class="swiper-container gallery-thumbs">
          <div class="swiper-wrapper">
            <div class="swiper-slide swiper-slide-active" style="background-image:url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1510851908612&di=4f6802ca072e04fc08d442c97fdc7f39&imgtype=0&src=http%3A%2F%2Fimg.juimg.com%2Ftuku%2Fyulantu%2F140313%2F330457-14031320362254.jpg)"></div>
            <div class="swiper-slide" style="background-image:url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1510851972954&di=7b4dbe74de1d4ffe1e1f18fbabafe28b&imgtype=0&src=http%3A%2F%2Fimg15.3lian.com%2F2015%2Fa1%2F14%2Fd%2F23.jpg)"></div>
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>


<script>
  import Swiper from '../../static/swiper.min.js'
  export default{
    data () {
      return {
        currentDate: new Date(),
        showMask: false,
        isHeart: false,
        heartNum: 0,
        dialogVisible: false
      }
    },
    methods: {
      heartClick: function () {
        if (this.isHeart) {
          this.isHeart = !this.isHeart
          this.heartNum -= 1
        } else {
          this.isHeart = !this.isHeart
          this.heartNum += 1
        }
      },
      showDialog: function () {
        this.dialogVisible = true
      }
    },
    mounted () {
      var galleryTop = new Swiper('.gallery-top', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 10
      })

      var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true
      })

      galleryTop.params.control = galleryThumbs
      galleryThumbs.params.control = galleryTop
    }
  }
</script>

<style>
  @import "../style/font-awesome-4.7.0/css/font-awesome.min.css";
  @import "../../static/swiper.min.css";

  #picture-display{
    height: 441px;
    width: 508px;
    display: inline-block;
    padding: 7px;
    position: relative;
    vertical-align: top;
    padding: 5px 5px 66px;
    margin-left: 0px;
    margin-bottom: 0px;
  }

  .post-item{
    position: absolute;
    left: 5px;
    right: 5px;
    top: 5px;
    bottom: 65px;
    background-color: #ffffff;
  }

  .post-body{
    position: absolute;
    left: 6px;
    top:6px;
    right: 6px;
    bottom: 0px;
  }

  .image{
    width: 100%;
    height: 100%;
    display: block;
    cursor:pointer;
    background-color: rgb(160, 161, 154);
    background-size: cover;
    background-position: center;
  }

  .image-mask{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    /*background-color: #000000;*/
    color: #fff;
    transition: opacity .2s;
    opacity: 0;
    cursor: pointer ;
    background: #000000; /* For browsers that do not support gradients */
    background: -webkit-radial-gradient(circle, #444444, #222222, #000000); /* Safari */
    background: -o-radial-gradient(circle, #444444, #222222, #000000); /* Opera 11.6 to 12.0 */
    background: -moz-radial-gradient(circle, #444444, #222222, #000000); /* Firefox 3.6 to 15 */
    background: radial-gradient(circle, #444444, #222222, #000000); /* Standard syntax */
  }

  .image-mask:hover{
    opacity: 0.5;
  }

  #picture-display-bottom{
    position: absolute;
    bottom: 5px;
    left: 5px;
    right: 5px;
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    height: 60px;
    background-color: white;
    font-size: 15px;
    color: #222222;
  }

  /*#picture-display .button {*/
    /*padding: 0;*/
    /*float: right;*/
  /*}*/

  .image {
    width: 100%;
    display: block;
  }

  #picture-display-bottom img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    padding-right: 3px;
    padding-left: 5px;
    cursor: pointer;
  }

  #picture-display-button{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    flex-grow: 1;
    padding-right: 5px;
  }

  #picture-display-button img{
    width: 20px;
    height: 20px;
    border-radius: 0;
  }

  .picture-icon{
    line-height: 1;
    color: #e0e0e0;
    font-size: 15px;
    cursor: pointer;
  }

  .picture-icon-num{
    color: #222222;
    margin-left: 5px;
  }

  .redColor{
    color: #e60905;
  }

  #picture-display .el-dialog__wrapper{
    padding: 25px 50px 25px 50px;
  }

  #picture-display .el-dialog__header{
    height: 30px;
    font-size: 15px;
  }

  .picture-main{
    position: absolute;
    top: 55px;
    right: 320px;
    bottom: 0;
    left: 0;
  }

  /*.picture-main .gallery-top{*/
    /*position: absolute;*/
    /*top: 0;*/
    /*bottom: 110px;*/
    /*left: 0;*/
    /*right: 0;*/
  /*}*/

  /*.picture-main .gallery-thumbs{*/
    /*position: absolute;*/
    /*bottom: 0;*/
    /*height: 110px;*/
    /*width: 100%;*/
  /*}*/

  /*.gallery-thumbs {*/
    /*height: 20%;*/
    /*box-sizing: border-box;*/
    /*padding: 10px 0;*/
  /*}*/
  /*.gallery-thumbs .swiper-slide {*/
    /*width: 25%;*/
    /*height: 100%;*/
    /*opacity: 0.4;*/
  /*}*/
  /*.gallery-thumbs .swiper-slide-active {*/
    /*opacity: 1;*/
  /*}*/

  .swiper-container {
    width: 100%;
    height: 300px;
    margin-left: auto;
    margin-right: auto;
  }
  .swiper-slide {
    background-size: cover;
    background-position: center;
  }
  .gallery-top {
    height: 80%;
    width: 100%;
  }
  .gallery-thumbs {
    height: 20%;
    box-sizing: border-box;
    padding: 10px 0;
  }
  .gallery-thumbs .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.4;
  }
  .gallery-thumbs .swiper-slide-active {
    opacity: 1;
  }
</style>
