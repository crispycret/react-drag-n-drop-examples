import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import update from "immutability-helper";
import List from "./List";

const Main = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
    { id: 4, name: "Item 4" },
    { id: 5, name: "Item 5" },
  ]);

  const moveItem = (dragIndex: any, hoverIndex: any) => {
    const draggedItem = items[dragIndex];

    setItems(
      update(items, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, draggedItem],
        ],
      })
    );
  };

  return (
    // <DndProvider backend={HTML5Backend}>
      <List items={items} moveItem={moveItem} />
    // </DndProvider>
  );
};

export default Main;
