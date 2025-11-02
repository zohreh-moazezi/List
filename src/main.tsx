import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ItemsProvider } from "./context/items/ItemsProvider.tsx";
import { CategoriesProvider } from "./context/categories/CategoriesProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CategoriesProvider>
      <ItemsProvider>
        <App />
      </ItemsProvider>
    </CategoriesProvider>
  </StrictMode>
);
