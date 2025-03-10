"use server"

import { addEvent } from "@/app/actions/events-actions"

export type FormState={
    message:string
}

export default async function formSubmit(data:FormData):Promise<FormState>{   
    
     const title=data.get("title")
     const description=data.get("description")
     const image=data.get("imageUrl")
     const dateEv=data.get("dateEv")
     const dateAt=data.get("dateAt")
     const hora=data.get("hora")
     const min=data.get("min")
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
            dateAt:dateAt.toString(),
            hora:hora.toString(),
            min:min.toString()
        }
         
      await addEvent(newEvent)

        return{
            message:"Evento creado con exito!"
        }}


}