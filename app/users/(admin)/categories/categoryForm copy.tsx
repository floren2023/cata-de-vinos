"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,  
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import formSubmit from "./formSubmit"

import TableCategories from "./TableCategories"
import { category } from "@/app/types/all-types"
import { useToast } from "@/hooks/use-toast"



const formSchema = z.object({
  name: z.string().min(2, {
    message: "Nombre de categoria tiena mas de 2 caracteres",
  }),
})

type categories=category[]
export default function CategoryForm({categories}:{categories:categories}) {
  // const { toast } = useToast()
 // 1. Define your form.
 const form = useForm<z.infer<typeof formSchema>>({
  resolver: zodResolver(formSchema),
  defaultValues: {
    name: "",
  },
})

// 2. Define a submit handler.
async function onSubmit(values: z.infer<typeof formSchema>) {

  
 const formData=new FormData()
 formData.append("name",values.name)
 let message=await formSubmit(formData)
  alert(message.message)
 /* const crear=message.message
 toast({
  title: "Crea categoria:",
  description: crear,
}) */
  if(message.message==="Category created"){
            categories.push({id:categories.length+1, name:values.name.toString()})
            form.resetField('name')
  }

}

  return (
    <div className= "grid grid-cols-3 mx-auto mt-20 pt-10 pl-10" >
      <div>
      <Card className="m-auto p-6  text-xl  mt-10 bg-red-100  ">
      < CardHeader>
      <CardTitle>
        Crea una categoria:
      </CardTitle>
      </CardHeader>
      <CardContent>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 text-xl flex flex-col gap-5">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel >Nombre categoria</FormLabel>
              <FormControl>
                <Input placeholder="ej:Vino" {...field} className="placeholder-red-500 "/>
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="bg-red-800 font-bold hover:bg-red-700 ">Crear</Button>
      </form>
    </Form>
    </CardContent>
    </Card> 
    </div>
    <div className="col-span-2">
       <TableCategories categories={categories} /> 
    </div>
    </div>
  )
}
