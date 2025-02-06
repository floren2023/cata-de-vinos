'use server'

import { addProduct, deleteProduct } from "@/app/actions/products-action"

export  async function handleAddProduct(product){
  
}
export  async function handleDeleteProduct(id:number){
    
     await deleteProduct(id)
 }

