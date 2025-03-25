import NextAuth from "next-auth"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import { db } from "../cata-de-vinos/app/db/drizzle"
import Credentials from "next-auth/providers/credentials"

export const nextAuth= NextAuth({  
  session:{strategy:"jwt"},
  secret:process.env.NEXTAUTH_SECRET,
  pages:{signIn:"/(auth)/signin"},
  providers:  [
    Credentials ({
     
    authorize: async (credentials:{email, password} ) => {

    }

  })
  ]
  

  

  
})


