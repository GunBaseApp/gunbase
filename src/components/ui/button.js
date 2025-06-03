import React from "react";

export function Button({ children, className = '', ...props }) {
  return (
    <button
      className={`px-4 py-2 rounded-xl bg-blue-600 text-white font-medium text-sm hover:bg-blue-700 active:bg-blue-800 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
