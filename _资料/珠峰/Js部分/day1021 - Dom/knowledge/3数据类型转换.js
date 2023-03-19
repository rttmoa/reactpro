/*
把其他数据类型转换为Number
  Number([val])
    + 一般用于浏览器的“隐式转换”中
        @1 数学运算
        @2 isNaN检测
        @3 ==比较
        ...
    + 规则：
        @1 字符串转换为数字：空字符串变为0，如果出现任何非有效数字字符，结果都是NaN
        @2 把布尔转换为数字：true->1  false->0
        @3 null->0  undefined->NaN
        @4 Symbol无法转换为数字，会报错：Uncaught TypeError: Cannot convert a Symbol value to a number
        @5 BigInt去除“n”（超过安全数字的，会按照科学计数法处理）
        @6 把对象转换为数字：
          + 先调用对象的 Symbol.toPrimitive 这个方法，如果不存在这个方法
          + 再调用对象的 valueOf 获取原始值，如果获取的值不是原始值
          + 再调用对象的 toString 把其变为字符串
          + 最后再把字符串基于Number方法转换为数字

  parseInt([val])  parseFloat([val])
    + 一般用于手动转换
    + 规则：[val]值必须是一个字符串，如果不是则先转换为字符串；然后从字符串左侧第一个字符开始找，把找到的有效数字字符最后转换为数字「一个都没找到就是NaN」；遇到一个非有效数字字符，不论后面是否还有有效数字字符，都不再查找了；parseFloat可以多识别一个小数点；
  parseInt([val],[radix])
    从[val]左侧开始进行查找，找到所有符合[radix]进制的内容，然后把其按照[radix]进制转换为10进制！！
    + [radix]是设置的进制，取值有效范围是2~36之间，如果不在有效范围内，结果就是NaN
    + [radix]不写或者设置的为0，默认就是10「特殊情况：如果[val]是以“0x”开始的，则默认值是16」

把其他数据类型转换为String
  转化规则：
    @1 拿字符串包起来
    @2 对象转字符串
      + String(对象)：按照 先找Symbol.toPrimitive -> 再看valueOf -> 最后toString 来处理
      + 对象.toString()：直接转换为字符串
      + 特殊：Object.prototype.toString，是用来检测数据类型的
  出现情况：
    @1 String([val]) 或者 [val].toString()
    @2 “+”除数学运算，还可能代表的字符串拼接
        + 有两边，一边是字符串，肯定是字符串拼接
        + 有两边，一边是对象，则可能是字符串拼接，还有可能是数学运算
        + 只出现在左边，例如：+"10" 这种方式就是把其它值转换为数字
        + ...
    ...

把其他数据类型转换为Boolean
  转换规则：除了“0/NaN/空字符串/null/undefined”五个值是false，其余都是true
  出现情况：
    @1 Boolean([val]) 或者 !/!!
    @2 条件判断
    ...

“==”相等，两边数据类型不同，需要先转为相同类型，然后再进行比较
    @1 对象==字符串  对象转字符串「Symbol.toPrimitive -> valueOf -> toString」
    @2 null==undefined  -> true   null/undefined和其他任何值都不相等
       null===undefined -> false
    @3 对象==对象  比较的是堆内存地址，地址相同则相等
    @4 NaN!==NaN  NaN和任何值(包含本身)都不相等
    @5 除了以上情况，只要两边类型不一致，剩下的都是转换为数字，然后再进行比较的
“===”绝对相等，如果两边类型不同，则直接是false，不会转换数据类型「推荐」

Object.is([val1],[val2]) 检测两个值是否相等「ES6新增的」
  + 核心用的是“===”
  + 特殊：Object.is(NaN,NaN) => true
*/

// 解决方案一：是基于“==”进行比较的，会转换数据类型，a只有是一个对象，我们才能重构其转化的步骤
/* var a = {
  i: 0
};
// 重写 Symbol.toPrimitive/valueOf/toString
a[Symbol.toPrimitive] = function toPrimitive() {
  // this->a
  return ++this.i;
};
if (a == 1 && a == 2 && a == 3) {
  console.log('OK');
} */

/* var a = [1, 2, 3];
a.toString = a.shift;
if (a == 1 && a == 2 && a == 3) {
  console.log('OK');
} */


/* 
// 解决方案二：
// 给window.a做数据劫持，只要访问a，就会触发get劫持函数「函数的返回值就是我们获取的值」
var i = 0
Object.defineProperty(window, 'a', {
  get() {
    return ++i;
  }
});
// var a = ?
if (a === 1 && a === 2 && a === 3) {
  console.log('OK');
} 
*/


//================================
/*
把N进制转换为10进制：按权展开求和
   1342 “八进制”    权重从各位开始分别是：0,1,2...
   1*8^3 + 3*8^2 + 4*8^1 + 2*8^0
     512+192+32+2 = 738
*/
// console.log(parseInt('100px', 1)); //NaN
// console.log(parseInt('1342', 4)); //7
// '13' 1*4^1+3*4^0

/* let ary = [10, 20, 30];
ary = ary.map((item, index) => {
  // 回调函数执行三次
  // 每一次传递两个值
  //   item=10  index=0 => 0
  //   item=20  index=1 => 20
  //   item=30  index=2 => 60
  return item * index;
}); */

// let arr = [27.2, 0, '0013', '14px', 123];
// arr = arr.map(parseInt);
// console.log(arr); //[27, NaN, 1, 1, 27]
/*
把parseInt作为map回调函数，数组有五项，parseInt执行五次，每一次传递当前项和索引
  parseInt(27.2,0) -> parseInt('27.2',10)
    '27' -> 27
  parseInt(0,1)
    NaN
  parseInt('0013',2)
    '001' -> 0*2^2+0*2^1+1*2^0 -> 1
  parseInt('14px',3)
    '1' -> 1*3^0 -> 1
  parseInt(123,4) -> parseInt('123',4)
    '123' -> 1*4^2+2*4^1+3*4^0 -> 27
 */

//================================

/* 
扩展：
  i++ 或者 ++i：自身累加1「一定数学运算」
  i+=1 或者 i=i+1：不一定是数学运算，还可能是字符串拼接
  ---
  +i：隐式调用Number把i转换为数字
*/
/* let code = "0";
if (+code === 0) {
  console.log('OK');
} */

/* let i = '10';
i++;
console.log(i); //11

i = '10';
i += 1;
console.log(i); //'101'

i = '10';
i = i + 1;
console.log(i); //'101' */


/*
 扩展：
   装箱：把原始值变为非标准特殊对象  new 构造函数(原始值) 或者 Object(原始值)
   拆箱：把非标准特殊对象变为原始值  Number(对象)
   一般都是浏览器隐式转换的过程！！
 */
/* console.log(10 + new Number(10)); //20  此过程中会把new Number(10)自动转化为10 "拆箱"
let num = 10; //num不是对象，严格意义上来讲，它不是Number的实例「不能调用Number.prototype上的方法」
console.log(num.toFixed(2)); //'10.00'  装箱：Object(num).toFixed(2) */

/* let num = new Number(10);
console.log(Number(num)); //10
// num[Symbol.toPrimitive] -> undefined   => num[Symbol(Symbol.toPrimitive)]
// num.valueOf() -> 10 */

/* let time = new Date();
console.log(Number(time)); //1666405076170
// time[Symbol.toPrimitive] -> 具备这个函数，则把函数执行
//   time[Symbol.toPrimitive]('number') 传递的值：'number'/'string'/'default'
//   => 1666405076170 */

/* console.log(Number([10])); //10
// [10][Symbol.toPrimitive] 没有此成员
// [10].valueOf() -> [10] 不是原始值
// [10].toString() -> '10'
// 字符串转数字 10 */