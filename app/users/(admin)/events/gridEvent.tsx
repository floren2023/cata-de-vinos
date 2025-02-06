"use client"
import React from 'react'  
import { event } from '@/app/types/all-types'
import { useState } from "react";
import { handleDeleteEvent } from './handle';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
type events=event[]
export function GridEvent({events}:{events:events}){

    return(
        <div className="w-full p-3 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2">
            {events.map((item,id)=>{
                return(
                  <Card className="w-[350px] text-md " key={item.id}>
                  <CardHeader>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col">
                    <div className="object-contain">
                    <img src= {item.image} alt={item.title}/>
                    </div>
                    <div>Data evento: {item.dateEv}</div>
                    <div>Data creado: {item.dateAt}</div>
                    </div>
                    <div className="flex flex-inline gap-4 justify-end">
                          
                                            <button
                                              
                                              className="font-medium text-green-600
                                           dark:text-red-500 hover:underline"
                                            >
                                              Editar
                                            </button>
                                          
                                        
                                            <button
                                              onClick={()=>handleDeleteEvent(item.id)}
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