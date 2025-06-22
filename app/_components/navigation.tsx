"use client"
import Image from "next/image";
import Link from "next/link";
import { Search, AlignJustify } from "lucide-react";

import { LuShoppingBasket } from "react-icons/lu";

import { RiLoginCircleLine } from "react-icons/ri";
import { Tooltip } from "flowbite-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
 
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import NavigationPrincipal from "./navigation-principal";

export function Navigation() {
 

 
  
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
       <NavigationPrincipal/>
        
       
        <div className="flex md:order-2">
          <div className="flex flex-col">
           

            <div className="flex flex-inline gap-4 justify-end">       
                                    
                    <ul className="sm:hidden md:hidden lg:flex flex-inline gap-4 justify-end ">
                  
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
                   {/*  <li className="text-red-900 hover:text-red-900 ">
                      <Tooltip content="Register">
                        <button className="">
                          <a href="/register">
                            <BiRegistered className="w-6 h-6 " />
                          </a>
                        </button>
                      </Tooltip>
                    </li> */}
                    <li className="">
                      <Tooltip content="Login">
                         <Link href="/login">
                        <div className="flex gap-1 rounded-full bg-red-800 text-white text-sm px-3 py-1 items-center">
                         
                            <RiLoginCircleLine className="w-5 h-5 " />

                            Sign In
                          
                        </div>
                        </Link>
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

