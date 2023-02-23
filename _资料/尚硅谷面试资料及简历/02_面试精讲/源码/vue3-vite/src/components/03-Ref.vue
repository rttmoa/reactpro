

<template>
  {{name}}
  <button @click="changeName">修改普通name</button>
  <p>
    {{activeName}}
    <button @click="changeActiveName">修改响应式name</button>
  </p>
  {{age}}
</template>

<script>
import { ref } from "vue";
export default {
  setup(props) {
    let name = "大毛";
    console.log(name);
    const changeName = () => {
      name += "大毛+++++++++++++++";
      console.log(name);
    };

    // ref 定义简单数据类型为响应式
    let activeName = ref("二毛");
    console.log(activeName);
    // 修改响应式数据
    const changeActiveName = () => {
      activeName.value = "二毛============";
    };

    // 定义number
    let age = ref(10);
    console.log(age);
    // 修改age
    const changeAge = () => {
      age.value = 20;
    };

    return { name, activeName, changeActiveName, changeName, age, changeAge };
  }
};
</script>

<style lang="less" scoped>
</style>