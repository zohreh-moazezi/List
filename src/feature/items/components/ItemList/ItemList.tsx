import React from "react";
import { ItemRow } from "../ItemRow/ItemRow";
import type { Props } from "./itemList.type";

export const ItemList: React.FC<Props> = ({
  items,
  onDelete,
  onEdit,
  onToggle,
}) => {
  if (items.length === 0) {
    return (
      <h2 className="text-xl font-semibold text-gray-400">
        No Items Yet . click create to add one
      </h2>
    );
  }
  return (
    <div>
      {items.map((item) => (
        <ItemRow
          key={item.id}
          item={item}
          onEdit={onEdit}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};
