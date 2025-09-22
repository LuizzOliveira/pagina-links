import Link from "next/link";

interface ButtonProps {
  label: string;
  href: string;
}

export default function Button({ label, href }: ButtonProps) {
  if (!href) return null;

  const baseClass = `
    bg-gray-600 text-white py-2 rounded-md
    text-center text-sm sm:text-base
    hover:bg-gray-700 transition
    cursor-pointer w-full sm:w-48 mx-auto sm:mx-0
    focus:outline-none focus:ring-0
  `;

  return (
    <>
      <Link href={href} target="_blank" rel="noopener noreferrer" className={`hidden sm:block ${baseClass}`}>
        {label}
      </Link>
      <Link href={href} className={`block sm:hidden ${baseClass}`}>
        {label}
      </Link>
    </>
  );
}
