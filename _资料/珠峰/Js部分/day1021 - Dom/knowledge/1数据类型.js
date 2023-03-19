/*
JS中的数据类型
   原始值类型「基本数据类型 & 值类型」
    + number 整数、小数、零、负数、NaN(不是一个有效数字，但是属于数字类型)、Infinity(无穷大的值)...
    + string 字符串：“”、‘’、``(ES6中的模板字符串，更方便的实现字符串拼接)
    + boolean 布尔：true/false
    + null 空
    + undefined 未定义
    + symbol 唯一值(ES6+)
    + bigint 大数(ES6+)
   对象类型「引用数据类型」
    + 标准普通对象（纯粹的对象）  例如：{x:10,y:20}  原型链(__proto__)直接指向Object.prototype
    + 标准特殊对象
      + new Array 数组
      + new RegExp 正则
      + Math 数学函数对象
      + new Date 日期对象
      + new Error 错误对象
      + Set/Map 「ES6+新增的数据结构 」
      + ...
    + 非标准特殊对象  例如：new Number(1) -> 原始值对应的对象数据类型值
    + 函数对象function
*/

//=====================
/*
 创建一个值的办法：
   @1 字面量方式
   @2 构造函数方式 “new” 
 对于对象数据类型来讲，两种方式创造的结果几乎一样，只不过语法上有一些区别！！
 对于原始值类型来讲：
   基于字面量方式创造出来的就是“原始值”类型
   但是基于构造函数方式，创造出来的是一个“实例对象”「也被称之为：非标准特殊对象」
 */
// let num1 = 10;
// let num2 = new Number(10);

/*
// new Array(数字N)：创建一个长度为N的“稀疏数组”「每一项是empty，也就是不存在，只有length」
// new Array(数字1,数字2)
// new Array()：创建一个空数组
// new Array(字符串)：都是创建一个数组，把传递的信息当做数组每一项
let arr1 = [10, 20];
let arr2 = new Array(10, 20);
*/

//=====================
/*
基本语法：
  创建一个唯一值: Symbol() 或者 Symbol('描述')
  不能被NEW执行，如果想创建其“非标准特殊对象”，则基于 Object(Symbol())
  Object(value)：把value值变为对象类型

啥叫唯一值：
  Symbol('AA')===Symbol('AA')：false
  只要Symbol一执行，就会创建一个唯一值！！

Symbol作用一：就是想创建一个独一无二的值
Symbol作用二：对象可以设置一个Symbol类型的属性（也是为了保证其唯一性）
   每一个对象都是由零到多组“键值对（键->属性名 值->属性值，也被称作为对象的成员）”组成的
      obj['name'] 操作的俗称：成员访问
   对象的“属性值”可以是任何类型，但是“属性名”只能是字符串或者Symbol类型！
Symbol作用三：JS很多底层处理机制，就是基于Symbol提供的方法实现的
   Symbol.iterator/asyncIterator
   Symbol.hasInstanc
   Symbol.toPrimitive
   Symbol.toStringTag
   ...
for/in循环的BUG！
*/

/* 
对象的成员「键/属性名」
  + 这样编写，我们写的“[]”起到让语法符合规范的作用：如果设置的属性名是特殊值「含 变量、数组、对象、Symbol...」，则需要用中括号包起来！ 
  + 类型：是字符串和Symbol
  + 可枚举和不可枚举
    + 一般情况下，内置的属性是不可枚举的，自定义的属性是可枚举的「控制要深颜色是可枚举，浅颜色是不可枚举」,但是枚举规则是可以改的！！
    + 枚举：粗略的认为，可以被for/in循环迭代(遍历/循环)到的，就是可枚举的
*/
Object.prototype.dongxia = '嘿嘿嘿';
let sym = Symbol('AA');
let obj = {
  0: 100,
  name: '珠峰',
  true: 0,
  [[10, 20]]: 1000,
  [{ x: 10, y: 20 }]: 2000,
  null: -1,
  undefined: -2,
  [sym]: '哈哈哈'
};
// console.log(obj[sym]); //'哈哈哈'

// console.log(Object.keys(obj)); //获取当前对象 私有的、可枚举的、非Symbol类型的 属性「以数组存储」
// console.log(Object.getOwnPropertyNames(obj)); //获取当前对象 私有的、非Symbol类型的 属性
// console.log(Object.getOwnPropertySymbols(obj)); //获取当前对象 私有的、Symbol类型的 属性
// let keys = Object.getOwnPropertyNames(obj).concat(Object.getOwnPropertySymbols(obj)); //获取所有的私有属性「数组集合」
let keys = Reflect.ownKeys(obj); //获取所有私有属性「ES6」
keys.forEach(key => {
  console.log('属性名：', key, '属性值：', obj[key]);
});


/*
 for/in特点：
   + 它会去当前对象所有的属性上「含：私有属性和原型链上的公有属性」进行查找
     问题：
     + 我们一般只想迭代私有的，公有的不管
     + 性能很差
   + 只会迭代可枚举的属性「不论属性是公有还是私有」
   + 迭代不了Symbol类型的属性
 */
/* for (let key in obj) {
  if (!obj.hasOwnProperty(key)) break; //只能解决第一个问题「但是无法改善性能差的问题」
  console.log(key, obj[key]);
} */

/*
// 循环999999次测试：给数组测试
// console.time/timeEnd：记录一段程序执行需要的时间「参考值」
let arr = new Array(999999);
arr = arr.fill(null); //把稀疏数组变为密集数组「让每一个索引项存在，只有密集数组才可以使用forEach或for/in循环处理」

console.time('A');
for (let i = 0; i < arr.length; i++) { }
console.timeEnd('A');

console.time('B');
arr.forEach((item, index) => {});
console.timeEnd('B');

console.time('C');
for (let key in arr) { }
console.timeEnd('C'); */

//=====================
/*
BigInt作用：
  浏览器具备最大/最小安全数字「Number.MAX_SAFE_INTEGER/MIN_SAFE_INTEGER」，超过安全数字进行运算，结果是不一定准确的！！
  服务器端存储的数字也是有长度的限制的「和客户端规则不尽相同」，如果服务器返回一个超大数字(一般都是返回字符串，客户端想要进行计算)；按照之前的规则是不准确的，此时需要基于BigInt处理！！
    1.把服务器返回的字符串，变为BigInt格式{在数字末尾加n}
    2.让BigInt值和另外一个BigInt值进行运算{BigInt值不能和普通数字运算}
    3.把运算的结果返回给后端「也是变为字符串传递进去 String(value)」
 */