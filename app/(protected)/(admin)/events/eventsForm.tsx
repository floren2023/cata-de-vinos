"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFormState } from "react-hook-form";
import { z } from "zod";
import { event } from "@/app/types/all-types";
import formSubmit from "./formSubmit";

import { useToast } from "@/hooks/use-toast";
import { GridEvent } from "./gridEvent";
import { useState } from "react";



type FormData = {
  title: string;
  description: string;  
  imageUrl:string,
  image:File,
  dateEv: string;
  dateAt:string
  hora:string,
  min:string
};



/* const formSchema = z.object({
  title: z.string().min(10, {
    message: "Nombre de evento tiene mas de 10 caracteres",
  }).nonempty({message:"Titulo requerido"}),
  description: z.string().min(25, {
    message: "Nombre de evento tiena mas de 25 caracteres",
  }),
  image: z.string().nonempty({ message: "Imagen requerida" }),
  dateEv: z.string(),
  dateAt: z.string(),
}); */

type events = event[];

export default function EventsForm({ events }: { events: events }) {
  let dataAt=new Date()

  const data= dataAt.toLocaleDateString("es-ES", {
    weekday: "short", // narrow, short
    year: "numeric", // 2-digit
    month: "short", // numeric, 2-digit, narrow, long
    day: "numeric" // 2-digit
});
  
const date = new Date();
const futureDate = date.getDate() + 3;
date.setDate(futureDate);
const defaultValue = date.toLocaleDateString('es-ES');



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
     const response=await fetch("/api/events/",{
          method: "POST",
          body:form1Data
    }) 
    
    const blob=await response.json() 
    const url=blob.data    
    return url
    }
  /* const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      image: "",
      dateEv: "",
      dateAt: "",
    },
  });
 */
  
    const onSubmit = async(values: FormData) => {       
     
      setPending(true)
      let res=''
     if(typeof file!=='undefined'){    
       res=await uploadImage(file)     
        setPending(false)
        setSlug(res)
        
         }
    // const { toast } = useToast()
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("description", values.description);
    formData.append("imageUrl", res);
    formData.append("dateEv", values.dateEv);
    formData.append("dateAt", data);
    formData.append("hora", values.hora);
    formData.append("min", values.min);
    
    let message = await formSubmit(formData);
    alert(message.message);
    /*  const crear=message.message
    toast({
     title: "Crea evento:",
     description: crear,
   }) */
    if (message.message === "Evento creado con exito!") {
      events.push({
        id: events.length + 1,
        title: values.title.toString(),
        description: values.description.toString(),
        image: res,
        dateEv: values.dateEv.toString(),
        dateAt: data,
        hora:values.hora.toString(),
        min:values.min.toString()
      });
      reset()
     
    }
     
  }

  const handleOnChange = (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement & {
      files: FileList;
    };    
    setFile(target.files[0])
    
  };
  

  return (
    <div className="grid grid-cols-3">
    <div className=" border-2 border-gray-200 mt-10 rounded-lg sombra3 p-4 ml-5 w-full h-[600px]">
      <div className="text-xl  pb-3 text-center">Crea Evento:</div>
      <div className="mx-auto p-5  text-md   ">
        <form
          onSubmit={handleSubmit(onSubmit)} method="post"
          className="space-y-3 text-md flex flex-col gap-4"
        >
  
          <div>
            <label htmlFor="title" className="block font-medium pb-1">Titulo evento:</label>
            <input id="title" placeholder="ej:Cata de verano"
              {...register("title", { required: "Titulo requerido" })}
              className="border p-2 rounded w-full"
            />
             {errors.title && <p className="text-red-500">{errors.title.message}</p>}
          </div>
          <div>
            <label htmlFor="description" className="block font-medium pb-1"> Description Evento</label>

            <textarea cols={50} rows={3}
              {...register("description", { required: "Description requerida" })}
              className="border p-2 rounded w-full"
              id="description" required
            />
             {errors.description && <p className="text-red-500">{errors.description.message}</p>}
          </div>
          <div>
            <label htmlFor="image" className="block font-medium pb-1"> Imagen Evento</label>

            <input type="file"
              {...register("image")}
              onChange={(e) => handleOnChange(e)}
              className="border p-2 rounded w-full"
              id="image"
            />
          </div>
          <div className="flex flex-inline gap-4">
          <div>
            <label htmlFor="dateEv" className="block font-medium pb-1"> Data Evento</label>
            
          
            <input type="date" {...register("dateEv", { required: "Data evento requerida" })} id="dateEv" 
            defaultValue={defaultValue}
            required className="border p-2 rounded w-full"/> 
            {errors.dateEv && <p className="text-red-500">{errors.dateEv.message}</p>} 
          </div>
          <div>
           
            <div className="flex flex-inline">
            <div className="flex flex-col">
                 <label  htmlFor="hora" className="block font-medium pb-1"> Hora</label>
                 <input  type="number" id="hora"  {...register("hora")} className="w-12 h-8 px-1 py-2 apearence-none border-2 border-gray-400 rounded-sm" defaultValue="1" min="0" max="24" step="1"/>
              </div>
              <span>:</span>
              <div className="flex flex-col">
                 <label  htmlFor="min" className="block font-medium pb-1" > Min</label>
                  <input  type="number" id="min"  {...register("min")} className="w-12 h-8 px-1 py-2 apearence-none border-2 border-gray-400 rounded-sm" defaultValue="1" min="0" max="59" step="1"/>
                  </div>
            </div>
          </div>
        
          </div>
                    <button
            type="submit"
            className="bg-red-800 text-white font-bold p-2 rounded-md"
          >
            Crear
          </button>
        </form>
      </div>
      </div>
      <div className="col-span-2 pl-10 mt-10">
        <GridEvent events={events} />
      </div>
    </div>
  );
}
