
import React, { /* Children */  FunctionComponent, /* ObjectHTMLAttributes */ } from "react";
// import { render } from "react-dom";
import './JsonTable.css'



const json_data = {
  "id": "0001",
  "type": "donut",
  "name": "Cake",
  "ppu": 0.55,
  "batters": {
    "batter": [
        { "id": "1001", "type": "Regular" },
        { "id": "1001", "type": "Regular" },
        { "id": "1002", "type": "Chocolate" },
        { "id": "1003", "type": "Blueberry" },
        { "id": "1004", "type": "Devil's Food" }
    ]
  },
  "topping": [
      { "id": "5001", "type": "None" },
      { "id": "5002", "type": "Glazed" },
      { "id": "5005", "type": "Sugar" },
      { "id": "5007", "type": "Powdered Sugar" },
      { "id": "5006", "type": "Chocolate with Sprinkles" },
      { "id": "5003", "type": "Chocolate" },
      { "id": "5004", "type": "Maple" }
  ]
}
const data = {
  name: 'Jim',
  age: 18,
  courses: [
    {
      title: 'English', score: 87, extra: {
        key1: 'value1',
        key2: [
          {
            id: 123,
            name: 'test1'
          },
          {
            id: 123,
            name: 'test1'
          }, {
            id: 123,
            name: 'test1',
            extra: [1, 2, 3, { k: 'v' }]
          },
        ]
      }
    },
    { title: 'Chinese', score: 67, extra1: [123, 456, 789] }
  ]
}

const long = {
  key: 'value1',
  key1: 'value1',
  key2: 'value1',
  key3: 'value1',
  key4: 'value1',
  key5: 'value1',
  key6: 'value1',
  key7: 'value1',
}

const row1 = [
  {
    key1: 'value1',
    key2: 'value2',

  },
  {
    key1: 'value1',
    key2: 'value2',

  },
  {
    key1: 'value1',
    key2: 'value2',
    arr: [1, 2, 3]
  },
];

const isPrimitive = (element: any) => {
  let flag = true
  for (let e of element) {
    flag = flag && (e !== Object(e))
  }
  return flag
}

const isPrimitiveElement = (e: any) => { // 传递对象 如果不相同 则返回true
  return (e !== Object(e))
}

/** #### TODO: 返回获取对象的属性名、Set去重后、返回Set集合: Set(2) {'id', 'type'}  */
const getKeys = (arr: any) => { 
  let s = new Set();
  for (const e of arr) {
    // console.log(!isPrimitiveElement(e)) // 传递来的数据都可通过校验
    if (!isPrimitiveElement(e)) {
      for (const key of Object.keys(e)) { // e：{id: '1001', type: 'Regular'}
        // console.log(key)  // id, type, id, type, id, type, id, type...
        s.add(key) 
      }
    } 
  } 
  // console.log(s) // Set(2) {'id', 'type'}
  return s
}

/** #### TODO: 确保Arr中的每个对象的键和Set集合中的键相匹配 ---*/
const matchWithKeys = (arr: any, keys: Set<unknown>) => {
  for (let element of arr) {
    // console.log(element) // batter,topping数组的每一项：{id: '1001', type: 'Regular'}
    
    // 遍历Set集合中的键
    for (let key of keys) {
      // console.log(element.hasOwnProperty(key))
      if (!element.hasOwnProperty(key)) {
        element = Object.assign(element, { [key as string]: null })
      } else {
        // console.log("element是原型属性")
        element = Object.assign(element)
      }
    }
  }
  // console.log("matchWithKeys处理结果:", arr)
  return arr
}





// 测试JsonTable函数调用 -- 测试函数时不让组件渲染

// let User = {UserName: "zhangsan"}
// let User2 = {UserName: "zhangsan"}
// console.log(User == Object(User)) // true

// console.log(isPrimitiveElement(json_data)) // 传递对象 如果不相同 则返回true

// console.log(getKeys(row1)) // 返回获取的属性名

// json_data对象中batter和topping
// console.log(matchWithKeys(json_data.batters.batter, getKeys(json_data.batters.batter))) 
// console.log(matchWithKeys(json_data.topping, getKeys(json_data.topping))) 












const JsonTable: FunctionComponent<any> = () => {

  // 一、最外侧的属性名(id,type...)
    // child = renderObject(element) -> renderRowHorizontal -> return renderElement(element) -> child = <td key={element}>{element}??</td>


  // tr部分和td部分 
  const renderElement = (element: any) => { // (element: json_data) 
    // element: {batters: {batter: Array(5)},  id: "0001", name: "Cake", ppu: 0.55, topping: (7) [{…}, {…}, {…}, {…}, {…}, {…}, {…}], type: "donut"}
    let child
    // TODO: 对象属性的 键
    if (isPrimitiveElement(element)) { // 如果不是对象
      // console.log("★☆element:", element)
      child = <td key={element}>{element}★</td>
    }else{ 
      // TODO: 对象属性的 值 （是数组）
      if (Array.isArray(element)) { // element: Array(5)、Array(7)  
        matchWithKeys(element, getKeys(element))    
        child = <td key={getKeys(element).keys.toString()}>{renderRowVertical(element)}</td>
      }else{
        // TODO: 对象属性的 值 （不是数组）
        // console.log(element) // ['id', 'type', 'name', 'ppu', 'batters', 'topping'] || batter
        child = renderObject(element)
      }
    }
    return child
  }

  // 对象
  const renderObject = (element: any) => {
    // console.log('renderObject', element) // {batter: Array(5)}
    let keys = Object.keys(element) // 两次：['batter'] || ['id', 'type', 'name', 'ppu', 'batters', 'topping']
    // console.log("keys", keys) 
    let values = Object.values(element)
    // console.log("values", values)

    // td中渲染表格
    return <td key={element}>
      {
        renderTable(
          <React.Fragment>
            {/* 第一：渲染json_data第一层的属性名 - ['id', 'type', 'name', 'ppu', 'batters', 'topping'] */}
            <tr className="tr_columns">{renderRowHorizontal(keys)}</tr>
            {/* 第二：渲染json_data第一层的属性值 - ['0001', 'donut', 'Cake', 0.55, {batter: Array(5)}, Array(7)] */}
            <tr>{renderRowHorizontal(values)}</tr>
          </React.Fragment>
        )
      }
    </td>
  }

  // 表格
  const renderTable = (child: any) => { // 外部table,tbody渲染child组件
    return(
      <table>
        <tbody>
          {child}
        </tbody>
    </table>
    )
  }

  // 行水平
  const renderRowHorizontal = (row: any) => {
    // console.log("横向的属性:", row)  
    return row.map((element: any) => { return renderElement(element) })
  }

  
  // 行垂直
  const renderRowVertical = (row: any) => {
    // row:  { batter: Array(5), topping: Array(7) }
    let columns = [];
    for (let key of getKeys(row)) {  
      columns.push(<td key={key as string}>{key as string} *= </td>) 
    }
    let rows = []
    let idx = 0
    for (let element of row) {
      if (isPrimitiveElement(element)) {
        console.log('传入的不是对象！')
        rows.push(<tr key={element}>{renderElement(element)}</tr>)
      } else {
        let values = [];
        for (let key of getKeys(row)) {  
          values.push(element[key as string])
        }
        // console.log(values) // 将row中对象转化为数组格式： ['1001', 'Regular'].....、['5004', 'Maple'] * 12
        rows.push(<tr key={element + idx}>{renderRowHorizontal(values)}</tr>) 
      }
      idx += 1
    }
    return renderTable(
      <React.Fragment>
        <tr className="tr_columns">{columns}</tr>{rows}
      </React.Fragment>
    )
  }









  return <React.Fragment>
    {
      <table>
        <tbody>
          <tr>
            {/* 测试函数注释掉,不让渲染 */}
            {/* {renderElement(data)} */}
            {renderElement(json_data)}
            {/* {renderRowOfSameObject(row1)} */}
          </tr>
        </tbody>
      </table>
    }
  </React.Fragment>
}
export default JsonTable