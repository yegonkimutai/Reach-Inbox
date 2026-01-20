"use client"

import React from "react";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit"
}

export default function Button({ 
  children,
   onClick,
   type = "button"
  }: Props) {
  return (
    <button 
    type={type}
    onClick={onClick}
    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 text-sm"
    >
      {children}
    </button>
  );
}
