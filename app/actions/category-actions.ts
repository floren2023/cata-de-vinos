"use server"
import { revalidatePath } from "next/cache"
import { db } from "../db/drizzle"
import { categoryTable } from "../db/schema"
import { eq } from "drizzle-orm"

export const getCategories=async()=>{
    const data=await db.select().from(categoryTable)
    return data
}

export const addCategory=async(name:string)=>{
 await db
    .insert(categoryTable).values({name:name })
    .returning(); 
    revalidatePath('/')
}

export const deleteCategory=async(id:number)=>{
    await db
       .delete(categoryTable).where(eq(categoryTable.id,id))
       
       revalidatePath('/')
   }