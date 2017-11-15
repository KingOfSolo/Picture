<template>
  <div id="picture-display">
    <img src="../assets/picture.jpg" class="image"/>
    <div>
      <div id="picture-display-bottom">
        <img src="../assets/user.jpg"/>
        <span style="cursor: pointer">只为红颜</span>
        <div id="picture-display-button">
          <span class="picture-icon" style="padding-right: 10px"><i class="fa fa-heart"></i><span class="picture-icon-num">0</span></span>
          <span class="picture-icon"><i class="fa fa-comments"></i><span class="picture-icon-num">0</span></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data () {
      return {
        currentDate: new Date()
      }
    }
  }
</script>

<style>
  @import "../style/font-awesome-4.7.0/css/font-awesome.min.css";

  #picture-display{
    background-color: white;
    display: inline-block;
    padding: 7px;
  }

  .image{
    width: 100%;
    display: block;
    cursor:pointer;
  }

  .image:hover{
    -moz-opacity:0.7;
    opacity: 0.7;
    filter: alpha(Opacity=70);
    background: #222222;
  }

  #picture-display-bottom{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    height: 60px;
  }

  /*#picture-display .button {*/
    /*padding: 0;*/
    /*float: right;*/
  /*}*/

  .image {
    width: 100%;
    display: block;
  }

  #picture-display-bottom{
    font-size: 15px;
    color: #222222;
  }

  #picture-display-bottom img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    padding-right: 3px;
    cursor: pointer;
  }

  #picture-display-button{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    flex-grow: 1;
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
</style>
