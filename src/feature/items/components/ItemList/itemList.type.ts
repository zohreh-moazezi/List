import type { Item } from "../../types";

export type Props = {
  items: Item[];
  onEdit: (item: Item) => void;
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
};
