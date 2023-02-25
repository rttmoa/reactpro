

<template>
  <div class="box"></div>
</template>

<script>
// 按需引入
import { onMounted } from "vue";
export default {
  beforeMount() {
    console.log("beforeMount 挂载之前....", document.querySelector(".box"));
  },
  mounted() {
    console.log("Vue2 mounted 挂载完成....", document.querySelector(".box"));
  },
  setup(props) {
    // Vue3 生命周期
    onMounted(() => {
      console.log("Vue3 onMounted 1....", document.querySelector(".box"));
    });
    onMounted(() => {
      console.log("Vue3 onMounted 2....", document.querySelector(".box"));
    });
  }
};


/**
 * 特点：
    1. 生命周期需要些再setup
    2. 生命周期函数需要从vue按需引入
    3. 生命周期函数在回调里些逻辑
    4. 可以多次使用同一个生命周期函数，执行顺序和书写顺序相同
 */
</script>

<style lang="less" scoped>
</style>