"use client"
import React from 'react'  
import { product } from '@/app/types/all-types'
import { useState } from "react";
import { handleDeleteProduct } from './handle';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
type products=product[]
export function GridProduct({products}:{products:products}){

    return(
        <div className="w-full p-3 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2">
            {products.map((item,id)=>{
                return(
                  <Card className="w-[300px] text-md mx-auto justify-center shadow-sm shadow-red-700 text-centre content-center items-center" key={item.id}>
                  <CardHeader>
                    <CardTitle className='text-center'>{item.name}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent >
                    <div className="flex flex-col justify-center">
                    <div className="object-fit justify-center mx-auto">
                    <Image src= {item.image} alt={item.name} width={100} height={70}/>
                    </div>
                    <div>In stock: {item.instock===true?"Si":"No"}</div>
                    <div>Categoria: {item.categoryId}</div>
                    </div>
                    <div className="flex flex-inline gap-4 justify-end">
                          
                                            <button
                                              
                                              className="font-medium text-green-600
                                           dark:text-red-500 hover:underline"
                                            >
                                              Editar
                                            </button>
                                          
                                        
                                            <button
                                              onClick={()=>handleDeleteProduct(item.id)}
                                              className="font-medium text-red-600
                                           dark:text-red-500 hover:underline"
                                            >
                                              Eliminar
                                            </button>
                                          
                    </div>
                      </CardContent>
                      </Card>
              )  }


            )}
       
            </div>
    )

}