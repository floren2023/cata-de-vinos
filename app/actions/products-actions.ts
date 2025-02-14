"use server"

import { db } from "../db/drizzle"
import { categoryTable, productTable} from "../db/schema"
import { eq } from "drizzle-orm"
import { schema } from "../db/schema"
 
 type Product={    
    name:string,
    description:string,
    image:string,
    price:number,
    instock:boolean,
    categoryId:number
}
export const getProducts=async()=>{
    const data=await db.select().from(productTable)
    return data
}


export const getProduct=async(id:number)=>{
  //  const data=await db.select().from(productTable).where(eq(productTable.id,id))
   
  const data=await db.select().from(productTable)
  .innerJoin(categoryTable,eq(categoryTable.id,productTable.categoryId)).where(eq(productTable.id,id))
      
    return data
    }
    
 

    

export const addProduct=async(product:Product)=>{
   
    let newProduct:Product={
        name:product.name,
        description:product.description,
        image:product.image,
        price:product.price,
        instock:product.instock,
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