

<template>
  {{msg}}
  <button @click="say">Say</button>
</template>

<script>
export default {
  data() {
    return {
      num: 10
    };
  },
  beforeCreate() {
    console.log("beforeCreate-----this:", this.num);
  },
  created() {
    console.log("created-----this:", this.num);
  },
  setup(props) {
    console.log("setup-----this:");
    let msg = "打起精神来呀！";
    let say = () => {
      console.log("哈喽啊!");
    };

    return { msg, say };
  }
};
</script>

<style lang="less" scoped>
</style>