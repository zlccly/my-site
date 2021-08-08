<template>
  <ul class="right-list-container">
    <li v-for="(item, i) in list" :key="i" >
      <span :class="{ active: item.isSelected }" @click="handleClick(item)"> {{ item.name }}</span>
      <RightList :list="item.children" @select="handleClick"/>
    </li>
  </ul>
</template>
<script>
export default {
  name: "RightList",
  data() {
    return {};
  },
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  methods:{
    handleClick(item){
      this.$emit('select',item);
    }
  }
};
</script>
<style scoped lang='less'>
@import "~@/styles/var.less";
.right-list-container {
  list-style: none;
  padding: 0;
  .right-list-container {
    margin-left: 1em;
  }
  li {
    line-height: 40px;
    min-height: 40px;
    cursor: pointer;
    .active {
      color: @warn;
    }
  }
}
</style>