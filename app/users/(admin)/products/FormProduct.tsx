"use client";
import { category } from "@/app/types/all-types";
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
  const[slug,setSlug]=useState<string>('')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const uploadImage=(file:File)=>{
    let url=''
     return url
  }


  const onSubmit = (data: FormData) => {
    setFile(data.imagen[0]) 
    setPending(true)
   if(typeof file!=='undefined'){
     let url:string= uploadImage(file)
     setSlug(url)
   }

    const formData=new FormData()
    formData.append("name",data.name)
    formData.append("description",data.description)
    formData.append("imageUrl",slug)
    formData.append("price",data.price.toString())
    formData.append("instock",data.instock.valueOf())
    formData.append("categoryId",data.categoryId)
    console.log(formData)

    
  };

  const handleOnChange = (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement & {
      files: FileList;
    };
    console.log(target);
    setFile(target.files[0])
    
  };

  return (
    <div className=" pt-4 border-2 border-gray-200 mt-10 rounded-lg sombra4 p-4">
      <div className="text-xl  pb-5 text-center">Servicios</div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 p-4  mx-auto   "
      >
        <div>
          <label className="block font-semibold" htmlFor="name">
            Name:
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
            Description
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
            Image:
          </label>
          <input
            id="imagen"
            type="file"
            {...register("imagen")}
            onChange={(event) => handleOnChange}
            className="border p-2 rounded w-full"
          />
        </div>
        <div>
          <label className="block font-semibold" htmlFor="price">
            Price:
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
       <label htmlFor="categoryId">Choose a category:</label>

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


