/* eslint-disable no-restricted-globals */
import React, { useState, FunctionComponent } from "react";
import {  InfiniteLoader,  Table,  Index,  IndexRange,  Column,  TableHeaderProps, } from "react-virtualized";
import Draggable from "react-draggable";
import "./InfTable.css";
import styled from "styled-components";
// import axios from "axios";
// import { ThemeContext } from "../App";
import useScreenWidth from "../shared/UseScreenWidth";


// Stype Component CSS
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





// 实现：
    // 1、
    // 2、
    // 3、


// Functional Component
const InfTable: FunctionComponent<TableProps> = ({ columnList }) => {

  const [list, setList] = useState<{ [key: string]: string | number }[]>( generateRow(10, 1) ); // 每行的数据

  const [columnRatio, setColumnRatio] = useState(calculateRatio(columnList)); // 列宽度
  // console.log(columnRatio)

  let screenWidth = useScreenWidth(); // 屏幕的宽度
  // console.log('screenWidth', screenWidth)

  function isRowLoaded({ index }: Index) { // 是否加载完成
    // console.log(index)
    // console.log(!!list[index])
    return !!list[index];
  }

  function loadMoreRows({ startIndex, stopIndex }: IndexRange) {
    // console.log(123)
    return new Promise((resolve, reject) => { 
      console.log(list, list.length) // 初始 10, 20, 30

      let newList = [...list].concat(generateRow(10, list.length));
      setList(newList);
      resolve(newList);
    });
  }

  function makeid(length: number) { // 行数据 字符串处理
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

  function generateRow(count: number, len: number) { // 生成count行数据, 数组长度为len
    // console.log(123)
    let newList = [];
    for (let i = 0; i < count; i++) {
      let row: { [key: string]: string } = columnList.reduce(
        (pre, cur) => Object.assign( {[cur.name] : makeid(cur.length)}, pre ), {}
      );
      newList.push(Object.assign({ index: i + len }, row));
    }
    return newList;
  }

  function nextKey(dataKey: string): string {
    for (let i = 0; i < columnList.length; i++) {
      if (dataKey === columnList[i].name) {
        return columnList[(i + 1) % columnList.length].name;
      }
    }
    return "";
  }

  function rowClassName({ index }: Index) { // 行类名
    // console.log(index)
    if (index < 0) {
      return "headerRow";  
    } else {
      return index % 2 === 0 ? "evenRow" : "oddRow";
    }
  }

  function onRowClick({ index }: Index) { // 双击行
    console.log("索引:", index)
  }

  function calculateRatio(list: {name:string;length:number}[]):{[key: string]:number} { // 每列的宽度占比
    let totalLength = 0;
    for (let i = 0; i < list.length; i++) {
      totalLength += list[i].length;
    }
    // console.log(list.length, totalLength) // 5, 130

    let ratioMap = list.reduce(
      (pre, cur) => Object.assign({ [cur.name] : cur.length / totalLength }, pre), {}
    );
    // console.log(ratioMap)
    return ratioMap;
  }

  function columnHeaderRender({ dataKey, label }: TableHeaderProps) {
    // console.log(dataKey)
    return (
      <React.Fragment key={dataKey}>
        {/* 顶部column名 */}
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
          // <div>1</div>
        )}
      </React.Fragment>
    );
  }
 

  return (
    <InfiniteLoader
      isRowLoaded={isRowLoaded} // 是否加载完成
      loadMoreRows={loadMoreRows} // 是否加载更多数据
      rowCount={1000} // 最大数量
    >
      {({ onRowsRendered, registerChild }) => (
        <div>
          <Table
            width={screenWidth - 10 } // 获取屏幕宽度
            height={window.innerHeight - 10}
            headerHeight={40}
            rowHeight={40}
            rowCount={list.length}
            rowGetter={({ index }) => { return list[index]}}
            onRowsRendered={onRowsRendered}
            onRowClick={onRowClick}
            rowClassName={rowClassName}
            headerClassName="headerColumn"
            ref={registerChild}
          >
            <Column label="Index" dataKey="index" width={60} />
            {columnList.map((column) => (
              <Column
                label={column.name}
                dataKey={column.name}
                width={(screenWidth - 80) * columnRatio[column.name]}
                key={column.name}
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
