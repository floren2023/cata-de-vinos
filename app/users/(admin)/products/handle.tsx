'use server'

import { addProduct, deleteProduct } from "@/app/actions/products-action"

export  async function handleAddEvent(){
  
}
export  async function handleDeleteEvent(id:number){
    
     await deleteProduct(id)
 }

