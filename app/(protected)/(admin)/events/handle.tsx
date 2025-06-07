'use server'

import {  deleteEvent } from "@/app/actions/events-actions"
import { deleteImage } from "@/app/api/deleteImage"

export  async function handleAddEvent(){
  
}
export  async function handleDeleteEvent(id:number, image:string){
    
     await deleteEvent(id)
     const res=await deleteImage(image)
     return JSON.stringify(res)
 }

