<template>
  <div>
    <Pager :current="current" :total="total" @pageChange="handlePageChange"/>
  </div>
</template>

<script>
import Pager from "./"
  export default {
    components:{
      Pager
    },
    data(){
      return{
        current:15,
        total:321
      }
    },
    methods:{
      handlePageChange(newPage){
        console.log(newPage);
        this.current = newPage;

      }
    }
  
  }
</script>