import Link from 'next/link'
import React from 'react'
import { usePathname } from "next/navigation";

const NavigacionPrincipal = () => {
     const pathname = usePathname();
  return (
     <div className="  lg:flex flex-inline ">
          
            <ul className="sm:hidden md:hidden  lg:flex lg:flex-inline md:text-sm lg:text-sm w-full  trecking-wider  gap-6 font-[merienda] font-medium">
              <li>
                <Link
                  href="/"
                  className={
                    pathname === "/"
                      ? "text-sm uppercase  text-red-800 "
                      : "text-gray-900 text-sm  uppercase hover:text-red-800"
                  }
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className={
                    pathname === "/blog"
                      ? "text-sm uppercase  text-red-800 "
                      : "text-gray-900 text-sm uppercase hover:text-red-800"
                  }
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre"
                  className={
                    pathname === "/sobre"
                      ? " text-sm uppercase  text-red-800 "
                      : "text-gray-900 text-sm uppercase hover:text-red-800"
                  }
                >
                  Sobre Nosostros
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className={
                    pathname === "/events"
                      ? "text-sm uppercase  text-red-800 "
                      : "text-gray-900 text-sm  uppercase hover:text-red-800"
                  }
                >
                  Servicios
                </Link>
              </li>

              <li>
                <Link
                  href="/products"
                  className={
                    pathname === "/products"
                      ? "text-sm uppercase  text-red-800 "
                      : "text-gray-900  text-sm  uppercase hover:text-red-800"
                  }
                >
                  {" "}
                  Productos
                </Link>
              </li>
            </ul>
          
          {/* { isClient==='true' &&
   <div className="flex flex-inline">
     <div className="relative sm:hidden md:block lg:block">
    <input
      type="text"
      id="search-navbar"
      className="outline-none  pr-4 mr-4
    w-full text-sm text-red-900 border
     border-red-800 rounded-lg bg-gray-50 focus:ring-gray-500 focus:border-gray-500
      dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
       dark:focus:ring-gray-500 dark:focus:border-gray-500"
      placeholder="Buscar en nuestro catalogo..."
    />
    </div>
   <button
    type="button"
    data-collapse-toggle="navbar-search"
    aria-controls="navbar-search"
    aria-expanded="false"
    className="relative  text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700
  focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-md -ml-10 "
  >
   <Search/>
    <span className="sr-only">Buscar</span>
  </button>
 
    </div>
} */}
        </div>
  )
}

export default NavigacionPrincipal
