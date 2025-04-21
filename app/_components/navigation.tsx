"use client";
import Image from "next/image";
import Link from "next/link";
import { Search, AlignJustify } from "lucide-react";
import SocialMedia from "./socialmedia";
import { LuShoppingBasket } from "react-icons/lu";
import { usePathname } from "next/navigation";
import { RiLoginCircleLine } from "react-icons/ri";
import { BiRegistered } from "react-icons/bi";
import { Tooltip } from "flowbite-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
 
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navigation() {
  const pathname = usePathname();
 
  
  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full top-0 start-0  shadow-sm z-50  pl-10 pr-10 bitter">
      <div
        className="max-w-screen-7xl flex flex-row items-center justify-around
     mx-auto gap-6"
      >
        <div className="w-1/4 justify-start ">
          <Link href="/" className="text-red-800">
            <Image src="/logos/cata2.png" width={230} height={100} alt="logo" />
          </Link>
        </div>
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
        <div className="flex md:order-2">
          <div className="flex flex-col">
            <div className="justify-end  flex flex-end pr-10">
              <SocialMedia />
            </div>

            <div className="flex flex-inline gap-4 justify-end">       
                                    
                    <ul className="sm:hidden md:hidden lg:flex flex-inline gap-6 justify-end ">
                  
                      <div className="flex flex-inline gap-5">

                        
                             <DropdownMenu>
                      <DropdownMenuTrigger>
                        <Search className="text-red-900 w-6 h-6 pb-1" />
                        <span className="sr-only">Buscar </span>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="bg-gray-100">
                        <DropdownMenuItem>
                          {" "}
                          <Link href="/products" className="block">
                            Productos
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link href="/events" className="block">
                            Eventos
                          </Link>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                    <li className="text-red-900 hover:text-red-900 ">
                      <Tooltip content="Register">
                        <button className="">
                          <a href="/register">
                            <BiRegistered className="w-6 h-6 " />
                          </a>
                        </button>
                      </Tooltip>
                    </li>
                    <li className="text-red-900 hover:text-red-900 ">
                      <Tooltip content="Login">
                        <button className="">
                          <a href="/login">
                            <RiLoginCircleLine className="w-6 h-6 " />
                          </a>
                        </button>
                      </Tooltip>
                    </li>
                  </div>
              
                <li>
                  <Tooltip content="Carrito">
                    <button className="">
                      <a href="/">
                        <LuShoppingBasket className="text-red-900 h-6 w-6" />
                      </a>
                    </button>
                  </Tooltip>
                </li>

                
               
              
              </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button
            data-collapse-toggle="navbar-search"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 sm:pr-5 justify-center text-md text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-search"
            aria-expanded="false"
          >
            <span className="sr-only">Abre menu</span>
            <AlignJustify />
          </button>
        </div>
      
    </nav>
  );
}

