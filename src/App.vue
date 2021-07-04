<template>
  <div>
    <h1>App组件</h1>
    <Avatar url="https://img0.baidu.com/it/u=3311900507,1448170316&fm=26&fmt=auto&gp=0.jpg" :size="50"/>
    <Icon type="blog"/>
    <Pager :current="current" :total="total" @pageChange="handlePageChange"/>
  </div>
</template>

<script>
import Avatar from "./components/Avatar.vue"
import Icon from "./components/Icon.vue"
import Pager from "./components/Pager.vue"
  export default {
    name:"App",//如果组件没有在注册的时候指定名字，则使用该名字
    components:{
      Avatar,
      Icon,
      Pager
    },
    data(){
      return{
        current:15,
        total:321
      }
    },
    methods:{
      handlePageChange(newPage){
        console.log(newPage);
        this.current = newPage;

      }
    }
  
  }
</script>