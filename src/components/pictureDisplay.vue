<template>
  <div id="picture-display">
    <div class="post-item">
      <div class="post-body" v-on:mouseenter="imageMaskEnter" v-on:mouseleave="imageMaskLeave">
        <img src="../assets/picture.jpg" class="image"/>
        <div class="image-mask" v-bind:class="{maskOpacity: maskShow}" @click="showDialog"></div>
        <div id="picture-display-bottom" v-if="pictureContentShow">
          <img src="../assets/user.jpg"/>
          <span style="cursor: pointer">只为红颜</span>
          <div id="picture-display-button">
          <span class="picture-icon" style="padding-right: 10px" v-bind:class="{redColor: isHeart}" @click="heartClick">
            <i class="fa fa-heart"></i><span class="picture-icon-num">{{ heartNum }}</span></span>
            <span class="picture-icon"><i class="fa fa-comments"></i><span class="picture-icon-num">0</span></span>
          </div>
        </div>
      </div>
    </div>
    <div>

    </div>
    <el-dialog :visible.sync="dialogVisible" class="image-dialog" fullscreen>
      <div class="picture-main">
        <div class="swiper-container gallery-top">
          <div class="swiper-wrapper">
            <!--<div class="swiper-slide" style="background-image:url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1510851972954&di=7b4dbe74de1d4ffe1e1f18fbabafe28b&imgtype=0&src=http%3A%2F%2Fimg15.3lian.com%2F2015%2Fa1%2F14%2Fd%2F23.jpg)"></div>-->
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
      <div class="picture-aside">
        <div class="aside-post">
          <div class="aside-post-head">
            <img src="../assets/user.jpg"/>
            <span style="margin-left: 10px; text-align: left">
              <div class="name">只为红颜</div>
              <div class="date">12月3日</div>
            </span>
            <div style="display: flex;flex-direction: row;justify-content: flex-end;align-items: center;flex-grow: 1;">
              <el-button type="primary">关注</el-button>
            </div>
          </div>
          <div class="aside-post-content">
            <div class="content-title">冰川之上</div>
            <div class="content-introduce">
              北起格兰林岛，长期的冰川运动造就了深长的峡湾
            </div>
            <div class="content-heart">
              <span style="cursor: pointer"  v-bind:class="{redColor: isHeart}" @click="heartClick">
                <i class="fa fa-heart"></i><span class="heart-num" v-bind:class="{redColor: isHeart}">{{ heartNum }}</span></span>
            </div>
          </div>
          <div class="aside-post-comment">
            <div class="comment-content">
              <span class="comment-content-img">
                <img src="../assets/user2.jpeg"/>
              </span>
              <el-input
                type="textarea"
                :rows="3"
                placeholder="你的评论是对ta最好的鼓励">
              </el-input>
              <div style="text-align: right;padding-right: 10px;margin-top: 10px;">
                <el-button type="text">发送</el-button>
              </div>
            </div>
            <div class="comment-list" v-for="item in commentList">
              <div class="comment-list-item">
                <div class="comment-img">
                  <img :src="item.img"/>
                  <span>{{item.name}}</span>
                </div>
                <div class="comment-info">
                  {{item.content}}
                </div>
                <div class="comment-date">
                  {{item.date}}
                </div>
                <div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>


<script>
  import Swiper from '../../static/swiper.min.js'
  import ElButton from '../../node_modules/element-ui/packages/button/src/button'
  import ElForm from '../../node_modules/element-ui/packages/form/src/form'
  import ElFormItem from '../../node_modules/element-ui/packages/form/src/form-item'
  import user3 from '../assets/user3.jpg'
  import user4 from '../assets/user4.jpg'
  import user5 from '../assets/user5.jpg'
  import user6 from '../assets/user6.jpg'

  export default{
    components: {
      ElFormItem,
      ElForm,
      ElButton},
    data () {
      return {
        currentDate: new Date(),
        showMask: false,
        isHeart: false,
        heartNum: 0,
        dialogVisible: false,
        maskShow: false,
        pictureContentShow: false,
        commentList: [
          {
            img: user3,
            name: '浅安时光',
            content: '这么真实的吗，拍的真的太漂亮了',
            date: '2017-12-3'
          },
          {
            img: user4,
            name: '志霸和Jason',
            content: '哇，是真的牛批',
            date: '2017-12-3'
          },
          {
            img: user5,
            name: 'Luminary',
            content: '拍照这方面还是得给你们整得明明白白的',
            date: '2017-12-3'
          },
          {
            img: user6,
            name: '旖旎℉',
            content: '卧槽，真鸡儿好看',
            date: '2017-12-3'
          },
          {
            img: user6,
            name: '旖旎℉',
            content: '卧槽，真鸡儿好看',
            date: '2017-12-3'
          },
          {
            img: user6,
            name: '旖旎℉',
            content: '卧槽，真鸡儿好看',
            date: '2017-12-3'
          }
        ]
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
      },
      imageMaskEnter: function () {
        this.pictureContentShow = true
        this.maskShow = true
      },
      imageMaskLeave: function () {
        this.pictureContentShow = false
        this.maskShow = false
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
    height: 381px;
    width: 450px;
    display: inline-block;
    padding: 7px;
    position: relative;
    vertical-align: top;
    padding: 5px 5px 6px;
    margin-left: 0px;
    margin-bottom: 0px;
  }

  .post-item{
    position: absolute;
    left: 5px;
    right: 5px;
    top: 5px;
    bottom: 5px;
    background-color: #ffffff;
  }

  .post-body{
    position: absolute;
    left: 6px;
    top:6px;
    right: 6px;
    bottom: 6px;
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

  .maskOpacity{
    opacity: 0.5;
  }

  /*.image-mask:hover{*/
    /*opacity: 0.5;*/
  /*}*/

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
    font-size: 15px;
    color: white;
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
    color: white;
    font-size: 15px;
    cursor: pointer;
  }

  .picture-icon-num{
    color: white;
    margin-left: 5px;
  }

  .redColor{
    color: #e60905;
  }

  .image-dialog .el-dialog{
    overflow: hidden;
    height: 700px;
  }

  #picture-display .el-dialog__wrapper{
    padding: 25px 50px 25px 50px;
    overflow: hidden;
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
    overflow: hidden;
  }

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

  .picture-aside{
    position: absolute;
    width: 320px;
    height: 100%;
    top: 55px;
    right: 0;
    margin-left: auto;
    overflow: scroll;
    border-left: 1px solid #10cf7d;
  }

  .aside-post-head{
    border-bottom: 1px solid #f0f0f0;
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 10px;
  }

  .aside-post-head img{
    width: 45px;
    height: 45px;
    border-radius: 50%;
  }

  .aside-post-head .name{
    font-size: 17px;
    color: black;
  }

  .aside-post-head .date{
    font-size: 14px;
  }

  .aside-post-content{
    padding: 15px 10px;
    border-bottom: 1px solid #f0f0f0;
  }


  .aside-post-content .content-introduce{
    text-align: left;
    font-size: 14px;
    margin-top: 10px;
  }

  .content-title{
    font-weight: 400;
    font-size: 17px;
    text-align: left;
    color: black;
    line-height: 30px;
  }

  .content-heart{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    flex-grow: 1;
  }

  .content-heart .heart-num{
    color: #5a5e66;
    margin-left: 5px;
    margin-right: 10px;
  }

  .aside-post-comment{
    padding: 15px 10px;
    border-bottom: 1px solid #f0f0f0;
  }

  .aside-post-comment .comment-content{
    position: relative;
    padding-left: 36px;
  }

  .comment-content-img{
    position: absolute;
    left: 0;
    width: 26px;
    height: 26px;
    top: 0;
  }

  .aside-post-comment img{
    width: 26px;
    height: 26px;
    border-radius: 50%;
    cursor: pointer;
  }

  .comment-list-item{
    margin: 5px 0;
  }

  .comment-img{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }

  .comment-img span{
    margin-left: 10px;
    font-size: 16px;
  }

  .comment-info{
    margin-left: 36px;
    text-align: left;
    font-size: 13px;
  }

  .comment-date{
    text-align: right;
    font-size: 13px;
  }
</style>
