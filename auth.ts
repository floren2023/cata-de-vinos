import NextAuth from "next-auth"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import { db } from "../cata-de-vinos/app/db/drizzle"
import authConfig from "./auth.config"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: DrizzleAdapter(db), 
  ...authConfig,
  session:{strategy:"jwt"}
})


