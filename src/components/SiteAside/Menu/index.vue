<template>
   <ul class="menu-container">
       <li v-for="item in items" :key="item.link" >
           
           <a :href="item.link" :class="{
               selected:isSelected(item)
           }">
               <div class="icon">
                   <Icon :type="item.icon"/>
               </div>
               <span>{{item.title}}</span>
           </a>
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
                link:"/",
                title:"首页",
                icon:"home"
            },
            {
                link:"/blog",
                title:"文章",
                icon:"blog",
                startWith:true
            },
            {
                link:"/about",
                title:"关于我",
                icon:"info"
            },
            {
                link:"/project",
                title:"项目&效果",
                icon:"code"
            },
            {
                link:"/message",
                title:"留言板",
                icon:"chat"
            },
            ]
        }
    },
    components:{
        Icon
    },
    methods:{
        isSelected(item){
            var link = item.link.toLowerCase();
            var CurPathname = location.pathname.toLowerCase();
            if(item.startWith){
                return CurPathname.startsWith(link)
            }
            else{
                return CurPathname === link;
            }
            
        }
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
        &.selected{
            color: #fff;
            background-color: #2d2d2d;
        }
        

    }
}


</style>