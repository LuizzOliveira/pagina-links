import Link from "next/link";
import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  href: string;
  icon?: IconType; // ícone opcional
}

export default function Button({ label, href, icon: Icon }: ButtonProps) {
  if (!href) return null;

  const baseClass = `
    bg-gray-600 text-white py-2 rounded-md
    text-center text-sm sm:text-base
    hover:bg-gray-700 hover:scale-105 transition-transform duration-200
    cursor-pointer w-full sm:w-48 mx-auto sm:mx-0
    flex items-center justify-center gap-2
    focus:outline-none focus:ring-0
  `;

  return (
    <>
      {/* Desktop */}
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`hidden sm:flex ${baseClass}`}
      >
        {Icon && <Icon className="w-5 h-5" />}
        {label}
      </Link>

      {/* Mobile */}
      <Link
        href={href}
        className={`flex sm:hidden ${baseClass}`}
      >
        {Icon && <Icon className="w-5 h-5" />}
        {label}
      </Link>
    </>
  );
}
