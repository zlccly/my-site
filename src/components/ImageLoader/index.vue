<template>
    <div class="imageLoader-container">
        <img :src="src" @load="loadImg">
    </div>
</template>
<script>
export default {  
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
        .self-center();
    }
    img{
        width: 500px;
    }

</style>