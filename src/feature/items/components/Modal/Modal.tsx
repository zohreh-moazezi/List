import type React from "react";
import type { Props } from "./modal.types";

export const Modal: React.FC<Props> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div
      className="fixed  inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50"
      onMouseDown={onClose}
    >
      <div
        className="bg-white  rounded-2xl shadow-xl w-full max-w-md mx-auto relative animate-fadeIn"
        onMouseDown={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
