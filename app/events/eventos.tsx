"use client"
import React, { useState } from 'react'
import {event} from '../types/all-types'
import Evento from '../components/Evento'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';


function Eventos({events}: {events:event[]}) {
    const [currentPage, setCurrentPage] = useState(1);  
          const [postsPerPage]=useState(4)
          const lastPageIndex=currentPage*postsPerPage
          const firstPostIndex=lastPageIndex-postsPerPage
          const totalPosts=events.length
          const currentPosts=events.slice(firstPostIndex,lastPageIndex)
          let pages=[]
            for(let i=1; i<=Math.ceil(totalPosts/postsPerPage);i++){
                pages.push(i)
            }

    return (
        <div>
         <div className="flex flex-inline gap-3 text-end justify-end pr-10 pb-2 pt-2 mr-10">
              <div className="text-gray-600 italic  text-sm tex-medium"><span className="text-red-800 font-medium">{totalPosts}</span> productos registrados</div>
                      <button className="border-2 border-gray-200 text-sm px-2
                  py-1 bg-gray-100 shadow-md rounded-md hover:text-red-800
                   hover:border-red-800 active:border-red-800 hover:bg-red-200 active:bg-red-200 active:text-red-800"  onClick={()=>setCurrentPage(currentPage>1?currentPage-1:currentPage)}>
                      < GrFormPrevious/>
                      </button>
              
                      {
              
              pages.map((page,index)=>{
                 return(
                  <button key={index} 
                  onClick={()=>setCurrentPage(page)}
                  className="border-2 border-gray-200 text-sm px-2
                  py-1 bg-gray-100 shadow-md rounded-md hover:text-red-800
                   hover:border-red-800 active:border-red-800 hover:bg-red-200 active:bg-red-200 active:text-red-800">
                      {page}
                  </button>
              
                 )
              })
              }
              
                      <button className="border-2 border-gray-200 text-sm px-2
                  py-1 bg-gray-100 shadow-md rounded-md hover:text-red-800
                   hover:border-red-800 active:border-red-800 hover:bg-red-200 active:bg-red-200 active:text-red-800"  onClick={()=>setCurrentPage(currentPage==pages.length?currentPage:currentPage+1)}>
                      <GrFormNext/>
                      </button>
                    </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 
        pl-10 pr-10 pb-10 pt-4 gap-4  ">
  
  {currentPosts.map((item,id)=>{
    return(
        <div key={item.id}>  
      <Evento image={item.image} title={item.title}
      description={item.description} dateEv={item.dateEv} hora={item.hora} min={item.min}/></div>
    )}
  )}
   
</div>
</div>
    )
}

export default Eventos
