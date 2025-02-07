"use server"
import { revalidatePath } from "next/cache"
import { db } from "../db/drizzle"
import { postTable } from "../db/schema"
import { eq } from "drizzle-orm"
import { post } from "../types/all-types"

export const getPosts=async()=>{
    const data=await db.select({
        id:postTable.id,
        title:postTable.title,
        description:postTable.description,
        image:postTable.image,
        authorId:postTable.authorId,
        datePubl:postTable.datePubl

    }).from(postTable)
    return data
}

export const getPost=async(id:number)=>{
    const data=await db.select().from(postTable).where(eq(postTable.id,id))
    
    return data
} 

export const addPost=async(post:post)=>{
 await db
    .insert(postTable).values(post)
    .returning(); 
    revalidatePath('/')
}

export const deleteCategory=async(id:number)=>{
    await db
       .delete(postTable).where(eq(postTable.id,id))
       
       revalidatePath('/')
   }