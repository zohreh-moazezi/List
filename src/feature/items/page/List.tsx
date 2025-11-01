import { Button } from "../../../components/UI/Button/Button";
import { ItemList } from "../components/ItemList/ItemList";
import { ItemModal } from "../components/ItemModal/ItemModal";
import { useModal } from "../hooks/useModal";
import { useItems } from "../../../context/ItemsContext";
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
  const { items } = useItems();
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50">
      <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-2xl p-6 flex flex-col gap-6">
        <header>
          <h1 className="text-2xl font-bold text-blue-600">
            Let's create a List of Items
          </h1>
          <Button onClick={create}>Create</Button>
        </header>
        <main>
          <ItemList items={items} onEdit={edit} onDelete={handleDelete} />
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
              } as Partial<FormData>)
            : undefined
        }
        isEditing={!!editing}
      />
    </div>
  );
};
