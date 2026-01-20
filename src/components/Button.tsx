import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, ...props}: ButtonProps) {
  return (
    <button 
    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 text-sm"
    >
      {children}
    </button>
  );
}
