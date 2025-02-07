import React from "react";
import { IoMdArrowDropdownCircle, IoMdMenu } from "react-icons/io";
import { category } from "../types/all-types";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  
  MenubarTrigger,
} from "@/components/ui/menubar";

type categories = category[];

function NavigationCategory({ categories }: { categories: categories }) {


  return (
  
      <div className="mt-4">
        <Menubar className="p-5 text-md bg-red-100 w-3/4 mx-auto gap-3">
        <div className="text-red-800 italic text-xl merienda-h3 pl-5 pr-10 hidden lg:flex">
              {" "}
              Disfruta de nuestros mejores productos:
            </div>
        <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            className="inline-flex items-center
       p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden
        hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200
         dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-dropdown"
            aria-expanded="false"
          >
            <span className="sr-only">Abre menu principal</span>
            <IoMdMenu />
          </button>
          <MenubarMenu >
           
            <MenubarTrigger className="hidden md:flex lg:flex text-xl bitter text-md">
              Vinos
              <IoMdArrowDropdownCircle height={9} className="text-red-800  " />
            </MenubarTrigger>
            <MenubarContent>
              {categories.map(
                (item, id) =>
                  item.name?.includes("Vino") === true && (
                    <MenubarItem key={item.id}>
                      <input
                        type="checkbox"
                        name={item.name}
                        value="false"
                        className="w-4 h-4 text-red-600 bg-gray-100 border-gray-500 rounded focus:ring-red-500
                           dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2
                            dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label className="capitalize">{item.name}</label>
                    </MenubarItem>
                  )
              )}
            </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
            <MenubarTrigger className="hidden md:flex lg:flex text-xl bitter text-md ">
              Licor
              <IoMdArrowDropdownCircle height={9} className="text-red-800  " />
            </MenubarTrigger>
            <MenubarContent>
              {categories.map(
                (item, id) =>
                  item.name?.toLowerCase().includes("Licor".toLowerCase())=== true && (
                    <MenubarItem key={item.id}>
                      <input
                        type="checkbox"
                        name={item.name}
                        value="false"
                        className="w-4 h-4 text-red-600 bg-gray-100 border-gray-500 rounded focus:ring-red-500
                           dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2
                            dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label className="capitalize">{item.name}</label>
                    </MenubarItem>
                  )
              )}
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger className="hidden md:flex lg:flex text-xl bitter text-md ">
              Wiskey
              <IoMdArrowDropdownCircle height={9} className="text-red-800  " />
            </MenubarTrigger>
            <MenubarContent>
              {categories.map(
                (item, id) =>
                  item.name?.toLowerCase().includes("Wiskey".toLowerCase())=== true && (
                    <MenubarItem key={item.id}>
                      <input
                        type="checkbox"
                        name={item.name}
                        value="false"
                        className="w-4 h-4 text-red-600 bg-gray-100 border-gray-500 rounded focus:ring-red-500
                           dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2
                            dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label className="capitalize">{item.name}</label>
                    </MenubarItem>
                  )
              )}
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger className="hidden md:flex lg:flex text-xl bitter text-md ">
              Cestas y Regalos
              <IoMdArrowDropdownCircle height={9} className="text-red-800  " />
            </MenubarTrigger>
            <MenubarContent>
              {categories.map(
                (item, id) =>
                  item.name?.toLowerCase().includes("Regalos".toLowerCase())=== true && (
                    <MenubarItem key={item.id}>
                      <input
                        type="checkbox"
                        name={item.name}
                        value="false"
                        className="w-4 h-4 text-red-600 bg-gray-100 border-gray-500 rounded focus:ring-red-500
                           dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2
                            dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label className="capitalize">{item.name}</label>
                    </MenubarItem>
                  )
              )}
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
      
  
  );
}

export default NavigationCategory;
