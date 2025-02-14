"use client"
import React from 'react'  
import { product } from '@/app/types/all-types'


import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { handleDeleteProduct } from './handle';
type products=product[]

export function GridProduct({products}:{products:products}){

    return(
        <div className="  grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-3">
            {products.map((item,id)=>{
                return(
                  <Card className="w-[320px] text-md  justify-center sombra4 bg-white
                   text-center content-center items-center" key={item.id}>
                  <CardHeader>
                    <CardTitle className='text-center'>{item.name}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent >
                    <div className="flex flex-col justify-center">
                    <div className="object-fit justify-center mx-auto">
                    <Image src= {item.image} alt={item.name} width={100} height={70}/>
                    </div>
                    <div className='flex flex-inline justify-between pl-2 pr-2'>
                      <div className='flex flex-inline gap-2'>Precio:<span className="text-red-800
                      ">EUR {item.price}</span></div>
                      <div className='pt-4'>
                    <div >In stock: {item.instock===true?"Si":"No"}</div>
                    <div>Categoria: {item.categoryId}</div>
                    </div>
                    </div>
                    
                    </div>
                    <div className="flex flex-inline gap-4 justify-center pt-4">
                          
                                            <button
                                              
                                              className="font-medium text-green-600 p-1 rounded-md
                                           dark:text-red-500 hover:text-red-800 hover:border-red-800 border-2 border-green-500"
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