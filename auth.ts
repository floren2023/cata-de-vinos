import NextAuth from "next-auth"

import { DrizzleAdapter } from "@auth/drizzle-adapter"
import  {db}  from "./app/db/drizzle"
import authConfig from "./auth.config";
import { redirect } from 'next/navigation'

export const nextAuth=NextAuth({
    adapter: DrizzleAdapter(db),
    session:{strategy:"jwt"},
    secret:process.env.AUTH_SECRET,
    pages:{signIn: "/(auth)/login" }, 
    
   ...authConfig
})
export const { signIn, signOut, auth, handlers:{GET,POST} } = nextAuth;