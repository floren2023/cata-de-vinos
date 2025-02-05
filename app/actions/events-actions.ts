"use server"

import { db } from "../db/drizzle"
import { eventTable } from "../db/schema"
import { eq } from "drizzle-orm"
 type Event={    
    title:string,
    description:string,
    image:string,
    dateEv:string,
    dateAt:string
}

export const getEvents=async()=>{
    const data=await db.select().from(eventTable)
    return data
}

export const addEvent=async(event:Event)=>{
    
    type NewEvent = typeof eventTable.$inferInsert;
    const newEvent:NewEvent={
     title:event.title,
    description:event.description,
     image:event.image,
     dateEv:event.dateEv,
     dateAt:event.dateAt
    }
 await db
    .insert(eventTable).values(newEvent)
    .returning(); 
     
}

export const deleteEvent=async(id:number)=>{
    await db
       .delete(eventTable).where(eq(eventTable.id,id))
       
       
   }