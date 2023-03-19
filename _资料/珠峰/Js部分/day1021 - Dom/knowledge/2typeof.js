/*
typeof数据类型检测的底层机制
  特点1：返回的结果是字符串，字符串中包含了对应的数据类型
    + typeof typeof typeof [1,2,3]
  特点2：按照计算机底层存储的二进制进行检测「效率高」
    + 000 对象
    + 1 整数
    + 010 浮点数
    + 100 字符串
    + 110 布尔
    + 000000… null
    + -2^30 undefined
    + ……
    ------
    typeof按照二进制进行检测的时候，认为以“000”开始的就是对象类型
      + 因为null存储的是64个零，所以被识别为对象，导致：typeof null -> “object”
      + 如果检测出来是对象，再去看是否实现了call方法；如果实现了，说明其是一个函数对象，返回“function”；
      + 如果没有实现call，都返回“object”；
  特点3：typeof null -> “object”
  特点4：typeof 对象 -> “object” && typeof 函数 -> “function”
    + typeof不能检测null，也无法对“对象”进行细分（除函数对象外）
  特点5：typeof 未被声明的变量 -> “undefined”

  typeof在实战中的运用：
    @1 检测除null以外的原始值类型
    @2 笼统的校验是否为对象
    @3 检测是否为函数  => if(typeof obj==="function"){...}
    @4 处理浏览器兼容「ES6+语法规范，都不兼容IE」
       IE浏览器内核：Trident
       Edge浏览器内核：Chromium「虽然都是微软搞的，但是Edge不是IE」
       谷歌浏览器内核：webkit「分支：blink」
       Safari浏览器内核：webkit
       火狐浏览器内核：Gecko
       移动端浏览器 && 国产浏览器：现在基本上都是webkit内核
*/

// console.log(a); //Uncaught ReferenceError: a is not defined
// console.log(typeof a); //'undefined'

/* // 检测是否为对象「笼统」
const isObject = function isObject(obj) {
  if (obj === null) return false;
  // return typeof obj === "object" || typeof obj === "function";
  return /^(object|function)$/.test(typeof obj);
}; */

/* 
// 兼容的本质：是因为当前浏览器不具备这个“东西”，所以不兼容，这样我们就可以基于typeof检测它是否存在「哪怕不存在也不会报错，返回值是'undefined'」
if (typeof Symbol !== "undefined") {
  let sym = Symbol();
}
*/