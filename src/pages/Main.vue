<template>
  <div class="home">
    <div class="banner">
        <div id="banner-title">
          掠影
        </div>
        <div style="text-align: center;margin-top: 20px">
          <div style="width: 600px;display: inline-block">
            <el-input placeholder="请输入内容" class="input-with-select">
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </div>
        </div>
    </div>
    <div style="text-align: center">
      <div class="masonry">
        <div class="item" v-for="item in imgList">
          <picture-display :img-url="item.imgUrl" :user-head="item.userHead" :username="item.username"
                           :heart-num="item.heartNum" :comment-num="item.commentNum"></picture-display>
        </div>
      </div>
      <!--<picture-display></picture-display>-->
    </div>
  </div>

</template>

<script>
  import pictureDisplay from '../components/HomePage/pictureDisplay.vue'
  import Swiper from '../../static/swiper.min.js'
  import user3 from '../assets/user3.jpg'
  import user4 from '../assets/user4.jpg'
  import user5 from '../assets/user5.jpg'
  import user6 from '../assets/user6.jpg'
  export default {
    components: {
      pictureDisplay
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        imgList: [
          {
            imgUrl: 'https://picsum.photos/270/400',
            userHead: user3,
            username: '浅安时光',
            heartNum: 0,
            commentNum: 0
          },
          {
            imgUrl: 'https://picsum.photos/400/200',
            userHead: user4,
            username: '志霸和Jason',
            heartNum: 0,
            commentNum: 0
          },
          {
            imgUrl: 'https://picsum.photos/400/400',
            userHead: user4,
            username: '志霸和Jason',
            heartNum: 0,
            commentNum: 0
          },
          {
            imgUrl: 'https://picsum.photos/400/250',
            userHead: user4,
            username: '志霸和Jason',
            heartNum: 0,
            commentNum: 0
          },
          {
            imgUrl: 'https://picsum.photos/400/222',
            userHead: user4,
            username: '志霸和Jason',
            heartNum: 0,
            commentNum: 0
          },
          {
            imgUrl: 'https://picsum.photos/400/500',
            userHead: user4,
            username: '志霸和Jason',
            heartNum: 0,
            commentNum: 0
          },
          {
            imgUrl: 'https://picsum.photos/600/700',
            userHead: user4,
            username: '志霸和Jason',
            heartNum: 0,
            commentNum: 0
          },
          {
            imgUrl: 'https://picsum.photos/600/600',
            userHead: user4,
            username: '志霸和Jason',
            heartNum: 0,
            commentNum: 0
          },
          {
            imgUrl: 'https://picsum.photos/700/605',
            userHead: user4,
            username: '志霸和Jason',
            heartNum: 0,
            commentNum: 0
          },
          {
            imgUrl: 'https://picsum.photos/800/650',
            userHead: user4,
            username: '志霸和Jason',
            heartNum: 0,
            commentNum: 0
          },
          {
            imgUrl: 'https://picsum.photos/800/645',
            userHead: user4,
            username: '志霸和Jason',
            heartNum: 0,
            commentNum: 0
          },
          {
            imgUrl: 'https://picsum.photos/800/630',
            userHead: user4,
            username: '志霸和Jason',
            heartNum: 0,
            commentNum: 0
          },
          {
            imgUrl: 'https://picsum.photos/800/620',
            userHead: user4,
            username: '志霸和Jason',
            heartNum: 0,
            commentNum: 0
          }
        ],
        currentDate: new Date(),
        showMask: false,
        isHeart: false,
        heartNum: 0,
        dialogVisible: false,
        maskShow: false,
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  @import "../style/scss/userCenterPicture.css";
  @import "../../static/swiper.min.css";

  #background-image{
    width: 100%;
  }

  .banner{
    text-align: center;
    height: 500px;
    background-image: url("https://picsum.photos/1700/614/?random");
    /*background-color: #10cf7d;*/
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
