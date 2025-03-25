"use client"

import { Card } from "flowbite-react/components/Card";
import { Label } from "flowbite-react/components/Label";

import { useActionState } from 'react'
import { signup } from "./actions";
 

export default function SignUp() {
  const [state, action, pending] = useActionState(signup, undefined)
  return (
    
    <div className=" mt-20 pt-10 pb-10 ">
   <Card className="w-1/4 mx-auto">
      
      <form className="mx-auto flex w-full flex-col gap-4" action={action}>
      <div className="  text-center
      text-xl  text-red-800 font medium pb-5">Registrarse</div>
      <div>
      <div className="mb-2 block">
          <Label htmlFor="name" value="Name" />
        </div>
        <input id="name" type="text" placeholder="John Doe" name="name" />
        {state?.errors?.name && <p>{state.errors.name}</p>}
 
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email" value="Correo" />
        </div>
        <input id="email" type="email" placeholder="name@gmail.com" name="email" />
        {state?.errors?.email && <p>{state.errors.email}</p>}
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password2" value="Contraseña" />
        </div>
        <input id="password2" type="password" name="password"/>
      </div>
      {state?.errors?.password && (
        <div>
          <p>Password must:</p>
          <ul>
            {state.errors.password.map((error) => (
              <li key={error}>- {error}</li>
            ))}
          </ul>
        </div>
      )}
      <div>
       {/*  <div className="mb-2 block">
          <Label htmlFor="repeat-password" value="Repite contraseña" />
        </div>
        <TextInput id="repeat-password" type="password" required shadow /> */}
      </div>
      
      <button disabled={pending} className='bg-red-900 hover:bg-red-800 p-3 rounded-lg text-white font-medium'>Registrar</button>
    </form>
    </Card>
    </div>
  );
}
