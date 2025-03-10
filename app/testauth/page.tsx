"use server"

import { auth } from "@/auth";
import Image from "next/image"
import ButtonAuth from "./sign-in-button";
import Link from "next/link";
import SignOutButton from "./sign-out-button";

export default async function  TestAuth(){
    const session=await auth()
    if(session?.user){
        return(
            <div className="mt-20 pt-10 pl-20 flex flex-inline gap-4">
               <Link href="/users/client">Client</Link>
               <SignOutButton/>
           </div>
        )
    }
    return(
        <div className="mt-20 pl-20 pt-10 w-1/4 flex flex-col  pb-10 gap-2">
            <p>You are not Signed In</p>
           <ButtonAuth/>
        </div>
    )
}