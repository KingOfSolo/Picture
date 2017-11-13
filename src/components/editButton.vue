<template>
  <el-button type="text" icon="el-icon-edit" v-bind:class="{ editHidden: edit }">修改{{ edit }}</el-button>
</template>

<script>
  export default{
    props: ['showEdit'],
    data () {
      return {
        edit: this.showEdit
      }
    }
  }
</script>

<style>
  .editHidden{
    opacity: 0;
  }
</style>
