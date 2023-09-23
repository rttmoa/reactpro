import React, { useState, useEffect } from "react";
import styled from "styled-components";
import InfTable from "./table/InfTable";
import JsonTable from "./table/JsonTable";
  


type ContainerProps = {
  height: string;
  width: string;
  background: string;
}; 
const Container = styled.div<ContainerProps>`
  height: ${(props) => props.height};
  width:  ${(props) => props.width};
  background: ${(props) => props.background};
`; 
const ContentContainer: ContainerProps = {
  height: "95vh", // VH高度是否可滚动
  width: "100%",
  background: "white",
};
const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

export const ThemeContext = React.createContext(themes.light);


const App: React.FC = () => {
  
  /** #### TODO: Fake Data （表头，name，length） ---*/
  const columnList = [
    { name: "column1", length: 30 },
    { name: "column2", length: 30 },
    { name: "column3", length: 30 },
    { name: "column4", length: 20 },
    { name: "column5", length: 20 },
  ];
  return (
    <ThemeContext.Provider value={themes.dark}>
      <div className="App">
        <Container className="App-Content" {...ContentContainer}>

          {/* <InfTable columnList={columnList} /> */}

          <JsonTable /> 

        </Container>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
