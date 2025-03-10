"use client";
import React,{useState} from "react";
import { event } from "@/app/types/all-types";
import { handleDeleteEvent } from "./handle";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { ifError } from "node:assert";
type events = event[];

export function GridEvent({ events }: { events: events }) {
  
  const [currentPage, setCurrentPage] = useState(1);  
      const [postsPerPage]=useState(2)
      const lastPageIndex=currentPage*postsPerPage
      const firstPostIndex=lastPageIndex-postsPerPage
      const totalPosts=events.length
      let currentPosts=events.slice(firstPostIndex,lastPageIndex)
      const[postedEvents,setPostedEvents]=useState(currentPosts)
      let pages=[]
        for(let i=1; i<=Math.ceil(totalPosts/postsPerPage);i++){
            pages.push(i)
        }

  function cambiar(dateEv: string) {
    let date = new Date(dateEv);        
    return date.toLocaleDateString("es-ES", {
      weekday: "short", // narrow, short
      year: "numeric", // 2-digit
      month: "short", // numeric, 2-digit, narrow, long
      day: "numeric", // 2-digit
    });
  }
  function handleDelete(id:number,image:string){
    let res=handleDeleteEvent(id,image)
    let posts=currentPosts.filter(post=>post.id!==id)
    setPostedEvents(posts)
   //mensaje de error aqui no se como recibirlo desde server side
  }

  return (
    <div className="pr-10">

      <div className="flex flex-inline gap-2 text-end justify-end pr-10 mr-10 pb-4">
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
    
    <div className=" p-3 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2">
      {postedEvents.map((item, id) => {
        return (
          <Card className="w-[350px] text-md bg-white" key={item.id}>
            <CardHeader>
              <CardTitle className="text-xl">{item.title}</CardTitle>
              <div className="flex flex-inline gap-3 font-bold">
                <div className="text-md text-red-600">
                  <span className="text-gray-500">Data:</span> {cambiar(item.dateEv)}
                </div>
                <div className="text-md text-red-600">
                <span className="text-gray-500">Hora:</span>
                  {item.hora}:{item.min}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-2 mt-2 text-md">
                <div className="object-contain rounded-md h-50">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={300}
                    height={200}
                    className="rounded-md h-[180px]"
                  />
                </div>
                <CardDescription className="pt-2">
                  {item.description}
                </CardDescription>

                <div className="italic text-sm text-green-500 font-normal">
                  Data creado: {item.dateAt}
                </div>
              </div>
              <div className="flex flex-inline gap-4 justify-end mt-4 pt-4">
                <button
                  className="cursor-pointer rounded-md bg-green-700 px-4 py-2
                     text-sm text-white shadow-lg shadow-neutral-500/20 transition active:scale-[.95]"
                >
                  Editar
                </button>

                <button
                  className="cursor-pointer rounded-md bg-red-700 px-4 py-2
                     text-sm text-white shadow-lg shadow-neutral-500/20 transition active:scale-[.95]"
                  onClick={() => 
                    handleDelete(item.id,item.image)
                  
                  }
                >
                  Eliminar
                </button>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
    </div>
  );
}
