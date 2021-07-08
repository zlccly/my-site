<template>
  <div class="test-container">
    <ImageLoader 
	src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
  placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100" 
  @load="handleLoaede"
/>
<!-- "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100" -->
<!-- "https://img2.baidu.com/it/u=325567737,3478266281&fm=26&fmt=auto&gp=0.jpg" -->
  </div>
</template>

<script>
import ImageLoader from "./"
  export default {
    components:{
      ImageLoader
    },
    methods:{
      handleLoaede(){
        console.log("ImageLoader组件load事件触发，图片加载完成");
      }
    }
  
  }
</script>
<style lang="less" scoped>
.test-container{
  margin: 0 auto;
  width: 500px;
  height: 400px;
  border: 2px solid;


}
</style>