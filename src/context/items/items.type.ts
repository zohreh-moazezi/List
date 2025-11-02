import type { Item } from "../../feature/items/types";

export type ItemsContextType = {
  items: Item[];
  addItem: (item: Item) => void;
  updateItem: (id: string, patch: Partial<Item>) => void;
  removeItem: (id: string) => void;
  toggleItem: (id: string) => void;
};
