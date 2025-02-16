"use client"
import React from 'react'  
import { event } from '@/app/types/all-types'
import { useState } from "react";
import { handleDeleteEvent } from './handle';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
type events=event[]
export function GridEvent({events}:{events:events}){

    return(
        <div className=" p-3 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2">
            {events.map((item,id)=>{
                return(
                  <Card className="w-[350px] text-md bg-white" key={item.id}>
                  <CardHeader>
                    <CardTitle className='text-xl'>{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col gap-2 mt-2 text-md">
                    <div className="object-contain rounded-md">
                    <img src= {item.image} alt={item.title} className="rounded-md"/>
                    </div>
                    <div>Data evento: {item.dateEv}</div>
                    <div>Data creado: {item.dateAt}</div>
                    </div>
                    <div className="flex flex-inline gap-4 justify-end mt-4">
                          
                    <button className="cursor-pointer rounded-md bg-green-700 px-3 py-1
                     text-sm text-white shadow-lg shadow-neutral-500/20 transition active:scale-[.95]">
                                              Editar
                                            </button>
                                          
                                        
                                            <button className="cursor-pointer rounded-md bg-red-700 px-3 py-1
                     text-sm text-white shadow-lg shadow-neutral-500/20 transition active:scale-[.95]"
                                              onClick={()=>handleDeleteEvent(item.id)}
                                              
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