import { createContext } from "react";
import type { CategoriesContextType } from "./categories.types";

export const CategoriesContext = createContext<CategoriesContextType | null>(
  null
);
