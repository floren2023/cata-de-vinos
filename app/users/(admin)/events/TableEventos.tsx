
"use client"
import React from 'react'  
import { event } from '@/app/types/all-types'
import { useState } from "react";
import { handleDeleteEvent } from './handle';
type events=event[]


export default  function TableEventos({events}:{events:events}) {
   
  const [currentPage, setCurrentPage] = useState(1);  
  const [postsPerPage,setPostsPerPage]=useState(8)
  const lastPageIndex=currentPage*postsPerPage
  const firstPostIndex=lastPageIndex-postsPerPage
  const totalPosts=events.length
  const currentPosts=events.slice(firstPostIndex,lastPageIndex)
  let pages=[]
    for(let i=1; i<=Math.ceil(totalPosts/postsPerPage);i++){
        pages.push(i)
    }

    return (
      
      <div className="m-auto  mt-10 w-full">
         <div className=" pl-10 ">
      <div className="relative overflow-x-auto shadow-md sm:rounded-mb  justify-start mb-4 p-3">
      <table
        className="w-full text-md text-left rtl:text-right text-gray-700 dark:text-gray-400"
        id="my-table"
      >
        <thead className="text-xs text-gray-900 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-4 py-3">
              Id Evento
            </th>

            <th scope="col" className="px-4 py-3">
              Nombre Evento
            </th>
            <th scope="col" className="px-4 py-3">
              Descripción Evento
            </th>
            <th scope="col" className="px-4 py-3">
              Imagen Evento
            </th>
            <th scope="col" className="px-4 py-3">
              Data Evento
            </th>
            <th scope="col" className="px-4 py-3">
              Data publicado
            </th>
            <th scope="col" className="px-4 py-3" colSpan={2}>
              Acción de completar
            </th>
          </tr>
        </thead>
        <tbody>
           {currentPosts.map((item) => 
                <tr
                  key={item.id}
                  className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b
               dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item.id}
                  </th>
                  <th
                    scope="row"
                    className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item.title}
                  </th>
                  <th
                    scope="row"
                    className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item.description}
                  </th>
                  <th
                    scope="row"
                    className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <img src={item.image} width={120} height={80}/>
                  </th>
                  <th
                    scope="row"
                    className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item.dateEv}
                  </th>
                  <th
                    scope="row"
                    className="px-4 py-4 font-medium text-gray-900 text-wrap w-[150px] dark:text-white"
                  >
                    {item.dateAt}
                  </th>
                  <td className="px-4 py-4">
                    <button
                      
                      className="font-medium text-green-600
                   dark:text-red-500 hover:underline"
                    >
                      Editar
                    </button>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={()=>handleDeleteEvent(item.id)}
                      className="font-medium text-red-600
                   dark:text-red-500 hover:underline"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
 )
}
        </tbody>
      </table>
      <nav
        className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4"
        
      >
        <div
          className="text-sm font-normal text-gray-500 
         dark:text-gray-400 mb-4 md:mb-0  w-full md:inline md:w-auto"
        >
        
          <span className="font-semibold text-red-900 dark:text-white pr-2">
            1 - {postsPerPage}
          </span>
          <span className='pr-2'>of</span>
          
          <span className="font-semibold text-red-900 dark:text-white">
           {events.length} 
          </span>
        </div>
        
        <div className='flex flex-inline gap-3 justify-start items-start text-start'>
        <button  
                onClick={()=>setCurrentPage(currentPage>1?currentPage-1:currentPage)}
                className="border-2 border-gray-400 text-sm px-2 py-1 bg-gray-100 
                shadow-md rounded-md hover:text-red-800 hover:border-red-800 active:border-red-800 hover:bg-red-200 active:bg-red-200 active:text-red-800">
                    Prev
                </button>
        {

            pages.map((page,index)=>{
               return(
                <button key={index} 
                onClick={()=>setCurrentPage(page)}
                className="border-2 border-gray-400 text-sm px-2 
                py-1 bg-gray-100 shadow-md rounded-md hover:text-red-800
                 hover:border-red-800 active:border-red-800 hover:bg-red-200 active:bg-red-200 active:text-red-800">
                    {page}
                </button>

               )
            })
        }
        <button  
                onClick={()=>setCurrentPage(currentPage==pages.length?currentPage:currentPage+1)}
                className="border-2 border-gray-400 text-sm px-2 py-1 bg-gray-100 shadow-md rounded-md hover:text-red-800 hover:border-red-800 active:border-red-800 hover:bg-red-200 active:bg-red-200 active:text-red-800">
                    Next
                </button>
            
        </div>
      </nav>
    </div>
      </div>

        
      </div>
    )
}


