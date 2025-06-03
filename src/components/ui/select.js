import React from "react";

export function Select({ children, className = '', ...props }) {
  return <select className={`px-4 py-2 border rounded-lg text-sm ${className}`} {...props}>{children}</select>;
}

export function SelectTrigger({ children, className = '', ...props }) {
  return <div className={`px-4 py-2 border rounded-lg bg-white text-sm cursor-pointer ${className}`} {...props}>{children}</div>;
}

export function SelectValue({ children }) {
  return <span>{children}</span>;
}

export function SelectContent({ children }) {
  return <div>{children}</div>;
}

export function SelectItem({ value, children }) {
  return <option value={value}>{children}</option>;
}
