<template>
    <div class="contact-container">
        <div class="github item">
            <Icon type="github"/>
            DuYi-Edu
        </div>
        <div class="email item">
            <Icon type="mail"/>
            duyi@gmail
        </div>
        <div class="qq item">
            <Icon type="qq"/>
            1346344@qq.com
        </div>
        <div class="weixin item">
            <Icon type="weixin"/>
            duyi666
        </div>
    </div>
</template>
<script>
import Icon from '../Icon';
export default {
    components:{
        Icon
    }
}
</script>
<style lang="less" scoped>
@import "~@/styles/var.less";
.icon-container{
    font-size: 22px;
    margin-right: 2px;
    vertical-align: middle;

}
.contact-container{
    padding: 15px 0;
    width: 100%;
    background: @dark;
    color: @lightWords;
    font-size: 1px;
    .item{
        margin: 15px;
        cursor: pointer;
        &:hover{
            color: @primary;
        }

    }
     
}
</style>