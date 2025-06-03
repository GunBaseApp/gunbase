import React from "react";

export function Input({ className = '', ...props }) {
  return (
    <input
      className={`w-full px-4 py-2 border rounded-lg text-sm bg-white dark:bg-gray-900 text-black dark:text-white border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      {...props}
    />
  );
}
