"use client"

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
    <div className='mt-20 pt-10 pb-10 '>
 <Card className="w-1/4  mx-auto ">
      <h1 className='text-xl text-red-800 text-center'>Entrar en la cuenta</h1>

      <form className="w-full flex flex-col p-3" onSubmit={(e)=>handleOnSubmit(e)}>
        <div className='w-full'>
          <div className="mb-2 ">
            <label htmlFor="email1"  >Correo</label>
          </div>
          <input id="email1" type="email" placeholder="name@gmail.com" required  />
        </div>
        <div className='w-full mb-5'>
          <div className="mb-2 ">
            <label htmlFor="password1" >Contraseña</label>
          </div>
          <input id="password1" type="password" required />
        </div >
        <div className="w-full">
        <button type="submit" className='bg-red-900 hover:bg-red-800 p-3 rounded-lg text-white font-medium'>Entrar</button>
      </div>
      </form>

      </Card>
</div>
   
  );
}

 
