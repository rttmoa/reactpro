


<template>
  <div>
    <h2>toRefs</h2>
    <p>{{name}}==={{age}}</p>
    <p>
        <button @click="update">修改name</button>
    </p>
  </div>
</template>

<script>
import {reactive,toRefs} from 'vue'
export default {
  setup(props) {
    // 定义响应式对象
    const obj = reactive({
        name:'三毛',
        age:18
    })
    // 响应式对象数据，结构之后，重置赋值，就变成了普通对象类型
    let obj2={...obj};
    console.log(obj2);  //{name: '三毛', age: 18}

    // toRefs: 转换**响应式对象**中==所有属性==为单独响应式数据
    let obj3= toRefs(obj);
    console.log(obj3); //{name: ObjectRefImpl, age: ObjectRefImpl}

    const update=()=>{
        // obj3.name.value='单独响应式数据修改之后的值'
        // ==**值是关联的,跟随着原始数据变化！**==
        obj.name='我是原始数据修改之后的Obj.name'
    }

    // return {...obj3,update}
    return {...toRefs(obj),update}
  }
};
</script>

<style lang="less" scoped>
</style>