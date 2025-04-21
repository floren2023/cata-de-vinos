import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

function Testimonio() {
    

    return (
    
        <div className=" flex flex-col  hover:bg-gray-100 mt-5
     dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 transition hover:scale-110 pl-5 
     pr-5 rounded-md hover:border-md hover:border-gray-400">
     
        <div className="  leading-normal text-center text-md font2 justify-between">
          
            <h4 className="text-yellow-400 text-xl pt-3">*****</h4>
            <p className="mb-2 font-normal text-gray-700 dark:text-gray-400 text-md font2">Una experiencia inolvidable.
                Aprendí tanto sobre vinos y disfruté cada segundo.</p>
                 <p className="text-red-700"> ¡Altamente recomendable!</p>
                
        </div>
        <div className="  flex flex-inline pt-2 pb-2">
          <div className=" items-center pl-4 pr-4 ">
          <Link href="#" >
              <Image className="   rounded-full  " width={100} height={100}
               src="/images/avatar.jpg" alt=""/>
          </Link></div>
          <div className=" pt-5 text-md font-medium tracking-tight text-red-800
           dark:text-white merienda-h3 "> 
            María López</div>
        </div> </div>
    
    )
}

export default Testimonio
