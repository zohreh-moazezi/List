import { forwardRef } from "react";
import type { InputProps } from "./input.types";
import clsx from "clsx";

// I use of clsx library To conditionally merge class names

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ errorMessage, hasError, className, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1 ">
        <input
          className={clsx(
            " rounded-md border px-4 py-2 w-full text-sm shadow-sm outline-none transition-all",
            "placeholder:text-gray-400",
            "focus:ring-2 focus:ring-gray-300 focus:ring-gray-300",
            hasError
              ? "border-red-500 focus:ring-red-500 focus:border-red-500 text-red-700"
              : "border-gray-300 text-gray-800",
            className
          )}
          ref={ref}
          aria-invalid={!!hasError}
          {...props}
        />
        {errorMessage && (
          <p className="text-sm text-red-500 mt-1">{errorMessage}</p>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";
