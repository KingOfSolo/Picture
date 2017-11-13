<template>
  <div id="user-center">
    <div style="text-align: center">
      <div id="user-center-header">
        <div id="user-center-header-background">
          <img src="../assets/user.jpg" id="user-center-header-image"/>
        </div>
        <div id="user-center-header-body">
          <p id="user-center-header-username">只为红颜</p>
          <div id="user-center-header-introduce-container">
            <span v-if="showSignature" id="user-center-header-introduce">{{ signature}}</span>
            <el-input v-else v-model="signature" id="signature-input" maxlength="40"></el-input>
            <div id="user-center-header-introduce-button">
              <el-button v-if="showSignature" size="medium" @click="showSignature = false; beforeSignature = signature">修改个性签名</el-button>
              <div v-else>
                <el-button size="medium" type="success" @click="showSignature = true" style="background-color: #10cf7d;border-color: #10cf7d">保存</el-button>
                <el-button size="medium" @click="showSignature = true; signature = beforeSignature">取消</el-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="text-align: center">
      <div id="user-center-main">
        <el-tabs :tab-position="tabPosition" style="margin: 10px">
          <el-tab-pane>
            <span slot="label">个人资料</span>
            <user-info></user-info>
          </el-tab-pane>
          <el-tab-pane>
            <span slot="label">我的关注</span>
            我的关注
          </el-tab-pane>
          <el-tab-pane>
            <span slot="label">角色管理</span>
            角色管理</el-tab-pane>
          <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
        </el-tabs>
      </div>
    </div>

  </div>
</template>


<script>
  import ElButton from '../../node_modules/element-ui/packages/button/src/button'
  import ElInput from '../../node_modules/element-ui/packages/input/src/input'
  import UserInfo from '../components/userInfo.vue'
  export default{
    components: {
      ElInput,
      ElButton,
      UserInfo},
    data () {
      return {
        msg1: 'sss',
        signature: '你是一只修行千年的狐 我是一介书生独醉江湖',
        beforeSignature: '',
        showSignature: true,
        tabPosition: 'left'
      }
    },
    methods: {
    }
  }
</script>

<style>
  #user-center{
  }

  #user-center-header{
    display: inline-block;
    width: 1000px;
    height: 250px;
    background-color: white;
    box-shadow: 0 0 5px #d2d2d2;
    margin-top: 10px;
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
    margin: 0 0 -100px 20px;
  }

  #user-center-header-body{
    margin-top: 15px;
    height: 100px;
    background-color: white;
  }

  #user-center-header-username{
    margin:0 0 15px 220px;
    font-size: 25px;
    font-weight: normal;
    color: #222222;
    text-align: left;
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

  #signature-input{
    margin-left: 220px;
    border-radius: 0;
    height: 40px;
    font-size: 15px;
    background-color: white;
    border-width:  0 0 1px 0;
    padding: 0;
    width: 500px;
  }

  #user-center-main{
    display: inline-block;
    width: 1000px;
    background-color: white;
    margin-top: 10px;
    border-radius: 5px;
    box-shadow: 0 0 5px #d2d2d2;
  }

  #user-center-main .el-tabs__item{
    font-size: 17px;
  }

  #user-center-main .el-tabs__header{
    margin-top: 30px;
  }


</style>

