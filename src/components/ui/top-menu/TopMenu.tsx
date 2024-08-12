import Link from "next/link";

import { titleFont } from "@/config/fonts";

export const TopMenu = () => {
  return (
    <nav className="flex px-5 justify-between items-center w-full">
        {/* Logo Menu */}
            <div>
                <link
                href="/">
                    <span className={`${ titleFont.className }`}>Tesla</span>
                    <span> | Shop</span>
                </link>
            </div>

            { /* Center Menu */ }
            <div className="">
                <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" href="/category/men">Hombres</Link>
            </div>
    </nav>
  )
}
