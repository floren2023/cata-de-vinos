import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from '@/components/ui/button';


function Social() {
    

    return (
        <div className='flex gap-x-2 justify-center w-full py-3'>
         <Button size="lg" variant="outline" className='w-full border-gray-200 hover:bg-gray-100' onClick={()=>{}}> <FcGoogle className='h-5 w-5' /></Button> 
         
          <Button  size="lg" variant="outline" className='w-full border-gray-200  hover:bg-gray-100' onClick={()=>{}}><FaGithub className='h-5 w-5'/></Button>
        </div>
        
    )
}

export default Social
