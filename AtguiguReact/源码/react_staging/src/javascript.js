

const arr = [true, true, true, true, false, false, false, false, false, false]

const res = arr.filter((val) => {
    return val
})

// console.log(res)



//filter结合indexof实现去重
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 2, 3, 4, 5, 6, 7]
let newArr = arr1.filter(function(item, i, arr) {
  //当前元素，在原始数组中的第一个索引 == 当前索引值，当前项则存入新数组，
  //否则当前项**不**存入新数组，进行下一次循环

  return arr.indexOf(item) === i; ///--------->   传递数组里面的值  返回第一次查找的索引值
});

console.log(newArr) //[1, 2, 3, 4, 5, 6, 7, 8]


let messageId =  '1'
let list = [{name: 'a', id: '1'}, {name: 'b', id: '2'}, {name: 'c', id: '3'}]
list  = list.filter((val, i) => {
    return val.id !== messageId
})
console.log(list) // [{name: 'b', id: '2'}, {name: 'c', id: '3'}]
 