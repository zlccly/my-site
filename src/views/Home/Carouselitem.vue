<template>
    <div class="carouselitem-container">
        <div class="imageLoader">
            <ImageLoader :src="carouse.bigImg" :placeholder="carouse.midImg"/>
        </div>
        <div class="title">{{ carouse.title }}</div>
        <div class="desc">{{ carouse.description }}</div>
    </div>
</template>
<script>
import ImageLoader from '@/components/ImageLoader'
export default {
    components:{
        ImageLoader
    },
    props:["carouse"],
    data(){
        return{

        }
    }
}
</script>
<style lang="less" scoped>
@import "~@/styles/var.less";
.carouselitem-container{
    position: relative;
    .imageLoader{
        height: 100        %;
        width: 100%;
    }
    .title,.desc{
        position: absolute;
        left: 30px;
        color: #fff;
        text-shadow: 1px 0 0 rgba(0, 0, 0, 0.5), -1px 0 0 rgba(0, 0, 0, 0.5),
    0 1px 0 rgba(0, 0, 0, 0.5), 0 -1px 0 rgba(0, 0, 0, 0.5);

    }
    .title{
        top: calc(50% - 40px);
        font-size: 2em;
    }
    .desc{
        top: calc(50%);
        font-size: 1.2em;
        color: lighten(@gray, 20%);
    }
}

</style>