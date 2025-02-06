"use server"

import { addProduct } from "@/app/actions/products-action"



export type FormState={
    message:string
}
type Product={    
    name:string,
    description:string,
    image:string,
    price:number,
    instock:boolean,
    categoryId:number
}
export default async function formSubmit(data:FormData):Promise<FormState>{  
    
    const formData=Object.fromEntries(data)
    const name=formData.name.toString()
    const description=formData.description.toString()
    const image=formData.image.toString()
    const price=parseFloat(formData.price.toString())
    const instock=(formData.instock.toString()==="true")? true:false
    const categoryId=parseInt(formData.categoryId.toString())

    
    
    if(!name||!description||!image||!price){
        
        return{
            message:"Formulario invalido!"
        }
        
    }
    else{
       const product:Product={
         name:name,
         description:description,
         image:image,
         price:price,
         instock:instock,
         categoryId:categoryId

       }
        
         
     addProduct(product)

        return{
            message:"Producto creado con exito! "
        }}


}