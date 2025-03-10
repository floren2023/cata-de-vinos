
"use server"
import {NextResponse} from "next/server"
import { put } from '@vercel/blob';


export  async function POST(req:Request){
    const form= await req.formData();

    const file=form.get("image") as File
   
    if(!file.name)
        return NextResponse.json({error:"No existe archivo"},{status:400})
    const fileWithPath=`events/${file.name}`
    
    const blob = await put(fileWithPath, file, {
        access: 'public',
      }); 
    
   
    return Response.json({data:blob.url});
    
}
 