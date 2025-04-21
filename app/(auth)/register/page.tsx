"use client"

import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import {Form, FormControl, FormField,FormItem, FormLabel, FormMessage} from "@/components/ui/form"
import {RegisterSchema} from "../../schemas/index"
import CardWrapper from './card-wrapper'
import * as z from "zod"
import { Input } from '@/components/ui/input'
import { useState,useTransition } from "react"
import { Button } from '@/components/ui/button'
import { FormError } from "../from-error"
import { FormSuccess } from "../form-success"
import { register } from "@/app/actions/user-actions"

export default function RegisterForm(){
  const [error,setError]=useState<string|undefined>("")
  const [success,setSuccess]=useState<string|undefined>("")
  const [isPending, startTransition]=useTransition()
  const form=useForm<z.infer<typeof RegisterSchema>>({
    resolver:zodResolver(RegisterSchema),
    defaultValues:{
      email:"",
      password:"",
      name:"",
      passwordVerify:""
    }
  })
    
  const onSubmit=(values:z.infer<typeof RegisterSchema>)=>{
    setError("")
    setSuccess("")
    startTransition(()=>{
      register(values)
      .then((data)=>{
        setError(data.error)
        setSuccess(data.success)

      })
    })
    
  }

  return(
        <CardWrapper
        headerLabel={"Crea una cuenta"}
        backButtonLabel='Pulsa aqui para entrar'
        backButtonHref='/login'
        showSocial

        >

   <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} 
     className="space-y-6" >
      <div className='space-y-4'>
      <FormField control={form.control} name="name"
         render={({field})=>(
          <FormItem>
            <FormLabel>Nombre</FormLabel>
            <FormControl>
              <Input {...field} disabled={isPending} className='placeholder:text-gray-400 rounded-md border-gray-300 focus:border-gray-500'
              placeholder="john doe" type="text"/>
            </FormControl>
            <FormMessage/>
          </FormItem>
         )}/>
        <FormField control={form.control} name="email"
         render={({field})=>(
          <FormItem>
            <FormLabel>Correo</FormLabel>
            <FormControl>
              <Input {...field} disabled={isPending} className='placeholder:text-gray-400  rounded-md border-gray-300 focus:border-gray-500'
              placeholder="johndoe@example.com" type="email"/>
            </FormControl>
            <FormMessage/>
          </FormItem>
         )}/>

       <FormField control={form.control} name="password"
         render={({field})=>(
          <FormItem>
            <FormLabel>Contraseña</FormLabel>
            <FormControl>
              <Input {...field} disabled={isPending}
              placeholder="******" type="password" className='placeholder:text-gray-400  rounded-md border-gray-300 focus:border-gray-500'/>
            </FormControl>
            <FormMessage/>
          </FormItem>
         )}/>
 <FormField control={form.control} name="passwordVerify"
         render={({field})=>(
          <FormItem>
            <FormLabel>Verifica Contraseña</FormLabel>
            <FormControl>
              <Input {...field} disabled={isPending}
              placeholder="******" type="password" className='placeholder:text-gray-400  rounded-md border-gray-300 focus:border-gray-500'/>
            </FormControl>
            <FormMessage/>
          </FormItem>
         )}/>
     <FormError message={error}/>
     <FormSuccess message={success}/>
    <div className='pt-4'>
               
            <Button variant="secondary"  className='bg-red-800 hover:bg-gray-500 tracking-wider p-3 uppercase rounded-lg
             text-white font-medium w-full font-[bitter] justify-center'disabled={isPending} type="submit">Registrar</Button>
            
            </div> </div> 
    </form>

   </Form>

 

</CardWrapper>
)}