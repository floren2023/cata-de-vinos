"use server"

import { addEvent } from "@/app/actions/events-actions"

export type FormState={
    message:string
}

export default async function formSubmit(data:FormData):Promise<FormState>{   

     const title=data.get("title")
     const description=data.get("description")
     const image=data.get("image")
     const dateEv=data.get("dateEv")
const dateAt=(new Date()).toString()
    if(!title||!description||!image){
        
        return{
            message:"Formulario invalido"
        }
        
    }
    else{
        const newEvent=      
        {
            title:title.toString(),
            description:description.toString(),
            image:image.toString(),
            dateEv:dateEv.toString(),
            dateAt:dateAt
        }
         
       addEvent(newEvent)

        return{
            message:"Evento creado con exito!"
        }}


}