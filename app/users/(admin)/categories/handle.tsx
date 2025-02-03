'use server'

import { addCategory, deleteCategory } from "@/app/actions/category-actions"

export  async function handleAddCategory(formData:FormData){
   const name=formData.get("name")
    await addCategory(name)
}
export  async function handleDeleteCategory(id:number){
    
     await deleteCategory(id)
 }

