"use server"
import { revalidatePath } from "next/cache"
import { db } from "../db/drizzle"
import { userTable,rolesEnum } from "../db/schema"
import { eq } from "drizzle-orm"
import bcrypt from 'bcryptjs'


type User={    
    name:string,
    email:string,
    password:string,
     createdAt:Date,
    role:typeof rolesEnum 
}
export const getUsers=async()=>{
    const data=await db.select().from(userTable)
    return data
}

export const getUserByEmail=async(email:string)=>{
  const data=await db.select().from(userTable).where(eq(userTable.email,email))
  return data
}

export const addUser=async({name,email,password}:{name:string,email:string,password:string})=>{
    const hashedPassword = await bcrypt.hashSync(password, 10);
    let newUser:User={
        name:name,
        email:email,
        password:hashedPassword,
          createdAt:new Date(),
        role:rolesEnum["guest"] 
 
    }
    
 const data=await db
    .insert(userTable).values(newUser)
    .returning({ id: userTable.id })
    const user = data[0]
 
    if (!user) {
      return {
        message: 'An error occurred while creating your account.',
      }

       // TODO:
  // 4. Create user session
  // 5. Redirect user
    // revalidatePath('/client')
    }
}

export const deleteUser=async(id:string)=>{
    await db
       .delete(userTable).where(eq(userTable.id,id))
       
       revalidatePath('/')
   }