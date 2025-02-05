"use server"

import { db } from "../db/drizzle"
import { productTable } from "../db/schema"
import { eq } from "drizzle-orm"
 type Product={    
    name:string,
    description:string,
    image:string,
    price:number,
    inStock:boolean,
    categoryId:number
}

export const getProducts=async()=>{
    const data=await db.select().from(productTable)
    return data
}

export const addProduct=async(product:Product)=>{
    
    type NewProduct = typeof productTable.$inferInsert;
    const newProduct:NewProduct={
     name:product.name,
     description:product.description,
     image:product.image,
     price:product.price,
     inStock:product.inStock,
     categoryId:product.categoryId
    }
 await db
    .insert(productTable).values(newProduct)
    .returning(); 
     
}

export const deleteProduct=async(id:number)=>{
    await db
       .delete(productTable).where(eq(productTable.id,id))
       
       
   }