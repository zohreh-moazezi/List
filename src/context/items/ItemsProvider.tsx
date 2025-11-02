import { useState, useEffect, type ReactNode } from "react";
import { ItemsContext } from "./ItemsContext";
import type { Item } from "../../feature/items/types";

const STORAGE_KEY = "list_items_v1";

export const ItemsProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<Item[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? (JSON.parse(raw) as Item[]) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {}
  }, [items]);

  const addItem = (item: Item) => setItems((prev) => [item, ...prev]);

  const updateItem = (id: string, patch: Partial<Item>) =>
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, ...patch } : i)));

  const removeItem = (id: string) =>
    setItems((prev) => prev.filter((i) => i.id !== id));

  const toggleItem = (id: string) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <ItemsContext.Provider
      value={{ items, addItem, updateItem, removeItem, toggleItem }}
    >
      {children}
    </ItemsContext.Provider>
  );
};
