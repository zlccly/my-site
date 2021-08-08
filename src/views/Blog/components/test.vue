<template>
  <div>
      <RightList :list="list" @select="handleSelect"/>
  </div>
</template>
<script>
import RightList from "./RightList.vue";
export default {
  components: {
    RightList,
  },
  data() {
    return {
      list: [
        { name: "a", isSelected: false },
        { name: "b", isSelected: false },
        {
          name: "c",
          isSelected: true,
          children: [
            {
              name: "c-1",
              isSelected: false,
              children: [
                { name: "c-1-1", isSelected: false },
                { name: "c-1-2", isSelected: false },
                { name: "c-1-3", isSelected: false },
              ],
            },
            { name: "c-2", isSelected: false },
            { name: "c-3", isSelected: false },
            { name: "c-4", isSelected: false },
          ],
        },
        { name: "d", isSelected: false },
      ],
    };
  },
  methods:{
      handleSelect(item){
          console.log(item)
      }
  }
};
</script>
<style scoped lang='less'>
</style>