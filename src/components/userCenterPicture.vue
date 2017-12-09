<template>
  <div>
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
      <div v-for='url in userCenterImageUrl' class="item">
        <img :src="url"/>
      </div>
    </div>
    <el-dialog
      title="添加图片"
      :visible.sync="addPictureDialogVisible"
      width="600px">
      <el-form label-width="80px">
        <el-form-item label="图片名称">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="图片标签">

        </el-form-item>
        <el-form-item>
          <!--<el-upload-->
            <!--action="https://jsonplaceholder.typicode.com/posts/"-->
            <!--list-type="picture-card"-->
            <!--:on-preview="handlePictureCardPreview"-->
            <!--:on-remove="handleRemove">-->
            <!--<i class="el-icon-plus"></i>-->
          <!--</el-upload>-->
          <!--<el-dialog :visible.sync="updateDialogVisible" size="tiny">-->
            <!--<img width="100%" :src="dialogImageUrl" alt="">-->
          <!--</el-dialog>-->
        </el-form-item>
        <el-form-item label="图片描述">
          <el-input type="textarea" :autosize="{ minRows: 3, maxRows: 5}"></el-input>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
  import ElForm from '../../node_modules/element-ui/packages/form/src/form'
  import ElFormItem from '../../node_modules/element-ui/packages/form/src/form-item'
  import ElInput from '../../node_modules/element-ui/packages/input/src/input'
//  import ElUpload from '../../node_modules/element-ui/packages/upload/src/'
  export default{
    components: {
//      ElUpload,
      ElInput,
      ElFormItem,
      ElForm},
    data () {
      return {
        userCenterImageUrl: [
          'https://picsum.photos/270/400',
          'https://picsum.photos/270/300',
          'https://picsum.photos/270/250',
          'https://picsum.photos/270/288',
          'https://picsum.photos/270/500',
          'https://picsum.photos/270/360',
          'https://picsum.photos/270/190',
          'https://picsum.photos/270/252',
          'https://picsum.photos/270/240',
          'https://picsum.photos/270/310',
          'https://picsum.photos/270/401',
          'https://picsum.photos/270/404',
          'https://picsum.photos/270/125',
          'https://picsum.photos/270/233',
          'https://picsum.photos/270/333'
        ],
        addPictureDialogVisible: false,
        dialogImageUrl: '',
        dialogVisible: false
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
      }
    }
  }
</script>

<style>
  @import "../style/scss/userCenterPicture.css";

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
</style>
