import React, { useState } from 'react';

const VisualDnD = () => {
    
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);

  const onDragStart = (e: any, index: any) => {
    e.dataTransfer.setData('text/plain', index);
  };

  const onDragEnter = (index: any) => {
    const newItems = [...items];

    // newItems[index] = {
    //   ...newItems[index],
    //   isHovering: true
    // };

    setItems(newItems);
  };

  const onDragLeave = (index: any) => {
    const newItems = [...items];

    // newItems[index] = {
    //   ...newItems[index],
    //   isHovering: false
    // };

    setItems(newItems);
  };

  const onDrop = (e: any, index: any) => {
    const draggedIndex = parseInt(e.dataTransfer.getData('text/plain'), 10);
    const newItems = [...items];

    newItems.splice(index, 0, newItems.splice(draggedIndex, 1)[0]);

    setItems(newItems);
  };

  return (
    <ul>
      {items.map((item, index) => (
        <li
          key={item}
          draggable
          onDragStart={e => onDragStart(e, index)}
          onDragEnter={() => onDragEnter(index)}
          onDragLeave={() => onDragLeave(index)}
          onDrop={e => onDrop(e, index)}
          // className={item.isHovering ? 'hovering' : ''}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default VisualDnD;
