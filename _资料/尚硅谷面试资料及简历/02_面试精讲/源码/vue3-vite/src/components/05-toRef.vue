<template>
  <div>
    <!--
        把响应式对象里的属性成为单独的响应式数据：
         1、toRef(obj,'name')
         2、修改 属性.value=
         使用场景：
         在模板当中直接访问属性
     -->
    
    {{name}}
    <p>
        <button @click="updateName">修改name</button>
    </p>
  </div>
</template>

<script>
import { reactive,toRef } from "vue";
export default {
  setup(props) {
    // 
    const obj = reactive({
      name: "三毛",
      age: 18
    });
    // 对象解构的方式，结构出来属性不再是响应式的啦！！！
    // let { name } = obj;
    // console.log(name);

    // 重点：转换**响应式对象**中**某个**属性为单独响应式数据
    // 1、toRef(obj,'name')
    let name=toRef(obj,'name')
    console.log(name);
    
    const updateName=()=>{
        // 2、修改 属性.value=
        name.value+='------------';
        console.log(name);
    }

    return { name,updateName };
  }
};
</script>

<style lang="less" scoped>
</style>