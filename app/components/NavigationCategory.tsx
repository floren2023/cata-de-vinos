"use client";
import { IoMdMenu } from "react-icons/io";
import { category, product } from "../types/all-types";
import { useRouter } from "next/navigation";
import * as React from "react";
import { useDebounce } from "use-debounce";
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

import { useEffect, useState } from "react";
import { string } from "zod";

type categories = category[];
type products = product[];
interface Props {
  categories: categories;
}

function NavigationCategory({ categories }: Props) {
  const [text, setText] = useState("");
  const router = useRouter();
  const [query] = useDebounce(text, 500);
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedPriceMin, setSelectedPriceMin] = useState(0);
  const [selectedPriceMax, setSelectedPriceMax] = useState(0);

  const stringPrecios = [
    {
      id: 1,
      name: "1-9 EUR",
      priceMin: 1,
      priceMax: 9,
    },
    {
      id: 2,
      name: "9-19 EUR",
      priceMin: 9,
      priceMax: 19,
    },
    {
      id: 3,
      name: "19-49 EUR",
      priceMin: 19,
      priceMax: 49,
    },
    {
      id: 4,
      name: "49-99 EUR",
      priceMin: 49,
      priceMax: 99,
    },
    {
      id: 5,
      name: "99-200 EUR",
      priceMin: 99,
      priceMax: 200,
    },
    {
      id: 6,
      name: ">200 EUR",
      priceMin: 200,
      priceMax: 1000,
    },
  ];

  useEffect(() => {
    if (!query && !selectedValue) {
      router.push(`/products`);
    } else {
      if (query) {
        router.push(`/products?search=${query}`);
      } else {
        if (selectedValue) {
          router.push(`/products?category=${selectedValue}`);
        } else {
           
             if(selectedPriceMin&&selectedPriceMax){           

            router.push(`/products?minPrice=${selectedPriceMin}&&maxPrice=${selectedPriceMax}`);
          }
        }
      }
    }
  }, [query, selectedValue, selectedPrice, router]);

  const handleChangeSelect = (value: string) => {
    setSelectedValue(value);
  };

  const handleSelectedPrice = (value: string) => {
    setSelectedPrice(value);
    
    const price = stringPrecios.filter((price) => price.name === value);
    const priceMin = price[0].priceMin;
    const priceMax = price[0].priceMax;
    setSelectedPriceMin(priceMin);
    setSelectedPriceMax(priceMax);
    
  };

  return (
    <div>
      <div className="flex flex-end p-3 justify-end bg-gray-100 gap-3  rounded-md sombra3 mx-auto pt-5">
        <div className="text-red-800 italic text-xl merienda-h3   hidden lg:flex pl-5">
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
        <nav className="flex flex-inline   md:gap-5 lg:gap-6 pl-10 pr-10 justify-between ">
          {/* // select with category */}
          <div className=" flex-inline hidden  md:flex lg:flex   ">
            <div className="text-gray-400 italic md:text-sm lg:text-md pr-3 pt-2">
              Buscar por categoria:
            </div>

            <Select
              name="selectCategory"
              value={selectedValue}
              onValueChange={(value) => handleChangeSelect(value)}
            >
              <SelectTrigger className="md:w-[150px] lg:w-[200px] border-gray-400 text-gray-600">
                <SelectValue placeholder="Selectiona una categoria" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectGroup>
                  <SelectLabel className="bg-red-100">Vinos</SelectLabel>
                  {categories.map(
                    (item, id) =>
                      item.name?.includes("Vino") === true && (
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
                      item.name
                        ?.toLowerCase()
                        .includes("Licor".toLowerCase()) === true && (
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
                      item.name
                        ?.toLowerCase()
                        .includes("Wiskey".toLowerCase()) === true && (
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
                  <SelectLabel className="bg-red-100">
                    Cestas y Regalos
                  </SelectLabel>
                  {categories.map(
                    (item, id) =>
                      item.name
                        ?.toLowerCase()
                        .includes("Regalos".toLowerCase()) === true && (
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
          <div className=" flex-inline hidden  md:flex lg:flex   ">
            <div className="text-gray-400 italic md:text-sm lg:text-md pr-3 pt-2">
              Buscar por precio:
            </div>

            <Select
              name="selectPrice"
              onValueChange={(value) => handleSelectedPrice(value)}
              defaultValue={selectedPrice}>
            
              <SelectTrigger className=" w-[150px] border-gray-400 text-gray-600">
                <SelectValue placeholder="Selectiona precio" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                {stringPrecios.map((item, id) => (
                  <SelectItem
                    value={item.name}
                    key={item.id}
                    className="pl-5 hover:bg-gray-200 active:bg-gray-200 focus:bg-gray-200"
                  >
                    {item.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* search menu bar */}

          <div className="flex flex-end max-w-sm  md:w-[100px] lg:w-[230px] pl-3">
            <div className="relative w-full ">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
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
        </nav>
      </div>
    </div>
  );
}

export default NavigationCategory;
