'use server'

import { addEvent, deleteEvent } from "@/app/actions/events-actions"

export  async function handleAddEvent(){
  
}
export  async function handleDeleteEvent(id:number){
    
     await deleteEvent(id)
 }

