import React from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "./constants";
import ListItem from "./ListItems";


const List = ({ items, moveItem }: any) => {
  const [, drop] = useDrop({
    accept: ItemTypes.ITEM,
    drop: (item: any) => moveItem(item.index, -1),
  });

  return (
    <div ref={drop}>
      {items.map((item: any, index: number) => (
        <ListItem key={item.id} item={item} index={index} moveItem={moveItem} />
      ))}
    </div>
  );
};

export default List;
