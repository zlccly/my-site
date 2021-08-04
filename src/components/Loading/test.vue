<template>
    <div class="test-container">
        <Loading/>
        <button>切换显示隐藏</button>
    </div>
</template>
<script>
import Loading from './'
export default {
    components:{
        Loading
    }
}
</script>
<style scoped>
.test-container{
    position: relative;
}
</style>