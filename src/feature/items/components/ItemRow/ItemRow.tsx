import React from "react";
import type { Props } from "./itemRow.types";
import { formatDate } from "../../utils/format";
import { Button } from "../../../../components/UI/Button/Button";
import { Circle, CheckCircle } from "lucide-react";

export const ItemRow: React.FC<Props> = ({
  item,
  onEdit,
  onDelete,
  onToggle,
}) => {
  return (
    <div className="flex p-10 justify-between sm:flex-row sm:justify-between bg-white border border-gray-200 rounded-lg  shadow-sm hover:shadow-md transition">
      <div className="flex gap-3">
        <div className="mt-5">
          <button onClick={() => onToggle(item.id)}>
            {item.completed ? (
              <CheckCircle className="text-green-500" />
            ) : (
              <Circle className="text-gray-400" />
            )}{" "}
          </button>
        </div>
        <div className="mb-4 sm:mb-0">
          <div className="text-lg font-medium text-gray-800">{item.title}</div>
          <div className="text-gray-600 ">{item.subTitle}</div>
          <div className="text-sm text-gray-500">
            {formatDate(item.createdAt)}
          </div>
        </div>
      </div>

      <div className="flex gap-2">
        <Button
          className="text-blue-500 hover:text-blue-700"
          onClick={() => onEdit(item)}
        >
          Edit
        </Button>
        <Button
          className="text-red-500 hover:text-red-700"
          onClick={() => onDelete(item.id)}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};
