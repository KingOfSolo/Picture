<template>
  <div id="user-info">
    <form class="user-info-form" @mouseenter="formEnter(0)" @mouseleave="formLeave(0)">
      <h3 class="form-label">昵称</h3>
      <div class="form-content">
        <div class="form-content-show">
          <div v-if="showEditContent.show0">
            <span class="form-text">{{ nickname }}</span>
            <el-button v-on:click="editButtonClick(0)" type="text" icon="el-icon-edit" v-bind:class="{ editHidden: showEdit.show0 }">修改</el-button>
          </div>
          <div v-else>
            <el-input></el-input>
            <div style="margin-top: 20px">
              <el-button type="primary">保存</el-button>
              <el-button v-on:click="editCancel(0)">取消</el-button>
            </div>
          </div>
        </div>
      </div>
    </form>
    <form class="user-info-form" @mouseenter="formEnter(1)" @mouseleave="formLeave(1)">
      <h3 class="form-label">性别</h3>
      <div class="form-content">
        <div v-if="showEditContent.show1">
          <span class="form-text">{{ gender }}</span>
          <el-button v-on:click="editButtonClick(1)" type="text" icon="el-icon-edit" v-bind:class="{ editHidden: showEdit.show1 }">修改</el-button>
        </div>
        <div v-else>
          <el-radio-group v-model="genderRadio">
            <el-radio :label="1">男</el-radio>
            <el-radio :label="2">女</el-radio>
          </el-radio-group>
          <div style="margin-top: 20px">
            <el-button type="primary">保存</el-button>
            <el-button v-on:click="editCancel(1)">取消</el-button>
          </div>
        </div>
      </div>
    </form>
    <form class="user-info-form" @mouseenter="formEnter(2)" @mouseleave="formLeave(2)">
      <h3 class="form-label">头像</h3>
      <div class="form-content">
        <img style="width: 45px;height: 45px;margin-right: 15px" src="../../assets/user.jpg"/>
        <el-button type="text" icon="el-icon-edit" v-bind:class="{ editHidden: showEdit.show2 }">修改</el-button>
      </div>
    </form>
    <form class="user-info-form" @mouseenter="formEnter(3)" @mouseleave="formLeave(3)">
      <h3 class="form-label">密码</h3>
      <div class="form-content">
        <div v-if="showEditContent.show3">
          <span class="form-text">{{ password }}</span>
          <el-button v-on:click="editButtonClick(3)" type="text" icon="el-icon-edit" v-bind:class="{ editHidden: showEdit.show3 }">修改</el-button>
        </div>
        <div v-else>
          <el-form ref="form" label-width="100px">
            <el-form-item label="当前密码">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="新密码">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="确认新密码">
              <el-input></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary">保存</el-button>
              <el-button v-on:click="editCancel(3)">取消</el-button>
            </el-form-item>
          </el-form>
        </div>

      </div>
    </form>
    <form class="user-info-form" @mouseenter="formEnter(4)" @mouseleave="formLeave(4)">
      <h3 class="form-label">绑定手机</h3>
      <div class="form-content">
        <div v-if="showEditContent.show4">
          <span class="form-text">未绑定</span>
          <el-button type="text" v-on:click="editButtonClick(4)" icon="el-icon-edit" v-bind:class="{ editHidden: showEdit.show4 }">修改</el-button>
        </div>
        <div v-else>
          <el-form>
            <el-form-item>
              <el-input></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary">保存</el-button>
              <el-button v-on:click="editCancel(4)">取消</el-button>
            </el-form-item>
          </el-form>
        </div>

      </div>
    </form>
    <form class="user-info-form" @mouseenter="formEnter(5)" @mouseleave="formLeave(5)">
      <h3 class="form-label">个人简介</h3>
      <div class="form-content">
        <div v-if="showEditContent.show5">
          <span class="form-text">世间所有的相遇 都是久别重逢</span>
          <el-button type="text" v-on:click="editButtonClick(5)" icon="el-icon-edit" v-bind:class="{ editHidden: showEdit.show5 }">修改</el-button>
        </div>
        <div v-else>
          <el-form>
            <el-form-item>
              <el-input type="textarea" style="width: 400px" :autosize="{ minRows: 3, maxRows: 5}"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary">保存</el-button>
              <el-button v-on:click="editCancel(5)">取消</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </form>
  </div>
</template>


<script>
  import ElForm from '../../../node_modules/element-ui/packages/form/src/form'
  import ElFormItem from '../../../node_modules/element-ui/packages/form/src/form-item'
  import ElButton from '../../../node_modules/element-ui/packages/button/src/button'
  import EditButton from '../editButton.vue'
  import ElInput from '../../../node_modules/element-ui/packages/input/src/input'

  export default{
    components: {
      ElInput,
      ElButton,
      ElFormItem,
      ElForm,
      EditButton},
    data () {
      return {
        nickname: '只为红颜',
        gender: '未知',
        password: '******',
        phone: '未绑定',
        introduce: '世间所有的相遇 都是久别重逢',
        showEdit: {
          show0: true, show1: true, show2: true, show3: true, show4: true, show5: true
        },
        showEditContent: {
          show0: true, show1: true, show2: true, show3: true, show4: true, show5: true
        },
        genderRadio: 1
      }
    },
    computed: {
    },
    methods: {
      formEnter (index) {
        switch (index) {
          case 0: this.showEdit.show0 = false
            break
          case 1: this.showEdit.show1 = false
            break
          case 2: this.showEdit.show2 = false
            break
          case 3: this.showEdit.show3 = false
            break
          case 4: this.showEdit.show4 = false
            break
          case 5: this.showEdit.show5 = false
            break
        }
      },
      formLeave (index) {
        switch (index) {
          case 0: this.showEdit.show0 = true
            break
          case 1: this.showEdit.show1 = true
            break
          case 2: this.showEdit.show2 = true
            break
          case 3: this.showEdit.show3 = true
            break
          case 4: this.showEdit.show4 = true
            break
          case 5: this.showEdit.show5 = true
            break
        }
      },
      editButtonClick (index) {
        switch (index) {
          case 0: this.showEditContent.show0 = false
            break
          case 1: this.showEditContent.show1 = false
            break
          case 2: this.showEditContent.show2 = false
            break
          case 3: this.showEditContent.show3 = false
            break
          case 4: this.showEditContent.show4 = false
            break
          case 5: this.showEditContent.show5 = false
            break
        }
      },
      editCancel (index) {
        switch (index) {
          case 0: this.showEditContent.show0 = true
            break
          case 1: this.showEditContent.show1 = true
            break
          case 2: this.showEditContent.show2 = true
            break
          case 3: this.showEditContent.show3 = true
            break
          case 4: this.showEditContent.show4 = true
            break
          case 5: this.showEditContent.show5 = true
            break
        }
      }
    }
  }
</script>



<style>
  .editHidden{
    opacity: 0;
  }

  .editShow{
    opacity: 1;
  }

  #user-info{
    padding: 20px 50px 50px 50px;
    text-align: left;
  }

  .user-info-form{
    padding: 30px 0 30px 0;
    border-bottom: 1px solid #ebeef5;
    transition: height 0.5s;
    -moz-transition: height 0.5s; /* Firefox 4 */
    -webkit-transition: height 0.5s; /* Safari 和 Chrome */
    -o-transition: height 0.5s; /* Opera */
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
