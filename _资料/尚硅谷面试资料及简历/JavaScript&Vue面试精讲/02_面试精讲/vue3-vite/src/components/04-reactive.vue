<template>
  <div>
    <h2>reactive函数</h2>
    obj:{{obj.name}}---{{obj.age}}<button @click="updateName">修改name</button>
  </div>
</template>

<script>
import {reactive} from 'vue'
export default {
    setup(props) {
        // 普通对象,它不是响应式
        // const obj={
        //     name:'三毛',
        //     age:18
        // }

        // 定义了一个响应式的对象数据
        const obj=reactive({
            name:'三毛',
            age:18
        })

        // 修改name
        const updateName=()=>{
            obj.name+='=========='
            console.log(obj);
        }


        return {obj,updateName}
    }
};
</script>

<style lang="less" scoped>
</style>