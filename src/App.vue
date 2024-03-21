<template>
  <div id="app">
    <Pager :total="total" :current="current" @pageChange="handlePageChange($event)" />
  </div>
</template>

<script>
import Pager from "./components/Pager.vue"

export default {
  name: "App",
  data() {
    return {
      current: 1,
      total: 302,
    }
  },
  components: {
    Pager
  },
  methods: {
    handlePageChange(newPage) {
      this.current = newPage;
      console.log("加载当前页数据");
    },
  },

}
</script>
