
"use client"
import Image from 'next/image'
import Link from 'next/link'
import { Search,AlignJustify } from 'lucide-react';
import SocialMedia from './socialmedia';
import { LuShoppingBasket } from "react-icons/lu";
import {usePathname} from "next/navigation"

export function Navigation(){
  const pathname=usePathname();
return(
<nav
  className="bg-white dark:bg-gray-900 fixed w-full top-0 start-0 pb-2 z-50 sombra3 pl-10 pr-10"
>
  <div
    className="max-w-screen-7xl flex flex-row items-center justify-between
     mx-auto gap-20"
  >
    <div className="w-2/3 ">
     <Link href="/" className= "text-red-800">
      <Image
        src='/logos/cata2.png' width={160} height={100}
        className=" sm:w-30  md:w-1/2 md:h-1/2 lg:w-[160] lg:h-[100]  justify-start content-center ietms-center"
        alt="logo"
      />
    </Link></div>
    <div className="w-full">
    <ul
        className=" w-full flex flex-inline sm:hidden md:flex   gap-6 font-[merienda]"
      >
        <li>
          <Link
            href="/"
            className={ pathname==="/" ?"text-sm uppercase  text-red-800 ":"text-gray-700 text-sm  uppercase hover:text-red-800"}
            >Inicio</Link>
          
        </li>
        <li>
          <Link
            href="/blog"
            className={ pathname==="/blog" ?"text-sm uppercase  text-red-800 ":"text-gray-700 text-sm uppercase hover:text-red-800"}
            >Blog</Link>
          
        </li>
        <li>
          <Link
            href="/sobre"
            className={ pathname==="/sobre" ?" text-sm uppercase  text-red-800 ":"text-gray-700 text-sm uppercase hover:text-red-800"}
            >Sobre Nosostros</Link>
          
        </li>
        <li>
          <Link
            href="/servicios"
            className={ pathname==="/servicios" ?"text-sm uppercase  text-red-800 ":"text-gray-700 text-sm  uppercase hover:text-red-800"}
          >Servicios</Link>
        </li>

        <li>
          <Link
            href="/productos"
            className={ pathname==="/productos" ?"text-sm uppercase  text-red-800 ":"text-gray-700  text-sm  uppercase hover:text-red-800"}
          > Productos</Link>
          
        </li>
      </ul>
    </div>
   
    
    <div className="flex md:order-2">
      <button
        type="button"
        data-collapse-toggle="navbar-search"
        aria-controls="navbar-search"
        aria-expanded="false"
        className="relative md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700
      focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-md p-2.5 me-1"
      >
       <Search/>
        <span className="sr-only">Buscar</span>
      </button>
      <div className="relative hidden md:block">
        <input
          type="text"
          id="search-navbar"
          className="outline-none hidden pr-4 mr-4
        w-full text-md text-red-900 border
         border-red-800 rounded-lg bg-gray-50 focus:ring-gray-500 focus:border-gray-500
          dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
           dark:focus:ring-gray-500 dark:focus:border-gray-500"
          placeholder="Buscar en nuestro catalogo..."
        />
        <div className="flex flex-col">
          <div className="flex flex-inline  text-end justify-end">
           <SocialMedia/>
          </div>

          <div className="flex flex-inline gap-4">
            <div>
              <Link href="/tienda" className="block">
                <Search
                  className="text-red-900 w-6 h-6"
                />
                <span className="sr-only">Buscar </span>
              </Link>
            </div>
            <ul
              className="flex flex-inline gap-6 content-center items-center justify-end"
            >
              
                {/* <li className="text-red-900 hover:text-red-900 font-medium">
            <Link href="/admin/dashboard">Admin</Link>
          </li>  */}
          <li className="text-red-900 hover:text-red-900 font-medium">
            <Link href="/">Registrar</Link>
          </li>
          <li>
           
             {/* <!--  data-modal-target="authentication-modal"
              data-modal-toggle="authentication-modal" --> */}
              <Link href="/"   className="text-white bg-red-800 hover:text-red-900 hover:bg-gray-100 p-1 pl-2 pr-2 border-2
           border-red-800
           rounded-2xl font-medium"
              type="button"
            >
              Login
          </Link>
          </li>
            {/*   <!-- no aparece en este navbar --> */}
              {/*  <li>
              <form id="logout" name="logout">
              <button 
               
                className="text-red-800 bg-white-800 hover:text-white hover:bg-red-800 p-1 pl-2 pr-2 border-2
             border-red-800
             rounded-2xl font-medium"
                type="submit"
              >
                Logout
              </button></form> 
            </li> */}
              <li>
                <LuShoppingBasket
                  className="text-red-900 h-6 w-6"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
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
    <div
      className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
      id="navbar-search"
    >
      <div className="relative mt-3 md:hidden">
        <div
          className="sm:hidden absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
        >
          <Search />
        </div>
        <input
          type="text"
          id="search-navbar"
          className="outline-none block w-full p-2 ps-10 text-md text-red-900 border border-red-800 rounded-lg bg-gray-50 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
          placeholder="Buscar en nuestro catalogo..."
        />
      </div>

      
    </div>
  </div>
</nav>
)}