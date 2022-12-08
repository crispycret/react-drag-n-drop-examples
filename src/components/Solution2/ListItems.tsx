import React from "react";
import { useDrag, useDrop } from "react-dnd";
import { ItemTypes } from "./constants";

const ListItem = ({ item, index, moveItem }: any) => {
  const [, drag] = useDrag({
    type: ItemTypes.ITEM,
    item: { type: ItemTypes.ITEM, index },
  });
  const [, drop] = useDrop({
    accept: ItemTypes.ITEM,
    hover: (item: any) => moveItem(item.index, index),
  });

  return (
    <div ref={(node) => drag(drop(node))}>
      {item.name}
    </div>
  );
};

export default ListItem;
