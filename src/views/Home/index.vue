<template>
   <div class="home-container" ref="container">
      <h1>首页</h1>
      <button @click="handleClick">点击</button>
   </div>
</template>
<script>
import {showMessage} from '@/utils'
export default {
   methods:{
      handleClick(){
         showMessage('评论成功','success',2000,this.$refs.container);
      }
   }
   
}
</script>
<style lang="less" scoped>
.home-container{
   background: lightblue;
   width: 300px;
   height: 500px;
   border: 1px solid;
   margin: 50px auto;
}
</style>
