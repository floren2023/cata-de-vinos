"use client"

import { Label, TextInput } from 'flowbite-react'
import { Card } from 'flowbite-react/components/Card'
import React, { useState} from 'react'

export default function Login() {
  const [isClient,setIsClient]=useState<string>('false')
  const [isAdmin,setIsAdmin]=useState<string>('false')

 function handleOnSubmit(e:any){
  console.log(e.target.value)
   //si es cliente lo va a poner en localStorage, sis es admin igual para isAdmin, despues de la autenticacion
   
   localStorage.setItem("isClient",'true')
   localStorage.setItem("isAdmin",'false')
   
 }

  return (
   <div className=" mt-20 pt-10 pb-10 ">
      <Card className="w-1/4 mx-auto">
         
         <form className="mx-auto flex w-full flex-col gap-4">
         <div className="  text-center
         text-xl  text-red-800 font medium pb-5">Entrar en la cuenta</div>
         <div>
           <div className="mb-2 block">
             <Label htmlFor="email2" value="Correo" />
           </div>
           <TextInput id="email2" type="email" placeholder="name@gmail.com" required shadow />
         </div>
         <div>
           <div className="mb-2 block">
             <Label htmlFor="password2" value="Contraseña" />
           </div>
           <TextInput id="password2" type="password" required shadow />
         </div>
        <div className="w-full">
        <button type="submit" className='bg-red-900 hover:bg-red-800 p-3 rounded-lg text-white font-medium'>Entrar</button>
      </div>
      </form>

      </Card>
</div>
   
  );
}

 
