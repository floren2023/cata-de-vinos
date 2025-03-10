import bcrypt from "bcryptjs";
import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { getUserByEmail } from "./app/actions/user-actions";
import { redirect } from "next/navigation";

export default{
    providers:[
        Credentials({
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            credentials: {
              email: {},
              password: {},
            },
            authorize: async (credentials:{email, password} ) => {
              let user = null
       
              // logic to salt and hash password
            const hashedPassword = await bcrypt.hashSync(credentials.password, 10);
       
              // logic to verify if the user exists
              user = await getUserByEmail(credentials.email)
              if(user){
                //comprobar password
                if(user.password===credentials.password){
                  //entrar en la cuenta
                  redirect('/client')
                }else{
                  throw new Error("Invalid credentials.")
                }
              }
       
              if (!user) {
                // No user found, so this is their first attempt to login
                // Optionally, this is also the place you could do a user registration
                throw new Error("Invalid credentials.")
              }
       
              // return user object with their profile data
              return user
            },
          }),
        ],
      
    
} satisfies NextAuthConfig;