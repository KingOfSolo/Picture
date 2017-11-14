<template>
  <div id="picture-display">
    <img src="../assets/picture.jpg" class="image"/>
    <div>
      <div id="picture-display-bottom">
        <img src="../assets/user.jpg"/>
        <span>只为红颜</span>
        <div id="picture-display-button">
          <span><img src="../assets/like.png"/><span style="line-height: 20px">0</span></span>
          <span><img src="../assets/comment.png"/><span style="line-height: 20px">0</span></span>
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
  #picture-display{
    background-color: white;
    display: inline-block;
    padding: 7px;
  }

  .image{
    width: 100%;
    display: block;
  }

  #picture-display-bottom{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    height: 60px;
  }

  #picture-display .button {
    padding: 0;
    float: right;
  }

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
  }
</style>
