"use client"
import {  IoMdMenu } from "react-icons/io";
import { category } from "../types/all-types";

import * as React from "react";
import { Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { useState } from "react";

type categories = category[];
interface Props {
 
  categories:categories
}




function NavigationCategory( { categories}:Props) {

  const [text, setText] = useState("");

  const [selectedValue, setSelectedValue] = useState("");

  const handleChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
   
  };

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
    
 
  };

  
 
  return (
    <div className="flex flex-inline bg-gray-100 gap-5  justify-between ml-10 mr-10  rounded-md sombra3 mx-auto">
      <div className="text-red-800 italic text-xl merienda-h3 pl-5 pr-10 hidden lg:flex p-4">
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
      <nav className="flex flex-inline  p-4 text-md  ">
        <div className="text-gray-400 italic text-md pr-3 ">Buscar por categoria:</div>

        <Select  value={selectedValue} onValueChange={(e)=>handleChangeSelect}>
          <SelectTrigger className="w-[300px] border-gray-400 text-gray-600">
            <SelectValue placeholder="Selectiona una categoria" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectGroup>
              <SelectLabel className="bg-red-100">Vinos</SelectLabel>
              {categories.map(
                (item, id) =>
                  item.name?.includes("Vino") === true && (
                    <SelectItem value={item.name} key={item.id} 
                    className="pl-5 hover:bg-gray-200 active:bg-gray-200 focus:bg-gray-200">
                      {item.name}
                    </SelectItem>
                  )
              )}
            </SelectGroup>
            <SelectGroup>
              <SelectLabel className="bg-red-100">Licores</SelectLabel>
              {categories.map(
                (item, id) =>
                  item.name?.toLowerCase().includes("Licor".toLowerCase()) ===
                    true && (
                    <SelectItem value={item.name} key={item.id}
                    className="pl-5 hover:bg-gray-200 active:bg-gray-200 focus:bg-gray-200">
                      {item.name}
                    </SelectItem>
                  )
              )}
            </SelectGroup>
            <SelectGroup>
              <SelectLabel className="bg-red-100">Wiskey</SelectLabel>
              {categories.map(
                (item, id) =>
                  item.name?.toLowerCase().includes("Wiskey".toLowerCase()) ===
                    true && (
                    <SelectItem value={item.name} key={item.id}
                    className="pl-5 hover:bg-gray-200 active:bg-gray-200 focus:bg-gray-200"
                    >
                      {item.name}
                    </SelectItem>
                  )
              )}
            </SelectGroup>
            <SelectGroup>
              <SelectLabel className="bg-red-100">Cestas y Regalos</SelectLabel>
              {categories.map(
                (item, id) =>
                  item.name?.toLowerCase().includes("Regalos".toLowerCase()) ===
                    true && (
                    <SelectItem value={item.name} key={item.id}
                    className="pl-5 hover:bg-gray-200 active:bg-gray-200 focus:bg-gray-200">
                      {item.name}
                    </SelectItem>
                  )
              )}
            </SelectGroup>
          </SelectContent>
        </Select>
        
      
      {/* search menu bar */}

      <div className="flex flex-end max-w-sm pr-10 p-3 w-[350px]"  >
        <label htmlFor="simple-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
           <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
           <button type="button" className=" " name="search-button" id="search-button">
          <Search className=" text-gray-600 w-6 h-6" />
          <span className="sr-only">Search</span>
        </button>
        </div> 
          <input name="search-text"
            type="text" onChange={handleChangeInput}
            id="search-text"
            className="bg-gray-50 border border-gray-300
         text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500
          block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
           dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
            placeholder="Buscar producto..."
            
          />
        </div>
       
      </div>
    
    </nav></div>
  );
}

export default NavigationCategory;
