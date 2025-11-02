import { createContext } from "react";
import type { ItemsContextType } from "./items.type";

export const ItemsContext = createContext<ItemsContextType | null>(null);
