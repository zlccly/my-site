<template>
   <div class="home-container" ref="container" @wheel="handleWheel" >
      <ul class="carouselitem-container" :style="{marginTop}" @transitionend="handletransiton">
         <li v-for="item in banners" :key="item.id">
            <Carouselitem :carouse="item"/>
         </li>
      </ul>
      
      <div class="icon icon-up" v-show="index > 0" @click="switchTo(index-1)">
         <Icon type="arrowUp"/>
      </div>
      <div class="icon icon-down" v-show="index < banners.length-1" @click="switchTo(index+1)">
         
         <Icon type="arrowDown"/>
      </div>
      <ul class="indicator">
         <li v-for="(item, i) in banners" :key="item.id" @click="switchTo(i)" :class="{active: i===index}"></li>
      </ul>
   </div>
</template>
<script>
import {getBanners} from '@/api/banner'
import Carouselitem from './Carouselitem.vue'
import Icon from '@/components/Icon'
export default {
   components:{
      Carouselitem,
      Icon
   },
   data(){  
      return {
         banners: [],
         index: 0,
         containerHeight: 0,
         switching: false
      }
   },
  methods:{
     switchTo(i){
      this.index =  i;
     },
     handleWheel(e){
         if(this.switching){
            return
         }
        
       
         if(e.deltaY > 0 && this.index < this.banners.length-1){
            this.switching = true;
            this.index++;
         }
         else if(e.deltaY < 0 && this.index > 0){
            this.switching = true;
            this.index--;
         }
         this.switching = false;
        
     },
     handletransiton(){
        this.switching = false;
     },
     handleResize(){
         this.containerHeight = this.$refs.container.clientHeight;


     }
  },
   computed:{
      marginTop(){
         return -this.index * this.containerHeight + 'px'
      }
      
   },
    async created(){
      this.banners = await getBanners();
   },
   mounted(){
      this.containerHeight = this.$refs.container.clientHeight;
      window.addEventListener('resize', this.handleResize)
   },
   destroyed() {
    window.removeEventListener("resize", this.handleResize);
  }
}
</script>
<style lang="less" scoped>
@import '~@/styles/gloable.less';
@import '~@/styles/var.less';
@import '~@/styles/mixin.less';
.home-container{
   // background: black;
   position: relative;
   top: 0;
   height: 100%;
   width: 100%;
   overflow: hidden;
   ul{
      margin: 0;
      padding: 0;
      list-style: none;
   }
   .carouselitem-container{
      width: 100%;
      height: 100%;
      transition: 500ms;

      li{
         width: 100%;
         height: 100%;
      }
   }
   .icon{
     position: absolute;
      @gap: 25px;
      left: 50%;
      font-size: 30px;
      color: @gray;
      cursor: pointer;
      transform: translateX(-50%);
      &.icon-up{
         top: @gap;
         animation: jump-up 2s infinite;
      }
      &.icon-down{
         bottom: @gap;
         animation: jump-down 2s infinite;
      }
      @jump: 5px;
      @keyframes jump-up {
         0% {
            transform: translate(-50%, @jump);
         }
         50% {
            transform: translate(-50%, -@jump);
         }
         100% {
            transform: translate(-50%, @jump);
         }
         
      }
      @keyframes jump-down {
         0% {
            transform: translate(-50%, -@jump);
         }
         50% {
            transform: translate(-50%, @jump);
         }
         100% {
            transform: translate(-50%, -@jump);
         }
         
      }

   }
   .indicator{
      position: absolute;
      right: 20px;
      top: 50%;
      transform: translateY(-50%);
      li{
         width: 7px;
         height: 7px;
         background: @words;
         border-radius: 50%;
         margin-bottom: 10px;
         cursor: pointer;
         border: 1px solid #fff;
         box-sizing: border-box;
      
         &.active{
            background: #fff;
         }
      }
   }

}
</style>
