<template>
  <div id="user-center-album">
    <div class="waterfall">
      <div class="item" v-for="album in albumList">
        <album-item :user-head="album.userHead" :username="album.username" :album-name="album.albumName"
          :photo-num="album.photoNum" :img-url-list="album.imgUrlList"></album-item>
      </div>
    </div>
  </div>
</template>

<script>
  import AlbumItem from './albumItem.vue'

  export default{
    components: {
      AlbumItem
    },
    data () {
      return {
        albumList: [
          {
            userHead: 'https://picsum.photos/100/100/?random',
            username: '迁安时光',
            albumName: '生活方式',
            photoNum: 10,
            imgUrlList: [
              'https://picsum.photos/300/300/?random',
              'https://picsum.photos/200/200/?random',
              'https://picsum.photos/201/201/?random'
            ]
          },
          {
            userHead: 'https://picsum.photos/100/100/?random',
            username: '迁安时光',
            albumName: '生活方式',
            photoNum: 10,
            imgUrlList: [
              'https://picsum.photos/301/301/?random',
              'https://picsum.photos/201/200/?random',
              'https://picsum.photos/203/201/?random'
            ]
          },
          {
            userHead: 'https://picsum.photos/100/100/?random',
            username: '迁安时光',
            albumName: '生活方式',
            photoNum: 1,
            imgUrlList: [
              'https://picsum.photos/302/302/?random',
              'https://picsum.photos/202/200/?random',
              'https://picsum.photos/204/201/?random'
            ]
          },
          {
            userHead: 'https://picsum.photos/100/100/?random',
            username: '迁安时光',
            albumName: '生活方式',
            photoNum: 2,
            imgUrlList: [
              'https://picsum.photos/303/303/?random',
              'https://picsum.photos/202/201/?random',
              'https://picsum.photos/204/211/?random'
            ]
          }
        ]
      }
    }
  }
</script>

<style>
  @import "../../style/scss/userCenterAlbum.css";
</style>
