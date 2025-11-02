import type { Item } from "../../types";

export type Props = {
  item: Item;
  onEdit: (item: Item) => void;
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
};
