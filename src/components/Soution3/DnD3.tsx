import React, { useState } from 'react';
import { ListGroup } from 'react-bootstrap';

export function DnD3() {

   // Define the items state variable as an array of strings
   const [items, setItems] = useState<string[]>(['Item 1', 'Item 2', 'Item 3']);

   // Define the dragging state variable as a number
   const [dragging, setDragging] = useState<number | null>(null);
 


   // Event handler for when the user starts dragging an item
   const onDragStart = (e: any, index: number) => {
     // Store the index of the item being dragged in state
     setDragging(index);
   };



  // Event handler for when the user moves an item over another item
  const onDragOver = (e: any, index: number) => {
    // Prevent the default action of the event
    e.preventDefault();
  };




  // Event handler for when the user drops an item onto another item
  const onDrop = (e: any, index: number) => {
    // Check if the item is not already in the desired position
    if (index !== dragging && dragging !== null) {
      // Create a new copy of the items list
      const newItems = [...items];

      // Swap the item with the one at the desired position in the list
      [newItems[index], newItems[dragging]] = [newItems[dragging], newItems[index]];

      // Update the state with the new items list
      setItems(newItems);
    }

    // Reset the dragging state
    setDragging(null);
  };

  return (
    <ListGroup>
      {items.map((item, index) => (
        <ListGroup.Item 
          key={item}
          draggable
          // Add the draggable attribute to the element
          // Add the event handlers for the drag and drop events
          onDragStart={e => onDragStart(e, index)}
          onDragOver={e => onDragOver(e, index)}
          onDrop={e => onDrop(e, index)}
        >
          <div>{item}</div>
        </ListGroup.Item>
        ))}
    </ListGroup>      
  )
 }


export default DnD3;