"use client";
import { FaHeart } from "react-icons/fa";
import { category, product } from "../types/all-types";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";



export default function Product({ item }: { item:{product:product, category:category} }) {
  const prod=item.product
  const category=item.category
  return (
    <Card className=" bg-white  mb-4 rounded-lg sombra4
     border-red-100 transition hover:scale-105 
     border-2  dark:bg-gray-800 dark:border-gray-700">
      <CardHeader className=" text-start pl-3 pt-3  justify-between">
        
        <div>
          <FaHeart className="w-6 h-6 pl-0 text-red-600" />
        </div>
        <div className="flex flex-inline justify-around">
        <div className="text-md font-semibold tracking-tight text-gray-900 dark:text-white text-center 
            pl-0 ml-0">
            {prod.name}
          </div>
        <div className="text-md font-semibold text-gray-900 dark:text-white
         text-end justify-end  ">
          <p className="text-red-800 mr-2 text-md ">€<span className="pl-2">
          {prod.price}</span></p>
        </div>
</div>
       
      </CardHeader>
      <CardContent>
      <div className=" w-full mx-auto">
          <Image
            src={prod.image}
            alt={prod.name}
           width={225} height={225} className=" object-cover mx-auto"
          />
        </div>
        <div className="justify-start flex flex-col pl-5 pt-3  ">
         

          <div className="text-md tracking-tight text-red-900 dark:text-white  text-start">
            {prod.description.substring(0,35)}
          </div>
          <div className="text-sm tracking-wide text-gray-600 font-bold italic  dark:text-white
           text-start  ">
            {category.name}
          </div>
        </div>
      
      <div className="justify-center h-18 w-full mx-auto text-center content-center pt-3">
        
          <Button className="bg-red-800 text-gray-200  merienda hover:bg-gray-200
           hover:text-red-800 hover:border-2 hover:border-red-800 font-bold ">
            <a href={`/products/${prod.id}`}>Ver</a></Button>
        
      </div>
      </CardContent>
    </Card>
  );
}
