import Link from "next/link";

interface ButonProps{
    label: string,
    href: string
}

export default function Button({label, href} : ButonProps) {
    return(
        <Link href={href} passHref target="_blank">
            <button className="bg-gray-600 text-[#ffffff] w-48 py-2 my-2 rounded-md 
                                hover:bg-gray-700 transition text-sm sm:text-base cursor-pointer">
                {label}
            </button>
        </Link>
    )
}
