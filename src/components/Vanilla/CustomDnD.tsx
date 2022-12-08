import React, { useState } from 'react';

const CustomDnD = () => {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);

  const onDragStart = (e: any, index: any) => {
    e.dataTransfer.setData('text/plain', index);
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
          onDrop={e => onDrop(e, index)}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default CustomDnD;
