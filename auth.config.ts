
import Google  from "next-auth/providers/google";
import  type {NextAuthConfig} from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { LoginSchema } from "./app/schemas"
import { getUserByEmail } from "./app/actions/user-actions"
import bcrypt from "bcryptjs"

export default {
    providers :[ Google({}),
    
        Credentials({
            
           async authorize(credentials){
              const parsedCredentials=LoginSchema.safeParse(credentials)
              if(parsedCredentials.success){
                //carry out register
               const {email,password}=parsedCredentials.data
               console.log(email, password)
                // look for your user in database
                const user=await getUserByEmail(email)
                if(!user){
                    return null
                }
                else{
                    

                    const pass= user[0].password
                    console.log(pass)
                    const matchPass= await bcrypt.compare(parsedCredentials.data.password, pass)
                   
             if(matchPass) {
              return user[0]
             }
             else{
                return null
             }
           }
        }}
        })
                
    ]

} satisfies NextAuthConfig