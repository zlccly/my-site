<template>
  <div class="app-container">
    <Layout>
      <template #left>
        <div class="aside">
          <SiteAside/>
        </div>
      </template>
      <template #default>
       <RouterView/>
      </template>
    </Layout>  
  </div>
    
    
</template>

<script>
import Layout from '@/components/Layout'
import SiteAside from '@/components/SiteAside'
export default{
  components:{
    Layout,
    SiteAside
  }
}
</script>
<style lang="less" scoped>
@import "~@/styles/mixin.less";
.app-container{
  .self-fill(fixed);
  // background-color: lightgreen;
  .aside{
    width: 250px;
    height: 100%;
    background: #000;
  }
}
</style>