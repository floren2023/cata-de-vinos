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
    <Card className="grid grid-cols-1 bg-white gap-2 mb-4 rounded-lg sombra4
     border-red-100 transition hover:scale-105 
     border-2  dark:bg-gray-800 dark:border-gray-700">
      <CardHeader className=" text-start pl-3 pt-3  justify-between">
        <div className="flex flex-inline justify-between">
        <div>
          <FaHeart className="w-6 h-6 pl-0 text-red-600" />
        </div>
        <div className="text-md font-semibold text-gray-900 dark:text-white
         text-end justify-end pr-2 ">
          <p className="text-red-800 mr-2 text-xl pt-4">€<span className="pl-2">
          {prod.price}</span></p>
        </div>
</div>
        <div className="mx-auto">
          <Image 
            src={prod.image}
            alt={prod.name}
           width={200} height={0} className="h-auto "
          />
        </div>
      </CardHeader>
      <CardContent>
       
        <div className="justify-center flex flex-col mx-auto  ">
          <div className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white text-center pb-2
            pl-0 ml-0">
            {prod.name}
          </div>

          <div className="text-md tracking-tight text-red-900 dark:text-white justify-center text-center
           pl-5 pr-5 text-wrap">
            {prod.description}
          </div>
          <div className="text-sm tracking-wide text-gray-600 font-bold italic pt-3 dark:text-white justify-center text-center
           pl-5 pr-5 ">
            {category.name}
          </div>
        </div>
      </CardContent>
      <CardFooter className="justify-center">
        
          <Button className="bg-red-800 text-gray-200  merienda hover:bg-gray-200
           hover:text-red-800 hover:border-2 hover:border-red-800 font-bold">
            <a href={`/products/${prod.id}`}>Ver</a></Button>
        
      </CardFooter>
    </Card>
  );
}
