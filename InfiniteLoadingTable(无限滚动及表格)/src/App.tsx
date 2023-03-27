import React, { useState, useEffect } from "react";
import styled from "styled-components";
import InfTable from "./table/InfTable";
import JsonTable from "./table/JsonTable";
 

/***--- CSS Type ---**/
type ContainerProps = {
  height: string;
  width: string;
  background: string;
}; 
/***--- CSS Template ---**/
const Container = styled.div<ContainerProps>`
  height: ${(props) => props.height};
  width: ${(props) =>{ return  props.width}};
  background: ${(props) => props.background};
`; 
/***--- CSS Value ---**/
const ContentContainer: ContainerProps = {
  height: "95vh",
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
  
  // Fake Data
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
          <InfTable columnList={columnList} />
          {/* <JsonTable />  */}
        </Container>
      </div>

    </ThemeContext.Provider>
  );
};

export default App;
