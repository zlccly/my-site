<template>
    <div class="imageLoader-container">
        <img class="placeholder" :src="placeholder" >
        <img class="origin" :src="src" @load="loadImg">
        

    </div>
</template>
<script>
export default {  
    data(){
        return{
            
        }
    },
    props:{
        src:{
            type:String,
            require:true
        },
        placeholder:{
            type:String,
            require:true
        },
        duration:{
            type:Number,
            default:500
        }
    },
    methods:{
        loadImg(){
            console.log("图片加载完成");
        }
    }
}
</script>
<style lang="less" scoped>
@import "~@/styles/mixin.less";
    .imageLoader-container{
        overflow: hidden;
        width: 100%;
        height: 100%;
        position: relative; 
        img{
            .self-fill(); 
            object-fit: cover;   

        }
        .placeholder{
            opacity: 1;
            filter: blur(2vw);

        }
        .origin{
            opacity: 0;
        }

    }
    

</style>