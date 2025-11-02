import { useState } from "react";
import { Button } from "../../../components/UI/Button/Button";
import { ItemList } from "../components/ItemList/ItemList";
import { ItemModal } from "../components/ItemModal/ItemModal";
import { useModal } from "../hooks/useModal";
import { useItems } from "../../../context/items";
import { CategoryTabs } from "../../category/components/CategoryTabs/CategoryTabs";
import type { FormData } from "../schema/itemSchema";

export const List = () => {
  const {
    create,
    edit,
    handleCreate,
    handleUpdate,
    handleDelete,
    isModalOpen,
    setModalOpen,
    editing,
    setEditing,
  } = useModal();
  const { items, toggleItem } = useItems();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const filteredItems =
    selectedCategory === null
      ? items
      : items.filter((item) => item.categoryId === selectedCategory);
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50">
      <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-2xl p-6 flex flex-col gap-6">
        <header>
          <h1 className="text-2xl font-bold text-blue-600">
            Let's create a List of Items
          </h1>
          <Button onClick={create}>Create</Button>
        </header>
        <CategoryTabs
          selectedCategory={selectedCategory}
          onSelect={setSelectedCategory}
        />
        <main>
          <ItemList
            items={filteredItems}
            onEdit={edit}
            onDelete={handleDelete}
            onToggle={toggleItem}
          />
        </main>
      </div>
      <ItemModal
        isOpen={isModalOpen}
        onClose={() => {
          setModalOpen(false);
          setEditing(null);
        }}
        onSubmit={editing ? handleUpdate : handleCreate}
        defaultValues={
          editing
            ? ({
                title: editing.title,
                subTitle: editing.subTitle,
                categoryId: editing.categoryId ?? null,
              } as Partial<FormData>)
            : undefined
        }
        isEditing={!!editing}
      />
    </div>
  );
};
