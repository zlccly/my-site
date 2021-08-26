<template>
  <div class="blog-category-container" v-loading="isLoading">
    <h1>文章分类</h1>
    <RightList :list="data"/>
  </div>
</template>
<script>
import RightList from './RightList.vue'
import fetchData from '@/mixins/fetchData'
import {getBlogTypes} from "@/api/blog"
export default {
  mixins:[fetchData([])],
  components:{
    RightList
  },
  methods:{
    async fetchData(){

      return await getBlogTypes();
    }
  }
}
</script>
<style scoped lang='less'>
.blog-category-container{
  width: 300px;
  padding: 20px;
}
</style>