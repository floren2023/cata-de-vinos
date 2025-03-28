
"use client"
import Image from 'next/image'
import Link from 'next/link'
import { Search,AlignJustify } from 'lucide-react';
import SocialMedia from './socialmedia';
import { LuShoppingBasket } from "react-icons/lu";
import {usePathname} from "next/navigation"
import { RiLoginCircleLine } from "react-icons/ri";
import { BiRegistered } from "react-icons/bi";
import { Tooltip } from "flowbite-react";

export function Navigation(){
  const pathname=usePathname();
return(
<nav
  className="bg-white dark:bg-gray-900 fixed w-full top-0 start-0  z-50 sombra3 pl-10 pr-10 bitter"
>
  <div
    className="max-w-screen-7xl flex flex-row items-center justify-around
     mx-auto gap-6"
  >
    <div className="w-1/4  ">
     <Link href="/" className= "text-red-800">
      <Image
        src='/logos/cata2.png' width={230} height={100}
        className="h-[100px]  "       
        alt="logo"
      />
    </Link></div>
    <div className="  lg:flex flex-inline ">
    <ul
        className="sm:hidden md:hidden  lg:flex lg:flex-inline md:text-sm lg:text-sm w-full  trecking-wider  gap-6 font-[merienda] font-medium"
      >
        <li>
          <Link
            href="/"
            className={ pathname==="/" ?"text-sm uppercase  text-red-800 ":"text-gray-900 text-sm  uppercase hover:text-red-800"}
            >Inicio</Link>
          
        </li>
        <li>
          <Link
            href="/blog"
            className={ pathname==="/blog" ?"text-sm uppercase  text-red-800 ":"text-gray-900 text-sm uppercase hover:text-red-800"}
            >Blog</Link>
          
        </li>
        <li>
          <Link
            href="/sobre"
            className={ pathname==="/sobre" ?" text-sm uppercase  text-red-800 ":"text-gray-900 text-sm uppercase hover:text-red-800"}
            >Sobre Nosostros</Link>
          
        </li>
        <li>
          <Link
            href="/events"
            className={ pathname==="/events" ?"text-sm uppercase  text-red-800 ":"text-gray-900 text-sm  uppercase hover:text-red-800"}
          >Servicios</Link>
        </li>

        <li>
          <Link
            href="/products"
            className={ pathname==="/products" ?"text-sm uppercase  text-red-800 ":"text-gray-900  text-sm  uppercase hover:text-red-800"}
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
          <div className="justify-end  flex flex-end pr-10">
           <SocialMedia/>
          </div>

          <div className="flex flex-inline gap-4">
            <div>
             {/*  <Link href="/tienda" className="block">
                <Search
                  className="text-red-900 w-6 h-6"
                />
                <span className="sr-only">Buscar </span>
              </Link> */}
            </div>
            <ul
              className="sm:hidden md:hidden lg:flex flex-inline gap-6 content-center items-center justify-end pr-20"
            >
              
                 <li className="text-red-900 hover:text-red-900 content-center align-baseline">
            <Link href="/users/">Admin</Link>
          </li>  
          <li className="text-red-900 hover:text-red-900 "><Tooltip content="Register">
          <button className="">
            <a href="/register"><BiRegistered className="w-6 h-6 "/></a></button></Tooltip>
          </li>
          <li className="text-red-900 hover:text-red-900 ">
            <Tooltip content="Login">
            <button className="">
            <a href="/login">< RiLoginCircleLine className="w-6 h-6 "/></a></button></Tooltip>
          </li>
          <li >
          <Tooltip content="Carrito">
          <button className=""><a href="/">
                <LuShoppingBasket 
                  className="text-red-900 h-6 w-6"
                /></a></button></Tooltip>
              </li>
           
             {/* <!--  data-modal-target="authentication-modal"
              data-modal-toggle="authentication-modal" --> */}
             
          
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
              </button></form> */}
            
             
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
      {/* <div className="relative mt-3 md:hidden">
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
 */}
      
    </div>
  </div>
</nav>
)}