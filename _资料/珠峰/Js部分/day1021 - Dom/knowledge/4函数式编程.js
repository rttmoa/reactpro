/*
 细节知识点：
   @1 函数式编程 && 命令式编程
      函数式编程:把具体的操作过程“封装”到一个函数中,我们无需关注内部是如何处理的(How),只需要关注处理的结果(What)即可;
        + 使用便捷,开发效率高
        + 减少页面冗余代码「低耦合高内聚」
      命令式编程:具体如何去处理,是由自己实现及掌控的,关注How的过程！
        + 操作灵活,可以自主把控处理的每一个步骤
        + 处理性能一般比函数式编程式要好「例如：forEach循环要慢于for循环」
      总结：处理的数据量“较多”的情况下，使用命令式编程来提高性能！操作逻辑较为复杂，需要自己灵活把控处理步骤的情况下，也使用命令式编程！其余情况，优先推荐函数式编程！

   @2 匿名函数具名化
     特点：原本应该是匿名函数「例如：自执行函数、函数表达式、回调函数等」，但是我们会为其设置一个名字
     + 更规范的操作方式
     + 有助于匿名函数的递归操作
 */
"use strict";

// 后期开发中，创建函数：
//  + 建议都使用函数表达式「避免变量提升，让代码执行的逻辑更严谨」
//  + 建议匿名函数具名化「更符合规范」
const render = function render() { 

};

/* (function func() {
  let func = 100;
  console.log(func); //100 如果基于其他的方案声明了这个名字，则是可以被修改的
})(); */

/* (function func() {
  func = 100;
  console.log(func); //还是函数；非严格模式下，直接修改其值，没用；严格模式下会报错「不允许修改」！
})(); */

/* let n = 0;
(function func() {
  if (n >= 5) return;
  n++;
  console.log(n);
  func();
  // console.log(func); //在自己的私有上下文中，函数名存储的是函数本身
})();
// console.log(func); //Uncaught ReferenceError: func is not defined 匿名函数具名化后，设置的名字，并不会在宿主环境「所处上下文」中声明这个函数：在外面不能用！ */


/* let n = 0;
(function () {
  if (n >= 5) return;
  n++;
  console.log(n);
  // console.log(arguments.callee); //获取函数本身 「严格模式下是不允许使用的」
  arguments.callee();
})(); */

/* let arr = [10, 20, 30, 40];
arr.forEach(() => {});
const fn = function () { }; */

//=====================
// let arr = [10, 20, 30, 40];

// 需求2：隔一项循环一次
/* for (let i = 0; i < arr.length; i += 2) {
  console.log(arr[i], i);
}
arr.forEach((item, index) => {
  if (index % 2 === 0) {
    console.log(item, index);
  }
}); */

// 需求1：依次迭代数组中的每一项
/* for (let i = 0; i < arr.length; i++) {
  console.log(arr[i], i);
} */

/* arr.forEach((item, index) => {
  console.log(item, index);
}); */

/* 
// 需求3：循环10次
new Array(10).fill(null).forEach(() => {
  // ...
}); 
*/