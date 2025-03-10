"use client"
import { login } from "../actions/auth";
export default function ButtonAuth(){
   return(
    <button onClick={()=>login()}
     className="pb-10text-xl text-red-700 rounded-md bg-gray-200 border-2 border-red-700 p-3">Sign In with github</button>
   )
}