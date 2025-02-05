"use server"

import { addCategory } from "@/app/actions/category-actions"

export type FormState={
    message:string
}
export default async function formSubmit(data:FormData):Promise<FormState>{
    

     const formData=Object.fromEntries(data)
     
    if(!formData.name){
        
        return{
            message:"Invalid form data"
        }
        
    }
    else{
        
        
       addCategory(formData.name.toString())

        return{
            message:"Category created"
        }}


}