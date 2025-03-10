
"use client"
import { logout } from "../actions/auth";

export default function SignOutButton(){
    return(
        <button onClick={()=>logout()} 
        className="pb-10text-xl text-red-700 rounded-md bg-gray-200 border-2 border-red-700 p-3">Logout</button>
       )
}