import React, { useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function DnD1() {
  const [items, setItems] = useState([
    { id: 1, value: 'Item 1' },
    { id: 2, value: 'Item 2' },
    { id: 3, value: 'Item 3' },
  ]);

  const moveItem = (id: number, atIndex: number) => {
    const item = items.find(item => item.id === id);
    const newItems = [...items];

    if (item) {
      newItems.splice(atIndex, 0, newItems.splice(newItems.indexOf(item), 1)[0]);
      setItems(newItems);
    }
  };

  const [, drop] = useDrop({
    accept: 'ITEM',
    drop(item: any, monitor: any) {
      const didDrop = monitor.didDrop();
      if (didDrop) {
        return;
      }
      const { id } = item;
      const { index } = monitor.getItem();
      moveItem(id, index);
    },
  });



  /** Solution 1 */
  // const renderItem = (item: any, index: number) => {
  //   const [, drag] = useDrag({
  //     type: 'ITEM',
  //     item: { id: item.id, index },
  //   });

  /** Solution 2 */  
  // Define a React component to render a single item in the list
  const Item = ({ item, index }: { item: any, index: number }) => {
    // Use the useDrag hook to make the item draggable
    const [, drag] = useDrag({
      // Specify the type and id of the item, as well as its current index
      type: 'Item',
      item: { id: item.id, index },
    });

    // Return a div element containing the item's value
    // and using the drag reference from the useDrag hook
    return (
      <div ref={drag}>
        {item.value}
      </div>
    );
  };

  return (
    // <DndProvider backend={HTML5Backend}>
      <div ref={drop}>
        {items.map((item, index) => (
          // Use the Item component to render each item in the list
          <Item key={item.id} item={item} index={index} />
        ))}
      </div>
    // </DndProvider>
  );
}


export default DnD1;