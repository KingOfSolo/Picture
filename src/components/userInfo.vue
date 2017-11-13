<template>
  <div id="user-info">
    <form class="user-info-form" @mouseenter="formEnter(0)" @mouseleave="formLeave(0)">
      <h3 class="form-label">昵称</h3>
      <div class="form-content">
        <div class="form-content-show">
          <span class="form-text">只为红颜</span>
          <el-button type="text" icon="el-icon-edit" v-bind:class="{ editHidden: showEdit[0] }">修改</el-button>
        </div>
      </div>
    </form>
    <form class="user-info-form" @mouseenter="formEnter(1)" @mouseleave="formLeave(1)">
      <h3 class="form-label">性别</h3>
      <div class="form-content">
        <span class="form-text">未知</span>
        <el-button type="text" icon="el-icon-edit" v-bind:class="{ editHidden: showEdit[1] }">修改</el-button>
      </div>
    </form>
    <form class="user-info-form" @mouseenter="formEnter(2)" @mouseleave="formLeave(2)">
      <h3 class="form-label">头像</h3>
      <div class="form-content">
        <img style="width: 45px;height: 45px;margin-right: 15px" src="../assets/user.jpg"/>
        <el-button type="text" icon="el-icon-edit" v-bind:class="{ editHidden: showEdit[2] }">修改</el-button>
      </div>
    </form>
    <form class="user-info-form" @mouseenter="formEnter(3)" @mouseleave="formLeave(3)">
      <h3 class="form-label">密码</h3>
      <div class="form-content">
        <span class="form-text">******</span>
        <el-button type="text" icon="el-icon-edit" v-bind:class="{ editHidden: showEdit[3] }">修改</el-button>
      </div>
    </form>
    <form class="user-info-form" @mouseenter="formEnter(4)" @mouseleave="formLeave(4)">
      <h3 class="form-label">绑定手机</h3>
      <div class="form-content">
        <span class="form-text">未绑定</span>
        <el-button type="text" icon="el-icon-edit" v-bind:class="{ editHidden: showEdit[4] }">修改</el-button>
      </div>
    </form>
    <form class="user-info-form" @mouseenter="formEnter(5)" @mouseleave="formLeave(5)">
      <h3 class="form-label">个人简介</h3>
      <div class="form-content">
        <span class="form-text">世间所有的相遇 都是久别重逢</span>
        <el-button type="text" icon="el-icon-edit" v-bind:class="{ editHidden: showEdit[5] }">修改</el-button>
      </div>
    </form>
  </div>
</template>


<script>
  import ElForm from '../../node_modules/element-ui/packages/form/src/form'
  import ElFormItem from '../../node_modules/element-ui/packages/form/src/form-item'
  import ElButton from '../../node_modules/element-ui/packages/button/src/button'
  import EditButton from './editButton.vue'

  export default{
    components: {
      ElButton,
      ElFormItem,
      ElForm,
      EditButton},
    data () {
      return {
        showEdit: [false, true, true, true, true, true]
      }
    },
    computed: {
    },
    methods: {
      formEnter (index) {
        this.showEdit[index] = false
      },
      formLeave (index) {
        this.showEdit[index] = true
      }
    }
  }
</script>



<style>


  #user-info{
    padding: 20px 50px 50px 50px;
    text-align: left;
  }

  .user-info-form{
    padding: 30px 0 30px 0;
    border-bottom: 1px solid #ebeef5;
  }

  .form-label{
    position: absolute;
    color: #333;
    display: inline-block;
    margin: 0;
    line-height: 36px;
    font-size: 15px;
  }

  .form-content{
    padding: 0 64px 0 140px;
    display: inline-block;
    line-height: 36px;
  }

  /*.form-content-show .el-button{*/
    /*position: absolute;*/
    /*display: inline-block;*/
    /*transition: all 0.5s;*/
  /*}*/


  .form-text{
    color: #262626;
    margin-right: 15px;
    font-size: 15px;
  }
</style>
