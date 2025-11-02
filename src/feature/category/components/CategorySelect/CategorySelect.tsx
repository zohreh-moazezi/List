import { useCategories } from "../../../../context/categories";
import type { CategorySelectProps } from "./categorySelect.types";

export const CategorySelect: React.FC<CategorySelectProps> = ({
  value,
  onChange,
}: CategorySelectProps) => {
  const { categories } = useCategories();
  return (
    <select
      value={value || ""}
      onChange={(e) => onChange(e.target.value)}
      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-gray-300 outline-none"
    >
      <option value="">Select a category</option>
      {categories.map((category) => (
        <option key={category.id} value={category.id}>
          {category.name}
        </option>
      ))}
    </select>
  );
};
