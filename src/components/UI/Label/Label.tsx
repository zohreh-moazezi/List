import React from "react";
import type { LabelProps } from "./label.type";
import clsx from "clsx";

export const Label: React.FC<LabelProps> = ({
  hasError,
  children,
  className,
  ...props
}) => {
  return (
    <label
      className={clsx("text-gray-600", className, hasError && "text-red-600")}
      {...props}
    >
      {children}
    </label>
  );
};
