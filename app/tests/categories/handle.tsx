'use server'

import { addCategory, deleteCategory } from "@/app/actions/category-actions"

export  async function handleAddCategory(){
   const name="Vino rosado"
    await addCategory(name)
}
export  async function handleDeleteCategory(id:number){
    
     await deleteCategory(id)
 }

