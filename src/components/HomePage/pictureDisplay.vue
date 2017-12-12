<template>
  <div id="picture-display">
    <!--<div class="post-item">-->
      <div style="position: relative" v-on:mouseenter="imageMaskEnter" v-on:mouseleave="imageMaskLeave">
        <img :src="imgUrl" class="image"/>
        <div class="image-mask" v-bind:class="{maskOpacity: maskShow}" @click="showDialog"></div>
        <div id="picture-display-bottom" v-if="pictureContentShow">
          <img :src="userHead" @click="toUserCenter"/>
          <span style="cursor: pointer">{{ username }}</span>
          <div id="picture-display-button">
                <span class="picture-icon" style="padding-right: 10px" v-bind:class="{redColor: isHeart}" @click="heartClick">
                  <i class="fa fa-heart"></i>
                  <span class="picture-icon-num">{{ heartNum }}
                  </span>
                </span>
            <span class="picture-icon"><i class="fa fa-comments"></i><span class="picture-icon-num">{{ commentNum }}</span></span>
          </div>
        </div>
      </div>
    <!--</div>-->
    <div>

    </div>
    <el-dialog :visible.sync="dialogVisible" class="image-dialog" fullscreen>
      <div class="picture-main">
        <img :src="imgUrl"/>
      </div>
      <div class="picture-aside">
        <div class="aside-post">
          <div class="aside-post-head">
            <img :src="userHead"/>
            <span style="margin-left: 10px; text-align: left">
              <div class="name">{{ username }}</div>
              <div class="date">{{ date }}</div>
            </span>
            <div style="display: flex;flex-direction: row;justify-content: flex-end;align-items: center;flex-grow: 1;">
              <el-button type="primary" @click="follow" v-if="!isFollow">关注</el-button>
              <el-button type="danger" v-else>已关注</el-button>
            </div>
          </div>
          <div class="aside-post-content">
            <div class="content-title">{{ title }}</div>
            <div class="content-introduce">
              {{ intro }}
            </div>
            <div class="content-heart">
              <span style="cursor: pointer"  v-bind:class="{redColor: isHeart}" @click="heartClick">
                <i class="fa fa-heart"></i><span class="heart-num" v-bind:class="{redColor: isHeart}">{{ heartNum }}</span></span>
            </div>
          </div>
          <div class="aside-post-comment">
            <div class="comment-content">
              <span class="comment-content-img">
                <img :src="loginUserHeadUrl"/>
              </span>
              <el-input
                type="textarea"
                :rows="3"
                placeholder="你的评论是对ta最好的鼓励"
                v-model="commentContent">
              </el-input>
              <div style="text-align: right;padding-right: 10px;margin-top: 10px;">
                <el-button type="text" @click="sendComment">发送</el-button>
              </div>
            </div>
            <div class="comment-list" v-for="item in commentList">
              <div class="comment-list-item">
                <div class="comment-img">
                  <img :src="item.headUrl"/>
                  <span>{{item.nickName}}</span>
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
  import ElButton from '../../../node_modules/element-ui/packages/button/src/button'
  import ElForm from '../../../node_modules/element-ui/packages/form/src/form'
  import ElFormItem from '../../../node_modules/element-ui/packages/form/src/form-item'
  import user3 from '../../assets/user3.jpg'
  import user4 from '../../assets/user4.jpg'
  import user5 from '../../assets/user5.jpg'
  import user6 from '../../assets/user6.jpg'

  export default{
    components: {
      ElFormItem,
      ElForm,
      ElButton},
    props: ['imgUrl', 'userHead', 'username', 'heartNum', 'commentNum', 'photoId', 'date', 'title', 'intro', 'ownerId'],
    data () {
      return {
        currentDate: new Date(),
        showMask: false,
        isHeart: false,
        dialogVisible: false,
        maskShow: false,
        pictureContentShow: false,
        loginUserHeadUrl: '',
        commentContent: '',
        userId: '',
        isFollow: false,
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
        var self = this
        this.$http({
          method: 'post',
          dataType: 'JSONP',
          url: '/like/like',
          data: {
            photoId: this.photoId
          }
        }).then(function (res) {
          self.isHeart = true
          self.heartNum += 1
        }).catch(function (err) {
          console.log(err)
        })
      },
      showDialog: function () {
        var self = this
        this.$http({
          method: 'post',
          dataType: 'JSONP',
          url: '/comment/getCommentsById',
          data: {
            id: this.photoId
          }
        }).then(function (res) {
          console.log(res)
          var data = res.data.data
          self.commentList = data
          console.log(self.commentList)
        }).catch(function (err) {
          console.log(err)
        })
        this.dialogVisible = true
      },
      sendComment: function () {
        var self = this
        this.$http({
          method: 'post',
          dataType: 'JSONP',
          url: '/comment/publishComment',
          data: {
            vo: {
              userId: this.userId,
              photoId: this.photoId,
              content: this.commentContent,
              commentNum: this.commentNum
            }
          }
        }).then(function (res) {
          self.commentContent = ''
          self.showDialog()
          self.commentNum += 1
        }).catch(function (err) {
          console.log(err)
        })
      },
      imageMaskEnter: function () {
        this.pictureContentShow = true
        this.maskShow = true
      },
      imageMaskLeave: function () {
        this.pictureContentShow = false
        this.maskShow = false
      },
      toUserCenter: function () {
        this.$router.push({name: 'UserCenter', params: {userId: this.ownerId}})
      },
      follow: function () {
        var self = this
        this.$http({
          method: 'post',
          dataType: 'JSONP',
          url: '/follow/follow',
          data: {
            vo: {
              userId: this.ownerId,
              followUserId: this.userId
            }
          }
        }).then(function (res) {
          self.isFollow = true
//          self.commentContent = ''
//          self.showDialog()
//          self.commentNum += 1
        }).catch(function (err) {
          console.log(err)
        })
      }
    },
    mounted () {
      var token = this.$cookie.get('token')
      if (token !== '' && token !== null) {
        var self = this
        this.$http({
          method: 'post',
          dataType: 'JSONP',
          url: '/user/UserInfo',
          data: {
            token: token
          }
        }).then(function (res) {
          var data = res.data.data
          self.loginUserHeadUrl = data.headUrl
          self.userId = data.id
        }).catch(function (err) {
          alert(err)
        })
      }
    }
  }
</script>

<style>
  @import "../../style/font-awesome-4.7.0/css/font-awesome.min.css";

  /*img{*/
    /*object-fit: cover;*/
  /*}*/

  #picture-display{
    height: 100%;
    width: 100%;
    display: inline-block;
    position: relative;
    vertical-align: top;
    margin-left: 0px;
    margin-bottom: 0px;
  }

  .post-item{
    position: absolute;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 0px;
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
    object-fit: cover;
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
    top: 0px;
    right: 320px;
    bottom: 0;
    left: 0;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .picture-main img{
    object-fit: cover;
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
    height: 90%;
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
