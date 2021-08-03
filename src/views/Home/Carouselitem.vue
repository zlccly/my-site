<template>
    <div class="carouselitem-container">
        <div class="imageLoader">
            <ImageLoader :src="carouse.bigImg" :placeholder="carouse.midImg" @load="showWords"/>
        </div>
        <div class="title" ref="title">{{ carouse.title }}</div>
        <div class="desc" ref="desc">{{ carouse.description }}</div>
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
            titleWidth: 0,
            descWidth: 0

        }
    },
    mounted(){
        this.titleWidth = this.$refs.title.clientWidth;
        this.descWidth =  this.$refs.desc.clientWidth;
    },
    methods:{
        showWords(){
            this.$refs.title.style.opacity = 1;
            this.$refs.title.style.width = 0;
            this.$refs.title.clientWidth;

            this.$refs.title.style.transition = '1s';     
            this.$refs.title.style.width = this.titleWidth + 'px';
            
            this.$refs.desc.style.opacity = 1;
            this.$refs.desc.style.width = 0;
            this.$refs.desc.clientWidth;

            this.$refs.desc.style.transition = '2s 1s';     
            this.$refs.desc.style.width = this.descWidth + 'px';

        }
    }
}
</script>
<style lang="less" scoped>
@import "~@/styles/var.less";
.carouselitem-container{
    position: relative;
    .imageLoader{
        height: 100%;
        width: 100%;
    }
    .title,.desc{
        position: absolute;
        left: 30px;
        color: #fff;
        letter-spacing: 3px;
        text-shadow: 1px 0 0 rgba(0, 0, 0, 0.5), -1px 0 0 rgba(0, 0, 0, 0.5),
    0 1px 0 rgba(0, 0, 0, 0.5), 0 -1px 0 rgba(0, 0, 0, 0.5);
        opacity: 0;
        white-space: nowrap;
        overflow: hidden;
    }
    .title{
        top: calc(50% - 40px);
        font-size: 2em;
    }
    .desc{
        
        top: calc(50% + 20px);
        font-size: 1.2em;
        color: lighten(@gray, 20%);
    }
}

</style>