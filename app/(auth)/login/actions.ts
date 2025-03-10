"use server"
import {SigInFormSchema} from "../../_lib/definitions"
import { userTable,rolesEnum } from "../../db/schema"

import { createSession, deleteSession } from "@/app/_lib/session"
import { redirect } from "next/navigation"

type User={    
    name:string,
    email:string,
    password:string,
     createdAt:Date,
    role:typeof rolesEnum 
}

export async function signin(state,formData){
    //validate data
    const validationResult=SigInFormSchema.safeParse({
        
        email:formData.get('email'),
        password:formData.get('password')
    })

    if(!validationResult.success){
        return {
            errors:validationResult.error.flatten().fieldErrors
        }
    }
    
    else{
    const {email,password}=validationResult.data
     //verify session//verify email and password
     try{
        await signIn("credentials",{email,password,redirectTo:("/")})
     }
     catch(error){
        auth

     }
   
    }
}
     



export async function logout() {
    deleteSession()
    redirect('/login')
  }