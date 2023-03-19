/* 
obj是一个类数组「结构和数组类似，但不是数组（其__proto__并未指向Array.prototype）」,不能直接使用数组的方法！！但是我们的目的：期望它可以使用数组的方法！ ==> “鸭式辨型、鸭子类型”
  方案一：把类数组转换为数组 或者 让其原型链指向Array.prototype
    让其原型链指向Array.prototype
      + obj.__proto__ = Array.prototype
      + Object.setPrototypeOf(obj, Array.prototype)  推荐
    把类数组转换为数组
      + Array.from(obj)
      + [...obj] 不是所有的类数组对象都支持，类似于arguments这样的类数组集合才可以这样处理
      + 基于循环，把类数组中的每一项分别赋值给数组
      + 借用数组原型上的slice，把slice方法执行的时候，让方法中的this指向obj类数组，这样就可以“把类数组转换为数组” [].slice.call(obj) 或者 Array.prototype.slice.call(obj)

  方案二：类数组借用数组方法，去实现想要的效果
    原理：把数组原型上的方法执行，让方法中的this指向类数组，这样就相当于在操作类数组
    前提：this指向的值，它的结构和相关操作，需要和数组保持一致
    Array.prototype.xxx.call(类数组)
    [].xxx.call(类数组)
    ---
    把需要借用的方法赋值给类数组的某个私有属性
*/

/* // 类数组「后期：类Promise（thenable）...」
let oo = {
  0: 10,
  1: 20,
  2: 30,
  length: 3,
  forEach: Array.prototype.forEach
}; */

// let arr = [].slice.call(oo);
/* let arr = [];
for (let i = 0; i < oo.length; i++) {
  arr.push(oo[i]);
}
console.log(arr);

Array.prototype.slice = function slice() {
  //this->ary
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(this[i]);
  }
  return arr;
};
let ary = [10, 20, 30];
let ary2 = ary.slice(); */

/* oo.forEach((item, index) => { //Uncaught TypeError: oo.forEach is not a function
  console.log(item, index);
}); */

/* [].forEach.call(oo, (item, index) => {
  console.log(item, index);
}); */


/* Array.prototype.push = function push(val) {
  // this->arr val->100
  this[this.length]=val;
  this.length++;
};
arr.push(100) */

let obj = {
  2: 3, //1
  3: 4, //2
  length: 2, //3 4
  push: Array.prototype.push
};
obj.push(1);
// this->obj val->1  
// obj[obj.length]=1;  obj.length++;
obj.push(2);
// this->obj val->2
// obj[obj.length]=2;  obj.length++;
console.log(obj);

