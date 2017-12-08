<template>
  <div>
    <div class="masonry">
      <div class="item">
        <div class="picture-add-button">
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


      <!--<div class="item">-->
        <!--<div class="item__content">-->
        <!--</div>-->
      <!--</div>-->
      <!--<div class="item">-->
        <!--<div class="item__content item__content&#45;&#45;small">-->
        <!--</div>-->
      <!--</div>-->
      <!--<div class="item">-->
        <!--<div class="item__content item__content&#45;&#45;medium">-->
        <!--</div>-->
      <!--</div>-->
      <!--<div class="item">-->
        <!--<div class="item__content item__content&#45;&#45;small">-->
        <!--</div>-->
      <!--</div>-->
      <!--<div class="item">-->
        <!--<div class="item__content item__content&#45;&#45;medium">-->
        <!--</div>-->
      <!--</div>-->
      <!--<div class="item">-->
        <!--<div class="item__content">-->
        <!--</div>-->
      <!--</div>-->
      <!--<div class="item">-->
        <!--<div class="item__content item__content&#45;&#45;large">-->
        <!--</div>-->
      <!--</div>-->
      <!--<div class="item">-->
        <!--<div class="item__content item__content&#45;&#45;medium">-->
        <!--</div>-->
      <!--</div>-->
      <!--<div class="item">-->
        <!--<div class="item__content item__content&#45;&#45;small">-->
        <!--</div>-->
      <!--</div>-->
      <!--<div class="item">-->
        <!--<div class="item__content">-->
        <!--</div>-->
      <!--</div>-->
      <!--<div class="item">-->
        <!--<div class="item__content item__content&#45;&#45;large">-->
        <!--</div>-->
      <!--</div>-->
      <!--<div class="item">-->
        <!--<div class="item__content">-->
        <!--</div>-->
      <!--</div>-->
      <!--<div class="item">-->
        <!--<div class="item__content item__content&#45;&#45;small">-->
        <!--</div>-->
      <!--</div>-->
      <!--<div class="item">-->
        <!--<div class="item__content item__content&#45;&#45;large">-->
        <!--</div>-->
      <!--</div>-->
      <!--<div class="item">-->
        <!--<div class="item__content item__content&#45;&#45;medium">-->
        <!--</div>-->
      <!--</div>-->
      <!--<div class="item">-->
        <!--<div class="item__content item__content&#45;&#45;small">-->
        <!--</div>-->
      <!--</div>-->
      <!--<div class="item">-->
        <!--<div class="item__content item__content&#45;&#45;medium">-->
        <!--</div>-->
      <!--</div>-->
      <!--<div class="item">-->
        <!--<div class="item__content">-->
        <!--</div>-->
      <!--</div>-->
      <!--<div class="item">-->
        <!--<div class="item__content item__content&#45;&#45;small">-->
        <!--</div>-->
      <!--</div>-->
    </div>
  </div>
</template>

<script>
  export default{
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

        ]
      }
    }
  }
</script>

<style>
  @import "../style/scss/userCenterPicture.css";

  .picture-add-button{
    border: 2px dashed #515151;
    height: 300px;
    background-color: #f2f2f2;
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
