"use client";
import { IoIosArrowDown, IoMdMenu } from "react-icons/io";
import { event } from "../types/all-types";
import { useRouter } from "next/navigation";
import * as React from "react";
import { useDebounce } from "use-debounce";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

type events = event[];

export function NavigationEvent({ events }: { events: events }) {
  const [text, setText] = useState("");
  const router = useRouter();
  const [query] = useDebounce(text, 500);
  useEffect(() => {
    if (!query) {
      router.push(`/events`);
    } else {
      router.push(`/events?search=${query}`);
    }
  }, [query, router]);

  return (
    <div className="flex flex-inline p-3 gap-10   justify-end bg-gray-100  rounded-md sombra3 content-center items-center  ml-10 mr-10 ">
        <div className="flex flex-inline gap-4 pr-10 ">
            <Link href="/testimonios " className="text-red-800 shadow-sm shadow-gray-400 p-2 rounded-md">Testimonios</Link>
            <Link href="/forum"  className="text-red-800 shadow-sm shadow-gray-400 p-2 rounded-md">Forum</Link>
        </div>
      <div className="">
        <DropdownMenu>
          <DropdownMenuTrigger className="w-[150px] p-1 border-2 border-gray-300 rounded-md text-center">
            Recientes
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white">
            {events.map((item, index) => (
              <DropdownMenuItem key={index}>{item.title}</DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="">
        <DropdownMenu>
          <DropdownMenuTrigger className="w-[150px] p-1 border-2 border-gray-300 rounded-md text-center">
            Mas destacadas
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white">
            {events.map((item, id) => (
              <DropdownMenuItem key={item.id}>{item.title}</DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="">
        <DropdownMenu>
          <DropdownMenuTrigger className="w-[150px] p-1 border-2 border-gray-300 rounded-md text-center">
            Sortar Fecha
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white">
            
              <DropdownMenuItem >
               Ascendent
              </DropdownMenuItem>
              <DropdownMenuItem >
               Descendent
              </DropdownMenuItem>
            
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="w-full  max-w-sm  md:w-[200px] lg:w-[300px]  justify-end  ">
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
            placeholder="Buscar evento por titulo.."
          />
        </div>
      </div>
    </div>
  );
}
