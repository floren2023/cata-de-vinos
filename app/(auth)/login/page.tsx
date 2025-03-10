"use client"

import { Label, TextInput } from 'flowbite-react'
import { Card } from 'flowbite-react/components/Card'
import React, { useActionState} from 'react'
import { signin } from './actions'


export default function Login() {
  const [state, action, pending] = useActionState(signin, undefined)

 

  return (
   <div className=" mt-20 pt-10 pb-10 ">
      <Card className="w-1/4 mx-auto">
         
         <form className="mx-auto flex w-full flex-col gap-4" action={action}>
         <div className="  text-center
         text-xl  text-red-800 font medium pb-5">Entrar en la cuenta</div>
         <div>
           <div className="mb-2 block">
             <Label htmlFor="email" value="Correo" />
           </div>
           <TextInput id="email" type="email" placeholder="name@gmail.com" required shadow />
           {state?.errors?.email && <p>{state.errors.email}</p>}
         </div>
         <div>
           <div className="mb-2 block">
             <Label htmlFor="password2" value="Contraseña" />
           </div>
           <TextInput id="password2" type="password" required shadow />
           {state?.errors?.password && <p>{state.errors.password}</p>}
         </div>
        <div className="w-full">
        <button type="submit" className='bg-red-900 hover:bg-red-800 p-3 rounded-lg text-white font-medium'>Entrar</button>
      </div>
      </form>

      </Card>
</div>
   
  );
}

 
