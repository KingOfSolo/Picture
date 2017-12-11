<template>
  <div id="user-center-picture">
    <div class="masonry">
      <div class="item">
        <div class="picture-add-button" @click="addPicture">
          <div>
            <div style="font-size: 75px;"><i class="el-icon-circle-plus-outline"></i></div>
            <div>
              添加图片
            </div>
          </div>
        </div>
      </div>
      <div v-for='item in photoList' class="item">
        <user-center-picture-display :img-url="item.photoUrl" :user-head="userHead" :username="nickName" :img-title="item.title"
          :heart-num="item.liked" :comment-num="item.commentNum" :date="item.date" :intro="item.intro"></user-center-picture-display>
      </div>
    </div>
    <el-dialog
      title="添加图片"
      :visible.sync="addPictureDialogVisible"
      width="900px">
      <div class="add-picture">
        <div class="add-picture-main">
          <el-upload
            action="//jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
            :on-success="handleSuccess">
            <i class="el-icon-plus"></i>
          </el-upload>
        </div>
        <div class="add-picture-form">
          <el-form label-width="80px">
            <el-form-item label="图片名称">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="图片标签">
              <div style="text-align: left">
                <el-tag class="picture-tag">风景</el-tag><el-tag class="picture-tag">城市</el-tag><el-tag class="picture-tag">动画</el-tag>
                <el-tag class="picture-tag">植物</el-tag><el-tag class="picture-tag">建筑</el-tag><el-tag class="picture-tag">人物</el-tag>
                <el-tag class="picture-tag">动物</el-tag><el-tag class="picture-tag">自然</el-tag><el-tag class="picture-tag">生活</el-tag>
              </div>
            </el-form-item>
            <el-form-item label="图片描述">
              <el-input type="textarea" :autosize="{ minRows: 3, maxRows: 5}"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" style="width: 100%">确认上传</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>

      <!--<span>-->

      <!--</span>-->
    </el-dialog>
    <el-dialog :visible.sync="dialogVisible" size="tiny">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
  </div>
</template>

<script>
  import ElForm from '../../../node_modules/element-ui/packages/form/src/form'
  import ElFormItem from '../../../node_modules/element-ui/packages/form/src/form-item'
  import ElInput from '../../../node_modules/element-ui/packages/input/src/input'
  import ElButton from '../../../node_modules/element-ui/packages/button/src/button'
  import UserCenterPictureDisplay from './userCenterPictureDisplay.vue'
  import user from '../../assets/user.jpg'
//  import ElUpload from '../../node_modules/element-ui/packages/upload/src/'
  export default{
    props: ['photoList', 'userHead', 'nickName'],
    components: {
//      ElUpload,
      ElButton,
      ElInput,
      ElFormItem,
      ElForm,
      UserCenterPictureDisplay},
    data () {
      return {
        userCenterImageList: [
          {
            imgUrl: 'https://picsum.photos/270/400',
            userHead: user,
            username: '只为红颜',
            imgTitle: '随便标题',
            heartNum: 0,
            commentNum: 0
          },
          {
            imgUrl: 'https://picsum.photos/270/300',
            userHead: user,
            username: '只为红颜',
            imgTitle: '随便标题',
            heartNum: 0,
            commentNum: 0
          },
          {
            imgUrl: 'https://picsum.photos/270/250',
            userHead: user,
            username: '只为红颜',
            imgTitle: '随便标题',
            heartNum: 0,
            commentNum: 0
          },
          {
            imgUrl: 'https://picsum.photos/270/400',
            userHead: user,
            username: '只为红颜',
            imgTitle: '随便标题',
            heartNum: 0,
            commentNum: 0
          },
          {
            imgUrl: 'https://picsum.photos/333/502',
            userHead: user,
            username: '只为红颜',
            imgTitle: '随便标题',
            heartNum: 0,
            commentNum: 0
          },
          {
            imgUrl: 'https://picsum.photos/320/404',
            userHead: user,
            username: '只为红颜',
            imgTitle: '随便标题',
            heartNum: 0,
            commentNum: 0
          },
          {
            imgUrl: 'https://picsum.photos/323/405',
            userHead: user,
            username: '只为红颜',
            imgTitle: '随便标题',
            heartNum: 0,
            commentNum: 0
          },
          {
            imgUrl: 'https://picsum.photos/505/666',
            userHead: user,
            username: '只为红颜',
            imgTitle: '随便标题',
            heartNum: 0,
            commentNum: 0
          },
          {
            imgUrl: 'https://picsum.photos/480/400',
            userHead: user,
            username: '只为红颜',
            imgTitle: '随便标题',
            heartNum: 0,
            commentNum: 0
          }
        ],
        addPictureDialogVisible: false,
        dialogImageUrl: '',
        dialogVisible: false,
        fileList: ''
      }
    },
    methods: {
      addPicture: function () {
        this.addPictureDialogVisible = true
      },
      handleRemove (file, fileList) {
      },
      handlePictureCardPreview (file) {
        this.dialogImageUrl = file.url
        this.dialogVisible = true
      },
      handleSuccess (file) {
      }
    }
  }
</script>

<style>
  @import "../../style/scss/userCenterPicture.css";

  .picture-add-button{
    border: 2px dashed #515151;
    height: 300px;
    background-color: #f5f5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #818181;
  }

  .picture-add-button:hover{
    background-color: white;
    color: #515151;
  }

  #user-center-display form{
    width: 100%;
  }

  .add-picture{
    position: relative;
    height: 400px;
  }

  .add-picture-main{
    position: absolute;
    right: 350px;
    left: 0;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: auto;

  }

  .add-picture-form{
    position: absolute;
    width: 350px;
    right: 0;
    margin-left: auto;
    height: 100%;
    border-left: 1px solid #10cf7d;
  }

  .picture-tag{
    margin-right: 10px;
    cursor: pointer;
  }
</style>
