<template>
  <div class="test-container">
    <ImageLoader 
	src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
  placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
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
  
  }
</script>
<style lang="less" scoped>
.test-container{
  margin: 0 auto;
  width: 600px;
  height: 500px;
  border: 1px solid;


}
</style>