<template>
    <div class="imageLoader-container">
        <img v-if="!everthingDone" class="placeholder" :src="placeholder" >
        <img  :src="src" :style="{opacity:getOpacity,transition:`${duration}ms`}" @load="loadImg">       

    </div>
</template>
<script>
export default {  
    data(){
        return{
            opacityLoader:false ,
            everthingDone:false
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
            this.opacityLoader = true;  
            setTimeout(() =>{
                this.everthingDone = true;
                this.$emit("load");
            },this.duration);

        }
    },
    computed:{
        getOpacity(){
            return this.opacityLoader ? 1 : 0;
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
            filter: blur(2vw);

        }

    }
    

</style>