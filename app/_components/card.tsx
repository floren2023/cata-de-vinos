import Link from 'next/link'
import React from 'react'

interface Props {image:string,titulo:string,subtitulo:string}

function Card(props: Props) {
    const {image,titulo,subtitulo} = props

    return (
        <div className="flex flex-col   p-4 bg-gray-100 rounded-md border-2 border-gray-200  ">
    <div className="  mx-auto ">
    <Link href="#">
        <img  src={image} alt="imagen evento" className="w-full object-cover  rounded-t-md"/>
    </Link>
    </div>
    <div className=" text-center justify-center rounded-md">
        <div className="bg-red-100 text-red-800 pt-3 pb-3 rounded-b-md">
        
            <div className=" text-xl font-semibold tracking-tight text-gray-900 dark:text-white ">{titulo}</div>
        
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-md">{subtitulo}</p>
        <Link href="#" className="inline-flex items-center p-2 text-md font-medium text-center text-white bg-red-700
         rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
            Leer mas
            
        </Link>
    </div>
</div>
</div>
    )
}

export default Card
