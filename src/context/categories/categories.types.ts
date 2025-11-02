import type { Category } from "../../feature/category/types/categories.types";

export type CategoriesContextType = {
  categories: Category[];
  addCategory: (name: string, color?: string) => void;
  removeCategory: (id: string) => void;
};
