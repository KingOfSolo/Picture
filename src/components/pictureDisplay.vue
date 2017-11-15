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
    <el-dialog title="图片展示" :visible.sync="dialogVisible">
      <img src="../assets/picture.jpg"/>
    </el-dialog>
  </div>
</template>

<script>
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
    }
  }
</script>

<style>
  @import "../style/font-awesome-4.7.0/css/font-awesome.min.css";


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
</style>
