"use client";
import { category } from "@/app/types/all-types";
import { url } from "inspector";
import { useState } from "react";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  description: string;
  imagen: File;
  imageUrl:string,
  instock: string;
  price: string;
  categoryId: string;
};

type categories = category[];
export default function FormProduct({categories}:{categories:categories}) {
  
  const [pending, setPending] = useState<boolean>(false);
  const [file, setFile] = useState<File | undefined>(null);
  const[slug,setSlug]=useState<any>('')

  const {
    register,
    handleSubmit,
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
    console.log(res)
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
    console.log(formData)

    
  };

  const handleOnChange = (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement & {
      files: FileList;
    };
    
    setFile(target.files[0])
    
  };

  return (
    <div className=" pt-4 border-2 border-gray-200 mt-10 rounded-lg sombra4 p-4">
      <div className="text-xl  pb-5 text-center">Products</div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 p-4  mx-auto   "
      >
        <div>
          <label className="block font-semibold" htmlFor="name">
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
          <label className="block font-semibold" htmlFor="description">
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
          <label className="block font-semibold" htmlFor="imagen">
            Imagen producto:
          </label>
          <input
            id="imagen"
            type="file"
            {...register("imagen")}
            onChange={(e) => handleOnChange(e)}
            className="border p-2 rounded w-full"
          />
        </div>
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
        <div>
        <input type="checkbox" id="instock" {...register("instock")}/>
        <label htmlFor="instock">In Stock</label>
       </div>
       <div>
       <label htmlFor="categoryId">Elige categoria:</label>

<select name="categoryId" id="categoryId" {...register("categoryId")}>
        
  {
    categories.map((category,id)=>{
      return (
      <option value={category.name} key={category.id}>{category.name}</option>
      )
    })
  }
  
  
</select> 
</div>
<div>
        <button type="submit" className="bg-red-800 text-white p-2 rounded">
          Submit
        </button>
        </div>
      </form>
    </div>
  );
}


