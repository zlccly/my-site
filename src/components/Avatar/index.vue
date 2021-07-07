<template>
<div> 
    <img class="avatar-container" :src="url"  :style="{
        width:size + 'px',
        height:size + 'px'
    }">
   
</div>
   
</template>
<script>

export default {
    props:{
       url:{
           type:String,
           required:true
       },
       size:{
           type:Number,
           dafault:150
       },
   }
}
</script>
<style scoped>
   .avatar-container{
       border-radius: 50%;
       object-fit: cover;
       display: block;
   } 
</style>