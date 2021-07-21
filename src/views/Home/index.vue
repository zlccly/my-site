<template>
   <ul class="home-container">
      <li></li>
   </ul>
</template>
<script>
import {getBanners} from '@/api/banner'
getBanners().then(r => {
   console.log(r);
})
export default {
  
}
</script>
<style lang="less" scoped>
@import '~@/styles/gloable.less';
</style>
