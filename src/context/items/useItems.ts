import { useContext } from "react";
import { ItemsContext } from "./ItemsContext";

export const useItems = () => {
  const ctx = useContext(ItemsContext);
  if (!ctx) {
    throw new Error("useCategories must be used within a CategoriesProvider");
  }
  return ctx;
};
