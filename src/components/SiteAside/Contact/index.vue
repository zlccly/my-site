<template>
    <ul class="contact-container">
        <li>
            <a href="">
                <div class="icon">
                    <Icon type="github"/>
                </div>
                 <span>DuYi-Edu</span>
            </a>
        </li>
        <li>
            <a href="">
                <div class="icon">
                    <Icon type="mail"/>
                </div>
                 <span>23423424234@qq.com</span>
            </a>
        </li>
        <li>
            <a href="tencent://message/?Menu=yes&uin=要对话的QQ号&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45">
                <div class="icon">
                    <Icon type="qq"/>
                </div>
                 <span>3263023350</span>
            </a>
            <div class="pop">
                <img src="http://www.duyiedu.com/source/img/%E5%85%AC%E4%BC%97%E5%8F%B7%E4%BA%8C%E7%BB%B4%E7%A0%81.png" alt="">
            </div>
        </li>
        <li>
            <a href="">
                <div class="icon weixin">
                    <Icon type="weixin"/>
                </div>
                 <span>ssdfwwfwf</span>
            </a>
            <div class="pop">
                <img src="http://www.duyiedu.com/source/img/%E5%85%AC%E4%BC%97%E5%8F%B7%E4%BA%8C%E7%BB%B4%E7%A0%81.png" alt="">
            </div>
        </li>
    </ul>
</template>
<script>
import Icon from '@/components/Icon'
export default {
    components:{
        Icon
    }
}
</script>
<style lang="less" scoped>
@import "~@/styles/var.less";
.contact-container{
    list-style: none;
    padding: 20px;
    margin: 0;
    color: @gray;
    @itemHeight: 30px;
    li{
        height: @itemHeight;
        line-height: @itemHeight + 5px;
        margin: 14px 0;
        position: relative;
        &:hover{
            .pop{
                transform: scaleY(1);
            }
        }

    }
    a{
        display: flex;
        align-items: center;
        cursor: pointer;
        font-size: 14px;
    }
    .icon{
        font-size: 26px;
        width: 36px;
        &.weixin{
            font-size: 32px;
            text-indent: -3px;
        }
    }
    .pop{
        position: absolute;
        left: 0;
        bottom: @itemHeight;
        padding: 10px 15px;
        background-color: #fff;
        border-radius: 5px;
        transform: scaleY(0);
        transform-origin: center bottom;
        transition: 0.3s;


        img{
            width: 150px;
            height: 150px;
        }
        &::after{
            content: "";
            position: absolute;
            left: 50%;
            bottom: -4px;
            transform: translateX(-50%) rotate(45deg);
            width: 8px;
            height: 8px;
            background-color: #fff;

        }

    }

}
// .icon-container{
//     font-size: 22px;
//     margin-right: 2px;
//     vertical-align: middle;

// }
// .contact-container{
//     padding: 15px 0;
//     width: 100%;
//     background: @dark;
//     color: @lightWords;
//     font-size: 1px;
//     .item{
//         margin: 15px;
//         cursor: pointer;
//         &:hover{
//             color: @primary;
//         }

//     }
     
// }
</style>