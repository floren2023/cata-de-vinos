"use client";
import { IoIosArrowDown, IoMdMenu } from "react-icons/io";
import { category } from "../types/all-types";
import { useRouter } from "next/navigation";
import * as React from "react";
import { useDebounce } from "use-debounce";
import { Search } from "lucide-react";
import { FaFilterCircleDollar } from "react-icons/fa6";
import "react-range-slider-input/dist/style.css";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useEffect, useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { MdCategory } from "react-icons/md";

const SORT_OPTIONS = [
  { name: "None", value: "none" },
  { name: "Price1", value: "0-9 EUR" },
  { name: "Price2", value: "9-19 EUR" },
  { name: "Price3", value: "19-49 EUR" },
  { name: "Price4", value: "49-99 EUR" },
  { name: "Price5", value: "99-200 EUR" },
  { name: "Price6", value: ">200 EUR" },
];

type categories = category[];

interface Props {
  categories: categories;
}

function NavigationCategory({ categories }: Props) {
  const [text, setText] = useState("");
  const router = useRouter();
  const [query] = useDebounce(text, 500);
  const [selectedValue, setSelectedValue] = useState("");
  const [filter, setFilter] = useState({
    sort: "none",
  });
  

  useEffect(() => {
    if (!query && !selectedValue&&filter.sort==='none') {
      router.push(`/products`);
    } else {
      if (query) {
        router.push(`/products?search=${query}`);
      } else {
        if (selectedValue) {
          router.push(`/products?category=${selectedValue}`);
        } else {
          if (filter.sort!=='none') {
            
            router.push(`/products?price=${filter.sort}`);
          }
        }
      }
    }
  }, [query, selectedValue, filter, router]);

  const handleChangeSelect = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <div className="flex flex-inline p-3  mt-3 content-center items-center justify-between bg-gray-100  rounded-md sombra3 mx-auto pt-5">
      <div className="text-red-800 italic text-xl merienda-h3   hidden lg:block pl-10">
        Disfruta de nuestros productos:
      </div>

      {/* // select with category */}
      <div className=" flex-inline hidden  md:flex lg:flex   ">
       
        <Select
          name="selectCategory"
          value={selectedValue}
          onValueChange={(value) => handleChangeSelect(value)}
        >
          <SelectTrigger className="w-[220px]  text-gray-500 italic text-sm  border-gray-300 border-2 border-spacing-1">
         
          <MdCategory className="w-6 h-6 text-gray-400"/>
            <SelectValue placeholder="Buscar por categoria:" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectGroup>
              <SelectLabel className="bg-red-100">Vinos</SelectLabel>
              {categories.map(
                (item, id) =>
                  item.name?.toLowerCase().includes("Vino".toLowerCase()) === true && (
                    <SelectItem
                      value={item.name}
                      key={item.id}
                      className="pl-5 hover:bg-gray-200 active:bg-gray-200 focus:bg-gray-200"
                    >
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
                    <SelectItem
                      value={item.name}
                      key={item.id}
                      className="pl-5 hover:bg-gray-200 active:bg-gray-200 focus:bg-gray-200"
                    >
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
                    <SelectItem
                      value={item.name}
                      key={item.id}
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
                    <SelectItem
                      value={item.name}
                      key={item.id}
                      className="pl-5 hover:bg-gray-200 active:bg-gray-200 focus:bg-gray-200"
                    >
                      {item.name}
                    </SelectItem>
                  )
              )}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* //select price */}
      <div className=" flex-inline hidden  md:flex lg:flex w-1/5 pt-2 ">
      
        <DropdownMenu>
          <DropdownMenuTrigger asChild  
  className={cn(
    "flex cursor-default gap-2 select-none items-center mb-2 rounded-md px-2 py-1 border-gray-300 border-2 border-spacing-1 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none ",
    
  )}
  ><div className="w-[200px]  text-gray-500 italic text-sm ">
    < FaFilterCircleDollar className="pl-2 text-gray-400 w-6 h-6 " />Buscar por precio:<IoIosArrowDown /></div>
                        
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white">
            <DropdownMenuLabel>Precio</DropdownMenuLabel>
            {SORT_OPTIONS.map((item, id) => (
              <DropdownMenuItem key={item.name} >
                <button 
                  className={cn('text-left w-full block px-4 py-2 text-sm',{'text-gray-900 bg-gray-100':item.value===filter.sort,
                    'text-gray-500':item.value!==filter.sort}
                     )}
                  onClick={() => {
                    setFilter((prev) => ({
                      ...prev,
                      sort: item.value,
                    }));
                  }}
                >
                  {item.value}
                </button>
                </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* search menu bar */}

      <div className="flex flex-end max-w-sm  md:w-[200px] lg:w-[300px] pl-3 pr-10">
        <div className="relative w-full ">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 md:pb-5 lg:pb-1 pointer-events-none">
            <Search
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
            />
          </div>

          <input
            name="search-text"
            type="text"
            onChange={(e) => setText(e.target.value)}
            id="search-text"
            value={text}
            className="bg-gray-50 border border-gray-300 
         text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500
          block w-full ps-10 p-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
           dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
            placeholder="Buscar producto..."
          />
        </div>
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
    </div>
  );
}

export default NavigationCategory;
