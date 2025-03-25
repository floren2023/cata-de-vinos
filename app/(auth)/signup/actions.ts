"use server"
import { SignupFormSchema } from "@/app/_lib/definitions"
import { db } from "../../db/drizzle"
import { userTable,rolesEnum } from "../../db/schema"
import { eq } from "drizzle-orm"
import bcrypt from 'bcryptjs'
import { createSession } from "@/app/_lib/session"
import { redirect } from "next/navigation"

type User={    
    name:string,
    email:string,
    password:string,
     createdAt:Date,
    role:typeof rolesEnum 
}

export async function signup(state,formData){
    //validate data
    const validationResult=SignupFormSchema.safeParse({
        name:formData.get('name'),
        email:formData.get('email'),
        password:formData.get('password')
    })

    if(!validationResult.success){
        return {
            errors:validationResult.error.flatten().fieldErrors
        }
    }
     //create user
    else{
    const {name,email,password}=validationResult.data
    
const hashedPassword = await bcrypt.hashSync(password, 10);
    let newUser:User={
        name:name,
        email:email,
        password:hashedPassword,
          createdAt:new Date(),
        role:rolesEnum["guest"] 
 
    }

    
    
 const data=await db.insert(userTable).values(newUser)
    .returning({ id: userTable.id })
    const user = data[0]
    //create session
    if(user.id){
    await createSession(user.id)
    redirect('/users/client')
    }
    else {
      return {
        message: 'An error occurred while creating your account.',
      }   
    }
}
     
}


export async function logout() {
    
    redirect('/login')
  }