/* eslint-disable no-restricted-globals */
import React, { useState, FunctionComponent } from "react";
import {  InfiniteLoader,  Table,  Index,  IndexRange,  Column,  TableHeaderProps, } from "react-virtualized";
import Draggable from "react-draggable";
import styled from "styled-components";
import useScreenWidth from "../shared/UseScreenWidth";
import "./InfTable.css";



const DragHandleIcon = styled.span`
  flex: 0 0 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: none !important;
`;
// Props
interface TableProps {
  columnList: {
    name: string;
    length: number;
  }[];
}



const InfTable: FunctionComponent<TableProps> = ({ columnList }) => {

  
  function calculateRatio(list: {name: string; length: number}[]): {[key: string]: number} { // 计算列宽度占比 （每列的长度占总数的多少）
    let totalLength = 0;
    for (let i = 0; i < list.length; i++) {
      totalLength += list[i].length;
    }
    // console.log(list.length, totalLength) // 5, 130
    let ratioMap = list.reduce(
      (pre, cur) => Object.assign({ [cur.name] : cur.length / totalLength }, pre), {}
    )
    // ratioMap: {column5: 0.1538461535385, column4: 0.15384615384685, column3: 0.23076923923078, column2: 0.230769076978, column1: 0.2307696923078}
    return ratioMap;
  }
  function makeid(length: number) { // 行数据  （随机生成length长度的字符串）
    // console.log(length) // 父组件传递过来的length长度
    var result = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length; // 62
    for (var i = 0; i < length; i++) {
      // charAt: 传递位置、返回字符串       Math.floor: 向下取整后的值0-61
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  } 
  function generateRow(count: number, len: number,) { // 生成 count 行数据, 数组长度从 len 开始
    let newList = [];
    for (let i = 0; i < count; i++) {
      let row: { [key: string]: string } = columnList.reduce((pre, cur) => Object.assign( {[cur.name] : makeid(cur.length)}, pre), {});
      newList.push(Object.assign({ index: i + len }, row));
    }
    // console.log('newList', newList);
    return newList;
  }
  // ! 每行的数据
  const [list, setList] = useState<{ [key: string]: string | number }[]>(generateRow(10, 0)); 

  const [columnRatio, setColumnRatio] = useState(calculateRatio(columnList)); // ! 每列宽度

  // ! Hooks；屏幕的宽度
  let screenWidth = useScreenWidth(); 
  // console.log('screenWidth', screenWidth)


  // ! 是否加载完成    InfiniteLoader['isRowLoaded']
  function isRowLoaded({ index }: Index) {
    // console.log(list);
    // console.log(index); // ? 0-38 设置rowCount={39} 即屏幕的高度总共39个count
    return Boolean(list[index])
  }

  // ! 是否加载更多数据   InfiniteLoader['loadMoreRows']
  function loadMoreRows({ startIndex, stopIndex }: IndexRange) { 
    // console.log('loadMoreRows', startIndex, stopIndex);
    // return new Promise((resolve, reject) => { resolve(list) })
    return new Promise((resolve, reject) => {
      let newList = [...list].concat(generateRow(10, list.length));
      setList(newList);
      resolve(newList);
    });
  }
  

  
  // ! 渲染头部；IND、COLUMN1
  function columnHeaderRender({ dataKey, label }: TableHeaderProps) {
    // console.log(dataKey)
    function nextKey(dataKey: string): string {
      for (let i = 0; i < columnList.length; i++) {
        if (dataKey === columnList[i].name) {
          return columnList[(i + 1) % columnList.length].name;
        }
      }
      return "";
    }
    return (
      <React.Fragment key={dataKey}> 
        <div className="ReactVirtualized__Table__headerTruncatedText" key="label">
          {label}
        </div>
        {dataKey === columnList[columnList.length - 1].name ? null : (
          // 可拖拽组件
          <Draggable
            axis="x"
            defaultClassName="DragHandle"
            position={{ x: 0, y: 0 }}
            onDrag={(e, data) => {
              let deltaRatio = data.deltaX / (screenWidth - 80);
              // console.log(deltaRatio)
              let newColumnRatio = {
                ...columnRatio,
                [dataKey]: columnRatio[dataKey] + deltaRatio,
                [nextKey(dataKey)]: columnRatio[nextKey(dataKey)] - deltaRatio,
              };
              // console.log(newColumnRatio)
              setColumnRatio(newColumnRatio); // 设置每列宽度比
            }}
          >
            <DragHandleIcon>:</DragHandleIcon>
          </Draggable>
        )}
      </React.Fragment>
    );
  }
  



  return (
    <InfiniteLoader
      isRowLoaded={isRowLoaded} // 是否加载完成
      loadMoreRows={loadMoreRows} // 是否加载更多数据
      rowCount={100} // 最大数量 = 接口返回的 count
    >
      {({ onRowsRendered, registerChild }) => (
        <div>
          <Table
            width={screenWidth - 10} // 获取屏幕宽度
            height={window.innerHeight - 20}
            headerHeight={50}
            rowHeight={40}
            rowCount={list.length}
            rowGetter={({ index }) => { return list[index]}}
            onRowsRendered={onRowsRendered}
            onRowClick={(index: Index) => { console.log("索引:", index) }}
            rowClassName={(index: any) => { return (index < 0) ? "headerRow" : (index % 2 === 0 ? "evenRow" : "oddRow") }}
            headerClassName="headerColumn"
            ref={registerChild}
          >
            <Column label="Ind" dataKey="index" width={60} />
            {columnList.map((column) => (
              <Column
                key={column.name}
                label={column.name}
                dataKey={column.name}
                width={(screenWidth - 80) * columnRatio[column.name]}
                headerRenderer={columnHeaderRender}
              >
              </Column>
            ))}
          </Table>
        </div>
      )}
    </InfiniteLoader>
  );
};

export default InfTable;
