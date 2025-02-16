"use server"

import { db } from "../db/drizzle"
import { categoryTable, productTable} from "../db/schema"
import { eq,ilike, between } from "drizzle-orm"

 
const SORT_OPTIONS = [
  { name: "None", value: "none", min:0,max:0 },
  { name: "Price1", value: "0-9 EUR",min:0,max:9 },
  { name: "Price2", value: "9-19 EUR",min:9,max:19 },
  { name: "Price3", value: "19-49 EUR",min:19,max:49 },
  { name: "Price4", value: "49-99 EUR",min:49,max:99 },
  { name: "Price5", value: "99-200 EUR" ,min:99,max:200},
  { name: "Price6", value: ">200 EUR" ,min:200,max:1000},
];
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
    .innerJoin(categoryTable,eq(categoryTable.id,productTable.categoryId))
      
    return data
}


export const getProduct=async(id:number)=>{
  //  const data=await db.select().from(productTable).where(eq(productTable.id,id))
   
  const data=await db.select().from(productTable)
  .innerJoin(categoryTable,eq(categoryTable.id,productTable.categoryId)).where(eq(productTable.id,id))
      
    return data
    }
    
    export const getFilteredProducts=async({query}:{query?:string})=>{
        const data=await db.select().from(productTable)
        .innerJoin(categoryTable,eq(categoryTable.id,productTable.categoryId))
        .where(ilike(productTable.name,`%${query}%`))
      return data
     
    }

    export const getCategoryProducts=async({category}:{category?:string})=>{
        const data=await db.select().from(productTable)
        .innerJoin(categoryTable,eq(categoryTable.id,productTable.categoryId))
        .where(eq(categoryTable.name,category))
      return data
     
    }

    export const getPriceProducts=async({price}:{price?:string} )=>{
      const options=SORT_OPTIONS.filter(option=>option.value===price)
      const min=options[0].min
      const max=options[0].max
      const data=await db.select().from(productTable)
      .innerJoin(categoryTable,eq(categoryTable.id,productTable.categoryId))
      .where(between(productTable.price,min,max))
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

   