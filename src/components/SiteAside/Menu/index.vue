<template>
   <ul class="menu-container">
       <li v-for="item in items" :key="item.link" >
           
           <RouterLink :exact="item.exact" :to="{name:item.name}">
               <div class="icon">
                   <Icon :type="item.icon"/>
               </div>
               <span>{{item.title}}</span>
           </RouterLink>
       </li>
    </ul> 
</template>
<script>
import Icon from '@/components/Icon'
import  '@/styles/gloable.less'
export default {
    data(){
        return{
            items:[{
                name:"Home",
                title:"首页",
                icon:"home",
                exact:true
            },
            {
                name:"Blog",
                title:"文章",
                icon:"blog",
                exact:false
            },
            {
                name:"About",
                title:"关于我",
                icon:"info",
                exact:true
            },
            {
                name:"Project",
                title:"项目&效果",
                icon:"code",
                exact:true
            },
            {
                name:"Message",
                title:"留言板",
                icon:"chat"
            },
            ]
        }
    },
    components:{
        Icon
    }
    
}
</script>
<style lang="less" scoped>
@import "~@/styles/var.less";
.menu-container{
    padding: 0;
    list-style: none;
    color: @gray;
    
    a{
        display: flex;
        padding: 0 50px;
        align-items: center;
        height: 45px;
        .icon{
            width: 24px;
        }
        &:hover{
            color: #fff;
        }
        &.router-link-active{
            color: #fff;
            background-color: #2d2d2d;
        }
        

    }
}


</style>