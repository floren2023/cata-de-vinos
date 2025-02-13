
"use client"
import { useState } from "react"

type FormData={
    image:File
}

export default  function UpLoadForm() {
    const [file,setFile]=useState<File|null>(null)

const handleSubmit=async(e:React.FormEvent)=>{
    e.preventDefault() 
    
  const formData=new FormData()
  console.log(file)
  formData.append("image",  file as Blob)
   const response=await fetch("/api/file",{
        method: "POST",
        body:formData
  }) 
  console.log(response)
   return response

}

 function handleOnChange(e:any){
    e.preventDefault()
    console.log(e.target.files[0].name)
    setFile(e.target.files[0])

}

    return (
        <div className="mt-40  mx-auto w-1/2 border-2 mb-20  border-gray-300">
        <form onSubmit={(e)=>handleSubmit(e)} className="pt-20 justify-center pl-10 pb-10" method="post" encType="multipart/form-data">
            <input type="file" name="image" onChange={(e)=>handleOnChange(e)} 
            accept="image/jpg" id="image"/>
            <div className="pt-5">
                <button type="submit" className="bg-red-800 text-white p-3 ">Submit</button ></div>
           
        </form>
        
        </div>
        
    )
}




