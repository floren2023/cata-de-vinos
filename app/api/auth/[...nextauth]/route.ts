import {handlers} from "@/auth"

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "../../../db/index";
import { userTable } from "../../../db/schema"
import bcrypt from "bcrypt";
import { eq } from "drizzle-orm";
import GitHub from "next-auth/providers/github";

const adapter= DrizzleAdapter(db)
export const authOptions = {
  GitHub,
  adapter,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

     
     
  })
]

}

export const {GET,POST}=handlers