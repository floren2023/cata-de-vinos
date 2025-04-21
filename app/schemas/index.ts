import * as z from "zod"
export const  LoginSchema=z.object({
    email:z.string().email({message:"Correo requerido"}),
    password:z.string().min(6,{message:"contraseña requerida"})
})

export const  RegisterSchema=z.object({
    email:z.string().email({message:"Correo requerido"}),
    password:z.string().min(6,{message:"Minimo 6 caracteres"}),
    passwordVerify:z.string().min(6),
    name:z.string().min(2,{message:"Nombre tiene minimo 2 caracteres"})
})
