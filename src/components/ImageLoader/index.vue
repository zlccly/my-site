<template>
    <div class="imageLoader-container">
        <img :src="src" @load="loadImg">
        <img :src="placeholder">
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
        width: 600px;
        height: 500px;
        position: relative; 
    }
    img{
        .self-fill();
        width: 100%;
        height: 100%;    
        object-fit: cover;
        filter: blur(12px);
    }

</style>