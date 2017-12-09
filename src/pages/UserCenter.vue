<template>
  <div id="user-center">
    <div style="text-align: center">
      <div id="user-center-header">
        <div id="user-center-header-background">
          <span style="margin: 0 0 -100px 20px">
            <img src="../assets/user.jpg" id="user-center-header-image"/>
            <div class="user-center-header-follow-container">
              <div class="fans">
                <div class="fans-num">100</div>
                <div style="font-size: 13px;">粉丝</div>
              </div>
              <div class="follow" @click="followClick">
                <span class="follow-num">10</span>
                <div style="font-size: 13px;">关注</div>
              </div>
            </div>
          </span>
        </div>
        <div id="user-center-header-body">
          <div class="user-center-header-name-container">
            <span id="user-center-header-username">只为红颜</span>
            <el-button size="medium">关注</el-button>
            <!--<button class="follow-button">关注</button>-->
          </div>
          <div id="user-center-header-introduce-container">
            <span id="user-center-header-introduce">{{ signature }}</span>
            <div id="user-center-header-introduce-button">
              <el-button size="medium">修改个人资料</el-button>
            </div>
          </div>
        </div>
      </div>
      <div id="user-center-main">
        <el-tabs type="border-card">
          <el-tab-pane label="图片作品">
            <user-center-picture></user-center-picture>
          </el-tab-pane>
          <el-tab-pane label="相册作品">配置管理</el-tab-pane>
          <el-tab-pane label="关注">
            <user-center-follow></user-center-follow>
          </el-tab-pane>
          <el-tab-pane label="粉丝">
            <user-center-fans></user-center-fans>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
  import ElButton from '../../node_modules/element-ui/packages/button/src/button'
  import UserCenterPicture from '../components/UserCenter/userCenterPicture.vue'
  import UserCenterFollow from '../components/UserCenter/userCenterFollow.vue'
  import UserCenterFans from '../components/UserCenter/userCenterFans.vue'
  export default{
    components: {
      ElButton,
      UserCenterPicture,
      UserCenterFollow,
      UserCenterFans
    },
    data () {
      return {
        signature: '你是一只修行千年的狐 我是一介书生独醉江湖'
      }
    },
    methods: {
      followClick: function () {

      }
    }
  }
</script>

<style>
  #user-center-header{
    display: inline-block;
    width: 1200px;
    height: 250px;
    background-color: white;
    box-shadow: 0 0 5px #d2d2d2;
    margin: 10px 0 10px 0;
    border-radius: 5px;
  }

  #user-center-header-background{
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    height: 130px;
    background-color: #c9d8f8;
    border-radius: 5px 5px 0 0;
  }

  #user-center-header-image{
    width: 160px;
    height: 160px;
    border-radius: 5px;
    border: 5px solid white;
    border-bottom-width: 0;
  }

  #user-center-header-body{
    margin-top: 15px;
    height: 100px;
    background-color: white;
  }

  #user-center-header-username{
    margin:0 20px 0px 220px;
    font-size: 25px;
    font-weight: normal;
    color: #222222;
    text-align: left;
    display: inline-block;
    line-height: 40px;
  }

  #user-center-header-introduce-container{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }

  #user-center-header-introduce{
    margin-left: 220px;
    font-size: 15px;
    color: #858585;
  }

  #user-center-header-introduce-button{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-grow: 1;
    margin-right: 20px;
  }

  .user-center-header-name-container{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }

  .user-center-header-follow-container .follow, .fans{
    width: 80px;
    /*background-color: #E7FAF2;*/
    display: inline-block;
    cursor: pointer;
    color: #222222;
  }

  .user-center-header-follow-container .follow-num, .fans-num{
    font-weight: bold;
    font-size: 17px;
  }

  .user-center-header-follow-container .follow:hover, .fans:hover{
    color: #10cf7d;
  }

  #user-center-main{
    width: 1200px;
    display: inline-block;
    margin-bottom: 10px;
  }

  #user-center-main .el-tabs{
    box-shadow: 0 0 5px #d2d2d2;
    border-radius: 5px;
  }

  /*.user-center-header-follow-container .fans{*/
    /*width: 80px;*/
    /*!*background-color: #E7FAF2;*!*/
    /*display: inline-block;*/
    /*cursor: pointer;*/
  /*}*/


</style>
