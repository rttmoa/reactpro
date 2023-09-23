import React, { Component } from "react";
import "./App.css";
import { List, WindowScroller } from "react-virtualized";
import "react-virtualized/styles.css"; // only needs to be imported once
// import OtherComponent from "./OtherComponent";
// import { Table } from "semantic-ui-react";
// import "semantic-ui-css/semantic.min.css";
// class OtherComponent extends Component {
//   render() {
//     return (
//       <div>
//         <Table celled>
//           <Table.Header>
//             <Table.Row>
//               <Table.HeaderCell>懒加载</Table.HeaderCell>
//             </Table.Row>
//           </Table.Header>
//           <Table.Body>
//             <Table.Row>
//               <Table.Cell>
//                 {this.props.data?.name}
//                 <br />
//                 {this.props.data.description}
//               </Table.Cell>
//             </Table.Row>
//           </Table.Body>
//         </Table>
//       </div>
//     );
//   }
// }
const list = [
  { name: "test1", description: "description1" },
  { name: "test2", description: "description2" },
  { name: "test3", description: "description3" },
  { name: "test4", description: "description4" },
  { name: "test5", description: "description5" },
  { name: "test6", description: "description6" },
  { name: "test7", description: "description7" }
];
class App extends Component {
  render() {
    const height = parseInt(String(document.body.clientHeight));
    const rowHeight = 120;
    const width = parseInt(String(document.body.clientWidth));
    const renderItem = (data: any) => {
      return (
        <div key={data.key} style={data.style}>
          123
          {/* <OtherComponent data={list[index]} /> */}
        </div>
      );
    };
    return (
      <div>
        <WindowScroller>
          {({ isScrolling, onChildScroll, scrollTop }) => (
            <List
              autoHeight
              height={height}
              isScrolling={isScrolling}
              onScroll={onChildScroll}
              rowCount={list.length}
              rowHeight={rowHeight}
              rowRenderer={renderItem}
              scrollTop={scrollTop}
              width={width}
            />
          )}
        </WindowScroller>
      </div>
    );
  }
}
export default App;
