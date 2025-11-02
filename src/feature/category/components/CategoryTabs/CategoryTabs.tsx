import React from "react";
import { useCategories } from "../../../../context/categories";
import type { Props } from "./categoryTabs.types";

export const CategoryTabs: React.FC<Props> = ({
  selectedCategory,
  onSelect,
}) => {
  const { categories } = useCategories();

  return (
    <div className="flex flex-wrap gap-2 mb-6 justify-center">
      <button
        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
          selectedCategory === null
            ? "bg-blue-600 text-white"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        }`}
        onClick={() => onSelect(null)}
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onSelect(cat.id)}
          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
            selectedCategory === cat.id
              ? "text-white"
              : "text-gray-700 hover:bg-gray-300"
          }`}
          style={{
            backgroundColor:
              selectedCategory === cat.id ? cat.color : "#E5E7EB",
          }}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
};
