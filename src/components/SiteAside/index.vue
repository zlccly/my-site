<template>
    <div class="site-aside-container">
        <Avatar url="https://img0.baidu.com/it/u=3311900507,1448170316&fm=26&fmt=auto&gp=0.jpg" :size="100"/>
        <h1 class="title">小爷霸气侧漏</h1>
        <Menu/>
        <Contact/>
        <footer>232626616</footer>
    </div>
</template>
<script>
import Avatar from '@/components/Avatar'
import Contact from './Contact'
import Menu from './Menu'
export default {
    components:{
        Avatar,
        Contact,
        Menu
    }
}
</script>
<style lang="less" scoped>
.site-aside-container{
   
    width: 100%;
    height: 100%;
    padding: 10px 0;
    background-color: #000;
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: auto;
    .avatar-container{
        margin: 0 auto;

    }
    footer{
        text-align: center;
        font-size: 12px;
    }
    .title{
        font-size: 1em;
        color: #fff;
        text-align: center;

    }
}
</style>