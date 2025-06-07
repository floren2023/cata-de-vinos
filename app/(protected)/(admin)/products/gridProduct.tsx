"use client";
import React, { useState } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { category, product } from "@/app/types/all-types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { handleDeleteProduct } from "./handle";

interface Props {
  products: {
    product: product;
    category: category;
  }[];
}

export function GridProduct(props: Props) {
  const { products } = props;

  const [currentPage, setCurrentPage] = useState(1);  
    const [postsPerPage]=useState(4)
    const lastPageIndex=currentPage*postsPerPage
    const firstPostIndex=lastPageIndex-postsPerPage
    const totalPosts=products.length
    const currentPosts=products.slice(firstPostIndex,lastPageIndex)
    let pages=[]
      for(let i=1; i<=Math.ceil(totalPosts/postsPerPage);i++){
          pages.push(i)
      }

  return (
    <div>
      <div className="flex flex-inline gap-3 text-end justify-end pr-10 pb-4">
<div className="text-gray-600 italic  text-sm tex-medium"><span className="text-red-800 font-medium">{totalPosts}</span> productos registrados</div>
        <button className="border-2 border-gray-200 text-sm px-3
    py-1 bg-gray-100 shadow-md rounded-md hover:text-red-800
     hover:border-red-800 active:border-red-800 hover:bg-red-200 active:bg-red-200 active:text-red-800"  onClick={()=>setCurrentPage(currentPage>1?currentPage-1:currentPage)}>
        < GrFormPrevious/>
        </button>
        {

pages.map((page,index)=>{
   return(
    <button key={index} 
    onClick={()=>setCurrentPage(page)}
    className="border-2 border-gray-200 text-sm px-3
    py-1 bg-gray-100 shadow-md rounded-md hover:text-red-800
     hover:border-red-800 active:border-red-800 hover:bg-red-200 active:bg-red-200 active:text-red-800">
        {page}
    </button>

   )
})
}
        <button className="border-2 border-gray-200 text-sm px-3
    py-1 bg-gray-100 shadow-md rounded-md hover:text-red-800
     hover:border-red-800 active:border-red-800 hover:bg-red-200 active:bg-red-200 active:text-red-800"  onClick={()=>setCurrentPage(currentPage==pages.length?currentPage:currentPage+1)}>
        <GrFormNext/>
        </button>
      </div>


      <div className="  grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-3">
        {currentPosts.map((item, index) => {
          return (
            <Card
              className="w-[320px] text-md  justify-center sombra4 bg-white
                   text-center content-center items-center"
              key={index}
            >
              <CardHeader>
                <CardTitle className="text-center text-xl">
                  {item.product.name}
                </CardTitle>
                <div className="text-green-700 text-md font-medium">
                  <span className="italic text-gray-500 text-sm  pr-2">  Categoria:
                  </span>
                  
                  {item.category.name}
                </div>
                <div className=" justify-center mx-auto ">
                  <Image
                    src={item.product.image}
                    alt={item.product.name}
                    width={100}
                    height={150}
                    className="overflow-hidden h-36 w-24 object-contain mx-auto"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col justify-between pl-2 pr-2">
                  <div className="flex flex-inline justify-around">
                    <div className="text-red-800">EUR {item.product.price}</div>
                    {/* modificar clasa para Si dinamico */}
                    <div>
                      In stock: {item.product.instock === true ? "Si" : "No"}
                    </div>
                  </div>
                  <div className="pt-4 h-10 pb-2">
                    <CardDescription>
                      {item.product.description}
                    </CardDescription>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-inline gap-5 justify-end  pr-10 pt-3  w-full">
                <button
                  className="group relative inline-flex h-10 items-center justify-center overflow-hidden 
              rounded-md border border-neutral-200 bg-gray-200 px-2 font-medium
               text-gray-800 transition-all duration-100 [box-shadow:3px_3px_rgb(82_82_82)]
                hover:translate-x-[2px] hover:translate-y-[2px] hover:[box-shadow:0px_0px_rgb(82_82_82)]"
                >
                  Editar
                </button>
                <button
                  className="group relative inline-flex h-10 items-center justify-center overflow-hidden 
              rounded-md border border-neutral-200 bg-red-800 px-2 font-medium
               text-white transition-all duration-100 [box-shadow:3px_3px_rgb(82_82_82)]
                hover:translate-x-[2px] hover:translate-y-[2px] hover:[box-shadow:0px_0px_rgb(82_82_82)]"
                  onClick={() => handleDeleteProduct(item.product.id)}
                >
                  Eliminar
                </button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
