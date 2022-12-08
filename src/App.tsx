import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import update from "immutability-helper";
import Main from "./components/Solution2/Main";
import DnD1 from "./components/Solution1/DnD1";
import CustomDnD from "./components/Vanilla/CustomDnD";
import VisualDnD from "./components/Vanilla/VisualDnD";
import DnD3 from "./components/Soution3/DnD3";
import DnD4 from "./components/Solution4/DnD4";


/**
 * 
 * The DnD4 Solution is the best solution so far.
 * 
 * @returns 
 */
const App = () => {
  return (
    <DndProvider backend={ HTML5Backend }>
      {/* <CustomDnD /> */}
      {/* <div style={{margin: '10px'}} ></div> */}
      {/* <VisualDnD /> */}
      {/* <div style={{margin: '10px'}} ></div> */}
      {/* <DnD1 /> */}
      {/* <div style={{margin: '10px'}} ></div> */}
      {/* <Main /> */}
      {/* <div style={{margin: '10px'}} ></div> */}
      <DnD3 />
      <div style={{margin: '10px'}} ></div>
      <DnD4 />
    </DndProvider>
  );
};

export default App;
