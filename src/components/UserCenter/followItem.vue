<template>
  <div class="follow-item">
    <div class="follow-item-head-background">
      <img :src="userHead"/>
    </div>
    <div style="height: 80px">
    </div>
    <div>
      <span class="follow-item-username">{{username}}</span>
    </div>
    <div class="follow-item-follow-container">
      <div style="border: 1px solid #e0e0e0;border-width: 1px 0 1px 0;padding: 10px 0 10px 0">
        <span class="follow-item-follow">关注 {{followNum}}</span>
        <span class="follow-item-fans">粉丝 {{fansNum}}</span>
      </div>
      <el-button type="primary" size="medium" class="follow-item-button">+关注</el-button>
    </div>
  </div>
</template>

<script>
  export default{
    props: ['userHead', 'username', 'followNum', 'fansNum'],
    data () {
      return {
      }
    }
  }
</script>

<style>
  .follow-item{
    border-radius: 5px;
    box-shadow: 0 0 5px #d2d2d2;
  }

  .follow-item-head-background{
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    background-color: #e7faf2;
    height: 80px;
  }

  .follow-item-head-background img{
    width: 130px;
    height: 130px;
    border-radius: 50%;
    border: 3px solid white;
    margin-top: 15px;
    cursor: pointer;
  }

  .follow-item-head-background img:hover{
    opacity: 0.9;
  }

  .follow-item-username{
    font-size: 16px;
    color: #222222;
    cursor: pointer;
  }

  .follow-item-username:hover{
    color: #10cf7d;
    text-decoration: underline;
  }

  .follow-item-follow-container{
    padding: 10px 30px 10px 30px;
  }

  .follow-item-follow{
    font-size: 13px;
    color: #777777;
    margin-right: 10px;
  }

  .follow-item-fans{
    font-size: 13px;
    color: #777777;
  }

  .follow-item-button{
    width: 100%;
    margin: 10px 0 20px 0;
  }

</style>
