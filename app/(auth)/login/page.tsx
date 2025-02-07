import React from 'react'
import {  Card, Label, TextInput } from "flowbite-react";


export default async function Login() {
  return (
    <div className='mt-20 pt-10 pb-10'>
    <Card className="max-w-sm mx-auto">
      <h1 className='text-xl text-red-800'>Entrar en la cuenta</h1>
      <form className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Correo" />
          </div>
          <TextInput id="email1" type="email" placeholder="name@gmail.com" required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Contraseña" />
          </div>
          <TextInput id="password1" type="password" required />
        </div>
        
        <button type="submit" className='bg-red-900 hover:bg-red-800 p-3 rounded-lg text-white font-medium'>Entrar</button>
      </form>
    </Card></div>
  );
}

 
