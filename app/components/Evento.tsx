"use client"
import React from 'react'

interface Props {
    image:string,
    title:string, 
    description:string,
    dateEv:string
}

function Evento({image,title,description,dateEv}:Props) {
    

    return (
        <div className="block bg-white  rounded-md 
 dark:bg-gray-800 dark:border-gray-700 w-full  mx-auto shadow-sm shadow-gray-200 
 transition hover:scale-105  ">
     <div className="w-full rounded-t-md  justify-center items-start content-start mx-auto  ">
        
        <img className=" object-cover content-center justify-center rounded-t-md " src={image} alt="imagen evento" />
        <div className="br-red-100 p-3 justify-center bg-gradient-to-b from-red-200 to-gray-100 text-red-800 rounded-b-md  ">
        <p className="mb-2 text-2xl font-semibold tracking-tight text-red-800 dark:text-white  merienda-h3
        pt-4 justify-center text-center leading-10">{title}</p>
        
        <p className="mb-3 text-center font-normal text-gray-700 dark:text-gray-500 text-md italic pl-5 pr-5
        tracking-tighter  overflow-hidden subtitulo">{description}</p>
        <p className="mb-3 text-center italic font-bold text-red-700 dark:text-gray-500 text-xl tracking-tighter">
            {dateEv}</p>
            <div className="mx-auto items-center justify-center text-center">
                <button type="button" id="abre-modal-evento" name="abre-modal-evento" className="text-green-500 text-md
                 italic  p-3 hover:text-red-800">Ver mas</button>
            </div>
 
        <div className="justify-center text-center mx-auto mb-4">
            
            
            <button  className="w-1/2  mt-4 bg-red-800 text-gray-200 text-xl font-medium hover:text-red-800
             hover:bg-gray-200 hover:border-2 hover:border-red-800 p-2 rounded-md merienda-h3 italic ">Reservar</button></div>
        </div>
    </div> 
        
</div>
    )
}

export default Evento
