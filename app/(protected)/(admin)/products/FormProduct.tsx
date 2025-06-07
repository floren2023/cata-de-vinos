"use client";
import React,{FC}  from 'react'
import { category, product } from "@/app/types/all-types";
import { useState } from "react";
import { useForm } from "react-hook-form";
import formSubmit from "./formSubmit";
import { GridProduct } from './gridProduct';


type FormData = {
  name: string;
  description: string;  
  imageUrl:string,
  imagen:File,
  instock: string;
  price: string;
  categoryId: string;
};

 type categories=category[]
  type products= {
    product:product,
    category:category
     }[]



export default function  FormProduct  ({products,categories}:{products:products, categories:categories})

 {
  
   const [pending, setPending] = useState<boolean>(false);
  const [file, setFile] = useState<File | undefined>(null);
  const[slug,setSlug]=useState<any>('')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const uploadImage=async(file:File):Promise<string>=>{
    const form1Data=new FormData()  
  form1Data.append("image",  file as Blob)
   const response=await fetch("/api/file",{
        method: "POST",
        body:form1Data
  }) 
  
  const blob=await response.json() 
  const url=blob.data    
  return url
  }


  const onSubmit = async(data: FormData) => {
    setFile(data.imagen[0])
    let res=''
    setPending(true)
   if(typeof file!=='undefined'){    
    res=await uploadImage(file)     
      setPending(false)
      setSlug(res)
       }

    const formData=new FormData()
    formData.append("name",data.name)
    formData.append("description",data.description)
    formData.append("imageUrl",res)
    formData.append("price",data.price.toString())
    formData.append("instock",data.instock.valueOf())
    formData.append("categoryId",data.categoryId)
    
     let message = await formSubmit(formData);
        alert(message.message);
       /* const crear=message.message
        toast({
         title: "Crea evento:",
         description: crear,
       }) */
    
        if (message.message === "Producto creado con exito!") {  
          const productNew={
            id: products.length + 1,
            name: data.name,
            description: data.description,
            image: data.imageUrl,
            price:parseFloat(data.price),
            instock: (data.instock==='true')?true:false,
            categoryId: parseInt(data.categoryId), //category.name no es compatible con category.id

          }  
          let cat=categories.find(item=>item.id===parseInt(data.categoryId) ) 
          const categoryNew={
            id:parseInt(data.categoryId),
            name:cat.name
          }
           const prod={
            product:productNew,
            category:categoryNew
           }
           
          products.push(prod)           
        }        
                 reset()
     };

  const handleOnChange = (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement & {
      files: FileList;
    };
    
    setFile(target.files[0])
    
  };

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
      <div className=' border-2 border-gray-200 mt-10 rounded-lg sombra4 p-4 ml-10 w-full h-[650px]'>
      <div className="text-xl  pb-3 text-center">Productos</div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 p-4 flex flex-col gap-3   "
      >
        <div>
          <label className="block font-semibold pb-1" htmlFor="name">
            Nombre producto:
          </label>
          <input
            id="name"
            {...register("name", { required: "Name is required" })}
            className="border p-2 rounded w-full"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block font-semibold pb-1" htmlFor="description">
            Descripción:
          </label>
          <input
            id="description"
            {...register("description", {
              required: "description is required",
            })}
            className="border p-2 rounded w-full"
          />
          {errors.description && (
            <p className="text-red-500">{errors.description.message}</p>
          )}
        </div>

        <div>
          <div>
          <label className="block font-semibold pb-1" htmlFor="imagen">
            Imagen producto:
          </label>
          <input
            id="imagen"
            type="file"
            {...register("imagen")}
            onChange={(e) => handleOnChange(e)}
            className="border p-2 rounded w-full"
          /></div>
        </div>
        <div className="flex flex-inline gap-5">
          <div>
          <label className="block font-semibold" htmlFor="price">
            Precio:
          </label>
          <input
            id="price"
            
            {...register("price", { required: "Price is required" })}
            className="border p-2 rounded w-full"
          />
          {errors.price && (
            <p className="text-red-500">{errors.price.message}</p>
          )}

          </div>
         
              
        
        <div className='flex flex-inline gap-2 items-center'>
        <input type="checkbox" id="instock" {...register("instock")}  className="w-4 h-4 text-red-600
         bg-gray-100 border-gray-300 rounded-sm focus:ring-red-500 dark:focus:ring-red-600
          dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>

        <label htmlFor="instock" className='font-semibold pl-2'>In Stock</label>
       </div></div>
       <div>
       <label htmlFor="categoryId" className='font-semibold pr-2'>Elige categoria:</label>

<select name="categoryId" id="categoryId" {...register("categoryId")} className='border-r border-gray-400 rounded-md'>
        
  {
    categories.map((category,id)=>{
      return (
      <option value={category.id} key={category.id}>{category.name}</option>
      )
    })
  }
  
  
</select> 
</div>
<div>
<button type="submit" className="relative h-12 overflow-hidden rounded bg-red-800
px-5 py-2.5 text-white transition-all duration-300 hover:bg-red-700
hover:ring-2 hover:ring-red-700 hover:ring-offset-2">
  <span className="relative">Crear producto</span></button>
        
        </div>
      </form>
    </div>
    <div className='mt-10 sm:col-span-1 md:colspan-1 lg:col-span-2 mx-auto mb-10'>
       <GridProduct products={products} />
    </div>
    </div>
  );
}


