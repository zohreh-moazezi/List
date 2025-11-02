import { useState, useEffect, type ReactNode } from "react";
import { CategoriesContext } from "./CategoriesContext";
import type { Category } from "../../feature/category/types/categories.types";
import { v4 as uuid } from "uuid";

export const CategoriesProvider = ({ children }: { children: ReactNode }) => {
  const [categories, setCategories] = useState<Category[]>(() => {
    const stored = localStorage.getItem("categories");
    if (stored) return JSON.parse(stored);
    return [
      { id: uuid(), name: "Personal", color: "#3b82f6" },
      { id: uuid(), name: "Work", color: "#10b981" },
      { id: uuid(), name: "Society", color: "#f59e0b" },
    ];
  });
  useEffect(() => {
    localStorage.setItem("categories", JSON.stringify(categories));
  }, [categories]);

  const addCategory = (name: string, color?: string) => {
    setCategories((prev) => [...prev, { id: uuid(), name, color }]);
  };

  const removeCategory = (id: string) => {
    setCategories((prev) => prev.filter((cat) => cat.id !== id));
  };
  return (
    <CategoriesContext.Provider
      value={{ categories, addCategory, removeCategory }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};
