import React from "react";
import type { ButtonProps } from "./button.types";
import "./style.css";

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button className="btn btn-blue " {...props}>
      {children}
    </button>
  );
};
