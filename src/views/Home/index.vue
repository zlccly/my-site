<template>
  <div
    class="home-container"
    v-loading="isLoading"
    ref="container"
    @wheel="handleWheel"
  >
    <ul
      class="carousel-container"
      :style="{ marginTop }"
      @transitionend="handletransiton"
    >
      <li v-for="item in data" :key="item.id">
        <Carouselitem :carouse="item" />
      </li>
    </ul>

    <div class="icon icon-up" v-show="index > 0" @click="switchTo(index - 1)">
      <Icon type="arrowUp" />
    </div>
    <div
      class="icon icon-down"
      v-show="index < data.length - 1"
      @click="switchTo(index + 1)"
    >
      <Icon type="arrowDown" />
    </div>
    <ul class="indicator">
      <li
        v-for="(item, i) in data"
        :key="item.id"
        @click="switchTo(i)"
        :class="{ active: i === index }"
      ></li>
    </ul>
  </div>
</template>
<script>
import { getBanners } from "@/api/banner";
import Carouselitem from "./Carouselitem.vue";
import Icon from "@/components/Icon";
import fetchData from "@/mixins/fetchData";
export default {
  components: {
    Carouselitem,
    Icon,
  },
  mixins: [fetchData([])],
  data() {
    return {
      index: 0,
      containerHeight: 0,
      switching: false,
    };
  },
  methods: {
    switchTo(i) {
      this.index = i;
    },
    handleWheel(e) {
      if (this.switching) {
        return;
      }
      if (e.deltaY > 0 && this.index < this.data.length - 1) {
        this.switching = true;
        this.index++;
      } else if (e.deltaY < 0 && this.index > 0) {
        this.switching = true;
        this.index--;
      }
      this.switching = false;
    },
    handletransiton() {
      this.switching = false;
    },
    handleResize() {
      this.containerHeight = this.$refs.container.clientHeight;
    },
    async fetchData() {
      return await getBanners();
    },
  },
  computed: {
    marginTop() {
      return -this.index * this.containerHeight + "px";
    },
  },
  mounted() {
    this.containerHeight = this.$refs.container.clientHeight;
    window.addEventListener("resize", this.handleResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>
<style lang="less" scoped>
@import "~@/styles/var.less";
@import "~@/styles/mixin.less";
.home-container {
  // background: black;
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
}
.carousel-container {
  width: 100%;
  height: 100%;
  transition: 500ms;
  li {
    width: 100%;
    height: 100%;
  }
}
.icon {
  position: absolute;
  @gap: 25px;
  left: 50%;
  font-size: 30px;
  color: @gray;
  cursor: pointer;
  transform: translateX(-50%);
  &.icon-up {
    top: @gap;
    animation: jump-up 2s infinite;
  }
  &.icon-down {
    bottom: @gap;
    animation: jump-down 2s infinite;
  }
  @jump: 5px;
  @keyframes jump-up {
    0% {
      transform: translate(-50%, @jump);
    }
    50% {
      transform: translate(-50%, -@jump);
    }
    100% {
      transform: translate(-50%, @jump);
    }
  }
  @keyframes jump-down {
    0% {
      transform: translate(-50%, -@jump);
    }
    50% {
      transform: translate(-50%, @jump);
    }
    100% {
      transform: translate(-50%, -@jump);
    }
  }
}
.indicator {
  position: absolute;
  // .self-center();
  right: 20px;
  left: auto;
  top: 50%;
  transform: translateY(-50%);
  li {
    width: 7px;
    height: 7px;
    background: @words;
    border-radius: 50%;
    margin-bottom: 10px;
    cursor: pointer;
    border: 1px solid #fff;
    box-sizing: border-box;

    &.active {
      background: #fff;
    }
  }
}
</style>
