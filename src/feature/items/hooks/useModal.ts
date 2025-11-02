import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useItems } from "../../../context/items";
import type { Item } from "../types";
import type { FormData } from "../schema/itemSchema";

export const useModal = () => {
  const { addItem, updateItem, removeItem } = useItems();
  const [isModalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<Item | null>(null);

  const create = () => {
    setEditing(null);
    setModalOpen(true);
  };

  const edit = (item: Item) => {
    setEditing(item);
    setModalOpen(true);
  };

  const handleCreate = (data: FormData) => {
    const newItem: Item = {
      id: uuidv4(),
      title: data.title,
      subTitle: data.subTitle,
      createdAt: new Date().toISOString(),
      categoryId: data.categoryId || null,
      completed: false,
    };
    addItem(newItem);
    setModalOpen(false);
  };

  const handleUpdate = (data: FormData) => {
    if (!editing) return;
    updateItem(editing.id, {
      title: data.title,
      subTitle: data.subTitle,
      categoryId: data.categoryId || null,
    });
    setEditing(null);
    setModalOpen(false);
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this item?")) {
      removeItem(id);
    }
  };

  return {
    create,
    edit,
    handleCreate,
    handleUpdate,
    handleDelete,
    isModalOpen,
    setModalOpen,
    editing,
    setEditing,
  };
};
